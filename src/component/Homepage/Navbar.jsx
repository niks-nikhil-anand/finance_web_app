"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loanCalcOpen, setLoanCalcOpen] = useState(false);
  const [loansOpen, setLoansOpen] = useState(false);
  const [mediaGalleryOpen, setMediaGalleryOpen] = useState(false);
  const [microLoanOpen, setMicroLoanOpen] = useState(false);

  const toggleSubMenu = (setFunction, currentState) => () => setFunction(!currentState);


  const handleLinkClick = () => {
    setIsOpen(false);
    setLoanCalcOpen(false);
    setLoansOpen(false);
    setMediaGalleryOpen(false);
    setMicroLoanOpen(false)
  };
  
  return (
    <nav className="bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex">
              <Link href="/">
                <Image src={logo} alt="TailGrids" height={100} width={100} className="w-[12rem] md:w-[7rem]" />
              </Link>
            </div>
            <div className="hidden md:flex ml-10 items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <div className="relative inline-block text-left">
                <button
                  onClick={toggleSubMenu(setLoanCalcOpen, loanCalcOpen)}
                  type="button"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  Loan Calculator &#x25BE;
                </button>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: loanCalcOpen ? 1 : 0, y: loanCalcOpen ? 0 : -10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg ${loanCalcOpen ? "block" : "hidden"}`}
                >
                  <Link href="/calculator" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Monthly EMI Calculator</Link>
                  <Link href="/applyloan" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Eligibility Calculator</Link>
                </motion.div>
              </div>
              <div className="relative inline-block text-left">
                <button
                  onClick={toggleSubMenu(setLoansOpen, loansOpen)}
                  type="button"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  Loans &#x25BE;
                </button>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: loansOpen ? 1 : 0, y: loansOpen ? 0 : -10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg ${loansOpen ? "block" : "hidden"}`}
                >
                  <Link href="/personalloan" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Personal Loan</Link>
                  <Link href="/businessloan" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Business Loan</Link>
                  <Link href="/loanproperty" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Loan Against Property</Link>
                  <Link href="/homeloan" onClick={handleLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home Loan</Link>
                </motion.div>
              </div>
              <Link href="/career" className="px-3 py-2 rounded-md text-sm font-medium">Carreer</Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
              
              <Link href="/photogallery" className="px-3 py-2 rounded-md text-sm font-medium">Media Gallery</Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
              <Link href="/partnersignup" className="px-3 py-2 rounded-md text-sm font-medium">Become Our Partner</Link>
            </div>
          </div>
          <div className="hidden md:flex ml-4 items-center md:ml-6">
            <Link href="/partnersignin">
              <button className="px-6 py-2 font-medium gradient_yellow text-black transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                Sign In
              </button>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-yellow-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-yellow-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden bg-blue-50 text-black`}
        id="mobile-menu"
        
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-black">Home</Link>
          <Link href="/rozanaPay" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-black">Rozana Pay</Link>
          <div className="relative">
            <button
              onClick={toggleSubMenu(setLoanCalcOpen, loanCalcOpen)}
              className="w-full flex justify-between px-3 py-2 rounded-md text-base font-medium text-black"
            >
              Loan Calculator
              <span>{loanCalcOpen ? "▲" : "▼"}</span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: loanCalcOpen ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className={`overflow-hidden ${loanCalcOpen ? "block" : "hidden"}`}
            >
              <div className="ml-4">
                <Link href="/calculator" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Monthly EMI Calculator</Link>
                <Link href="/applyloan" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Eligibility Calculator</Link>
              </div>
            </motion.div>
          </div>
          
          <Link href="/applynow" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-black">GST/ITR - Apply Now </Link>
          <Link href="/about" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-black">About Us</Link>
          <div className="relative">
            <button
              onClick={toggleSubMenu(setLoansOpen, loansOpen)}
              className="w-full flex justify-between px-3 py-2 rounded-md text-base font-medium text-black"
            >
              Loans
              <span>{loansOpen ? "▲" : "▼"}</span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: loansOpen ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className={`overflow-hidden ${loansOpen ? "block" : "hidden"}`}
            >
              <div className="ml-4">
                <Link href="/personalloan" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Personal Loan</Link>
                <Link href="/businessloan" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Business Loan</Link>
                <Link href="/loanproperty"  onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Loan Against Property</Link>
                <Link href="/homeloan" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Home Loan</Link>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <button
              onClick={toggleSubMenu(setMediaGalleryOpen, mediaGalleryOpen)}
              className="w-full flex justify-between px-3 py-2 rounded-md text-base font-medium text-balck"
            >
              Media Gallery
              <span>{mediaGalleryOpen ? "▲" : "▼"}</span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: mediaGalleryOpen ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className={`overflow-hidden ${mediaGalleryOpen ? "block" : "hidden"}`}
            >
              <div className="ml-4">
                <Link href="/photogallery" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Photo Gallery</Link>
                <Link href="/videogallery" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Video Gallery</Link>
                <Link href="/partnertestimonial" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Partner Testimonial</Link>
              </div>
            </motion.div>
          </div>
          <Link href="/contact" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-black">Contact Us</Link>
          <Link href="/refer" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-black">Refer & Earn</Link>
          <Link href="/applyjob" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-black">Job - Apply Now</Link>
          <Link href="/manualPayment" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-black">Manual Payment</Link>
          <Link href="/commingSoon" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-black">Fintech Banking</Link>
          <Link href="/groceryRationCard" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-black">JonoJivan Grocery Ration Card</Link>
          <div className="relative">
            <button
              onClick={toggleSubMenu(setMicroLoanOpen, microLoanOpen)}
              className="w-full flex justify-between px-3 py-2 rounded-md text-base font-medium text-balck"
            >
             JonoJivan Micro Loan
              <span>{microLoanOpen ? "▲" : "▼"}</span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: microLoanOpen ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className={`overflow-hidden ${microLoanOpen ? "block" : "hidden"}`}
            >
              <div className="ml-4">
                <Link href="/microloan" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Micro Personal Loan</Link>
                <Link href="/microloan" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Daily Collection Micro Loan</Link>
                <Link href="/microloan" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Mobile Finance Loan</Link>
                <Link href="/microloan" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-sm font-medium text-black">Micro Finance Group Loan</Link>
              </div>
            </motion.div>
          </div>
          <Link href="/partnersignup" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-black">Become Our Partner</Link>
          <Link href="/availablePincode"  className="block px-3 py-2 rounded-md text-base font-medium text-black">Check for Available Pincode</Link>
          <Link href="/qrCodeCollections"  className="block px-3 py-2 rounded-md text-base font-medium text-black">QR Code</Link>
          <Link href="/partnersignin" onClick={handleLinkClick}>
            <button className="mt-2 w-full px-6 py-2 font-medium gradient_yellow text-black transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ">
              Sign In
            </button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
