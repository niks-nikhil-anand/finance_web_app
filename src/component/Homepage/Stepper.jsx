"use client"
import { FaCheckCircle, FaFileAlt, FaRegHandshake, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';

const Stepper = () => {
  return (
    <div className='bg-blue-50 py-[3rem]'>
      <div className="max-w-6xl mx-auto font-[sans-serif] text-[#333]">
        <h2 className="md:text-4xl text-2xl font-extrabold text-center mb-16">How it works</h2>
        <div className="flex gap-10 flex-col md:flex-row justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="p-4 text-center flex flex-col justify-center items-center gap-5 rounded bg-gray-200 shadow-lg w-[15rem] md:w-[30rem]"
          >
            <FaCheckCircle size={50} className="text-green-500" />
            <h3 className="text-xl font-semibold mb-2 text-black">Check Eligibility</h3>
            <p className="text-sm text-black">Check your eligibility for loan and Apply</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="p-4 text-center flex flex-col justify-center items-center gap-5 rounded bg-gray-200 shadow-lg w-[15rem] md:w-[30rem]"
          >
            <FaFileAlt size={50} className="text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-black">Submit Application</h3>
            <p className="text-sm text-black">Complete Application & Upload all Document</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="p-4 text-center flex flex-col justify-center items-center gap-5 rounded bg-gray-200 text-black shadow-lg w-[15rem] md:w-[30rem]"
          >
            <FaRegHandshake size={50} className="text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Get Sanctioned</h3>
            <p className="text-black text-sm">We will evaluate your application and propose a fair sanction</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="p-4 text-center flex flex-col justify-center items-center gap-5 rounded bg-gray-200 shadow-lg w-[15rem] md:w-[30rem]"
          >
            <FaMoneyBillWave size={50} className="text-green-600" />
            <h3 className="text-xl font-semibold mb-2 text-black">Receive Funds</h3>
            <p className="text-gray-500 text-sm">Receive your loan within 7 Business days</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
