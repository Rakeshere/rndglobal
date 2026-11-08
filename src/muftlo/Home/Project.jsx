

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/muftlo/ui/button";

const projects = [
  {
    id: 1,
    title: "Dotsquares",
    category: "Company Profile Video Production",
    image: "/Dots.jpg",
    metrics: [
      {
        value: "Professional Standards",
        label: "Showcased employee excellence & dedication",
      },
      {
        value: "Transparent Process",
        label: "Highlighted customer trust & reliability",
      },
    ],
    link: "https://youtu.be/5bGOdQRwl3c?si=FdABCnPL5_qq0zPY",
  },
  {
    id: 2,
    title: "Search Abode",
    category: "Digital Marketing & Social Media Strategy",
    image:
      "https://www.searchabode.com/wp-content/uploads/2025/03/searchabode-the-best-real-estate-agent-in-jaipur.jpg",
    metrics: [
      {
        value: "4x Growth",
        label: "Expanded to 8k+ genuine Instagram followers",
      },
      {
        value: "23–27 Reels/Month",
        label: "Produced high-quality, engaging real estate reels",
      },
    ],
    link: "https://www.instagram.com/searchabode?igsh=MXY5dmR2ZTB5dGh4Zw==",
  },
  {
    id: 3,
    title: "Sondaryam",
    category: "Podcast & Multi-Platform Branding",
    image: "/Sondaryam.jpg",
    metrics: [
      {
        value: "4x Brand Growth",
        label: "Shifted from static posts to YouTube podcast strategy",
      },
      {
        value: "Celebrity Podcast",
        label: "Created engaging shows boosting reach & credibility",
      },
    ],
    link: "https://youtu.be/V-16bh_2FF0?si=QV96HYQ3F_L10On8",
  },
  {
    id: 4,
    title: "RNT School",
    category: "Complete Digital Marketing & Web Presence",
    image: "/RNT.jpg",
    metrics: [
      {
        value: "#1 Google Rank",
        label: "Top position for 'Best School in Kuchaman City'",
      },
      {
        value: "10K Followers",
        label: "Built premium digital identity & brand trust",
      },
    ],
    link: "https://www.instagram.com/rntschool?igsh=MXVtaDc3NHBybXJ1cQ==",
  },
  {
    id: 5,
    title: "Opel Home",
    category: "Logo Design & Branding",
    image: "/Opel Home.jpg",
    metrics: [
      {
        value: "Professional Logo",
        label: "Customized design as per client vision",
      },
      {
        value: "Brand Support",
        label: "Supported Dubai’s top-selling furniture brand",
      },
    ],
    link: "#",
  },
  {
    id: 6,
    title: "Pastelli",
    category: "Fashion Brand Marketing",
    image: "/Pastelli.jpg",
    metrics: [
      {
        value: "91k+ Followers",
        label: "Strong digital presence on Instagram",
      },
      {
        value: "Brand Scaling",
        label: "Empowering new fashion brands with unique identities",
      },
    ],
    link: "#",
  },
  {
    id: 7,
    title: "The Antiques Furniture",
    category: "SEO & Digital Branding",
    image: "/The Wood A.jpg",
    metrics: [
      {
        value: "Top Google Rank",
        label: "Best Hindu Temple Furniture in Dubai",
      },
      {
        value: "SEO Success",
        label: "Delivered consistent results across keywords",
      },
    ],
    link: "https://theantiquesfurniture.com",
  },
  {
    id: 8,
    title: "Force Lifts",
    category: "Digital Branding & Content Production",
    image: "/ForceLifts.jpg",
    metrics: [
      { value: "Premium Content", label: "Reels, testimonials, infographics" },
      {
        value: "3-Month Results",
        label: "Visible digital growth in elevator industry",
      },
    ],
    link: "#",
  },
  {
    id: 9,
    title: "Reliant Housing",
    category: "Real Estate Digital Marketing",
    image: "/Reliant.jpg",
    metrics: [
      {
        value: "Day-One Marketing",
        label: "Worked on premium and under-construction projects",
      },
      {
        value: "Trusted Brand",
        label: "Building recognition in Jaipur real estate",
      },
    ],
    link: "https://www.instagram.com/relianthousing?igsh=eXpzdXl0Ym51NWNo",
  },
  {
    id: 10,
    title: "Parth Sarthi Builder",
    category: "Brand Elevation & GMB Optimization",
    image: "/parth.png",
    metrics: [
      {
        value: "Fresh Brand Image",
        label: "Enhanced digital presence & theme",
      },
      {
        value: "Project Management",
        label: "Handled upcoming residential projects & GMB",
      },
    ],
    link: "https://www.instagram.com/parthsarthi_jaipur?igsh=MTdxZWkxZ255aDY4dw==",
  },
  {
    id: 11,
    title: "Shubh Weddings Magazine",
    category: "Event Digital Partner",
    image: "/shubh Weddings.jpg",
    metrics: [
      {
        value: "Award Show Partner",
        label: "Official digital partner for every award show",
      },
      {
        value: "Premium Coverage",
        label: "Photography & videography of Bollywood & international guests",
      },
    ],
    link: "https://www.instagram.com/shubhweddingsmagazine?igsh=em15djF1bW5yeGRp",
  },
  {
    id: 12,
    title: "GKB Group",
    category: "Builders & Developers",
    image: "/GKB.jpg",
    metrics: [
      {
        value: "Brand Establishment",
        label: "",
      },
      {
        value: "Content Creation & Marketing",
        label: "",
      },
    ],
    link: "",
  },
];

