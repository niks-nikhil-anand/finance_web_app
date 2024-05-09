import Banner from "@/component/Homepage/Banner";
import Blog from "@/component/Homepage/Blog";
import CTA from "@/component/Homepage/CTA";
import ContentSection from "@/component/Homepage/ContentSection";
import Footer from "@/component/Homepage/Footer";
import Hero from "@/component/Homepage/Hero";
import Navbar from "@/component/Homepage/Navbar";
import Testimonial from "@/component/Homepage/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    
    <CTA/>
    <ContentSection/>
    <Testimonial/>
    <Blog/>
    <Footer/>
    </>
  );
}
