import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/data/home/faqs";

export default function FaqSection() {
  return (
    <Section id="faq" tone="muted" labelledBy="faq-title" containerClassName="max-w-3xl">
      <SectionHeading id="faq-title" eyebrow="FAQ" title="Frequently asked questions" />
      <Accordion items={faqs} />
    </Section>
  );
}
