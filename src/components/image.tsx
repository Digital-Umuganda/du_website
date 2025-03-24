"use client";

import Image from "next/image";
import { useState } from "react";

interface GrayscaleImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: string;
}

export default function GrayscaleImage({
  src,
  alt,
  width,
  style,
  height,
}: GrayscaleImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${style}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        loading="lazy"
        height={height}
        className={`
          transition-all duration-500 ease-in-out w-[190px]
          ${isHovered ? "scale-100 filter-none" : "scale-90"}
        `}
      />
    </div>
  );
}
