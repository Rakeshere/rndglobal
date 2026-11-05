"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { Code } from "lucide-react";

export function WobbleCardDemo() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-1">
            We are here to help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <WobbleCard containerClassName="relative overflow-hidden col-span-1 lg:col-span-2 bg-[#0F172A] min-h-[400px] lg:min-h-[300px]">
            {/* <img
              src="/Best Digital Marketing.jpg"
              alt="Digital Marketing Visual"
              className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40 pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="max-w-sm">
                <div className="flex items-center gap-3 mb-3 text-[#00a8ff]">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-tight text-white">
                    Digital Marketing
                  </h2>
                </div>

                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  Digital Marketing isn’t just about being online. It makes your
                  brand visible, trusted, and preferred by the right audience.
                  With engaging content and targeted campaigns, it turns
                  attention into real customers.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Brand Visibility & Awareness",
                  "Audience Engagement",
                  "Lead Generation & Sales Growth",
                  "Analytics & Optimization",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 border border-white/20 backdrop-blur-md 
                     px-4 py-2 rounded-xl text-white font-medium 
                      transition duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </WobbleCard>

          <WobbleCard
            containerClassName="
    col-span-1 
    min-h-[300px] 
    relative 
    overflow-hidden 
    rounded-2xl 
    bg-[#111827]
  "
          >
            <div
              className="
      absolute inset-0 
      bg-cover bg-center 
      opacity-40 
      group-hover:opacity-50 
      transition-all duration-700
    "
              // style={{
              //   backgroundImage:
              //     "url('https://images.unsplash.com/photo-1497015289639-54688650d173?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000')",
              // }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40"></div>

            <div className="relative z-10 max-w-sm">
              <div className="flex items-center gap-3 mb-3 text-[#ff4f81]">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-tight text-white">
                  Photo & Video Production
                </h2>
              </div>

              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                We create polished and professional photo-video content that
                elevates your brand presence. With expert direction, cinematic
                shooting, and next level editing, every frame is crafted to
                attract, engage, and convert.
              </p>
            </div>
          </WobbleCard>

          <WobbleCard
            containerClassName="
    col-span-1 
    min-h-[300px] 
    relative 
    overflow-hidden 
    rounded-2xl 
    bg-[#111827]
  "
          >
            <div
              className="
      absolute inset-0 
      bg-cover bg-center 
      opacity-40 
      group-hover:opacity-50 
      transition-all duration-700
    "
              // style={{
              //   backgroundImage:
              //     "url('https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?semt=ais_hybrid&w=740&q=80')",
              // }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40"></div>

            <div className="relative z-10 max-w-sm">
              <div className="flex items-center gap-3 mb-3 text-[#ff4f81]">
                <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-tight text-white">
                  Performance Marketing
                </h2>
              </div>

              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Performance marketing focuses on measurable results every
                penny spent drives real actions like clicks, leads or sales.
                With data-backed strategies and continuous optimization, it
                ensures maximum ROI and faster business growth.
              </p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="relative overflow-hidden col-span-1 lg:col-span-2 bg-[#0F172A] min-h-[500px] lg:min-h-[300px]">
            {/* <img
              src="https://webliquids.com/wp-content/uploads/2025/03/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ-1.jpg"
              alt="Web Development Visual"
              className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            /> */}

            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="max-w-sm">
                <div className="flex items-center gap-3 mb-3 text-[#00a8ff]">
                  <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-tight text-white">
                    Web Development
                  </h2>
                </div>

                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  Web development ensures your website is responsive,
                  user-friendly, fast and secure. With smart design and SEO
                  optimization, it helps your business stand out online, attract
                  more visitors, and turn them into customers. 
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Responsive Design",
                  "User-Friendly Experience (UI/UX)",
                  "High Performance & Security",
                  "SEO-Optimized Structure",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 border border-white/20 backdrop-blur-md 
                     px-4 py-2 rounded-xl text-white font-medium
                     transition duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
