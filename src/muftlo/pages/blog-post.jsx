

import { motion } from "framer-motion";
import { useParams } from "@/muftlo/next/navigation";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  const blogs = [
    /* -----------------------------------------------------------
       1️⃣  R&D SOFTWARE SOLUTIONS BLOG
    ------------------------------------------------------------ */
    {
      slug: "muftlo-digital-growth",
      title: "R&D Software Solutions: Redefining Digital Marketing in India",
      date: "01/12/2025",
      author: "R&D Software Solutions Agency",
      cover:
        "/muftloBlog.jpg",
      intro:
        "What if your marketing agency didn’t just run ads, but understood your business like a partner? R&D Software Solutions was born from these questions — and today it's a revolution.",
      sections: [
        {
          title: "How R&D Software Solutions Started: Built from the Inside Out",
          text: "R&D Software Solutions was founded by creator Dhanraj Chauhan, who spent years inside the industry understanding gaps, failures, and the lack of creativity in Indian agencies.",
        },
        {
          title: "The Problem R&D Software Solutions Solved",
          text: (
            <p>
              Brands were getting templated and repetitive strategies. R&D Software Solutions —
              Marketing Universe For The Lead Outcomes — was launched to bring
              creativity, outcome-driven marketing, and modern execution.
            </p>
          ),
        },
        {
          title: "Our 360° Universe of Services",
          text: (
            <ul className="list-disc list-inside space-y-2 mt-2 text-gray-400">
              <li>Digital Marketing: SMM, SEO, SEM, Influencer Marketing</li>
              <li>Performance Ads & Analytics</li>
              <li>Websites, Landing Pages, UI/UX</li>
              <li>Photo & Video Production</li>
            </ul>
          ),
        },
      ],
      faq: [
        {
          question: "What services does R&D Software Solutions offer?",
          answer:
            "R&D Software Solutions offers digital marketing, performance ads, websites, UI/UX, influencer marketing, and content production.",
        },
        {
          question: "Who founded R&D Software Solutions?",
          answer: "R&D Software Solutions was founded by Dhanraj Chauhan.",
        },
        {
          question: "What makes R&D Software Solutions different?",
          answer:
            "R&D Software Solutions is strategy-focused, creative, fast, and delivers measurable results.",
        },
        {
          question: "Which industries does R&D Software Solutions serve?",
          answer:
            "Real estate, education, hospitality, lifestyle, beauty, healthcare, and more.",
        },
        {
          question: "How can I collaborate with R&D Software Solutions?",
          answer: "You can reach out via website, email, or social media.",
        },
      ],
    },

    /* -----------------------------------------------------------
       2️⃣  TOP DIGITAL MARKETING SERVICES BLOG
    ------------------------------------------------------------ */
    {
      slug: "top-digital-marketing-services",
      title:
        "Top Digital Marketing Services That Bring the Fastest Growth in 2025",
      date: "05/12/2025",
      author: "R&D Software Solutions Agency",
      cover:
        "/Anton Tkachev.jpg",
      intro:
        "Digital marketing is evolving fast. If your business wants quick results, these services are dominating 2025 with the strongest ROI.",
      sections: [
        {
          title: "1. Performance Marketing",
          text: "Google Ads & Meta Ads continue to deliver the fastest results with strong intent-based targeting and analytics.",
        },
        {
          title: "2. SEO (Still King in 2025)",
          text: "SEO remains the best long-term strategy for organic growth with high ROI and consistent traffic.",
        },
        {
          title: "3. Social Media Ads",
          text: "Businesses rely on Instagram, Facebook, and YouTube ads to reach targeted audiences quickly.",
        },
      ],
      faq: [
        {
          question: "Which digital marketing service gives the fastest leads?",
          answer: "Google Ads & Facebook Ads give immediate results.",
        },
        {
          question: "Is SEO still effective in 2025?",
          answer: "Yes, SEO is still the highest-ROI long-term strategy.",
        },
        {
          question: "How much do digital marketing services cost?",
          answer:
            "Packages start from ₹10,000 to ₹1,00,000+ per month depending on scope.",
        },
        {
          question: "How long does it take to get results?",
          answer:
            "PPC: Same week | Social Ads: 7–14 days | SEO: 3–6 months | Content: 60–90 days",
        },
        {
          question:
            "What is the best digital marketing service for small businesses?",
          answer: "Local SEO + Social Media Ads work best.",
        },
      ],
    },

    /* -----------------------------------------------------------
       3️⃣  IMPORTANCE OF DIGITAL MARKETING BLOG
    ------------------------------------------------------------ */
    {
      slug: "importance-of-digital-marketing",
      title: "Why Digital Marketing Is Important for Every Business in 2025",
      date: "06/12/2025",
      author: "R&D Software Solutions Agency",
      cover:
        "/Best Digital Marketing.jpg",
      intro:
        "Every business, small or large, survives through visibility. Digital marketing ensures brands reach the right customers at the right time.",
      sections: [
        {
          title: "Digital Presence = Business Growth",
          text: "Customers search online before buying. Being visible online is no longer optional.",
        },
        {
          title: "Industries Benefiting the Most",
          text: "Real estate, healthcare, retail, education, e-commerce, hospitality, and finance rely heavily on digital channels.",
        },
      ],
      faq: [
        {
          question: "Why is digital marketing important for every industry?",
          answer:
            "Because customers search online before buying. Digital marketing ensures visibility and growth.",
        },
        {
          question: "Which industries benefit most from digital marketing?",
          answer:
            "Real estate, healthcare, education, retail, e-commerce, finance, hospitality, IT.",
        },
        {
          question: "Is digital marketing cost-effective?",
          answer:
            "Yes, it offers better ROI than traditional marketing and is highly measurable.",
        },
        {
          question: "Can digital marketing help small businesses?",
          answer:
            "Absolutely. Even small budgets can generate targeted leads and customers.",
        },
        {
          question: "What is the first step to start?",
          answer:
            "Build a website, set up social profiles, and begin SEO + paid ads with expert help.",
        },
      ],
    },
  ];

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog)
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-950 text-gray-300">
        <p className="text-lg">Blog not found 😕</p>
      </div>
    );

  return (
    <main className="bg-slate-950 text-gray-200 min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={blog.cover}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 to-slate-950/90" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold text-white mb-3"
          >
            {blog.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-sm"
          >
            By <span className="text-blue-700">{blog.author}</span> ·{" "}
            {blog.date}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-14">
        <p className="text-gray-300 text-base md:text-lg">{blog.intro}</p>

        {blog.sections.map((s, i) => (
          <div key={i} className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-700">
              {s.title}
            </h2>
            <div className="text-gray-400">{s.text}</div>
          </div>
        ))}

        {/* FAQ */}
        <section className="text-white py-12 px-6 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-6">FAQs</h2>

          <div className="space-y-4">
            {blog.faq.map((f, i) => (
              <div
                key={i}
                className="bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between p-5"
                >
                  <span className="text-lg text-blue-700 font-medium">
                    {f.question}
                  </span>
                  {openIndex === i ? (
                    <ChevronUp className="text-cyan-400" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 ${
                    openIndex === i
                      ? "max-h-40 opacity-100 p-5 pt-0"
                      : "max-h-0 opacity-0 p-0"
                  }`}
                >
                  <p className="text-gray-300">{f.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