export default function ProjectsShowcase() {
  const featuredProjects = [
    projects[0],
    projects[1],
    projects[2],
    projects[3],
    projects[6],
  ].filter((project) => project);

  return (
    <section aria-labelledby="projects-heading" className="bg-brand-cream px-4 py-16 text-brand-navy md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-brand-navy/15 pb-6 md:mb-10">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase text-brand-orange">Selected work · 01—05</p>
            <h2 id="projects-heading" className="text-4xl font-extrabold md:text-5xl">
              Our Projects
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-brand-navy/65 md:text-base">
            A few partnerships, shaped into work that moves brands forward.
          </p>
        </div>

        <div className="divide-y divide-brand-navy/15">
          {featuredProjects.map((project, i) => {
            const reverse = i % 2 === 1;
            const details = project.metrics
              .map((metric) => metric.label)
              .filter(Boolean)
              .join(" ");

            return (
              <motion.article
                key={project.id}
                className={`group grid min-h-[25rem] items-center py-8 md:min-h-[27rem] md:grid-cols-2 md:py-10 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.04 }}
              >
                <div className={`relative h-64 overflow-hidden md:h-80 ${reverse ? "md:order-2" : ""}`}>
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-t from-brand-cream/95 via-brand-cream/35 to-transparent md:w-2/3 ${reverse ? "md:ml-auto md:bg-gradient-to-l md:from-brand-cream md:via-brand-cream/50" : "md:bg-gradient-to-r md:from-brand-cream md:via-brand-cream/50"}`}
                  />
                  <span className="absolute left-4 top-4 font-mono text-sm text-brand-cream drop-shadow sm:left-6 sm:top-6">
                    0{i + 1}
                  </span>
                </div>

                <div className={`relative z-10 -mt-5 px-2 md:mt-0 md:px-8 ${reverse ? "md:order-1 md:pl-0" : "md:pr-0"}`}>
                  <p className="mb-3 text-xs font-semibold uppercase text-brand-orange">{project.category}</p>
                  <h3 className="max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
                    {project.title}
                  </h3>
                  <div className="my-5 flex flex-wrap gap-x-5 gap-y-2">
                    {project.metrics.map((metric) => (
                      <span key={metric.value} className="text-sm font-medium text-brand-navy/75">
                        {metric.value}
                      </span>
                    ))}
                  </div>
                  {details && <p className="max-w-lg text-sm leading-relaxed text-brand-navy/70 md:text-base">{details}</p>}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 border-b border-brand-orange pb-1 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-orange"
                  >
                    View project
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <Button asChild className="bg-brand-orange px-6 text-brand-navy hover:bg-brand-orange/90">
            <Link to="/services">
              Explore More
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
