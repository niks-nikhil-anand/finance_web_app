import { principalForEmi } from "./emi";

export const RETIREMENT_AGE = { salaried: 60, selfEmployed: 65 };
export const MIN_AGE = 21;

// Fixed Obligation to Income Ratio: share of income lenders allow towards all EMIs.
export const foirFor = (employment, monthlyIncome) => {
  const base = employment === "salaried" ? 0.5 : 0.45;
  return monthlyIncome >= 75000 ? base + 0.05 : base;
};

/**
 * Estimate loan eligibility.
 * @param {object} input  { income, existingEmi, age, employment, tenureMonths }
 * @param {object} product { rate, maxTenureMonths, minIncome, minAmount, maxAmount }
 */
export const checkEligibility = (input, product) => {
  const { income, existingEmi, age, employment, tenureMonths } = input;
  const errors = [];

  if (!income || income <= 0) errors.push("Enter your net monthly income.");
  if (!age || age < MIN_AGE) errors.push(`Applicants must be at least ${MIN_AGE} years old.`);

  const retirementAge = RETIREMENT_AGE[employment] ?? 60;
  const monthsToRetirement = Math.max((retirementAge - age) * 12, 0);
  if (age >= retirementAge) errors.push(`Maximum age for ${employment === "salaried" ? "salaried" : "self-employed"} applicants is ${retirementAge}.`);

  if (errors.length) return { status: "invalid", errors };

  const tenure = Math.min(tenureMonths, product.maxTenureMonths, monthsToRetirement);
  const foir = foirFor(employment, income);
  const maxEmi = income * foir - (existingEmi || 0);

  if (income < product.minIncome || maxEmi <= 0) {
    return {
      status: "ineligible",
      maxEmi: Math.max(maxEmi, 0),
      tenure,
      foir,
      eligibleAmount: 0,
      reasons: [
        income < product.minIncome && `Minimum monthly income for this loan is ₹${product.minIncome.toLocaleString("en-IN")}.`,
        maxEmi <= 0 && "Your existing EMIs already use up the allowed share of your income.",
      ].filter(Boolean),
    };
  }

  const rawAmount = principalForEmi(maxEmi, product.rate, tenure);
  const eligibleAmount = Math.min(rawAmount, product.maxAmount);

  return {
    status: eligibleAmount >= product.minAmount ? "eligible" : "partial",
    eligibleAmount: Math.floor(eligibleAmount / 1000) * 1000,
    maxEmi,
    tenure,
    tenureCapped: tenure < tenureMonths,
    foir,
    reasons: [],
  };
};
