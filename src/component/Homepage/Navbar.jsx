"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import logo from '../../../public/logo.png';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loanCalcOpen, setLoanCalcOpen] = useState(false);
  const [loansOpen, setLoansOpen] = useState(false);

  const handleMouseEnter = (setFunction) => () => setFunction(true);
  const handleMouseLeave = (setFunction) => () => setFunction(false);

  return (
    <nav className="bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src={logo} alt="TailGrids" height={80} width={80} />
            </div>
            <div className="hidden md:flex ml-10 items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <div className="relative inline-block text-left">
                <button
                  onMouseEnter={handleMouseEnter(setLoanCalcOpen)}
                 
                  type="button"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  Loan Calculator &#x25BE;
                </button>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: loanCalcOpen ? 1 : 0, y: loanCalcOpen ? 0 : -10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg ${loanCalcOpen ? 'block' : 'hidden'}`}
                  onMouseEnter={handleMouseEnter(setLoanCalcOpen)}
                  onMouseLeave={handleMouseLeave(setLoanCalcOpen)}
                >
                  <Link href={"/calculator"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">EMI Calculator</Link>
                  <Link href={"/applyloan"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Eligibility Calculator</Link>
                </motion.div>
              </div>
              <div className="relative inline-block text-left">
                <button
                  onMouseEnter={handleMouseEnter(setLoansOpen)}
                 
                  type="button"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  Loans &#x25BE;
                </button>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: loansOpen ? 1 : 0, y: loansOpen ? 0 : -10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg ${loansOpen ? 'block' : 'hidden'}`}
                  onMouseEnter={handleMouseEnter(setLoansOpen)}
                  onMouseLeave={handleMouseLeave(setLoansOpen)}
                >
                  <Link href={"/applyloan"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Personal Loan</Link>
                  <Link href={"/applyloan"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Business Loan</Link>
                  <Link href={"/applyloan"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Loan Against Property</Link>
                  <Link href={"/applyloan"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home Loan</Link>
                  
                </motion.div>
              </div>
              <Link href="/blog" className="px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
              <Link href="/gallery" className="px-3 py-2 rounded-md text-sm font-medium">Media Gallery</Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
              <Link href={"/partnersignup"} className="px-3 py-2 rounded-md text-sm font-medium">Become Our Partner</Link>
            </div>
          </div>
          <div className="hidden md:flex ml-4 items-center md:ml-6">
            <Link href={"/applynow"}>
              <button className="px-6 py-2 font-medium bg-yellow-600 text-black transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                Apply Now
              </button>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-yellow-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-blue-700"
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
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Loan Calculator</Link>
          {/* Submenu for mobile view */}
          <div className="ml-4">
            <Link href={"/calculator"} className="block px-3 py-2 rounded-md text-sm font-medium text-white">EMI Calculator</Link>
            <Link href={"/applyloan"} className="block px-3 py-2 rounded-md text-sm font-medium text-white">Eligibility Calculator</Link>
          </div>
          <Link href={"/blog"} className="block px-3 py-2 rounded-md text-base font-medium text-white">Blog</Link>
          <Link href={"/about"} className="block px-3 py-2 rounded-md text-base font-medium text-white">About Us</Link>
          <Link  href={"/applyloan"} className="block px-3 py-2 rounded-md text-base font-medium text-white">Loan </Link>
          {/* Submenu for mobile view */}
          <div className="ml-4">
            <Link href={"/applyloan"} className="block px-3 py-2 rounded-md text-sm font-medium text-white">Personal Loan</Link>
            <Link href={"/applyloan"} className="block px-3 py-2 rounded-md text-sm font-medium text-white">Business Loan</Link>
            <Link href={"/applyloan"} className="block px-3 py-2 rounded-md text-sm font-medium text-white">Loan Against Property</Link>
            <Link href={"/applyloan"} className="block px-3 py-2 rounded-md text-sm font-medium text-white">Home Loan</Link>
          </div>
          <Link href={"/gallery"} className="block px-3 py-2 rounded-md text-base font-medium text-white">Media Gallery</Link>
          <Link href={"/contact"} className="block px-3 py-2 rounded-md text-base font-medium text-white">Contact Us</Link>
          <Link href={"/partnersignup"} className="block px-3 py-2 rounded-md text-base font-medium text-white">Become Our Partner</Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
