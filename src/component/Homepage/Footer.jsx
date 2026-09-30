import Image from 'next/image'
import React from 'react'
import logo2 from '../../../public/logo2.png'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { formatAddress, site } from '@/lib/seo/site'

const columns = [
  {
    title: "Loans",
    links: [
      { href: "/personalloan", label: "Personal Loan" },
      { href: "/businessloan", label: "Business Loan" },
      { href: "/homeloan", label: "Home Loan" },
      { href: "/loanproperty", label: "Loan Against Property" },
      { href: "/microloan", label: "Micro Finance Group Loan" },
      { href: "/applyloan", label: "Apply for a Loan" },
    ],
  },
  {
    title: "Tools & Services",
    links: [
      { href: "/#eligibility", label: "Loan Eligibility Checker" },
      { href: "/#emi-calculator", label: "EMI Calculator" },
      { href: "/applynow", label: "GST / ITR Filing" },
      { href: "/availablePincode", label: "Check Available Pincode" },
      { href: "/refer", label: "Refer & Earn" },
      { href: "/partnersignup", label: "Become Our Partner" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
      { href: "/career", label: "Career" },
      { href: "/terms&conditions", label: "Terms and Conditions" },
      { href: "/privacyPolicy", label: "Privacy Policy" },
      { href: "/returnPolicy", label: "Return Policy" },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Legal257 home" className="inline-block rounded-lg bg-white px-3 py-2">
              <Image src={logo2} alt="Legal257" className="h-10 w-auto" height={40} width={160} />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-200">
              Legal257 helps individuals and businesses get the right loan and stay compliant with expert GST and ITR filing.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                <address className="not-italic">{formatAddress(site.address)}</address>
              </li>
              <li className="flex items-center gap-3">
                <Phone aria-hidden className="h-4 w-4 shrink-0 text-accent-300" />
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-white">{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden className="h-4 w-4 shrink-0 text-accent-300" />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-5 text-base font-semibold text-white">{col.title}</h2>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-primary-200 hover:text-accent-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-300 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Legal257. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
