import EmiCalculator from "@/component/EmiCalculator/Calculator";
import AllBanks from "@/component/Homepage/AllBanks";
import Blog from "@/component/Homepage/Blog";
import ContentSection from "@/component/Homepage/ContentSection";
import Footer from "@/component/Homepage/Footer";
import Hero from "@/component/Homepage/Hero";
import InterestRate from "@/component/Homepage/InterestRate";
import { Navbar1 } from "@/component/Homepage/Navbar";
import StepComponent from "@/component/Homepage/Stepper";
import Testimonial from "@/component/Homepage/Testimonial";

export default function Home() {
  return (
    <>
    <Navbar1/>
    <Hero/>
    <ContentSection/>
    <StepComponent/>
    <AllBanks/>
   <EmiCalculator/>
    <InterestRate/>
    <Testimonial/>
    <Blog/>
    <Footer/>
    </>
  );
}
