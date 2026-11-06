import React from "react";
import Link from "@/muftlo/next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Web Development",
    category: "DIGITAL EXPERIENCES",
    description: "Fast, thoughtful websites and software built around the way your business works.",
    image: "/image.png",
    featured: true,
  },
  {
    title: "Digital Marketing",
    category: "GROWTH & VISIBILITY",
    description: "",
    image: "/Best Digital Marketing.jpg",
  },
  {
    title: "Photo & Video",
    category: "CONTENT & CREATIVE",
    description: "",
    image: "/The Wood A.jpg",
  },
];

export function WobbleCardDemo() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="home-services-title">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-7 flex items-end justify-between gap-4 md:mb-9">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-orange">What we do</p>
            <h2 id="home-services-title" className="max-w-2xl text-3xl font-semibold leading-tight text-brand-cream md:text-4xl">
              Our Services
            </h2>
          </div>
          <Button asChild variant="outline" className="hidden shrink-0 gap-2 border-brand-cream/20 bg-brand-cream/5 text-brand-cream hover:bg-brand-cream/10 hover:text-brand-cream sm:inline-flex">
            <Link href="/services">View all services <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1.18fr_0.91fr_0.91fr]">
          {services.map((service) => (
            <Link
              href="/services"
              key={service.title}
              className={`group relative flex min-h-[230px] items-stretch overflow-hidden rounded-lg border border-brand-cream/15 p-5 text-brand-navy transition-transform duration-300 hover:-translate-y-1 md:min-h-[280px] md:p-6 ${service.featured ? "bg-brand-cream" : service.title === "Digital Marketing" ? "bg-brand-orange" : "bg-brand-cream"}`}
            >
              {service.featured ? (
                <div className="grid w-full grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_0.85fr]">
                  <div className="flex min-w-0 flex-col items-start">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-orange">{service.category}</p>
                    <h3 className="text-xl font-semibold leading-tight md:text-2xl">{service.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-brand-navy/75">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Read more <span className="grid size-7 place-items-center rounded-full bg-brand-orange text-brand-navy transition-transform group-hover:translate-x-1"><ArrowRight aria-hidden="true" size={15} /></span></span>
                  </div>
                  <img src={service.image} alt="Website design and development" className="h-32 w-full rounded-md object-cover sm:h-40" />
                </div>
              ) : (
                <div className="flex w-full flex-col items-start">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-navy/65">{service.category}</p>
                  <h3 className="max-w-[12ch] text-xl font-semibold leading-tight md:text-2xl">{service.title}</h3>
                  <span className="mt-auto inline-flex w-full items-center justify-between pt-7 text-sm font-semibold">
                    Read more
                    <span className="grid size-8 place-items-center rounded-full bg-brand-cream/80 text-brand-navy transition-transform group-hover:translate-x-1"><ArrowUpRight aria-hidden="true" size={17} /></span>
                  </span>
                </div>
              )}
              <span className="sr-only">Explore {service.title} services</span>
            </Link>
          ))}
        </div>

        <Button asChild className="mt-4 w-full gap-2 bg-brand-orange text-brand-navy hover:bg-brand-orange/90 sm:hidden">
          <Link href="/services">View all services <ArrowUpRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </section>
  );
}