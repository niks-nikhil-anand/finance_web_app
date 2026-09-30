// Indicative parameters used by the eligibility checker and EMI presets.
export const loanProducts = [
  { id: "personal", label: "Personal Loan", rate: 10.55, maxTenureMonths: 84, minIncome: 15000, minAmount: 50000, maxAmount: 4000000, href: "/personalloan" },
  { id: "business", label: "Business Loan", rate: 14, maxTenureMonths: 60, minIncome: 25000, minAmount: 100000, maxAmount: 5000000, href: "/businessloan" },
  { id: "home", label: "Home Loan", rate: 8.35, maxTenureMonths: 360, minIncome: 20000, minAmount: 500000, maxAmount: 50000000, href: "/homeloan" },
  { id: "property", label: "Loan Against Property", rate: 9.35, maxTenureMonths: 180, minIncome: 25000, minAmount: 500000, maxAmount: 50000000, href: "/loanproperty" },
  { id: "gold", label: "Gold Loan", rate: 10.5, maxTenureMonths: 36, minIncome: 10000, minAmount: 10000, maxAmount: 2500000, href: "/applyloan" },
];
