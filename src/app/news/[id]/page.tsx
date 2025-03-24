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
import NewsCard from "@/components/news";
import WordPressContent from "@/components/content";

const Blog = () => {
  const { id } = useParams();

  const [news, setNews] = useState<Bloger[]>();
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

  useEffect(() => {
    axiosInstance.get("/wp/v2/posts?categories=19").then((res) => {
      setNews(res.data);
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
                  <Link href={"/news"}>News</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <p className="text-green">News Post</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="w-full flex flex-col items-left mt-6 mb-10">
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
                <p className="text-3xl font-bold">News</p>
              </div>
            ) : (
              <Image
                alt={data?.title?.rendered}
                src={data?.uagb_featured_image_src?.thumbnail[0]}
                width={data?.uagb_featured_image_src?.thumbnail[1]}
                height={data?.uagb_featured_image_src?.thumbnail[2]}
                className="w-3/5 object-cover object-center rounded"
              />
            )}
            <div className="w-[98%] md:w-full flex flex-col items-start mt-4">
              <p className="text-3xl font-bold text-center mb-4">
                {data?.title?.rendered}
              </p>
              <div className="w-full flex items-center justify-between mb-4">
                <p className="text-black">{formattedTime}</p>
              </div>
              <WordPressContent content={data?.content?.rendered} />
            </div>
          </Fragment>
        )}
      </Width>
      <Width>
        <p>More News:</p>
      </Width>
      <Width classnames="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {!news ? (
          <Fragment>
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
          </Fragment>
        ) : news?.length > 0 ? (
          news
            ?.filter((item) => item.id.toString() !== id)
            ?.map((item, index) => <NewsCard item={item} key={index} />)
        ) : (
          <div className="w-full h-[200px] flex items-center justify-center">
            <p className="text-green">More News coming up soon!</p>
          </div>
        )}
      </Width>
      <Footer />
    </main>
  );
};

export default Blog;
