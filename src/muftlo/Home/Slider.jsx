import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import "./Slider.css";

const stories = [
  { name: "Dotsquares", image: "/Dots.jpg", title: "Company profile video production", quote: "Working with R&D Software Solutions has been a fantastic experience. They handled our branding, promotions, and complete marketing with full dedication and creativity.", person: "Ashish Mantri", role: "Vice President" },
  { name: "Pastelli", image: "/Pastelli.jpg", title: "Fashion brand marketing", quote: "Thanks to R&D Software Solutions, Pastelli’s online presence and sales have grown tremendously. Their end-to-end support in marketing and web management is truly exceptional.", person: "Arohi Mehta", role: "Owner" },
  { name: "Reliant Housing", image: "/Reliant.jpg", title: "Real estate digital marketing", quote: "Working with R&D Software Solutions has transformed our marketing efforts. Their all-in-one solutions and innovative approach in real estate promotions have delivered excellent results for Reliant Housing.", person: "Rakesh Mahal", role: "Director" },
  { name: "Sondaryam", image: "/Sondaryam.jpg", title: "Podcast & multi-platform branding", quote: "We are impressed with R&D Software Solutions’s innovation and dedication. From complete 360 product visuals to engaging marketing podcasts, they handled everything flawlessly. Great team to work with!", person: "Satyendra Parnami", role: "Director" },
  { name: "Force Lifts", image: "/ForceLifts.jpg", title: "Digital branding & content production", quote: "Outstanding service by R&D Software Solutions! They handled everything from elevations to full marketing strategy, helping Force Lifts stand out in the market. Highly recommended!", person: "Neeraj Sharma", role: "Director" },
];

export default function BrandStories() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % stories.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="brand-stories" aria-labelledby="brand-stories-title" aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
      onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; setPaused(true); }}
      onTouchEnd={(event) => {
        const end = event.changedTouches[0]?.clientX;
        if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 35) {
          setActive((value) => (value + (end < touchStart.current ? 1 : -1) + stories.length) % stories.length);
        }
        touchStart.current = null;
        setPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          setActive((value) => (value + (event.key === "ArrowRight" ? 1 : -1) + stories.length) % stories.length);
        }
      }}>
      <h2 id="brand-stories-title" className="text-4xl md:text-5xl font-bold">Trusted by<br /><span>Top Brands</span></h2>
      <div className="brand-stories-stage">
        {stories.map((story, index) => {
          const offset = (index - active + stories.length + 2) % stories.length - 2;
          const selected = offset === 0;
          return (
            <article key={story.name} className="brand-story" data-slot={offset} aria-hidden={!selected}>
              <div className="brand-story-copy">
                <h3>{story.title}</h3>
                <div>
                  <blockquote>“{story.quote}”</blockquote>
                  <p className="brand-story-author">{story.person}<span>{story.role}</span></p>
                </div>
              </div>
              <div className="brand-story-image">
                <img src={story.image} alt={story.name} draggable="false" />
                <strong>{story.name}</strong>
              </div>
              {!selected && <Button variant="ghost" className="brand-story-select" tabIndex={-1} aria-label={`Show ${story.name}`} onClick={() => setActive(index)} />}
            </article>
          );
        })}
      </div>
      <div className="brand-story-dots" role="group" aria-label="Choose a brand">
        {stories.map((story, index) => <Button key={story.name} variant="ghost" size="icon" className="brand-story-dot" aria-label={`Show ${story.name}`} aria-pressed={index === active} onClick={() => setActive(index)}><span /></Button>)}
      </div>
    </section>
  );
}