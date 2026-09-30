const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export const formatINR = (value) => inr.format(Math.round(Number(value) || 0));

// Compact Indian notation: 1250000 -> "₹12.5 L", 25000000 -> "₹2.5 Cr"
export const formatINRCompact = (value) => {
  const n = Math.round(Number(value) || 0);
  if (n >= 1e7) return `₹${+(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${+(n / 1e5).toFixed(2)} L`;
  return formatINR(n);
};

export const clamp = (value, min, max) => {
  const n = Number(value);
  if (Number.isNaN(n)) return min;
  return Math.min(Math.max(n, min), max);
};
