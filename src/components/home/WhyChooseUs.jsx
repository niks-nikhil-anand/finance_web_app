import Image from "next/image";
import { BadgePercent, Building2, CheckCircle2, FileCheck2, Headphones, ShieldCheck, Zap } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { features, loanTypes } from "@/data/home/features";
import banner from "../../../public/banner.png";

const ICONS = { BadgePercent, Building2, FileCheck2, Headphones, ShieldCheck, Zap };

export default function WhyChooseUs() {
  return (
    <Section id="why-us" tone="muted" labelledBy="why-title">
      <SectionHeading
        id="why-title"
        eyebrow="Why Legal257"
        title="Transparent and efficient financial solutions"
        description="A one-stop partner for loans, tax filing and business compliance."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => {
          const Icon = ICONS[icon];
          return (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <Icon aria-hidden className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-14 grid items-center gap-10 rounded-3xl bg-white p-6 shadow-card sm:p-10 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-ink">Loans for every need</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {loanTypes.map((loan) => (
              <li key={loan} className="flex items-center gap-2 text-sm font-medium text-ink">
                <CheckCircle2 aria-hidden className="h-4 w-4 shrink-0 text-primary-700" />
                {loan}
              </li>
            ))}
          </ul>
          <Button href="/applyloan" className="mt-8">
            Apply for a loan
          </Button>
        </div>
        <Image src={banner} alt="Customer comparing the best loan offers" sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full rounded-2xl" placeholder="blur" />
      </div>
    </Section>
  );
}
