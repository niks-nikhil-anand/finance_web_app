import businessLoan from "../../../public/services/businessloan.jpg";
import personalLoan from "../../../public/services/personalloan.jpg";
import homeLoan from "../../../public/services/homeloan.jpg";
import lap from "../../../public/services/loanagainstproperty.png";
import gold from "../../../public/services/gold.jpg";
import education from "../../../public/services/education.png";
import microfinance from "../../../public/services/microfinance.jpg";
import dailyLoan from "../../../public/services/dailyloan.png";
import mobileLoan from "../../../public/services/mobileloan.jpg";
import upi from "../../../public/services/upi.jpg";
import bbps from "../../../public/services/bbpay.png";
import aadhar from "../../../public/services/Aadhar.jpg";
import moneyTransfer from "../../../public/services/moneytransfer.jpg";
import cashMgt from "../../../public/services/CASH-MGT.jpg";
import itr from "../../../public/services/ITR.jpg";
import gst from "../../../public/services/GST.jpg";
import business from "../../../public/services/business.jpg";
import msme from "../../../public/services/msme.jpg";
import legal from "../../../public/services/legal.jpg";
import noc from "../../../public/services/noc.jpeg";
import licence from "../../../public/services/licence.png";
import food from "../../../public/services/food.jpg";
import trade from "../../../public/services/trade.jpg";

export const serviceCategories = [
  { id: "loans", label: "Loans" },
  { id: "tax", label: "GST, ITR & Registration" },
  { id: "fintech", label: "Fintech Banking" },
];

export const services = [
  { category: "loans", title: "Business Loan", image: businessLoan, href: "/businessloan", cta: "Apply now" },
  { category: "loans", title: "Personal Loan", image: personalLoan, href: "/personalloan", cta: "Apply now" },
  { category: "loans", title: "Home Loan", image: homeLoan, href: "/homeloan", cta: "Apply now" },
  { category: "loans", title: "Loan Against Property", image: lap, href: "/loanproperty", cta: "Apply now" },
  { category: "loans", title: "Gold Loan", image: gold, href: "/applyloan", cta: "Apply now" },
  { category: "loans", title: "Education Loan", image: education, href: "/applyloan", cta: "Apply now" },
  { category: "loans", title: "Microfinance Group Loan", image: microfinance, href: "/microloan", cta: "Apply now" },
  { category: "loans", title: "Daily Collection Loan", image: dailyLoan, href: "/applyloan", cta: "Apply now" },
  { category: "loans", title: "Mobile App Micro Loan", image: mobileLoan, href: "/microloan", cta: "Apply now" },

  { category: "tax", title: "ITR Filing", image: itr, href: "/applynow", cta: "Apply now" },
  { category: "tax", title: "GST Registration", image: gst, href: "/applynow", cta: "Apply now" },
  { category: "tax", title: "GST Return Filing", image: gst, href: "/applynow", cta: "Apply now" },
  { category: "tax", title: "Business Registration", image: business, href: "/applynow", cta: "Apply now" },
  { category: "tax", title: "MSME Registration", image: msme, href: "/applynow", cta: "Apply now" },
  { category: "tax", title: "Legal Notice & Legal Issues", image: legal, href: "/applynow", cta: "Apply now" },
  { category: "tax", title: "Loan NOC Certificate", image: noc, href: "/applynow", cta: "Apply now" },
  { category: "tax", title: "Business Licence", image: licence, href: "/applynow", cta: "Apply now" },
  { category: "tax", title: "Food Licence", image: food, href: "/applynow", cta: "Apply now" },
  { category: "tax", title: "Trade Licence", image: trade, href: "/applynow", cta: "Apply now" },

  // Fintech services are not live yet: rendered as "Coming soon" without a link.
  { category: "fintech", title: "UPI Payments", image: upi, comingSoon: true },
  { category: "fintech", title: "BBPS Bill Payments", image: bbps, comingSoon: true },
  { category: "fintech", title: "AEPS (Aadhaar Enabled Payments)", image: aadhar, comingSoon: true },
  { category: "fintech", title: "Domestic Money Transfer", image: moneyTransfer, comingSoon: true },
  { category: "fintech", title: "Cash Management Services", image: cashMgt, comingSoon: true },
  { category: "fintech", title: "CIBIL Score Check", image: itr, comingSoon: true },
  { category: "fintech", title: "NSDL PAN Card", image: itr, comingSoon: true },
  { category: "fintech", title: "Micro ATM", image: itr, comingSoon: true },
  { category: "fintech", title: "Bill Pay & Recharge", image: itr, comingSoon: true },
];
