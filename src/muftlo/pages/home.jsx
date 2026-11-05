import CallNow from "@/muftlo/Home/WhatsApp";
import Slider from "@/muftlo/Home/Slider";
import VideoSlider from "@/muftlo/Home/VideoWork";
import ProjectsShowcase from "@/muftlo/Home/Project";
import HeroSection from "@/muftlo/Home/HeroSection";
import InfiniteScroll from "@/muftlo/Home/InfiniteScroll";
import RecentBlogs from "@/muftlo/Home/BlogSection";
import Testimonials from "@/muftlo/Home/Testimonials";
import { WobbleCardDemo } from "@/muftlo/Home/ServiceCards";



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
