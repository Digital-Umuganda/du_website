"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Icons
import { Info } from "lucide-react";
import { AiOutlineLinkedin } from "react-icons/ai";

interface MemberProps {
  name: string;
  image: string;
  about: string;
  position: string;
  linkedin: string;
}

export default function CompanyMemberCard({ member }: { member: MemberProps }) {
  const [showButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   if (isHovered) {
  //     const timer = setTimeout(() => setShowButton(true), 300);
  //     return () => clearTimeout(timer);
  //   } else {
  //     setShowButton(false);
  //   }
  // }, [isHovered]);

  return (
    <div className="relative w-full rounded overflow-hidden">
      <div
        className="relative w-full h-[400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          width={600}
          height={500}
          loading="lazy"
          alt={member?.name}
          src={member?.image}
          className="w-full h-[400px] object-cover rounded object-top bg-gray"
        />
        <AnimatePresence>
          {isHovered && (
            <>
              <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/20"
              />
              <svg
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <motion.path
                  fill="none"
                  strokeWidth="5"
                  d="M0 0 V100% H50%"
                  stroke="var(--gray)"
                  exit={{ pathLength: 0 }}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  vectorEffect="non-scaling-stroke"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <motion.path
                  fill="none"
                  strokeWidth="5"
                  stroke="var(--gray)"
                  d="M100% 0 V100% H50%"
                  exit={{ pathLength: 0 }}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  vectorEffect="non-scaling-stroke"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <motion.path
                  fill="none"
                  d="M0 0 V0 H100%"
                  strokeWidth="5"
                  stroke="var(--gray)"
                  exit={{ pathLength: 0 }}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  vectorEffect="non-scaling-stroke"
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                />
              </svg>
              <AnimatePresence>
                {showButton && (
                  <motion.div
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-[140px] bg-green gap-2">
                          <Info className="w-4" />
                          About
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{member?.name}</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                          <p
                            className="text-base text-justify"
                            dangerouslySetInnerHTML={{
                              __html: member?.about,
                            }}
                          />
                        </DialogDescription>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-col p-2 gap-2">
        <p className="text-xl font-bold text-dark_blue">{member?.name}</p>
        <p className="">{member?.position}</p>
        <a
          target="_blank"
          href={member?.linkedin}
          className="flex items-center gap-4"
        >
          <AiOutlineLinkedin className="text-2xl cursor-pointer" />
          {/* <BsTwitterX className="text-xl cursor-pointer" /> */}
        </a>
      </div>
    </div>
  );
}
