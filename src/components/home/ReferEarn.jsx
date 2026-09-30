import { Gift } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ReferEarn() {
  return (
    <section aria-labelledby="refer-title" className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-accent-400 px-6 py-10 text-center sm:px-12 md:flex-row md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/60 text-primary-900">
              <Gift aria-hidden className="h-7 w-7" />
            </span>
            <div>
              <h2 id="refer-title" className="text-2xl font-bold text-primary-950 sm:text-3xl">
                Refer a loan &amp; earn ₹1,000 to ₹9,000
              </h2>
              <p className="mt-1 text-primary-900">Know someone who needs a loan? Refer them and earn on every successful disbursal.</p>
            </div>
          </div>
          <Button href="/refer" variant="primary" size="lg" className="shrink-0">
            Refer now
          </Button>
        </div>
      </div>
    </section>
  );
}
