"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Search, Lightbulb, Megaphone, TrendingUp } from "lucide-react";
import "./HeroSection.css";

const JourneySection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) =>
              new Set(prev).add(entry.target.dataset.index)
            );
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px" }
    );

    const cards = document.querySelectorAll("[data-journey-card]");
    cards.forEach((card) => observer.observe(card));

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const progress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - rect.top) / (sectionHeight + windowHeight)
          )
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const journeyData = [
    {
      title: "Research & Discovery",
      icon: Search,
      description:
        "We begin by understanding your brand, market, and audience to build data-driven strategies that work.",
      skills: [
        "Market Analysis",
        "Audience Insight",
        "Competitor Study",
        "Goal Setting",
      ],
      side: "left",
    },
    {
      title: "Creative Strategy",
      icon: Lightbulb,
      description:
        "Our team crafts a tailored marketing plan from brand voice to campaign concepts that connect emotionally.",
      skills: [
        "Brand Identity",
        "Content Planning",
        "Campaign Design",
        "Messaging",
      ],
      side: "right",
    },
    {
      title: "Execution & Marketing",
      icon: Megaphone,
      description:
        "We bring your strategy to life across platforms social media, SEO, ads, and more ensuring maximum reach.",
      skills: ["Social Media", "SEO & SEM", "Paid Ads", "Influencer Marketing"],
      side: "left",
    },
    {
      title: "Growth & Optimization",
      icon: TrendingUp,
      description:
        "We track results, optimize campaigns, and help your brand scale sustainably with real-time analytics.",
      skills: [
        "Performance Tracking",
        "A/B Testing",
        "Analytics",
        "Scale Strategy",
      ],
      side: "right",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            How We Bring Brands to Life
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto mt-3">
            A strategic journey from research to results — every step designed
            to elevate your brand presence and drive impact.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 rounded-full"
            style={{
              background: `linear-gradient(to bottom,
                transparent 0%,
                rgba(200,200,200,0.8) ${scrollProgress * 100}%,
                rgba(120,120,120,0.4) 100%)`,
              boxShadow: "0 0 15px rgba(180,180,180,0.3)",
            }}
          />

          <div className="space-y-16">
            {journeyData.map((journey, index) => (
              <div
                key={index}
                data-journey-card
                data-index={index}
                className={`flex flex-col lg:flex-row items-center ${
                  journey.side === "right" ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-full lg:w-1/2 ${
                    journey.side === "right" ? "lg:pl-12" : "lg:pr-12"
                  } mb-8 lg:mb-0 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                    visibleItems.has(index.toString())
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  <div
                    className="
    relative p-8 rounded-2xl overflow-hidden group
    backdrop-blur-xl
    bg-white/5
    border border-white/10
    transition-all duration-700
    shadow-[0_0_25px_rgba(255,255,255,0.07)]
    hover:shadow-[0_0_45px_rgba(255,255,255,0.12)]
  "
                  >
                    <div
                      className="
      absolute inset-0
      bg-gradient-to-br from-white/20 via-transparent to-white/5
      opacity-20 group-hover:opacity-40
      transition-opacity duration-700
      pointer-events-none
    "
                    />

                    <div
                      className="
      absolute -top-1/2 left-0 w-full h-full
     
      rotate-12
      transition-transform duration-1000 ease-out
      pointer-events-none
    "
                    />
                    <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                      <journey.icon
                        className="w-6 h-6 text-gray-300 
    transition-all duration-300 ease-out
    group-hover:rotate-12"
                      />
                      {journey.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {journey.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {journey.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="bg-white/5 border border-gray-700/50 
                            text-gray-200 text-xs sm:text-sm px-3 py-2 
                            rounded-lg text-center font-medium 
                            hover:bg-white/10 transition duration-400"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block relative z-10">
                  <div
                    className={`w-5 h-5 bg-gray-400 rounded-full border-4 border-[#1a1a1a] shadow-[0_0_15px_rgba(200,200,200,0.5)] transition-all duration-700 ${
                      visibleItems.has(index.toString())
                        ? "scale-110 opacity-100"
                        : "scale-75 opacity-60"
                    }`}
                  ></div>
                </div>

                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-15">
          <Link href="/contact">
            <button
              className="
                  bounce-animation
                  relative inline-flex items-center justify-center
                  px-4 sm:px-10 py-2 sm:py-4 mt-3
                  text-white font-semibold text-base sm:text-lg
                  bg-white/20 rounded-full cursor-pointer
                  shadow-md hover:shadow-lg hover:bg-white/25
                  transition-all duration-300 overflow-hidden group
                "
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Discuss Your Project</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
