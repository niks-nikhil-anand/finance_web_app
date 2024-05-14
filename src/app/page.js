import EmiCalculator from "@/component/EmiCalculator/Calculator";
import AllBanks from "@/component/Homepage/AllBanks";
import DownloadAppSection from "@/component/Homepage/AppBanner";
import Blog from "@/component/Homepage/Blog";
import ContentSection from "@/component/Homepage/ContentSection";
import FAQSection from "@/component/Homepage/Faqs";
import Footer from "@/component/Homepage/Footer";
import Hero from "@/component/Homepage/Hero";
import InterestRate from "@/component/Homepage/InterestRate";
import Navbar from "@/component/Homepage/Navbar";
import StepComponent from "@/component/Homepage/Stepper";
import Testimonial from "@/component/Homepage/Testimonial";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ContentSection/>
    <StepComponent/>
    <AllBanks/>
   <EmiCalculator/>
    <InterestRate/>
    <Testimonial/>
    <Blog/>
    <DownloadAppSection/>
    <FAQSection/>

    <Footer/>
    </>
  );
}
