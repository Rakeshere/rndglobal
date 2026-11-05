
import React from "react";
import "./Slider.css";

// Import logos
import Image1 from "@/assests/Acu-Amrit-Logo.jpg";
import Image2 from "@/assests/Address-Roof-Logo.png";
import Image3 from "@/assests/Advent-Aircon-Logo.png";
import Image4 from "@/assests/AJ-Realty.png";
import Image5 from "@/assests/Bastet-Logo.png";
import Image6 from "@/assests/CLASS-Logo.png";
import Image7 from "@/assests/CLATPREP-Logo.png";
import Image8 from "@/assests/Crudefit-Logo.png";
import Image9 from "@/assests/Dalchini-Logo.png";
import Image10 from "@/assests/dotSquare.png";
import Image11 from "@/assests/ENT-DOCTOR-LOGO.png";
import Image12 from "@/assests/Experts-Advises-Logo.png";
import Image13 from "@/assests/Force-Lifts-Final-Logo.png";
import Image14 from "@/assests/Great-Indian-Dhaba-Logo.png";
import Image15 from "@/assests/Home-Mark-Logo.png";
import Image16 from "@/assests/Jairaj-Buildon-logo.png";
import Image17 from "@/assests/keys-90.png";
import Image18 from "@/assests/Logo-Reliant.png";
import Image19 from "@/assests/Miracle-Enclave-Logo.png";
import Image20 from "@/assests/Oblong-Logo.jpg";
import Image21 from "@/assests/Opel-Home-Logo.png";
import Image22 from "@/assests/OPS-LOGO-p1.png";
import Image23 from "@/assests/Parth-sarthi-logo-2.png";
import Image24 from "@/assests/Patanjali-logo.png";
import Image25 from "@/assests/quality-king-logo-PNG.png";
import Image26 from "@/assests/RNT-Logo.png";
import Image27 from "@/assests/sankalp-logo.png";
import Image28 from "@/assests/sarathi-Logo.png";
import Image29 from "@/assests/Search-Abode-Logo.png";
import Image30 from "@/assests/SHRI-TAGORE-COLLEGE-LOGO.jpg";
import Image31 from "@/assests/Sondaryam-Logo.png";
import Image32 from "@/assests/Stone-Nest-Constructions-Logo.png";
import Image33 from "@/assests/Times-Jaipur-Logo.png";
import Image34 from "@/assests/Wood-Antique-Logo.png";
import Image35 from "@/assests/Zivontique-Logo-01.png";
import Image36 from "@/assests/Logo-Pastelli.png";
import Image37 from "@/assests/TRIMAX-LOGO.png";
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
                src={partner.src ?? partner}
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
