import EmiCalculator from "@/component/EmiCalculator/Calculator";
import AllBanks from "@/component/Homepage/AllBanks";
import DownloadAppSection from "@/component/Homepage/AppBanner";
import Banner from "@/component/Homepage/Banner";
import Blog from "@/component/Homepage/Blog";
import ContentSection from "@/component/Homepage/ContentSection";
import FAQSection from "@/component/Homepage/Faqs";
import { Feature } from "@/component/Homepage/Features";
import Hero from "@/component/Homepage/Hero";
import InterestRate from "@/component/Homepage/InterestRate";

import StepComponent from "@/component/Homepage/Stepper";
import Testimonial from "@/component/Homepage/Testimonial";

import Banner2 from "@/component/Shared/Banner";
import WhatsappIcon from "@/component/Shared/StickyWhatsapp";

export default function Home() {
  return (
    <>
   <WhatsappIcon/>
    <Hero/>
    <ContentSection/>
    <StepComponent/>
    <AllBanks/>
    <Banner/>
    <Feature/>
   <EmiCalculator/>
    <InterestRate/>
    <Banner2/>
    <Testimonial/>
    <Blog/>
    <DownloadAppSection/>
    <FAQSection/>

   
    </>
  );
}
