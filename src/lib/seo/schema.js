import { site } from "./site";

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}${site.logo}`,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  areaServed: "IN",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
});
