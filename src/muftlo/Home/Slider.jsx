
import React from "react";
import "./Slider.css";

// Import logos
import Image1 from "@/assests/Acu Amrit Logo[1].jpg";
import Image2 from "@/assests/Address Roof Logo[1].png";
import Image3 from "@/assests/Advent Aircon Logo[1].png";
import Image4 from "@/assests/AJ Realty[1].png";
import Image5 from "@/assests/Bastet Logo[1].png";
import Image6 from "@/assests/CLASS Logo[1].png";
import Image7 from "@/assests/CLATPREP Logo[1].png";
import Image8 from "@/assests/Crudefit Logo[1].png";
import Image9 from "@/assests/Dalchini Logo[1].png";
import Image10 from "@/assests/dotSquare.png";
import Image11 from "@/assests/ENT DOCTOR LOGO[1].png";
import Image12 from "@/assests/Experts Advises Logo[1].png";
import Image13 from "@/assests/Force Lifts Final Logo[1].png";
import Image14 from "@/assests/Great Indian Dhaba Logo[1].png";
import Image15 from "@/assests/Home Mark Logo[1].png";
import Image16 from "@/assests/Jairaj Buildon logo[1].png";
import Image17 from "@/assests/keys 90[1].png";
import Image18 from "@/assests/Logo Reliant[1].png";
import Image19 from "@/assests/Miracle Enclave Logo[1].png";
import Image20 from "@/assests/Oblong Logo[1].jpg";
import Image21 from "@/assests/Opel Home Logo[1].png";
import Image22 from "@/assests/OPS LOGO p1[1].png";
import Image23 from "@/assests/Parth sarthi logo(2)[1].png";
import Image24 from "@/assests/Patanjali logo[1].png";
import Image25 from "@/assests/quality king logo PNG[1].png";
import Image26 from "@/assests/RNT Logo[1].png";
import Image27 from "@/assests/sankalp-logo[1].png";
import Image28 from "@/assests/sarathi Logo[1].png";
import Image29 from "@/assests/Search Abode Logo[1].png";
import Image30 from "@/assests/SHRI TAGORE COLLEGE   LOGO[1].jpg";
import Image31 from "@/assests/Sondaryam Logo[1].png";
import Image32 from "@/assests/Stone Nest Constructions Logo[1].png";
import Image33 from "@/assests/Times Jaipur Logo[1].png";
import Image34 from "@/assests/Wood Antique Logo[1].png";
import Image35 from "@/assests/Zivontique Logo-01[1].png";
import Image36 from "@/assests/Logo Pastelli[1].png";
import Image37 from "@/assests/TRIMAX LOGO[1].png";
import Image38 from "@/assests/SiddhiHomes.png";
import Image39 from "@/assests/gkb.png"

const allPartners = [
  Image10,
  Image29,
  Image24,
  Image18,
  Image17,
  Image36,
  Image21,
  Image33,
  Image27,
  Image19,
  Image23,
  Image26,
  Image37,
  Image31,
  Image39,
  Image11,
  Image13,
  Image8,
  Image3,
  Image38,
];

const MuftloGrid = () => {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div
        className="
          relative w-full max-w-7xl
          rounded-3xl 
          bg-gradient-to-b from-[#9d9fa1] via-[#c5c5ca] to-[#aaaaad]
          shadow-[0_0_50px_rgba(255,255,255,0.03)]
          p-8 sm:p-10
        "
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-10">
          Trusted by <span className="text-blue-900">Top Brands</span>
        </h2>

        <div
          className="
            grid 
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5
            gap-6 sm:gap-8
            items-center justify-center
          "
        >
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="
                flex justify-center items-center
                bg-white/90
                p-4 sm:p-6 rounded-xl
                transition-all duration-500 ease-in-out
                hover:scale-105 hover:shadow-lg hover:shadow-white/10
              "
            >
              <img
                src={partner.src}
                alt={`Partner ${index + 1}`}
                className="
                  h-16 sm:h-20 md:h-24 
                  object-contain 
                  opacity-90 hover:opacity-100
                  transition duration-500
                "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MuftloGrid;
