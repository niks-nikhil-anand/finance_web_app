import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroCarousel from "./HeroCarousel";
import gst from "../../../public/heroSection/GST.jpg";
import businessLoan from "../../../public/heroSection/businessLoan.jpg";
import goldLoan from "../../../public/heroSection/goldLoan.jpg";
import personalLoan from "../../../public/heroSection/personalLoan.jpg";

const slides = [
  { src: businessLoan, alt: "Business loan for growing your enterprise" },
  { src: personalLoan, alt: "Personal loan with quick approval" },
  { src: goldLoan, alt: "Gold loan at low interest rates" },
  { src: gst, alt: "GST registration and return filing" },
];

const highlights = ["60+ banks & NBFCs", "Disbursal in 7 days", "Free eligibility check"];

const stats = [
  { value: "60+", label: "Lending partners" },
  { value: "8.35%", label: "Rates starting from" },
  { value: "7 days", label: "Typical disbursal" },
];

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="mb-4 inline-block rounded-full bg-accent-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
            Loans · GST · ITR
          </p>
          <h1 id="hero-title" className="text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            Compare &amp; apply for <span className="text-primary-700">business, personal, home &amp; gold loans</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted lg:mx-0">
            Get the best loan offer from India&apos;s leading banks and NBFCs, check your eligibility in seconds, and let our experts handle your GST and ITR filing.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink lg:justify-start">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-1.5">
                <CheckCircle2 aria-hidden className="h-4 w-4 text-primary-700" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button href="/applyloan" size="lg">
              Apply now
            </Button>
            <Button href="#eligibility" variant="outline" size="lg">
              Check eligibility
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-primary-100 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="text-xs text-ink-muted sm:text-sm">{s.label}</dt>
                <dd className="order-first text-2xl font-bold text-primary-800 sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroCarousel slides={slides} />
      </div>
    </section>
  );
}
