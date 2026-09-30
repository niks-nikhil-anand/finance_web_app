import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import EligibilityChecker from "@/components/tools/EligibilityChecker";

export default function EligibilitySection() {
  return (
    <Section id="eligibility" labelledBy="eligibility-title">
      <SectionHeading
        id="eligibility-title"
        eyebrow="Loan eligibility checker"
        title="How much loan can you get?"
        description="Enter a few details to get an instant estimate. It's free and doesn't affect your credit score."
      />
      <EligibilityChecker />
    </Section>
  );
}
