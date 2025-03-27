"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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
import { Fragment } from "react";
import { FaBarsStaggered, FaRegMessage } from "react-icons/fa6";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    {
      href: "/",
      name: "Home",
    },
    {
      name: "About Us",
      subNavigations: [
        {
          href: "/company",
          name: "About The Company",
          description:
            "Learn more about our mission, and the values that drive our commitment to excellence.",
        },
        {
          href: "/team",
          name: "Meet The Team",
          description:
            "Meet the team behind our company and discover their expertise and dedication.",
        },
      ],
    },
    {
      href: "/projects",
      name: "Projects",
    },
    {
      href: "/services",
      name: "Services",
    },
    {
      href: "/privacy",
      name: "Data Privacy",
    },
  ];

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
            {navigation.map((item) => (
              <NavigationMenuItem key={item.href} className="relative">
                {item?.subNavigations ? (
                  <Fragment>
                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
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
                          {item.subNavigations.map((subItem) => (
                            <div
                              key={subItem.href}
                              className="flex flex-col gap-2 cursor-pointer p-4 rounded hover:bg-gray"
                              onClick={() =>
                                router?.push(subItem.href as string)
                              }
                            >
                              <p className="font-bold">{subItem.name}</p>
                              <p>{subItem.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </Fragment>
                ) : (
                  <Link href={item.href as string}>
                    <NavigationMenuLink
                      className={pathname === item.href ? "text-green" : ""}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
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
                <div className="flex flex-col gap-3">
                  {navigation.map((item) => (
                    <Fragment key={item.href as string}>
                      {item?.subNavigations ? (
                        <Fragment>
                          {item.subNavigations.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href as string}
                            >
                              <p>{subItem.name}</p>
                            </Link>
                          ))}
                        </Fragment>
                      ) : (
                        <Link href={item.href as string}>
                          <p>{item.name}</p>
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
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
