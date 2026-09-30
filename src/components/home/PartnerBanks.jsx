"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useReducedMotion } from "framer-motion";
import { banks } from "@/data/home/banks";

const Logo = ({ bank }) => (
  <div className="mx-2 flex h-14 min-w-[9rem] items-center justify-center rounded-xl border border-slate-200 bg-white px-5">
    {bank.logo ? (
      <Image src={bank.logo} alt={`${bank.name} logo`} height={40} sizes="120px" className="h-9 w-auto object-contain" />
    ) : (
      <span className="whitespace-nowrap text-sm font-semibold text-primary-900">{bank.name}</span>
    )}
  </div>
);

export default function PartnerBanks() {
  const reduce = useReducedMotion();
  const half = Math.ceil(banks.length / 2);

  return (
    <section aria-labelledby="partners-title" className="border-y border-slate-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="partners-title" className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-ink-muted">
          Trusted channel partner of <span className="text-primary-700">60+ BANKS &amp; <span className="normal-case">NBFCs</span></span>
        </h2>
      </div>
      <div className="space-y-4">
        <Marquee speed={35} gradient gradientWidth={60} pauseOnHover play={!reduce}>
          {banks.slice(0, half).map((b) => (
            <Logo key={b.name} bank={b} />
          ))}
        </Marquee>
        <Marquee speed={35} direction="right" gradient gradientWidth={60} pauseOnHover play={!reduce}>
          {banks.slice(half).map((b) => (
            <Logo key={b.name} bank={b} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
