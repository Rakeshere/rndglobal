

import { motion } from "framer-motion";

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
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          Our Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore how R&D Software Solutions helped businesses grow through creative marketing,
          production, and digital excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="group relative rounded-2xl overflow-hidden border border-[#2c2c2c] 
              bg-gray-900 text-white 
              hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] 
              transition-all duration-500 ease-out"
            initial={{ opacity: 1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            ></a>

            <div className="block relative h-56 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="py-5 px-4">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-gray-100 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-3">
                {project.category}
              </p>

              <ul className="text-sm md:text-base text-gray-300 space-y-1">
                {project.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 flex-shrink-0"></span>
                    <span className="">
                      <span className="font-semibold text-white">
                        {metric.value}
                      </span>{" "}
                      {metric.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
