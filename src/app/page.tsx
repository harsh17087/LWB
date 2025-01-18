import Contact from "@/components/Contact";
import Introduction from "@/components/Introduction";
import TeachingMethodology from "@/components/TeachingMethodology";
import Testimonial from "@/components/Testimonial";
import VideoLibrary from "@/components/VideoLibrary";

export default function Home() {
  return (
    <>
      <Introduction />
      <TeachingMethodology/>
      <Testimonial />
      <VideoLibrary/>
      <Contact/>
    </>
  );
}
