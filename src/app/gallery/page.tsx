"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Components
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Nav from "@/components/nav";
import Width from "@/components/width";
import Footer from "@/components/footer";
import StoriesViewer from "@/components/stories";
import { Skeleton } from "@/components/ui/skeleton";

// Icons
import { Play } from "lucide-react";

// Utils
import axiosInstance from "@/lib/axios";
import { WordPressImage } from "@/lib/types";

const MediaItem = ({
  item,
  onClick,
}: {
  item: WordPressImage;
  onClick: () => void;
}) => {
  if (item.media_type === "file") {
    return (
      <div
        onClick={onClick}
        className="relative cursor-pointer scale-90 filter grayscale hover:scale-95 hover:filter-none transition-all duration-500 ease-in-out group"
      >
        <div className="w-full aspect-square relative rounded-lg overflow-hidden">
          <video
            preload="metadata"
            src={item.guid?.rendered}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
              <Play size={32} className="text-green ml-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="cursor-pointer scale-90 filter grayscale hover:scale-95 hover:filter-none transition-all duration-500 ease-in-out"
    >
      <Image
        width={300}
        height={300}
        loading="lazy"
        alt={item?.title?.rendered || ""}
        src={item.guid?.rendered || "/placeholder.svg"}
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
  );
};

const Gallery = () => {
  const router = useRouter();
  const [data, setData] = useState<WordPressImage[]>();

  const openStories = (id: number) => {
    router.push(`/gallery?story=${id}`);
  };

  useEffect(() => {
    axiosInstance.get("/wp/v2/media?categories=18").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col gap-4 pb-10 items-center">
          <p className="text-4xl font-bold text-center">Snapshots of Impact</p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href={"/"}>Digital Umuganda</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <p className="text-green">Gallery</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4">
        {!data ? (
          <Fragment>
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
          </Fragment>
        ) : data?.length > 0 ? (
          data?.map((item) => (
            <MediaItem
              item={item}
              key={item.id}
              onClick={() => openStories(item.id)}
            />
          ))
        ) : (
          <div className="w-full h-[200px] flex items-center justify-center">
            <p className="text-green">Gallery coming up soon!</p>
          </div>
        )}
      </Width>
      <StoriesViewer images={data || []} />
      <Footer />
    </main>
  );
};

export default Gallery;
