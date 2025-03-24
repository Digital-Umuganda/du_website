"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
import { Button } from "@/components/ui/button";

// Icons
import { FaRegMessage } from "react-icons/fa6";

const Services = () => {
  const router = useRouter();

  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4]">
        <Nav />
        <div className="flex flex-col gap-4 pb-10 items-center">
          <p className="text-4xl font-bold text-dark_blue">Our Services</p>
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
                  <p className="text-green">Our Services</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <Width classnames="h-auto flex flex-col items-center mt-10 gap-10">
        <div className="w-full h-auto flex lg:flex-row flex-col items-center lg:gap-0 gap-4">
          <div className="lg:w-[45%] w-full h-full flex flex-col items-center overflow-hidden rounded-lg">
            <Image
              alt="One"
              width={600}
              height={500}
              loading="lazy"
              src={"/images/_AUR0705.jpeg"}
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="lg:w-[55%] w-full h-full flex flex-col justify-center gap-4 lg:px-10">
            <p className="text-2xl font-bold text-dark_blue">
              Dataset Creation
            </p>
            <p className="text-justify">
              Data is the backbone of any AI system, and for African languages,
              the availability of quality data remains a significant challenge.
              Our data collection services not only address this gap but also
              contribute to preserving linguistic diversity and empowering
              underserved communities with AI-driven solutions.
            </p>
            <p className="text-justify">
              With Digital Umuganda, you can rely on ethical, accurate, and
              impactful data collection services to fuel the next generation of
              AI applications.
            </p>
            <Button
              className="gap-2 sm:w-1/3 w-1/2 bg-green"
              onClick={() => router?.push("/#contact")}
            >
              <FaRegMessage className="w-4" /> Contact Us
            </Button>
          </div>
        </div>
      </Width>
      <div className="w-full h-auto flex flex-col items-center bg-gray mt-10 py-10">
        <Width classnames="h-auto flex items-center">
          <div className="lg:w-[55%] w-full h-full flex flex-col justify-center gap-4 lg:px-10">
            <p className="text-2xl font-bold text-dark_blue">
              Digital Transformation
            </p>
            <Image
              alt="One"
              width={600}
              height={500}
              loading="lazy"
              src={"/images/_AUR0756.jpeg"}
              className="w-full h-[250px] object-cover lg:hidden rounded"
            />
            <p className="text-justify">
              In an increasingly digital world, organizations must adapt and
              innovate to stay ahead. With a deep understanding of local
              contexts and global best practices, we empower governments,
              private sector companies, and NGOs to create digital solutions
              that are not only innovative but also ethical, scalable, and
              impactful.
            </p>
            <p className="text-justify">
              With Digital Umuganda, you can count on smart, secure, and
              future-ready digital solutions to accelerate transformation and
              create lasting impact.
            </p>
            <Button
              onClick={() => router.push("/#contact")}
              className="gap-2 sm:w-1/3 w-2/4 bg-green"
            >
              <FaRegMessage className="w-4" /> Contact Us
            </Button>
          </div>
          <div className="w-[45%] h-full lg:flex hidden flex-col items-center overflow-hidden rounded-lg">
            <Image
              alt="One"
              width={600}
              height={500}
              loading="lazy"
              src={"/images/_AUR0756.jpeg"}
              className="w-full h-[300px] object-cover"
            />
          </div>
        </Width>
      </div>
      <Footer />
    </main>
  );
};

export default Services;
