import Link from "@/muftlo/next/link";
import { ArrowRight, Compass, Search, Sparkles, Target, TrendingUp } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Research",
    description: "We learn your audience, market, competitors, and goals to uncover the clearest opportunities for your brand.",
    tags: ["Audience insights", "Market landscape", "Competitor review"],
    icon: Search,
    side: "left",
  },
  {
    number: "02",
    title: "Define & plan",
    description: "We turn those insights into a focused brand direction, practical priorities, and a roadmap built around your objectives.",
    tags: ["Positioning", "Brand strategy", "Campaign roadmap"],
    icon: Target,
    side: "right",
  },
  {
    number: "03",
    title: "Design & create",
    description: "We shape a memorable identity and make thoughtful content that gives your brand a consistent, recognizable voice.",
    tags: ["Visual identity", "Content creation", "Brand voice"],
    icon: Sparkles,
    side: "left",
  },
  {
    number: "04",
    title: "Market & launch",
    description: "We bring the plan to life across the right channels, coordinating campaigns, social content, search, and paid media.",
    tags: ["Social media", "SEO & paid ads", "Campaign launch"],
    icon: Compass,
    side: "right",
  },
  {
    number: "05",
    title: "Measure & grow",
    description: "We track what matters, learn from real performance, and keep improving so your brand can grow with confidence.",
    tags: ["Clear reporting", "Ongoing optimization", "Sustainable growth"],
    icon: TrendingUp,
    side: "left",
  },
];

const JourneySection = () => (
  <section aria-labelledby="brand-process-title" className="relative overflow-hidden bg-brand-navy px-4 py-16 text-brand-cream sm:px-6 md:py-24">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-brand-orange/10 to-transparent" />
    <div className="relative mx-auto max-w-7xl">
      <div className="mb-12 grid gap-7 border-b border-brand-navy/15 pb-8 md:mb-16 md:grid-cols-[1fr_0.48fr] md:items-end md:gap-12 md:pb-10">
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase text-brand-orange">
            <span className="size-2 rounded-full bg-brand-orange" /> Our process
          </p>
          <h2 id="brand-process-title" className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            How We Bring Brands to Life
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-brand-cream/70 md:justify-self-end md:text-base">
          From the first question to lasting momentum, every step is connected, purposeful, and shaped around your business.
        </p>
      </div>

      <div className="relative">
        <div aria-hidden="true" className="absolute bottom-10 left-1/2 top-10 hidden w-px -translate-x-1/2 bg-brand-cream/20 lg:block" />
        <div className="space-y-6 md:space-y-8">
          {processSteps.map((step) => {
            const Icon = step.icon;
            const reversed = step.side === "right";
            return (
              <article
                key={step.number}
                className="relative grid items-center gap-5 md:gap-8 lg:grid-cols-[1fr_auto_1fr]"
              >
                <div className={`relative overflow-hidden rounded-lg border border-brand-cream/15 bg-brand-navy/90 p-5 shadow-sm transition-colors duration-300 hover:border-brand-orange/50 sm:p-7 md:p-8 ${reversed ? "lg:col-start-3" : "lg:col-start-1"}`}>
                  <div className="absolute inset-y-0 left-0 w-1 bg-brand-orange" />
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-brand-orange/10 text-brand-orange">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="mb-1 text-xs font-semibold uppercase text-brand-orange">Step {step.number}</p>
                      <h3 className="text-xl font-bold text-brand-cream sm:text-2xl">{step.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-cream/75 sm:text-base">{step.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <li key={tag} className="rounded-sm border border-brand-cream/15 bg-brand-cream/5 px-3 py-1.5 text-xs font-medium text-brand-cream/75">{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="hidden size-10 items-center justify-center rounded-full border-4 border-brand-navy bg-brand-orange text-sm font-bold text-brand-navy shadow-md lg:col-start-2 lg:row-start-1 lg:flex">
                  {step.number}
                </div>
                <div aria-hidden="true" className={`hidden h-px bg-brand-orange/45 lg:block ${reversed ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-3 lg:row-start-1"}`}>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-12 flex justify-center md:mt-16">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
        >
          Let’s build your next chapter
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default JourneySection;