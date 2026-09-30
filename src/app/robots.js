import { site } from "@/lib/seo/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard", "/admin", "/user/", "/branch/", "/test"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
