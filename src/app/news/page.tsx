"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Nav from "@/components/nav";
import Width from "@/components/width";
import Footer from "@/components/footer";
import NewsCard from "@/components/news";
import { Skeleton } from "@/components/ui/skeleton";

// Utils
import { Bloger } from "@/lib/types";
import axiosInstance from "@/lib/axios";

const News = () => {
  const [data, setData] = useState<Bloger[]>();

  useEffect(() => {
    axiosInstance.get("/wp/v2/posts?categories=19").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col gap-4 pb-10 items-center">
          <p className="text-4xl font-bold text-center">Latest Updates</p>
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
                  <p className="text-green">News</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="mt-6 grid gap-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 my-10">
        {!data ? (
          <Fragment>
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
          </Fragment>
        ) : data?.length > 0 ? (
          data?.map((item, index) => <NewsCard item={item} key={index} />)
        ) : (
          <div className="w-full h-[200px] flex items-center justify-center">
            <p className="text-green">News coming up soon!</p>
          </div>
        )}
      </Width>
      <Footer />
    </main>
  );
};

export default News;
