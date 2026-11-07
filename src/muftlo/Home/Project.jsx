

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
  const stickyPositions = [
    "top-24",
    "top-[6.5rem]",
    "top-28",
    "top-[7.5rem]",
    "top-32",
    "top-[8.5rem]",
    "top-36",
    "top-[9.5rem]",
    "top-40",
    "top-[10.5rem]",
    "top-44",
    "top-[11.5rem]",
  ];

  return (
    <section aria-labelledby="projects-heading" className="bg-brand-cream px-4 py-16 text-brand-navy md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 id="projects-heading" className="mb-8 text-4xl font-extrabold md:mb-10 md:text-5xl">
          Our Projects
        </h2>

        <div className="space-y-5 pb-12">
          {projects.map((project, i) => {
            const details = project.metrics
              .map((metric) => metric.label)
              .filter(Boolean)
              .join(" ");

            return (
              <motion.article
                key={project.id}
                className={`sticky ${stickyPositions[i] ?? "top-24"} flex min-h-[25rem] flex-col justify-between rounded-[1.25rem] border border-brand-cream/10 bg-brand-navy p-6 text-brand-cream shadow-xl sm:p-9 md:min-h-[27rem] md:p-12`}
                initial={{ opacity: 1, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <div>
                  <h3 className="max-w-4xl text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 max-w-4xl text-3xl leading-tight text-brand-cream/55 sm:text-4xl md:text-5xl">
                    {project.category}
                  </p>
                </div>

                <div className="mt-10 max-w-4xl">
                  <ul className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-brand-cream/75 sm:text-sm">
                    {project.metrics.map((metric) => (
                      <li key={metric.value} className="whitespace-nowrap">
                        {metric.value}
                      </li>
                    ))}
                  </ul>
                  {details && (
                    <p className="flex items-start gap-3 text-sm leading-relaxed text-brand-cream/85 sm:text-base">
                      <Sparkles aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-orange" />
                      <span>{details}</span>
                    </p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button asChild className="bg-brand-orange px-6 text-brand-navy hover:bg-brand-orange/90">
            <Link to="/services">
              Explore Our Services
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
