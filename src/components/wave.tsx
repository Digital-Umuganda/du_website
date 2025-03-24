"use client";

import React from "react";

interface WaveComponentProps {
  children?: React.ReactNode;
}

export default function WaveComponent({ children }: WaveComponentProps) {
  return (
    <div className={`w-full relative bg-dark_blue overflow-hidden`}>
      <div className="absolute inset-x-0 top-0 h-16">
        <svg
          className="absolute w-[200%] h-full animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 520"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="w-full flex flex-col items-center relative z-10 p-6 pt-20">
        {children}
      </div>
    </div>
  );
}
