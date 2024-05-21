
import { Inter } from "next/font/google";
import "./globals.css";
import Navbars from "./utils/Navbars";
import Footers from "./utils/Footers";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legal257 - Expert Financial and Tax Services | GST Filing | ITR Filing | Competitive Loans",
  description: "At Legal257, we provide top-notch financial and tax services, including expert GST and ITR filing to keep your business compliant. Explore our competitive loan options tailored to meet your financial needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <Navbars/>
        {children}
      <Footers/>
        </body>
    </html>
  );
}
