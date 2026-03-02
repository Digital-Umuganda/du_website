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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

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
          Digital{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-green cursor-help border-b border-dotted border-green hover:opacity-80 transition-opacity">
                  Umuganda
                </span>
              </TooltipTrigger>
              <TooltipContent className="bg-dark_blue">
                <p className="text-sm">
                  Umuganda /ʊ.mʊ.gæ.ndæ./: A Rwandan cultural practice <br />{" "}
                  where people participate in community work and <br />{" "}
                  development projects on the last Saturday of each month.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>{" "}
          is an AI and open data company with a mission to enable access to
          information in local African languages.{" "}
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
