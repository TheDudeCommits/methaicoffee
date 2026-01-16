import Image from "next/image";
import Link from "next/link";

interface MenuCategoryCardProps {
  id: string;
  name: string;
  itemCount: number;
  image?: string;
  href: string;
}

/**
 * MenuCategoryCard
 *
 * Full-bleed image card with overlay text.
 * - Image covers entire card area (object-cover)
 * - Text sits on a subtle bottom gradient
 * - Modern hover: slight lift + image zoom
 */
export default function MenuCategoryCard({
  id,
  name,
  itemCount,
  image,
  href,
}: MenuCategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 rounded-2xl"
      aria-label={`${name} menu category, ${itemCount} items`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-terracotta-400 cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0">
        {/* Image layer */}
        <div className="relative aspect-[3/4] w-full">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
              priority={id === "drinks"}
            />
          ) : (
            <div className="w-full h-full bg-terracotta-300" />
          )}

          {/* Overlay gradient + text */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-6 flex flex-col items-center text-center">
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-white tracking-wide">
              {name}
            </h3>
            <span className="text-xs sm:text-sm text-white/80 mt-0.5">
              ({itemCount})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

