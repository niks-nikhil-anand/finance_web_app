"use client";
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import RangeField from "@/components/ui/RangeField";
import Button from "@/components/ui/Button";
import { emiSummary, yearlySchedule } from "@/lib/finance/emi";
import { clamp, formatINR, formatINRCompact } from "@/lib/finance/format";
import { loanProducts } from "@/data/home/loanProducts";
import { CHART_COLORS } from "./EmiBreakdownChart";

const EmiBreakdownChart = dynamic(() => import("./EmiBreakdownChart"), {
  ssr: false,
  loading: () => <div className="mx-auto h-[220px] w-[220px] animate-pulse rounded-full bg-primary-50" />,
});

const LIMITS = {
  amount: { min: 10000, max: 10000000, step: 10000 },
  rate: { min: 1, max: 30, step: 0.1 },
  years: { min: 1, max: 30, step: 1 },
  months: { min: 3, max: 360, step: 1 },
};

export default function EmiCalculator() {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(10.5);
  const [tenure, setTenure] = useState(5);
  const [unit, setUnit] = useState("years");
  const [preset, setPreset] = useState(null);
  const [showSchedule, setShowSchedule] = useState(false);

  const months = unit === "years" ? tenure * 12 : tenure;
  const safe = {
    amount: clamp(amount, LIMITS.amount.min, LIMITS.amount.max),
    rate: clamp(rate, LIMITS.rate.min, LIMITS.rate.max),
    months: clamp(months, LIMITS.months.min, LIMITS.months.max),
  };

  const { emi, totalInterest, totalPayable } = emiSummary(safe.amount, safe.rate, safe.months);
  const schedule = useMemo(() => yearlySchedule(safe.amount, safe.rate, safe.months), [safe.amount, safe.rate, safe.months]);

  const switchUnit = (next) => {
    if (next === unit) return;
    setTenure(next === "months" ? clamp(tenure * 12, 3, 360) : clamp(Math.round(tenure / 12), 1, 30));
    setUnit(next);
  };

  const applyPreset = (product) => {
    setPreset(product.id);
    setRate(product.rate);
  };

  const t = LIMITS[unit];

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Inputs */}
      <div className="space-y-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8 lg:col-span-3">
        <div>
          <p className="mb-3 text-sm font-medium text-ink">Loan type (sets a typical rate)</p>
          <div className="flex flex-wrap gap-2">
            {loanProducts.map((p) => (
              <button
                key={p.id}
                type="button"
                aria-pressed={preset === p.id}
                onClick={() => applyPreset(p)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  preset === p.id ? "border-primary-700 bg-primary-700 text-white" : "border-slate-300 text-ink-muted hover:border-primary-600 hover:text-primary-700"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <RangeField label="Loan amount" prefix="₹" value={amount} onChange={setAmount} {...LIMITS.amount} format={formatINRCompact} />
        <RangeField
          label="Interest rate (p.a.)"
          suffix="%"
          value={rate}
          onChange={(v) => {
            setRate(v);
            setPreset(null);
          }}
          {...LIMITS.rate}
          format={(v) => `${v}%`}
        />

        <div>
          <RangeField
            label="Loan tenure"
            suffix={unit === "years" ? "yrs" : "mo"}
            value={tenure}
            onChange={setTenure}
            min={t.min}
            max={t.max}
            step={t.step}
            format={(v) => `${v} ${unit === "years" ? "yr" : "mo"}`}
          />
          <div className="mt-3 inline-flex rounded-lg bg-primary-50 p-1" role="group" aria-label="Tenure unit">
            {["years", "months"].map((u) => (
              <button
                key={u}
                type="button"
                aria-pressed={unit === u}
                onClick={() => switchUnit(u)}
                className={`rounded-md px-3 py-1 text-xs font-semibold capitalize ${unit === u ? "bg-white text-primary-800 shadow" : "text-primary-700"}`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col rounded-2xl bg-primary-950 p-6 text-white sm:p-8 lg:col-span-2" aria-live="polite">
        <p className="text-sm text-primary-200">Your monthly EMI</p>
        <p className="mt-1 text-4xl font-bold text-accent-300 sm:text-5xl">{formatINR(emi)}</p>

        <div className="relative my-6">
          <EmiBreakdownChart principal={safe.amount} interest={totalInterest} />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-primary-200">Total payable</span>
            <span className="text-lg font-bold">{formatINRCompact(totalPayable)}</span>
          </div>
        </div>

        <dl className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-primary-100">
              <span className="h-3 w-3 rounded-full" style={{ background: CHART_COLORS.principal, boxShadow: "0 0 0 2px #fff3" }} />
              Principal amount
            </dt>
            <dd className="font-semibold">{formatINR(safe.amount)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-primary-100">
              <span className="h-3 w-3 rounded-full" style={{ background: CHART_COLORS.interest }} />
              Total interest
            </dt>
            <dd className="font-semibold">{formatINR(totalInterest)}</dd>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-3">
            <dt className="text-primary-100">Total amount payable</dt>
            <dd className="font-semibold">{formatINR(totalPayable)}</dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row lg:flex-col xl:flex-row">
          <Button href="/applyloan" variant="accent" className="flex-1">
            Apply now
          </Button>
          <Button href="#eligibility" variant="ghostLight" className="flex-1">
            Check eligibility <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Amortization */}
      <div className="lg:col-span-5">
        <button
          type="button"
          aria-expanded={showSchedule}
          aria-controls="emi-schedule"
          onClick={() => setShowSchedule((s) => !s)}
          className="text-sm font-semibold text-primary-700 underline-offset-4 hover:underline"
        >
          {showSchedule ? "Hide" : "View"} year-wise repayment schedule
        </button>
        {showSchedule && (
          <div id="emi-schedule" className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="min-w-full text-sm">
              <caption className="sr-only">Year-wise EMI repayment schedule</caption>
              <thead className="bg-primary-50 text-left text-primary-900">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Year</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Principal paid</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Interest paid</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {schedule.map((row) => (
                  <tr key={row.year}>
                    <td className="px-4 py-2.5 font-medium text-ink">{row.year}</td>
                    <td className="px-4 py-2.5 text-ink-muted">{formatINR(row.principal)}</td>
                    <td className="px-4 py-2.5 text-ink-muted">{formatINR(row.interest)}</td>
                    <td className="px-4 py-2.5 text-ink-muted">{formatINR(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
