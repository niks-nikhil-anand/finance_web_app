import HeroSection from "@/components/home/HeroSection";
import PartnerBanks from "@/components/home/PartnerBanks";
import ServicesSection from "@/components/home/ServicesSection";
import EligibilitySection from "@/components/home/EligibilitySection";
import EmiCalculatorSection from "@/components/home/EmiCalculatorSection";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import InterestRates from "@/components/home/InterestRates";
import TaxFilingBanner from "@/components/home/TaxFilingBanner";
import Testimonials from "@/components/home/Testimonials";
import ReferEarn from "@/components/home/ReferEarn";
import FaqSection from "@/components/home/FaqSection";
import AppDownload from "@/components/home/AppDownload";
import JsonLd from "@/components/seo/JsonLd";
import WhatsappIcon from "@/component/Shared/StickyWhatsapp";
import { faqs } from "@/data/home/faqs";
import { faqSchema, organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { site } from "@/lib/seo/site";

export const metadata = {
  title: { absolute: "Business, Personal & Home Loans, GST & ITR Filing | Legal257" },
  description:
    "Compare loans from 60+ banks & NBFCs, check eligibility and calculate EMI instantly. Expert GST & ITR filing and business registration with Legal257.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Legal257 – Loans, EMI Calculator, GST & ITR Filing",
    description: site.description,
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main id="main">
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema(faqs)]} />
      <HeroSection />
      <PartnerBanks />
      <ServicesSection />
      <EligibilitySection />
      <EmiCalculatorSection />
      <HowItWorks />
      <WhyChooseUs />
      <InterestRates />
      <TaxFilingBanner />
      <Testimonials />
      <ReferEarn />
      <FaqSection />
      <AppDownload />
      <WhatsappIcon />
    </main>
  );
}
