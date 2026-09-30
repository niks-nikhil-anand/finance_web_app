"use client";
import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import RangeField from "@/components/ui/RangeField";
import Button from "@/components/ui/Button";
import { checkEligibility } from "@/lib/finance/eligibility";
import { formatINR, formatINRCompact } from "@/lib/finance/format";
import { loanProducts } from "@/data/home/loanProducts";

const EMPLOYMENT = [
  { id: "salaried", label: "Salaried" },
  { id: "selfEmployed", label: "Self-employed" },
];

const STATUS = {
  eligible: { label: "You're likely eligible", tone: "bg-emerald-50 text-emerald-700 ring-emerald-200", Icon: CheckCircle2 },
  partial: { label: "Eligible for a smaller amount", tone: "bg-accent-50 text-accent-700 ring-accent-200", Icon: Info },
  ineligible: { label: "Not eligible right now", tone: "bg-red-50 text-red-700 ring-red-200", Icon: AlertCircle },
  invalid: { label: "Check your details", tone: "bg-red-50 text-red-700 ring-red-200", Icon: AlertCircle },
};

const formatTenure = (months) => (months % 12 === 0 ? `${months / 12} years` : `${months} months`);

export default function EligibilityChecker() {
  const [productId, setProductId] = useState("personal");
  const [employment, setEmployment] = useState("salaried");
  const [income, setIncome] = useState(50000);
  const [existingEmi, setExistingEmi] = useState(5000);
  const [age, setAge] = useState(30);
  const [tenureYears, setTenureYears] = useState(5);

  const product = loanProducts.find((p) => p.id === productId);
  const maxYears = product.maxTenureMonths / 12;

  const result = useMemo(
    () =>
      checkEligibility(
        { income: Number(income), existingEmi: Number(existingEmi), age: Number(age), employment, tenureMonths: Math.min(tenureYears, maxYears) * 12 },
        product
      ),
    [income, existingEmi, age, employment, tenureYears, maxYears, product]
  );

  const status = STATUS[result.status];

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <form className="space-y-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8 lg:col-span-3" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="elig-product" className="mb-2 block text-sm font-medium text-ink">
              Loan type
            </label>
            <select
              id="elig-product"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-ink focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
            >
              {loanProducts.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
          <fieldset>
            <legend className="mb-2 block text-sm font-medium text-ink">Employment type</legend>
            <div className="grid grid-cols-2 gap-2">
              {EMPLOYMENT.map((opt) => (
                <label
                  key={opt.id}
                  className={`cursor-pointer rounded-lg border px-3 py-2.5 text-center text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary-300 ${
                    employment === opt.id ? "border-primary-700 bg-primary-700 text-white" : "border-slate-300 text-ink-muted hover:border-primary-600"
                  }`}
                >
                  <input type="radio" name="employment" value={opt.id} checked={employment === opt.id} onChange={() => setEmployment(opt.id)} className="sr-only" />
                  {opt.label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <RangeField label="Net monthly income" prefix="₹" value={income} onChange={setIncome} min={5000} max={1000000} step={1000} format={formatINRCompact} />
        <RangeField label="Existing monthly EMIs" prefix="₹" value={existingEmi} onChange={setExistingEmi} min={0} max={500000} step={500} format={formatINRCompact} />
        <div className="grid gap-7 sm:grid-cols-2">
          <RangeField label="Your age" suffix="yrs" value={age} onChange={setAge} min={18} max={70} step={1} />
          <RangeField label="Preferred tenure" suffix="yrs" value={Math.min(tenureYears, maxYears)} onChange={setTenureYears} min={1} max={maxYears} step={1} />
        </div>
      </form>

      <div className="flex flex-col rounded-2xl border border-primary-100 bg-primary-50 p-6 sm:p-8 lg:col-span-2" aria-live="polite">
        <span className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${status.tone}`}>
          <status.Icon aria-hidden className="h-4 w-4" />
          {status.label}
        </span>

        {result.status === "invalid" ? (
          <ul className="mt-5 list-disc space-y-1 pl-5 text-sm text-red-700">
            {result.errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        ) : (
          <>
            <p className="mt-5 text-sm text-ink-muted">Estimated {product.label.toLowerCase()} eligibility</p>
            <p className="mt-1 text-4xl font-bold text-primary-800 sm:text-5xl">{formatINRCompact(result.eligibleAmount)}</p>

            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink-muted">Max affordable EMI</dt>
                <dd className="font-semibold text-ink">{formatINR(result.maxEmi)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-muted">Tenure considered</dt>
                <dd className="font-semibold text-ink">{formatTenure(result.tenure)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-muted">Indicative interest rate</dt>
                <dd className="font-semibold text-ink">{product.rate}% p.a.</dd>
              </div>
            </dl>

            {(result.reasons.length > 0 || result.tenureCapped || result.status === "partial") && (
              <ul className="mt-5 space-y-1.5 rounded-lg bg-white p-4 text-xs text-ink-muted">
                {result.reasons.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
                {result.tenureCapped && <li>• Tenure was limited by the loan&apos;s maximum term or your retirement age.</li>}
                {result.status === "partial" && <li>• Amount is below this loan&apos;s usual minimum of {formatINRCompact(product.minAmount)}. A co-applicant can help.</li>}
                {result.status === "ineligible" && <li>• Try closing existing loans or adding a co-applicant&apos;s income.</li>}
              </ul>
            )}
          </>
        )}

        <div className="mt-auto pt-6">
          <Button href="/applyloan" variant="accent" size="lg" className="w-full">
            {result.status === "eligible" ? `Apply for ${formatINRCompact(result.eligibleAmount)}` : "Talk to a loan advisor"}
          </Button>
          <p className="mt-3 text-xs text-ink-subtle">
            This is an indicative estimate based on common lending norms, not a loan offer. Final eligibility depends on the lender, credit score and documents.
          </p>
        </div>
      </div>
    </div>
  );
}
