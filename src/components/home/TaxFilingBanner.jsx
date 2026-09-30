import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const taxServices = ["GST registration", "GST return filing", "ITR filing", "MSME / Udyam registration", "Food & trade licence", "Legal notice support"];

export default function TaxFilingBanner() {
  return (
    <section aria-labelledby="tax-title" className="bg-primary-950">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">GST &amp; ITR filing</p>
          <h2 id="tax-title" className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            File your GST and ITR on time, without the stress
          </h2>
          <p className="mt-4 text-primary-100">
            Our tax experts handle registration, return filing and compliance so you can focus on growing your business.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/applynow" size="lg">
              File GST / ITR now
            </Button>
            <Button href="/contact" variant="ghostLight" size="lg">
              Talk to an expert
            </Button>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {taxServices.map((s) => (
            <li key={s} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-medium text-white">
              <CheckCircle2 aria-hidden className="h-5 w-5 shrink-0 text-accent-300" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
