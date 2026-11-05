"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "We partnered with Muftlo for a complete 360° marketing solution, and they delivered exactly what we needed. Their dedication and results-driven work have been outstanding.",
    name: "Arun Sharma",
    title: "CEO & Founder",
    company: "SEARCH ABODE",
    companyLogo: "",
    avatar: "",
  },
  {
    quote:
      "Muftlo truly elevated our brand presence. Their video production team delivered high-quality and creative marketing content that perfectly showcased our luxury properties. A reliable and professional partner we highly recommend.",
    name: "Sushil Soni",
    title: "CEO & Founder",
    company: "KEYS90",
    companyLogo: "",
    avatar: "",
  },
  {
    quote:
      "Working with Muftlo has transformed our marketing efforts. Their all-in-one solutions and innovative approach in real estate promotions have delivered excellent results for Reliant Housing.",
    name: "Rakesh Mahal",
    title: "Director",
    company: "RELIANT HOUSING",
    companyLogo: "",
    avatar: "",
  },
  {
    quote:
      "We are impressed with Muftlo’s innovation and dedication. From complete 360 product visuals to engaging marketing podcasts, they handled everything flawlessly. Great team to work with!",
    name: "Satyendra Parnami",
    title: "Director",
    company: "SONDARYAM",
    companyLogo: "",
    avatar: "",
  },
  {
    quote:
      "Working with Muftlo boosted our digital presence and lead quality. Their all-round marketing support helped us achieve outstanding results. Highly recommended!",
    name: "Vikram Choudhary",
    title: "Owner",
    company: "PARTH SARTHI",
    companyLogo: "",
    avatar: "",
  },
  {
    quote:
      "Outstanding service by Muftlo! They handled everything from elevations to full marketing strategy, helping Force Lifts stand out in the market. Highly recommended!",
    name: "Neeraj Sharma",
    title: "Director",
    company: "FORCE LIFTS",
    companyLogo: "",
    avatar: "",
  },
  {
    quote:
      "Thanks to Muftlo, Pastelli’s online presence and sales have grown tremendously. Their end-to-end support in marketing and web management is truly exceptional.",
    name: "Arohi Mehta",
    title: "Owner",
    company: "PASTELLI",
    companyLogo: "",
    avatar: "",
  },
  {
    quote:
      "We trust Muftlo for complete marketing support. Their 360° approach helped Miracle Enclave connect with more buyers and grow faster.",
    name: "Vikram Mitruka",
    title: "Owner",
    company: "MIRACLE ENCLAVE",
    companyLogo: "",
    avatar: "",
  },
  {
    quote:
      "We are extremely happy with Muftlo’s complete branding and marketing support. They built Swargun ENT Clinic’s presence from zero and delivered outstanding results!",
    name: "Palak Dewan",
    title: "Owner",
    company: "SWARGUN ENT CLINIC",
    companyLogo: "",
    avatar: "",
  },
  {
    quote:
      "Working with Muftlo transformed Crude Fit’s brand presence. Their marketing strategies and execution across all platforms were top-notch. Truly a one-stop solution!",
    name: "Rahul Maghrani",
    title: "Co-Founder",
    company: "CRUDE FIT",
    companyLogo: "",
    avatar: "",
  },
  {
    quote:
      "We are extremely satisfied with Muftlo’s marketing expertise. From branding to digital execution, they handled everything professionally and delivered exceptional outcomes.",
    name: "Prem Kumar Mitra",
    title: "Director",
    company: "TRIMAX",
    companyLogo: "",
    avatar: "",
  },
  {
    quote:
      "Working with Muftlo has been a fantastic experience. They handled our branding, promotions, and complete marketing with full dedication and creativity. Their contribution truly helped Dot Square reach the right audience.",
    name: "Ashish Mantri",
    title: "Vice President",
    company: "DOT SQUARE",
    companyLogo: "",
    avatar: "",
  },
];

export default function Testimonials() {
  return (
    <section className="text-white py-20 px-6 md:px-16 relative">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
        Don’t just take our words
        <br />
        <span className="text-gray-300 mt-1">
          See what our clients say about us
        </span>
      </h2>

      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-20"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className="px-4 py-4">
              <div
                className="
                  min-h-[280px] md:min-h-[300px] 
    bg-gradient-to-br from-white/5 via-white/10 to-white/5
    backdrop-blur-xl
    border border-white/10
    rounded-2xl p-6 md:p-8 flex flex-col justify-between
    shadow-[0_0_20px_rgba(255,255,255,0.05)]
    transition-all duration-500
    hover:scale-[1.04]
    hover:border-white/20
                "
              >
                <p className="text-gray-300 text-base leading-relaxed italic flex-grow">
                  {item.quote}
                </p>

                <div className="flex justify-end text-right">
                  <div>
                    <h4 className="font-semibold text-white/90 italic text-sm tracking-wide">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-xs italic">
                      {item.title}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
