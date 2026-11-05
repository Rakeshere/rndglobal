
import { useEffect, useRef, useState } from "react";
import "@/muftlo/Home/HeroSection.css";
import {
  Lightbulb,
  Users,
  TrendingUp,
  Shield,
  DollarSign,
  Award,
} from "lucide-react";
import "@/muftlo/About/about.css";
import WorkflowSection from "@/muftlo/About/aboutPipeline";
import LampDemo from "@/muftlo/ui/lamp";

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});
  const [mousePosition, setMousePosition] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const setSectionRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const isVisible = (id) => visibleSections.has(id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(
      ".fade-section, .fade-section1, .fade-section2"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <LampDemo />

      <section
        id="about"
        ref={setSectionRef("about")}
        className="relative overflow-hidden py-10 md:py-24 px-4"
      >
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible("about")
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-20 opacity-0 scale-95"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3 md:mb-6 leading-tight">
              <span className="text-blue-600">About</span>{" "}
              <span className="text-white">Us</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              <span className="font-extrabold text-blue-600 text-xl">
                R&D Software Solutions
              </span>{" "}
              started with a passion for creativity and a vision to transform
              digital storytelling. What began as an idea soon turned into a
              mission—helping businesses engage meaningfully, build identity,
              and grow through powerful digital strategies.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              At R&D Software Solutions, we combine innovation, strategic thinking, and
              data-driven insights with bold creativity. We believe marketing
              should be effortless, smart, and genuinely transformative.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {[
                  "Passionate about client success",
                  "Building brand relationships",
                  "Driven by creativity",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="min-w-2 min-h-2 mt-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-300 text-sm">{point}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  "Crafting digital experiences",
                  "Delivering excellence",
                  "Turning ideas into impact",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="min-w-2 min-h-2 mt-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-300 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 transform ${
              isVisible("about")
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-20 opacity-0 scale-95"
            }`}
          >
            <img
              src="/muftloBlog.jpg"
              alt="About R&D Software Solutions"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="why-choose"
        ref={setSectionRef("why-choose")}
        className="py-10 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-4 transition-all duration-1000 transform ${
              isVisible("why-choose")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 md:mb-1">
              Why choose <span className="relative text-blue-700">R&D Software Solutions?</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Experience innovative, excellent results-driven marketing with
              R&D Software Solutions.
            </p>
          </div>
        </div>
        <WorkflowSection />
      </section>

      <section
        id="strengths"
        ref={setSectionRef("strengths")}
        className="py-20 px-4 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-10 transition-all duration-1000 transform ${
              isVisible("strengths")
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-10 opacity-0 scale-95"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-1">
              Our <span className="text-blue-500">Strengths</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-snug">
              At <span className="text-blue-400 font-semibold">R&D Software Solutions</span>, we
              stand out with a proactive approach and results-driven digital
              marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-full">
            {[
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Pragmatic Strategies",
                description:
                  "We focus on practical, actionable strategies aligned with your real business needs.",
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Industry Expertise",
                description:
                  "Backed by years of experience, we adapt fast to trends and keep your brand ahead.",
              },
              {
                icon: <Lightbulb className="h-6 w-6" />,
                title: "Strategic Insight",
                description:
                  "Data-backed insights that empower smart, confident business decisions.",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Transparent Communication",
                description:
                  "We believe in clarity, honesty, and communication you can rely on.",
              },
              {
                icon: <DollarSign className="h-6 w-6" />,
                title: "Reasonable Prices",
                description:
                  "Premium-quality services at fair and accessible pricing.",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Quality of Service",
                description:
                  "Every project is executed with precision, creativity, and dedication.",
              },
            ].map((strength, index) => (
              <div
                key={index}
                className={`relative group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl py-8 px-6 
      shadow-lg transition-all duration-500 
      hover:-translate-y-3 hover:scale-[1.02] 
      hover:bg-white/10 hover:border-blue-400/40 
      ${
        isVisible("strengths")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl border border-blue-400 text-blue-400 mb-6 
      group-hover:bg-blue-400 group-hover:text-black transition-all duration-500"
                >
                  {strength.icon}
                </div>

                <h4
                  className="text-lg md:text-xl font-semibold text-white mb-3 
      transition-colors duration-500 group-hover:text-blue-400"
                >
                  {strength.title}
                </h4>

                <p
                  className="text-gray-300 text-sm md:text-base leading-relaxed 
      transition-colors duration-500 group-hover:text-gray-100"
                >
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
