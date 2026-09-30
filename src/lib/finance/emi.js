// All tenure values are in months; annualRate is a percentage (e.g. 10.5).

const monthlyRate = (annualRate) => annualRate / 12 / 100;

export const calculateEmi = (principal, annualRate, months) => {
  if (principal <= 0 || months <= 0) return 0;
  const r = monthlyRate(annualRate);
  if (r === 0) return principal / months;
  const factor = Math.pow(1 + r, months);
  return (principal * r * factor) / (factor - 1);
};

// Inverse of calculateEmi: the principal a given EMI can service.
export const principalForEmi = (emi, annualRate, months) => {
  if (emi <= 0 || months <= 0) return 0;
  const r = monthlyRate(annualRate);
  if (r === 0) return emi * months;
  return (emi * (1 - Math.pow(1 + r, -months))) / r;
};

export const emiSummary = (principal, annualRate, months) => {
  const emi = calculateEmi(principal, annualRate, months);
  const totalPayable = emi * months;
  return { emi, totalPayable, totalInterest: totalPayable - principal };
};

// Year-by-year amortization: principal/interest paid in that year and closing balance.
export const yearlySchedule = (principal, annualRate, months) => {
  const emi = calculateEmi(principal, annualRate, months);
  const r = monthlyRate(annualRate);
  const rows = [];
  let balance = principal;

  for (let m = 1; m <= months; m++) {
    const interest = balance * r;
    const principalPaid = Math.min(emi - interest, balance);
    balance = Math.max(balance - principalPaid, 0);

    const yearIndex = Math.ceil(m / 12) - 1;
    if (!rows[yearIndex]) rows[yearIndex] = { year: yearIndex + 1, principal: 0, interest: 0, balance: 0 };
    rows[yearIndex].principal += principalPaid;
    rows[yearIndex].interest += interest;
    rows[yearIndex].balance = balance;
  }
  return rows;
};
