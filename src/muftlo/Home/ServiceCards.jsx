import React from "react";
import Link from "@/muftlo/next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
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
    <section className="services-showcase py-12 md:py-16" aria-labelledby="home-services-title">
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

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {services.map((service, index) => (
            <Link
              href="/services"
              key={service.title}
              className={`service-preview group relative isolate flex min-h-[270px] flex-col overflow-hidden rounded-xl border border-brand-cream/10 p-5 text-brand-cream transition-transform duration-300 hover:-translate-y-1 md:min-h-[310px] md:p-6 ${service.featured ? "md:col-span-1" : ""}`}
              style={{ backgroundImage: `linear-gradient(180deg, hsl(220 55% 13% / .08) 5%, hsl(220 55% 10% / .94) 100%), url("${service.image}")` }}
            >
              <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-brand-cream/90 text-brand-navy transition-colors group-hover:bg-brand-orange">
                <ArrowUpRight aria-hidden="true" size={18} />
              </span>
              <div className="mt-auto max-w-sm">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-orange">{service.category}</p>
                <h3 className="text-xl font-semibold leading-tight md:text-2xl">{service.title}</h3>
                {service.description && <p className="mt-2 max-w-xs text-sm leading-relaxed text-brand-cream/80">{service.description}</p>}
              </div>
              <span className="sr-only">Explore {service.title} services</span>
            </Link>
          ))}
        </div>

        <Button asChild className="mt-4 w-full gap-2 bg-brand-orange text-brand-navy hover:bg-brand-orange/90 sm:hidden">
          <Link href="/services">View all services <ArrowDownRight aria-hidden="true" /></Link>
        </Button>
      </div>
      <style>{`.service-preview{background-size:cover;background-position:center;}`}</style>
    </section>
  );
}