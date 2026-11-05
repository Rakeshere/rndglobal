"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const ChooseUs = () => {
  const slides = [
    {
      title: "Transform Your Brand Presence",
      desc: "Digital strategies crafted to boost your visibility and engagement. Experience real growth with marketing built for impact.",
      img: "https://img.freepik.com/free-vector/marketing-promotional-campaign-brand-awareness-building-branded-workshop-workshop-organized-by-brand-useful-marketing-event-concept_335657-115.jpg?semt=ais_hybrid&w=740&q=80",
      btn: "Explore More",
    },
    {
      title: "Boost Visibility with Powerful SEO",
      desc: "Rank higher, get discovered, and attract the right audience. Smart optimization that drives consistent, organic growth.",
      img: "https://mydmi.imgix.net/shutterstock_2502022545.jpg?crop=edges&fit=crop&fm=auto&h=1260&ixlib=php-4.1.0&q=40&w=2400&s=44623a2c5aabd16041862c1348d62b1a",
      btn: "Explore More",
    },
    {
      title: "Tell Your Story with Stunning Photo & Video",
      desc: "High-quality visuals that elevate your brand identity. Create lasting impressions through cinematic content.",
      img: "https://static.vecteezy.com/system/resources/thumbnails/038/904/859/small/ai-generated-silhouette-images-of-video-production-behind-the-scenes-making-of-tv-commercial-movie-that-film-crew-team-lightman-photo.jpg",
      btn: "Explore More",
    },
    {
      title: "Convert Viewers into Leads with Powerful Visuals",
      desc: "Engaging photo & video content that builds trust. Showcase your brand and inspire action instantly.",
      img: "https://www.artonicweb.com/wp-content/uploads/2024/08/artonic-photography-in-digital-marketing.jpg",
      btn: "Explore More",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[100vh] md:h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
      ))}

      <div className="relative z-10 flex items-center h-full">
        <div
          className="px-6 md:px-16 lg:px-20 max-w-2xl md:max-w-7xl
                        text-left md:text-left mx-auto md:mx-0"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-snug">
            {slides[index].title}
          </h1>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
            {slides[index].desc}
          </p>

          <Link href="/contact">
            <button
              className="px-6 sm:px-8 py-3 bg-blue-900 text-white 
                               hover:bg-blue-800 rounded-full cursor-pointer font-medium
                               transition-all duration-500 text-sm sm:text-base"
            >
              {slides[index].btn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
