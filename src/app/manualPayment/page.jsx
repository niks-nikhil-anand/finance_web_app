"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import paymentQr from '../../../public/paymentqr.jpeg';
import Slider from '@/component/Homepage/Slider';

const page = () => {
  const services = [
    { name: 'JOB POST APPLY', price: '₹499' },
    { name: 'BRANCH CODE', price: '₹11,800' },
    { name: 'CSP CODE', price: '₹3000' },
    { name: 'DSA CODE', price: '₹5900' },
    { name: 'MEMBERSHIP', price: '₹1180/Year' },
    { name: 'SHARE HOLDER', price: '₹10,000' },
    { name: 'JONOJIVAN GROCERY WAREHOUSE ', price: '₹50,000 - ₹120,000' },
  ];

  return (
    <div>
      <div className="relative bg-gray-900 text-white min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-4 py-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90"></div>
        <div className="relative z-10 p-4 md:p-8 max-w-xl md:max-w-3xl text-center md:text-left">
          <motion.h1
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Streamline Your Payment with Ease - Apply for <span className="text-yellow-500">Manual Payment</span>
          </motion.h1>
          <motion.p
            className="text-xs sm:text-base md:text-lg lg:text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hassle-Free ITR and GST Filing - Start Your Application Today!
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="/applynow"
              className="bg-red-500 hover:bg-red-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration:300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Apply Now
            </motion.a>
          </div>
        </div>
        <div className="relative z-10 mt-8 md:mt-0 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
          <Image
            src={paymentQr}
            alt="Financial Planning"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>

      <motion.div
        className="w-full max-w-3xl mx-auto mt-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Our Services & Pricing</h2>
        <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-4 px-6 text-left text-gray-600 font-semibold uppercase text-xs sm:text-sm">Service</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold uppercase text-xs sm:text-sm">Price</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <motion.tr
                key={index}
                className={`hover:bg-gray-100 transition duration-300 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <td className="py-4 px-6 text-gray-800 text-xs sm:text-sm font-medium">{service.name}</td>
                <td className="py-4 px-6 text-gray-800 text-xs sm:text-sm font-medium">{service.price}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <div className="mt-8">
        <Slider />
      </div>
    </div>
  );
};

export default page;
