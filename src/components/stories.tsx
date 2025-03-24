/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Utils
import { WordPressImage } from "@/lib/types";

const DEFAULT_DURATION = 5000;

export default function StoriesViewer({
  images,
}: {
  images: WordPressImage[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const videoProgressRef = useRef<HTMLDivElement>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const storyId = searchParams.get("story");
    if (storyId) {
      const index = images.findIndex(
        (item) => item.id === Number.parseInt(storyId)
      );
      setCurrentIndex(index !== -1 ? index : 0);
    }
  }, [searchParams, images]);

  // Function to preload image
  const preloadImage = (url: string) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  };

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);
    setIsPlaying(false);
    setCurrentTime(0);

    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    const currentItem = images[currentIndex];
    if (currentItem?.media_type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
    }

    if (currentIndex < images.length - 1) {
      const nextImage = images[currentIndex + 1];
      if (nextImage?.media_type === "image") {
        preloadImage(nextImage.guid.rendered);
      }
    }

    return () => {
      const preloadLinks = document.head.querySelectorAll(
        'link[rel="preload"][as="image"]'
      );
      preloadLinks.forEach((link) => link.remove());
    };
  }, [currentIndex]);

  const startProgressTimer = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    const currentItem = images[currentIndex];
    const duration =
      currentItem?.media_type === "video"
        ? videoDuration * 1000
        : DEFAULT_DURATION;

    progressInterval.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          handleStoryComplete();
          return 0;
        }
        return prevProgress + (100 * 100) / duration;
      });
    }, 100);
  };

  const handleVideoLoadedData = () => {
    setIsLoading(false);
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      const progress = (videoRef.current.currentTime / videoDuration) * 100;
      setProgress(progress);
    }
  };

  const handleVideoProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && videoProgressRef.current) {
      const rect = videoProgressRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      const time = (percentage / 100) * videoDuration;
      videoRef.current.currentTime = time;
      setProgress(percentage);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    startProgressTimer();
  };

  const handleStoryComplete = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    const nextIndex = (currentIndex + 1) % images.length;
    if (nextIndex === 0) {
      closeStories();
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const closeStories = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    if (isPlaying) {
      setIsPlaying(false);
      videoRef?.current?.pause();
    }

    router.push("/gallery");
  };

  const goToNext = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    const nextIndex = (currentIndex + 1) % images.length;
    if (nextIndex === 0) {
      closeStories();
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const goToPrevious = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (!searchParams.get("story")) {
    return null;
  }

  const currentItem = images[currentIndex];

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeStories();
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    >
      <div className="relative w-full h-full max-w-3xl max-h-[90vh]">
        <div className="absolute top-0 left-0 right-0 z-10 p-2">
          <div className="flex space-x-1">
            {images.map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1 bg-white rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-green transition-all duration-100 ease-linear"
                  style={{
                    width:
                      index === currentIndex
                        ? `${progress}%`
                        : index < currentIndex
                        ? "100%"
                        : "0%",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-green border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {currentItem?.media_type === "image" ? (
          <Image
            fill
            priority
            ref={imageRef}
            loading="eager"
            onLoad={handleImageLoad}
            src={currentItem?.guid?.rendered || ""}
            alt={currentItem?.title?.rendered || ""}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className={`object-contain ${
              isLoading
                ? "opacity-0"
                : "opacity-100 transition-opacity duration-300"
            }`}
          />
        ) : (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              muted={isMuted}
              onEnded={handleStoryComplete}
              src={currentItem?.guid?.rendered}
              onTimeUpdate={handleVideoTimeUpdate}
              onLoadedData={handleVideoLoadedData}
              className={`w-full h-full object-contain ${
                isLoading
                  ? "opacity-0"
                  : "opacity-100 transition-opacity duration-300"
              }`}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              <div className="flex flex-row items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-green transition-colors"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <p className="text-white text-sm">{Math.floor(currentTime)}s</p>
                <div
                  ref={videoProgressRef}
                  onClick={handleVideoProgress}
                  className="w-full h-1 bg-white rounded-full cursor-pointer"
                >
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-green rounded-full"
                  />
                </div>
                <p className="text-white text-sm">
                  {Math.floor(videoDuration)}s
                </p>
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-green transition-colors"
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={closeStories}
          className="absolute top-4 right-4 text-white"
        >
          <X size={24} />
        </button>
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
