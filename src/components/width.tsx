import React from "react";

// Utils
import { cn } from "@/lib/utils";

const Width = ({
  id,
  children,
  classnames,
}: {
  id?: string;
  classnames?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn([
        "xl:w-[1200px] h-auto lg:w-[1000px] md:w-[750px] sm:w-[600px] w-full px-4",
        classnames,
      ])}
      id={id}
    >
      {children}
    </div>
  );
};

export default Width;
