import CallNow from "@/components/Home/WhatsApp";
import Slider from "@/components/Home/Slider";
import VideoSlider from "@/components/Home/VideoWork";
import ProjectsShowcase from "@/components/Home/Project";
import HeroSection from "@/components/Home/HeroSection";
import InfiniteScroll from "@/components/Home/InfiniteScroll";
import RecentBlogs from "@/components/Home/BlogSection";
import Testimonials from "@/components/Home/Testimonials";
import { WobbleCardDemo } from "@/components/Home/ServiceCards";

export const metadata = {
  title: "Marketing Universe For The Lead Outcomes",
  description:
    "Muftlo is a Jaipur-based creative studio built by people who love ideas, design and storytelling. We help brands express themselves with clarity, honesty and simple digital experiences.",
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <Slider />
      <WobbleCardDemo />
      <ProjectsShowcase />
      <InfiniteScroll />
      <Testimonials />
      <RecentBlogs />
      <VideoSlider />
    </>
  );
}
