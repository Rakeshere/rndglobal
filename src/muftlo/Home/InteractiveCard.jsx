

import React, { useRef, useState } from "react";
import Link from "@/muftlo/next/link";

const InteractiveCard = ({
  title,
  description,
  icon,
  href = "#",
  className = "",
}) => {
  const innerRef = useRef(null);
  const [transform, setTransform] = useState("");

  // Common accent color for all cards
  const accentColor = "#00bcd4"; // cyan-blue

  function handleMouseMove(e) {
    const el = innerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 12;
    setTransform(
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    );
  }

  function handleMouseLeave() {
    setTransform("");
  }

  return (
    <Link
      href={href}
      aria-label={`Read more about ${title}`}
      className="group block rounded-2xl outline-none focus-visible:ring-2"
      style={{ ["--accent"]: accentColor }}
    >
      <div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform, willChange: "transform" }}
        className={`relative h-full rounded-2xl p-[2px] transition-all duration-500 ease-out hover:scale-[1.02] ${className}`}
      >
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[#0097a7] p-[2px]" />

        {/* Background image + overlay */}
        <div
          className="relative h-full rounded-2xl text-white flex flex-col p-8 transition-all duration-500 overflow-hidden hover:shadow-[0_0_25px_var(--accent)]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1761839257874-e56dfa2260cb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/85 rounded-2xl" />

          {/* Content */}
          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg 
                bg-[#111111]/70 text-[var(--accent)] 
                ring-1 ring-[var(--accent)] 
                transition-all duration-300 
                group-hover:bg-[var(--accent)] group-hover:text-white"
              >
                {icon}
              </div>
              <h3 className="text-lg font-semibold leading-6 text-white">
                {title}
              </h3>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-gray-200">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InteractiveCard;
