"use client";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: "1",
    videoUrl:
      "https://res.cloudinary.com/dvw7dakxm/video/upload/v1764189959/bts_reel_muftloXsearch_abode_3.2_loy9ed.mp4",
  },
  {
    id: "2",
    videoUrl:
      "https://res.cloudinary.com/dvw7dakxm/video/upload/v1764190172/search_abode_specific_v24.3_ipou7u.mp4",
  },
  {
    id: "3",
    videoUrl:
      "https://res.cloudinary.com/dvw7dakxm/video/upload/v1764190220/search_abode_specific_v26.1_f6esrk.mp4",
  },
  {
    id: "4",
    videoUrl:
      "https://res.cloudinary.com/dvw7dakxm/video/upload/v1764192394/GYM_1_reel_nazcrg.mp4",
  },
  {
    id: "5",
    videoUrl:
      "https://res.cloudinary.com/dvw7dakxm/video/upload/v1764190373/Soni_Bagh_1.3_reel_zq2by1.mp4",
  },
  {
    id: "6",
    videoUrl:
      "https://res.cloudinary.com/dvw7dakxm/video/upload/v1764190326/search_abode_v34.4_guihwo.mp4",
  },
  {
    id: "7",
    videoUrl:
      "https://res.cloudinary.com/dvw7dakxm/video/upload/v1764189431/Unconfirmed_549138_lgnh6p.mp4",
  },
  {
    id: "8",
    videoUrl:
      "https://res.cloudinary.com/dvw7dakxm/video/upload/v1764192323/search_abode_v40.3_qskaia.mp4",
  },
  {
    id: "9",
    videoUrl:
      "https://res.cloudinary.com/dvw7dakxm/video/upload/v1764190156/Muftlo_1.2_reel_bthgd4.mp4",
  },
];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const cardWidth = 320; // w-80
      const gap = 16; // gap-4
      const scrollPosition = index * (cardWidth + gap);
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : videos.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < videos.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <div className="relative w-full mb-10 mt-20">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto pb-4 scroll-snap-x scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex-shrink-0 w-80 h-[500px] rounded-xl overflow-hidden shadow-lg scroll-snap-start relative"
          >
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={video.videoUrl}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>
    </div>
  );
}

