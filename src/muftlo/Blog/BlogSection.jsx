import Link from "@/muftlo/next/link";
import { cn } from "@/lib/utils";
import { CardBlog, CardContent, CardFooter } from "@/muftlo/ui/card";

export function BlogCard({ title, imageSrc, imageAlt, href, className }) {
  return (
    <CardBlog
      className={cn(
        "overflow-hidden border border-gray-200 transition-all duration-300",
        className
      )}
    >
      <CardContent className="p-0 overflow-hidden">
        <img
          fill="true"
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-5 -mt-5 bg-white">
        <h3 className="text-pretty text-lg md:text-xl font-semibold text-gray-900">
          {title}
        </h3>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-primary"
          aria-label={`Read more: ${title}`}
        >
          Read More
          <span aria-hidden="true" className="ml-1 mt-[4px]">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </span>
        </Link>
      </CardFooter>
    </CardBlog>
  );
}

export function BlogHero({ title, imageSrc, imageAlt = "" }) {
  return (
    <section className="relative h-[250px] md:h-[350px] overflow-hidden flex items-center justify-center text-center">
      <img
        fill="true"
        src={imageSrc || "/placeholder.svg"}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 drop-shadow-xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
