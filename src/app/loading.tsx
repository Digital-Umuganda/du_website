import Image from "next/image";
import NProgress from "nprogress";

import "nprogress/nprogress.css";

export default function Loading() {
  if (typeof window !== "undefined") {
    NProgress.start();
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="w-full h-1 bg-gray-200">
        <div className="h-full bg-green animate-progress-bar" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-pulse">
          <Image
            width={170}
            height={170}
            src={"/logo.svg"}
            alt="Digital Umuganda"
            className="opacity-70"
          />
        </div>
      </div>
    </div>
  );
}
