import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import EmiCalculator from "@/components/tools/EmiCalculator";

export default function EmiCalculatorSection() {
  return (
    <Section id="emi-calculator" tone="tint" labelledBy="emi-title">
      <SectionHeading
        id="emi-title"
        eyebrow="EMI calculator"
        title="Plan your monthly EMI"
        description="Adjust the loan amount, interest rate and tenure to see your EMI, total interest and repayment schedule."
      />
      <EmiCalculator />
    </Section>
  );
}
