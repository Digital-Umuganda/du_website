/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

// Components
import { Button } from "./ui/button";

// Icons
import { Info } from "lucide-react";

// Utils
import { Bloger } from "@/lib/types";

const Blog = ({ blog }: { blog: Bloger }) => {
  const router = useRouter();

  const createdAt = blog?.date ? new Date(blog.date) : null;

  const formattedTime = createdAt
    ? formatDistanceToNow(createdAt, { addSuffix: true })
    : "Unknown time";

  return (
    <div className="w-full h-auto flex flex-col bg-white pb-2 rounded-lg overflow-hidden">
      {typeof blog?.uagb_featured_image_src?.thumbnail === "boolean" ? (
        <div className="w-full h-[230px] bg-gradient-to-t from-white to-[#f4f4f4] flex items-center justify-center">
          <p className="text-3xl font-bold">Blog</p>
        </div>
      ) : (
        <Image
          width={600}
          height={500}
          alt={blog?.title?.rendered}
          src={blog?.uagb_featured_image_src?.thumbnail[0]}
          className="w-full h-[230px] object-cover object-center rounded"
        />
      )}
      <div className="w-full h-1/2 p-4 flex flex-col gap-3">
        <p className="">{formattedTime}</p>
        <p className="text-xl font-bold">{blog?.title?.rendered}</p>
        <p
          className="truncate line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: `${blog?.content?.rendered?.slice(0, 20)}...`,
          }}
        />
        <Button
          className="gap-2 w-[200px] bg-green"
          onClick={() => router?.push(`/blog/${blog?.id}`)}
        >
          <Info className="w-4" /> Read More
        </Button>
      </div>
    </div>
  );
};

export default Blog;
