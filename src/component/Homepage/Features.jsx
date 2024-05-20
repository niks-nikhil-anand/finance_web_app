"use client"
// components/HeroSection.js
import Image from 'next/image';
import { motion } from 'framer-motion';
import banner from '../../../public/loan/banner.png';

const Feature = () => {
  const loanTypes = [
    "BUSINESS LOAN",
    "PERSONAL LOAN",
    "HOME LOAN",
    "LOAN AGAINST PROPERTY",
    "GOLD LOAN",
    "EDUCATION LOAN",
    "DAILY COLLECTION LOAN",
    "MOBILE APP MICRO LOAN",
    "MOBILE FINANCE LOAN",
  ];

  return (
    <div className="relative bg-gray-900 text-white min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90 flex flex-col"></div>
      <div className="relative z-10 p-8 w-full md:max-w-xl lg:max-w-3xl">
        <motion.h1
          className="text-xl md:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Streamline Your Tax Filing with Ease - Apply for <span className="text-yellow-500"> ITR and GST Now!</span>
        </motion.h1>
        <motion.p
          className="text-sm md:text-xl lg:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hassle-Free ITR and GST Filing - Start Your Application Today!
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <motion.a
            href="/applynow"
            className="bg-red-500 hover:bg-red-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Apply Now
          </motion.a>
          
        </div>
        <motion.ul
          className="space-y-2 text-sm md:text-base lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {loanTypes.map((loan, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 * (index + 1) }}
              className='font-bold text-start '
            >
              👉 {loan}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="relative z-10 w-full md:w-auto mb-8 md:mb-0 ">
        <Image
          src={banner}
          alt="Financial Planning"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Feature;
