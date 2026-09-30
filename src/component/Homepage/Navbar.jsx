"use client";
import { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo2.png";

const calculators = [
  { href: "/#emi-calculator", label: "EMI Calculator" },
  { href: "/#eligibility", label: "Loan Eligibility Checker" },
  { href: "/calculator", label: "Loan Interest Calculator" },
];

const loans = [
  { href: "/personalloan", label: "Personal Loan" },
  { href: "/businessloan", label: "Business Loan" },
  { href: "/loanproperty", label: "Loan Against Property" },
  { href: "/homeloan", label: "Home Loan" },
];

const mediaGallery = [
  { href: "/photogallery", label: "Photo Gallery" },
  { href: "/videogallery", label: "Video Gallery" },
  { href: "/partnertestimonial", label: "Partner Testimonial" },
];

const microLoans = [
  { href: "/microloan", label: "Micro Personal Loan" },
  { href: "/microloan", label: "Daily Collection Micro Loan" },
  { href: "/microloan", label: "Mobile Finance Loan" },
  { href: "/microloan", label: "Micro Finance Group Loan" },
];

const desktopNav = [
  { label: "Home", href: "/" },
  { label: "Calculators", items: calculators },
  { label: "Loans", items: loans },
  { label: "GST/ITR", href: "/applynow" },
  { label: "About Us", href: "/about" },
  { label: "Media", items: mediaGallery },
  { label: "Contact Us", href: "/contact" },
  { label: "Become Partner", href: "/partnersignup" },
];

const mobileNav = [
  { label: "Home", href: "/" },
  { label: "Rozana Pay", href: "/rozanaPay" },
  { label: "Calculators", items: calculators },
  { label: "GST/ITR - Apply Now", href: "/applynow" },
  { label: "About Us", href: "/about" },
  { label: "Loans", items: loans },
  { label: "Media Gallery", items: mediaGallery },
  { label: "Contact Us", href: "/contact" },
  { label: "Refer & Earn", href: "/refer" },
  { label: "Career", href: "/career" },
  { label: "Job - Apply Now", href: "/applyjob" },
  { label: "Manual Payment", href: "/manualPayment" },
  { label: "Fintech Banking", href: "/commingSoon" },
  { label: "JonoJivan Grocery Ration Card", href: "/groceryRationCard" },
  { label: "JonoJivan Micro Loan", items: microLoans },
  { label: "Become Our Partner", href: "/partnersignup" },
  { label: "Check for Available Pincode", href: "/availablePincode" },
  { label: "QR Code", href: "/qrCodeCollections" },
];

const linkClass = "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-ink hover:text-primary-700 transition-colors";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  // Close desktop dropdowns on outside click or Escape.
  useEffect(() => {
    const onClick = (e) => navRef.current && !navRef.current.contains(e.target) && setOpenMenu(null);
    const onKey = (e) => e.key === "Escape" && setOpenMenu(null);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => {
    setIsOpen(false);
    setOpenMenu(null);
  };

  const toggle = (label) => setOpenMenu((current) => (current === label ? null : label));

  return (
    <nav ref={navRef} aria-label="Main" className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={close} className="shrink-0">
            <Image src={logo} alt="Legal257" height={40} width={150} priority className="h-9 w-auto" />
          </Link>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {desktopNav.map((item) =>
              item.items ? (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() => toggle(item.label)}
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    className={`${linkClass} inline-flex items-center gap-1`}
                  >
                    {item.label}
                    <ChevronDownIcon aria-hidden className={`h-4 w-4 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openMenu === item.label && (
                    <ul className="absolute left-0 z-10 mt-2 w-60 rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link href={sub.href} onClick={close} className="block px-4 py-2 text-sm text-ink hover:bg-primary-50 hover:text-primary-700">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="hidden items-center gap-3 xl:flex">
            <Link href="/partnersignin" className="rounded-lg px-4 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-50">
              Sign In
            </Link>
            <Link href="/applyloan" className="rounded-lg bg-accent-400 px-4 py-2 text-sm font-semibold text-primary-950 hover:bg-accent-300">
              Apply Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-primary-800 hover:bg-primary-50 xl:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
            {isOpen ? <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-white xl:hidden">
          <ul className="space-y-1 px-4 py-3">
            {mobileNav.map((item) =>
              item.items ? (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => toggle(item.label)}
                    aria-expanded={openMenu === item.label}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-ink hover:bg-primary-50"
                  >
                    {item.label}
                    <ChevronDownIcon aria-hidden className={`h-5 w-5 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openMenu === item.label && (
                    <ul className="ml-4 border-l border-primary-100 pl-2">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link href={sub.href} onClick={close} className="block rounded-md px-3 py-2 text-sm text-ink-muted hover:text-primary-700">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href} onClick={close} className="block rounded-md px-3 py-2.5 text-base font-medium text-ink hover:bg-primary-50">
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="grid grid-cols-2 gap-3 border-t border-slate-200 px-4 py-4">
            <Link href="/partnersignin" onClick={close} className="rounded-lg border border-primary-700 px-4 py-2.5 text-center text-sm font-semibold text-primary-700">
              Sign In
            </Link>
            <Link href="/applyloan" onClick={close} className="rounded-lg bg-accent-400 px-4 py-2.5 text-center text-sm font-semibold text-primary-950">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
