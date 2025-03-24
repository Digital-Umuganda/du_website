"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Components
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

// Icons
import { FaBarsStaggered, FaRegMessage } from "react-icons/fa6";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="xl:w-[1200px] lg:w-[1000px] md:w-[750px] sm:w-[600px] w-full px-4 sm:px-0 h-[80px] flex flex-col items-center justify-center">
      <NavigationMenu className="w-full h-full">
        <NavigationMenuList className="h-full flex items-center justify-between xl:w-[1200px] lg:w-[1000px] md:w-[750px] sm:w-[600px] w-[95vw] px-4">
          <NavigationMenuItem>
            <Link href={"/"}>
              <Image
                alt="logo"
                width={300}
                height={300}
                loading="lazy"
                src={"/logo.svg"}
                className="w-[140px]"
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuList className="gap-10 hidden lg:flex">
            <NavigationMenuItem>
              <Link href={"/"}>
                <NavigationMenuLink
                  className={pathname === "/" ? "text-green" : ""}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/company"}>
                <NavigationMenuLink
                  className={pathname === "/company" ? "text-green" : ""}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem className="relative">
              <NavigationMenuTrigger
                className={pathname === "/about" ? "text-green" : ""}
              >
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent className="top-[80px] -left-[100%]">
                <div className="w-[550px] h-fit flex bg-white p-4 gap-4 shadow-2xl rounded">
                  <Image
                    alt="One"
                    width={600}
                    height={500}
                    loading="lazy"
                    src={"/images/nav.JPG"}
                    className="w-1/3 h-auto object-cover object-right rounded"
                  />
                  <div className="w-2/3 h-full flex flex-col gap-2">
                    <div
                      className="flex flex-col gap-2 cursor-pointer p-4 rounded hover:bg-gray"
                      onClick={() => router?.push("/company")}
                    >
                      <p className="font-bold">About the company</p>
                      <p>
                        Learn more about our mission, and the values that drive
                        our commitment to excellence.
                      </p>
                    </div>
                    <div
                      className="flex flex-col gap-2 cursor-pointer p-4 rounded hover:bg-gray"
                      onClick={() => router?.push("/partners")}
                    >
                      <p className="font-bold">Partners Information</p>
                      <p>
                        Learn more about our valued partnerships and how to join
                        our network of industry leaders.
                      </p>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href={"/projects"}>
                <NavigationMenuLink
                  className={pathname === "/projects" ? "text-green" : ""}
                >
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/services"}>
                <NavigationMenuLink
                  className={pathname === "/services" ? "text-green" : ""}
                >
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/privacy"}>
                <NavigationMenuLink
                  className={pathname === "/privacy" ? "text-green" : ""}
                >
                  Data Privacy
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <Link href={"/blog"}>
                <NavigationMenuLink
                  className={pathname === "/blog" ? "text-green" : ""}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            {/* <NavigationMenuItem>
              <Link href={"/gallery"}>
                <NavigationMenuLink
                  className={pathname === "/gallery" ? "text-green" : ""}
                >
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/news"}>
                <NavigationMenuLink
                  className={pathname === "/news" ? "text-green" : ""}
                >
                  News
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
          </NavigationMenuList>
          <NavigationMenuItem className="flex items-center gap-4 relative">
            <NavigationMenuTrigger className="lg:hidden" aria-hidden="false">
              <FaBarsStaggered className="text-2xl" />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="top-[50px] sm:-left-[50%] -left-[200px]">
              <div className="w-[300px] h-auto flex flex-col bg-white shadow-2xl p-6 gap-4">
                <Image
                  alt="One"
                  width={600}
                  height={500}
                  loading="lazy"
                  src={"/images/nav.JPG"}
                  className="w-full h-[150px] object-cover rounded"
                />
                <NavigationMenuItem>
                  <Link href={"/"}>
                    <NavigationMenuLink
                      className={pathname === "/" ? "text-green" : ""}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={"/company"}>
                    <NavigationMenuLink
                      className={pathname === "/company" ? "text-green" : ""}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <Link href={"/partners"}>
                    <NavigationMenuLink
                      className={pathname === "/partners" ? "text-green" : ""}
                    >
                      Partners Information
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <Link href={"/projects"}>
                    <NavigationMenuLink
                      className={pathname === "/projects" ? "text-green" : ""}
                    >
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={"/services"}>
                    <NavigationMenuLink
                      className={pathname === "/services" ? "text-green" : ""}
                    >
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={"/privacy"}>
                    <NavigationMenuLink
                      className={pathname === "/privacy" ? "text-green" : ""}
                    >
                      Data Privacy
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <Link href={"/blog"}>
                    <NavigationMenuLink
                      className={pathname === "/blog" ? "text-green" : ""}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
                {/* <NavigationMenuItem>
                  <Link href={"/gallery"}>
                    <NavigationMenuLink
                      className={pathname === "/gallery" ? "text-green" : ""}
                    >
                      Gallery
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={"/news"}>
                    <NavigationMenuLink
                      className={pathname === "/news" ? "text-green" : ""}
                    >
                      News
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
              </div>
            </NavigationMenuContent>
            <Link href={"/#contact"} className="sm:flex hidden">
              <Button className="w-[140px] items-center gap-2 bg-green">
                <FaRegMessage className="w-4" />
                Contact Us
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
    </div>
  );
};

export default Nav;
