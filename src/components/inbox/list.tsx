"use client";

import { Fragment } from "react";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

// Components
import { ScrollArea } from "../ui/scroll-area";

// Utils
import { cn } from "@/lib/utils";
import { Mail } from "@/lib/types";

interface MailListProps {
  items: Mail[];
  selected: Mail | null;
  selectMail: (mail: Mail) => void;
}

export function MailList({ items, selected, selectMail }: MailListProps) {
  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-4 pr-4">
        {!!!items && (
          <Fragment>
            <p>Loading...</p>
          </Fragment>
        )}
        {items?.map((item) => (
          <button
            key={item?.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-4 text-left transition-all hover:bg-gray",
              selected?.id === item.id && "bg-gray"
            )}
            onClick={() => selectMail(item)}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item?.subject}</div>
                  {!item?.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    selected?.id === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {formatDistanceToNow(new Date(item?.createdAt as Date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="text-sm font-medium">{item?.names}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item?.message.substring(0, 300)}
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
