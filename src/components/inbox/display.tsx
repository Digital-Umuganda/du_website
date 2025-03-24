// Dates
import { format } from "date-fns/format";

// Components
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// Utils
import { Mail } from "@/lib/types";

interface MailDisplayProps {
  mail: Mail | null;
}

export function MailDisplay({ mail }: MailDisplayProps) {
  return (
    <div className="flex h-full flex-col">
      {mail ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar>
                <AvatarImage alt={mail.names} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{mail?.subject}</div>
                <div className="line-clamp-1 text-xs">{mail?.names}</div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Reply-To:</span> {mail?.email}
                </div>
              </div>
            </div>
            {mail?.createdAt && (
              <div className="ml-auto text-xs text-muted-foreground">
                {format(new Date(mail?.createdAt), "PPpp")}
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
            {mail?.message}
          </div>
          <Separator className="mt-auto" />
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  );
}
