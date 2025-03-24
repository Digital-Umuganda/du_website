"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Components
import { Button } from "@/components/ui/button";

// Icons
import { LayoutDashboard } from "lucide-react";

// Utils
import { textVariants } from "@/lib/motion";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="w-full xl:h-[900px] lg:h-[800px] sm:h-[700px] overflow-hidden flex flex-col items-center bg-gradient-to-b from-white to-[#f4f4f4]">
      <div className="w-full h-auto flex flex-col items-center px-4 gap-6 mt-28">
        <motion.p
          initial="initial"
          variants={textVariants}
          viewport={{ amount: 1 }}
          whileInView="whileInView"
          className="sm:text-5xl text-4xl font-bold text-center text-green"
        >
          Bridging the <span className="text-dark_blue">Al divide</span>, one
          language at a time!
        </motion.p>
        <p className="sm:w-[600px] text-center">
          Digital Umuganda is an AI and open data company with a mission to
          enable access to information in local African languages.{" "}
        </p>
        <div className="flex items-center gap-10">
          <Button
            className="w-[140px] bg-green gap-2"
            onClick={() => router?.push("/projects")}
          >
            <LayoutDashboard className="w-4" />
            Our Projects
          </Button>
          <Button
            variant={"ghost"}
            className="w-[140px] gap-2"
            onClick={() => router?.push("/services")}
          >
            <LayoutDashboard className="w-4" />
            Our Services
          </Button>
        </div>
      </div>
      <div className="w-[120%] h-[180%] flex">
        <Image
          alt="Hero"
          width={500}
          height={500}
          loading="lazy"
          src={"/hero.svg"}
          className="w-full opacity-40 mt-20"
        />
      </div>
    </div>
  );
};

export default Hero;
