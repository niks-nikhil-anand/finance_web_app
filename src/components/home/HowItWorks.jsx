import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { steps } from "@/data/home/steps";

export default function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-title">
      <SectionHeading id="how-title" eyebrow="How it works" title="Get your loan in 4 simple steps" />
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 0.08} className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
