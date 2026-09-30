import { Poppins } from "next/font/google";
import "./globals.css";
import Navbars from "./utils/Navbars";
import Footers from "./utils/Footers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { site } from "@/lib/seo/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Legal257 - Loans, GST Filing & ITR Filing Services",
    template: "%s | Legal257",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "business loan", "personal loan", "home loan", "gold loan", "loan against property",
    "EMI calculator", "loan eligibility", "GST filing", "ITR filing", "GST registration", "MSME registration", "Assam",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: "/",
    title: "Legal257 - Loans, GST Filing & ITR Filing Services",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal257 - Loans, GST Filing & ITR Filing Services",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#1E40AF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={poppins.variable}>
      <body className={`${poppins.className} bg-white text-ink antialiased`}>
      <ToastContainer position="bottom-right" />
     <Navbars/>
        {children}
      <Footers/>
        </body>
    </html>
  );
}
