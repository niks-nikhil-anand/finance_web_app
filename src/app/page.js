import Blog from "@/component/Homepage/Blog";
import CTA from "@/component/Homepage/CTA";
import ContentSection from "@/component/Homepage/ContentSection";
import Footer from "@/component/Homepage/Footer";
import Hero from "@/component/Homepage/Hero";
import { Navbar1 } from "@/component/Homepage/Navbar";
import Testimonial from "@/component/Homepage/Testimonial";

export default function Home() {
  return (
    <>
    <Navbar1/>
    <Hero/>
    
    <CTA/>
    <ContentSection/>
    <Testimonial/>
    <Blog/>
    <Footer/>
    </>
  );
}
