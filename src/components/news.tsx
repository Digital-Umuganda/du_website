import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

// Utils
import { Bloger } from "@/lib/types";
import { useRouter } from "next/navigation";

const NewsCard = ({ item }: { item: Bloger }) => {
  const router = useRouter();

  const createdAt = item?.date ? new Date(item.date) : null;

  const formattedTime = createdAt
    ? formatDistanceToNow(createdAt, { addSuffix: true })
    : "Unknown time";

  return (
    <article key={item.id} className="group">
      <div
        onClick={() => router?.push(`/news/${item?.id}`)}
        className="relative aspect-[16/12] overflow-hidden rounded-lg cursor-pointer"
      >
        {typeof item?.uagb_featured_image_src?.thumbnail === "boolean" ? (
          <div className="w-full h-full bg-gradient-to-t from-white to-[#f4f4f4] flex items-center justify-center">
            <p className="text-3xl font-bold">News</p>
          </div>
        ) : (
          <Image
            fill
            loading="lazy"
            alt={item?.title?.rendered}
            src={item?.uagb_featured_image_src?.thumbnail?.[0]}
            className="object-cover transition-transform duration-300 group-hover:scale-105 object-top"
          />
        )}
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{formattedTime}</span>
        </div>
        <h3 className="mt-2 text-lg font-bold">{item.title?.rendered}</h3>
        <p
          className="truncate line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: `${item?.content?.rendered?.slice(0, 48)}...`,
          }}
        />
      </div>
    </article>
  );
};

export default NewsCard;
