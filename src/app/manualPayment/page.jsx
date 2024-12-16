"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import paymentQr from '../../../public/paymentqr.jpeg';
import Slider from '@/component/Homepage/Slider';

const page = () => {
  const services = [
    { name: 'BANKING BRANCH', price: '₹11,800' },
    { name: 'BANKING CSP', price: '₹5,900' },
    { name: 'FINANCIAL DSA', price: '₹2,500' },
    { name: 'JONOJIVAN GROCERY BRANCH', price: '₹30,000' },
    { name: 'JONOJIVAN GROCERY DSA', price: '₹15,000' },
    { name: 'GP JONOJIVAN GROCERY WAREHOUSE', price: '₹70,000' },
    { name: 'JONOJIVAN DELIVERY AREA PIN CODE WAREHOUSE', price: '₹1,20,000' },
    { name: 'CITY JONOJIVAN COURIER BOOKING FRANCHISE', price: '₹2,500' },
    { name: 'ZONAL JONOJIVAN GROCERY DISTRIBUTION', price: '₹7,00,000' },
    { name: 'ZONAL JONOJIVAN DELIVERY WAREHOUSE', price: '₹5,00,000' },
    { name: 'ZONAL JONOJIVAN COURIER BOOKING FRANCHISE WAREHOUSE', price: '₹3,00,000' },
    { name: 'DISTRICT JONOJIVAN GROCERY WAREHOUSE', price: '₹2,50,000' },
    { name: 'DISTRICT JONOJIVAN COURIER BOOKING FRANCHISE', price: '₹50,000' },
    { name: 'DISTRICT JONOJIVAN DELIVERY WAREHOUSE', price: '₹2,00,000' },
  ];
  

  return (
    <div>
      <div className="relative  text-white min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-4 py-6 md:px-8">
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
  className="w-full max-w-3xl mx-auto mt-8 p-6 bg-gradient-to-r from-purple-100 to-blue-50 shadow-xl "
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeInOut' }}
>
  <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
    Our Services & Pricing
  </h2>
  <table className="w-full border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
    <thead>
      <tr className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
        <th className="py-4 px-6 text-left text-gray-700 font-semibold uppercase text-sm sm:text-base border-b border-gray-300">
          Service
        </th>
        <th className="py-4 px-6 text-left text-gray-700 font-semibold uppercase text-sm sm:text-base border-b border-gray-300">
          Price
        </th>
      </tr>
    </thead>
    <tbody>
      {services.map((service, index) => (
        <motion.tr
          key={index}
          className={`hover:bg-purple-100 transition duration-300 ${
            index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <td className="py-4 px-6 text-gray-800 text-sm sm:text-base font-medium border-b border-gray-200">
            {service.name}
          </td>
          <td className="py-4 px-6 text-gray-800 text-sm sm:text-base font-medium border-b border-gray-200">
            {service.price}
          </td>
        </motion.tr>
      ))}
    </tbody>
  </table>
</motion.div>


      <div className="mt-4">
        <Slider />
      </div>
    </div>
  );
};

export default page;
