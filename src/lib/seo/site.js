// Single source of truth for business details used in SEO, footer and FAQ.
export const site = {
  name: "Legal257",
  legalName: "Legal257",
  url: "https://legal257.in",
  logo: "/logo2.png",
  tagline: "Loans, GST & ITR filing made simple",
  description:
    "Compare and apply for business, personal, home and gold loans from 60+ banks and NBFCs. Check eligibility, calculate EMI and get expert GST & ITR filing with Legal257.",
  phone: "+91 9435266783",
  email: "legal257rgvf@gmail.com",
  whatsapp: "https://wa.link/u95toi",
  address: {
    street: "Biswanath Chariali",
    locality: "Biswanath",
    region: "Assam",
    postalCode: "784176",
    country: "IN",
  },
};

export const formatAddress = ({ street, locality, region, postalCode }) =>
  `${street}, District ${locality}, ${region}, Pin ${postalCode}`;
