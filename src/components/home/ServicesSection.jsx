import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicesGrid from "./ServicesGrid";

export default function ServicesSection() {
  return (
    <Section id="services" tone="muted" labelledBy="services-title">
      <SectionHeading
        id="services-title"
        eyebrow="Our services"
        title="Everything you need, under one roof"
        description="From loans to tax filing and business registration, get expert help for every financial need."
      />
      <ServicesGrid />
    </Section>
  );
}
