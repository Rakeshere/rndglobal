
import "./HeroSection.css";
import Link from "@/muftlo/next/link";
import { Star, StarHalf } from "lucide-react";

export default function MarketingSection() {
  return (
    <section className="py-16 px-6 lg:px-12 mt-20 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div>
              <p className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-blue-600 tracking-tight leading-[1.05]">
                R&D Software Solutions
              </p>

              <p className="ml-1 -mt-2 text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 font-light tracking-wide overflow-hidden whitespace-nowrap border-r-2 border-blue-500 typing">
                Marketing Universe For The Lead Outcomes
              </p>

              <p className="text-xl sm:text-2xl ml-[7px] text-white font-medium relative leading-relaxed">
                A{" "}
                <span className="relative inline-block text-blue-400">
                  journey
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2 sm:h-3 text-blue-600"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M2 15 C 20 5, 80 25, 98 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                from a{" "}
                <span className="relative inline-block text-blue-400">
                  business
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2 sm:h-3 text-blue-600"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M2 15 C 20 5, 80 25, 98 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                to a{" "}
                <span className="relative inline-block text-blue-400">
                  brand
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2 sm:h-3 text-blue-600"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M2 15 C 20 5, 80 25, 98 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </p>
            </div>

            <div className="ml-[8px] -mt-2">
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                Trusted by India's{" "}
                <span className="text-blue-400 font-semibold">Top Brands</span>{" "}
                and still Growing.
              </p>

              <div className="flex items-center">
                <img
                  src="/googleLogo.png"
                  alt="Google"
                  className="h-8 w-auto md:h-20 -ml-2 object-contain"
                />
                <img
                  src="/metaLogo.png"
                  alt="Meta"
                  className="h-8 w-auto md:h-20 object-contain"
                />
              </div>

              <div className="flex items-center gap-2 mt-2">
                <img src="/google.png" alt="Google" className="w-6 h-6" />

                <div className="flex relative">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}

                  <div className="relative w-5 h-5">
                    <Star className="w-5 h-5 text-gray-500" />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: "80%" }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm ml-1">
                  4.9 / 5 Google Rating
                </p>
              </div>

              <Link href="/contact">
                <button
                  className="
                  relative inline-flex items-center justify-center
                  px-4 sm:px-4 py-2 sm:py-2 mt-3
                  text-white font-semibold text-base sm:text-lg
                  bg-blue-800 rounded-full cursor-pointer
                  shadow-md hover:shadow-lg hover:bg-blue-700
                  transition-all duration-300 overflow-hidden group
                "
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">Discuss Your Project</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Video Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div className="relative group rounded-lg h-48 sm:h-56 md:h-64 overflow-hidden">
                <video
                  src="https://res.cloudinary.com/dvw7dakxm/video/upload/v1764189959/bts_reel_muftloXsearch_abode_3.2_loy9ed.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>

              <div className="relative group rounded-lg h-36 sm:h-40 md:h-44 overflow-hidden">
                <video
                  src="https://res.cloudinary.com/dvw7dakxm/video/upload/v1764190172/search_abode_specific_v24.3_ipou7u.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>
            </div>

            {/* Column 2 */}
            <div className="relative group rounded-lg h-96 sm:h-[28rem] md:h-112 overflow-hidden">
              <video
                src="https://res.cloudinary.com/dvw7dakxm/video/upload/v1764190220/search_abode_specific_v26.1_f6esrk.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <div className="relative group rounded-lg h-36 sm:h-40 md:h-44 overflow-hidden">
                <video
                  src="https://res.cloudinary.com/dvw7dakxm/video/upload/v1764192394/GYM_1_reel_nazcrg.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>

              <div className="relative group rounded-lg h-48 sm:h-56 md:h-64 overflow-hidden">
                <video
                  src="https://res.cloudinary.com/dvw7dakxm/video/upload/v1764190373/Soni_Bagh_1.3_reel_zq2by1.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
