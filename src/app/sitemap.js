import { site } from "@/lib/seo/site";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/applyloan", priority: 0.9 },
  { path: "/applynow", priority: 0.9 },
  { path: "/personalloan", priority: 0.8 },
  { path: "/businessloan", priority: 0.8 },
  { path: "/homeloan", priority: 0.8 },
  { path: "/loanproperty", priority: 0.8 },
  { path: "/microloan", priority: 0.7 },
  { path: "/calculator", priority: 0.7 },
  { path: "/refer", priority: 0.6 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/career", priority: 0.5 },
  { path: "/applyjob", priority: 0.4 },
  { path: "/partnersignup", priority: 0.5 },
  { path: "/availablePincode", priority: 0.5 },
  { path: "/photogallery", priority: 0.3 },
  { path: "/videogallery", priority: 0.3 },
  { path: "/mediagallery", priority: 0.3 },
  { path: "/partnertestimonial", priority: 0.3 },
  { path: "/privacyPolicy", priority: 0.2 },
  { path: "/terms&conditions", priority: 0.2 },
  { path: "/returnPolicy", priority: 0.2 },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency = "monthly" }) => ({
    url: `${site.url}${path.replace("&", "%26")}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
