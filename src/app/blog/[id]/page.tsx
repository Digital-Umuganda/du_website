/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

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
import { Skeleton } from "@/components/ui/skeleton";

// Utils
import { Bloger } from "@/lib/types";
import axiosInstance from "@/lib/axios";

// Share
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Blog = () => {
  const { id } = useParams();

  const [data, setData] = useState<Bloger | null>();

  const createdAt = data?.date ? new Date(data.date) : null;

  const formattedTime = createdAt
    ? formatDistanceToNow(createdAt, { addSuffix: true })
    : "Unknown time";

  useEffect(() => {
    axiosInstance.get(`/wp/v2/posts/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col gap-4 pb-10 items-center">
          {!data ? (
            <Skeleton className="w-full h-[40px]" />
          ) : (
            <p className="text-4xl font-bold text-center">
              {data?.title?.rendered}
            </p>
          )}
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
                  <Link href={"/blog"}>Our Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <p className="text-green">Blog Post</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="w-full flex flex-col items-center mt-6 mb-10">
        {!data ? (
          <Fragment>
            <Skeleton className="w-full h-[300px] mb-4" />
            <Skeleton className="w-full h-[20px] mb-2" />
            <Skeleton className="w-full h-[20px] mb-2" />
            <Skeleton className="w-full h-[20px] mb-2" />
            <Skeleton className="w-full h-[20px] mb-2" />
            <Skeleton className="w-full h-[20px] mb-2" />
          </Fragment>
        ) : (
          <Fragment>
            {typeof data?.uagb_featured_image_src?.thumbnail === "boolean" ? (
              <div className="w-full h-[300px] bg-gradient-to-t from-white to-[#f4f4f4] flex items-center justify-center">
                <p className="text-3xl font-bold">Blog</p>
              </div>
            ) : (
              <Image
                alt={data?.title?.rendered}
                src={data?.uagb_featured_image_src?.thumbnail[0]}
                width={data?.uagb_featured_image_src?.thumbnail[1]}
                height={data?.uagb_featured_image_src?.thumbnail[2]}
                className="w-full h-[300px] object-cover object-center rounded"
              />
            )}
            <div className="w-[98%] md:w-full flex flex-col items-start">
              <p className="text-3xl font-bold text-center mb-4">
                {data?.title?.rendered}
              </p>
              <div
                className="w-full"
                dangerouslySetInnerHTML={{
                  __html: data?.content?.rendered,
                }}
              />
              <div className="w-full flex items-center justify-between mt-10">
                <div className="flex items-center gap-2">
                  <p className="sm:flex hidden">Share:</p>
                  <FacebookShareButton url={""} about={data?.title?.rendered}>
                    <FaFacebookSquare className="text-2xl" />
                  </FacebookShareButton>
                  <LinkedinShareButton url={""} about={data?.title?.rendered}>
                    <FaLinkedin className="text-2xl" />
                  </LinkedinShareButton>
                  <TwitterShareButton url={""} about={data?.title?.rendered}>
                    <FaXTwitter className="text-2xl" />
                  </TwitterShareButton>
                </div>
                <p className="text-black">{formattedTime}</p>
              </div>
            </div>
          </Fragment>
        )}
      </Width>
      <Footer />
    </main>
  );
};

export default Blog;
