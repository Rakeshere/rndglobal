

import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  BlueCard,
  BlueCardContent,
  BlueCardDescription,
  BlueCardFooter,
  BlueCardHeader,
  BlueCardTitle,
} from "@/muftlo/ui/card";
import { Button } from "@/muftlo/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ThreeDMarqueeDemoSecond } from "@/muftlo/Services/ThreeDMarquee";
import ChooseUs from "@/muftlo/Services/CarouselNow";

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `perspective(1000px) rotateX(${y / 10}deg) rotateY(${
      x / 10
    }deg) translateZ(10px)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  const digitalMarketingServices = [
    {
      title: "SEO (Search Engine Optimization)",
      description:
        "SEO enhances your website's visibility on search engines, bringing in organic traffic and helping potential customers find you easily.",
      advantages:
        "Improves search rankings, increases organic reach, and enhances brand credibility by making your site more authoritative and trustworthy.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPv3CJNXhIhPTMqJy0Aycy5ibjxjGJBsvoQ&s",
      color: "bg-blue-50",
    },
    {
      title: "SEM (Search Engine Marketing)",
      description:
        "SEM combines paid search ads with keyword targeting to place your brand at the top of search results.",
      advantages:
        "Provides instant visibility on search engines, drives qualified traffic, and generates quick results to complement long-term SEO efforts.",
      image:
        "https://www.pixartprinting.co.uk/blog/wp-content/uploads/2022/10/Cover.Search-engine-marketing.jpg",
      color: "bg-indigo-50",
    },
    {
      title: "SMM (Social Media Marketing)",
      description:
        "SMM builds brand presence across social media platforms, fostering engagement and creating a loyal audience.",
      advantages:
        "Enhances brand recognition, facilitates direct interaction with your audience, and supports targeted ad campaigns for specific demographics.",
      image: "https://webtraffic.agency/uploads/blog/blog240624044117.jpg",
      color: "bg-purple-50",
    },
    {
      title: "Google Ads",
      description:
        "Our team manages Google Ads campaigns to attract high-intent traffic using strategic targeting and budget optimization.",
      advantages:
        "Delivers measurable ROI, provides precise targeting options, and boosts visibility among ready-to-buy audiences.",
      image:
        "https://www.dicslaxminagar.com/blog/wp-content/uploads/2024/05/How-to-Promote-Your-Online-Courses-With-Google-Ads.png",
      color: "bg-green-50",
    },
    {
      title: "Branding",
      description:
        "Branding services encompass logo design, brand strategy, and content creation to establish a cohesive identity.",
      advantages:
        "Builds a strong brand identity, fosters customer trust, and differentiates your business from competitors.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2T8bo2aBGIN0a89w1H33mHvM7_ihd2An2WQ&s",
      color: "bg-pink-50",
    },
    {
      title: "Pay-Per-Click Marketing",
      description:
        "PPC ads target specific keywords, placing your business in front of a relevant audience and driving immediate traffic.",
      advantages:
        "Offers flexible budgeting, measurable results, and drives immediate traffic that can lead to high conversions.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbo3dxdyB1wnI83R_0za0bWN64v0RKJ1hBw&s",
      color: "bg-orange-50",
    },
  ];

  const photoVideoServices = [
    {
      title: "Product Photography",
      description:
        "High-quality product images that emphasize details, features, and aesthetics, ideal for e-commerce, social media, and ad campaigns.",
      image:
        "https://zebrastudio.org/wp-content/uploads/2022/06/photography-g14011171a_1920-min-1024x683.jpg",
      color: "bg-blue-50",
    },
    {
      title: "Real Estate Photography",
      description:
        "Professional property photos that showcase real estate in its best light, helping properties stand out in a competitive market.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNlMgt0CEskaf6lyS1VqvzM-0BWRdQ-Zf_A&s",
      color: "bg-green-50",
    },
    {
      title: "Corporate Photography",
      description:
        "Professional shoots that capture corporate events, team photos, and office environments, building a trustworthy brand image.",
      image:
        "https://jamesmaherphotography.com/wp-content/uploads/2022/04/business-corporate-portraits-1.webp",
      color: "bg-indigo-50",
    },
    {
      title: "Video Production",
      description:
        "From explainer videos to brand stories, we create compelling video content that engages audiences and drives results.",
      image:
        "https://cdn.prod.website-files.com/685be7dcd32275d383065239/685be7dcd32275d3830679a5_Blog%20Cover_04_2023_%2015%20Video%20Production%20Tips%20for%20Making%20Engaging%20Professional%20Videos.webp",
      color: "bg-purple-50",
    },
    {
      title: "Social Media Content",
      description:
        "Custom photo and video content optimized for social media platforms, designed to engage followers and build brand presence.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31LrMNVYPPj1Vex9Zpuzk_oaghQIKlRJ1Fg&s",
      color: "bg-pink-50",
    },
    {
      title: "Portfolio Photography",
      description:
        "Comprehensive photo sessions for personal or professional portfolios, including headshots, modeling, and creative projects.",
      image:
        "https://i.etsystatic.com/20116942/r/il/ebb4be/6607106719/il_fullxfull.6607106719_ha19.jpg",
      color: "bg-orange-50",
    },
  ];

  const webDevelopmentServices = [
    {
      title: "Full-Stack Development",
      description:
        "Development of front-end and back-end systems for a seamless user experience.",
      advantages:
        "Delivers a cohesive, efficient website, provides a complete and functional digital experience, and supports future scalability.",
      image:
        "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2022/08/62_1659690052.png",
      color: "bg-blue-50",
    },
    {
      title: "E-Commerce Development",
      description:
        "Custom-built e-commerce sites that offer a user-friendly shopping experience and streamlined checkout processes.",
      advantages:
        "Boosts online sales, enhances customer experience, and integrates payment and inventory management solutions.",
      image:
        "https://i0.wp.com/www.magetop.com/blog/wp-content/uploads/2022/06/E-Commerce-Development-Bloom-IT.jpg?resize=800%2C445&ssl=1",
      color: "bg-green-50",
    },
    {
      title: "CMS Website Development",
      description:
        "Development of websites powered by CMS platforms like WordPress, making it easy for clients to manage their content.",
      advantages:
        "Simplifies content updates, reduces maintenance costs, and empowers clients to manage their website without technical expertise.",
      image:
        "https://www.scnsoft.com/application-development/cms-development/cms-development-services-cover-picture-03.svg",
      color: "bg-purple-50",
    },
    {
      title: "SEO Optimization",
      description:
        "Built-in SEO strategies to ensure your website is optimized for search engines from day one.",
      advantages:
        "Improves search visibility, attracts organic traffic, and strengthens your online presence.",
      image:
        "https://cdn.botpenguin.com/assets/website/Search_Engine_Optimization_d547319792.webp",
      color: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen">
      <ChooseUs />

      <section className="py-20 px-6 md:px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-9 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-2">
              Digital Marketing
            </h2>
            <p className="text-md md:text-lg text-gray-400 max-w-3xl mx-auto">
              We craft customized digital marketing strategies that build your
              brand's online presence and drive targeted engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-15">
            {digitalMarketingServices.map((service, index) => (
              <BlueCard
                key={service.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`border-0 shadow-lg transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.1}s` }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <BlueCardHeader>
                  <div
                    className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center`}
                  >
                    <img
                      fill="true"
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <BlueCardTitle className="text-xl">
                    {service.title}
                  </BlueCardTitle>
                </BlueCardHeader>
                <BlueCardContent className="space-y-4">
                  <BlueCardDescription className="text-base leading-relaxed">
                    {service.description}
                  </BlueCardDescription>
                  {service.advantages && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Advantages
                      </h4>
                      <p className="text-sm text-gray-400 -mt-1 leading-relaxed">
                        {service.advantages}
                      </p>
                    </div>
                  )}
                </BlueCardContent>
              </BlueCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-8 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-2">
              Photo and Video Production
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Muftlo's media production team work to create
              captivating visuals that resonate with audiences and bring brands
              to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-15">
            {photoVideoServices.map((service, index) => {
              const cardIndex = digitalMarketingServices.length + index;
              return (
                <BlueCard
                  key={service.title}
                  ref={(el) => (cardRefs.current[cardIndex] = el)}
                  className={`border-0 shadow-lg transition-all duration-300 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1}s` }}
                  onMouseMove={(e) => handleMouseMove(e, cardIndex)}
                  onMouseLeave={() => handleMouseLeave(cardIndex)}
                >
                  <BlueCardHeader>
                    <div
                      className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-4`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <BlueCardTitle className="text-xl -mt-3">
                      {service.title}
                    </BlueCardTitle>
                  </BlueCardHeader>
                  <BlueCardContent className="space-y-3">
                    <BlueCardDescription className="text-base leading-relaxed">
                      {service.description}
                    </BlueCardDescription>
                    {/* <Button className="w-full group cursor-pointer bg-gray-700 hover:bg-gray-600">
                      View PortfolioBlue
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button> */}
                  </BlueCardContent>
                </BlueCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-8 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-2">
              Web Development
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We develop websites that are visually appealing, highly
              functional, and tailored to meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webDevelopmentServices.map((service, index) => {
              const cardIndex =
                digitalMarketingServices.length +
                photoVideoServices.length +
                index;
              return (
                <BlueCard
                  key={service.title}
                  ref={(el) => (cardRefs.current[cardIndex] = el)}
                  className={`border-0 shadow-lg transition-all duration-300 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1}s` }}
                  onMouseMove={(e) => handleMouseMove(e, cardIndex)}
                  onMouseLeave={() => handleMouseLeave(cardIndex)}
                >
                  <BlueCardHeader>
                    <div
                      className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-4`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <BlueCardTitle className="text-lg">
                      {service.title}
                    </BlueCardTitle>
                  </BlueCardHeader>
                  <BlueCardContent className="space-y-4">
                    <BlueCardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </BlueCardDescription>
                    {service.advantages && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-400 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Advantages
                        </h4>
                        <p className="text-gray-400 -mt-1 text-sm leading-relaxed">
                          {service.advantages}
                        </p>
                      </div>
                    )}
                  </BlueCardContent>
                </BlueCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
