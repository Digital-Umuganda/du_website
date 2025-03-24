/* eslint-disable react-hooks/exhaustive-deps */

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
import Blog from "@/components/blog";
import Width from "@/components/width";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

// Utils
import { Bloger } from "@/lib/types";
import axiosInstance from "@/lib/axios";

const Blogs = () => {
  const [data, setData] = useState<Bloger[]>();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axiosInstance.get("/wp/v2/posts").then((res) => {
      setData(res.data);
    });
  }, []);

  const filteredBlogs = data?.filter((blog: Bloger) =>
    blog.title?.rendered?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col gap-4 pb-10 items-center">
          <p className="text-4xl font-bold">Our Blog</p>
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
                  <p className="text-green">Our Blog</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="py-10">
        <Input
          type="text"
          value={searchTerm}
          className="h-[35px]"
          placeholder="Search blogs..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Width>
      <Width classnames="mb-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {!data ? (
          <Fragment>
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
            <Skeleton className="w-full h-[300px]" />
          </Fragment>
        ) : (
          <Fragment>
            {filteredBlogs?.map((blog: Bloger, index: number) => (
              <Blog key={index} blog={blog} />
            ))}
          </Fragment>
        )}
      </Width>
      <Footer />
    </main>
  );
};

export default Blogs;
