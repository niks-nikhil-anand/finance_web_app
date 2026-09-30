import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ratesByBank, ratesByLoanType } from "@/data/home/interestRates";

const RateTable = ({ caption, firstColumn, rows }) => (
  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <caption className="bg-primary-700 px-5 py-4 text-left text-base font-semibold text-white">{caption}</caption>
        <thead className="bg-primary-50 text-left text-primary-900">
          <tr>
            <th scope="col" className="px-5 py-3 font-semibold">{firstColumn}</th>
            <th scope="col" className="px-5 py-3 font-semibold">Interest rate</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((r) => (
            <tr key={r.name}>
              <th scope="row" className="whitespace-nowrap px-5 py-3.5 text-left font-medium text-ink">{r.name}</th>
              <td className="whitespace-nowrap px-5 py-3.5 font-semibold text-primary-700">{r.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function InterestRates() {
  return (
    <Section id="interest-rates" labelledBy="rates-title">
      <SectionHeading id="rates-title" eyebrow="Interest rates" title="Lowest loan interest rates today" />
      <div className="grid gap-6 lg:grid-cols-2">
        <RateTable caption="Lowest rates by loan type" firstColumn="Loan type" rows={ratesByLoanType} />
        <RateTable caption="Personal loan rates by bank" firstColumn="Bank" rows={ratesByBank} />
      </div>
      <p className="mt-4 text-center text-xs text-ink-subtle">Rates are indicative and subject to change. Final rate depends on the lender and your profile.</p>
    </Section>
  );
}
