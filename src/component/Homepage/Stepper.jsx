"use client"
import Image from 'next/image'
import React from 'react'
import step2 from '../../../public/step2.png'
import { motion } from 'framer-motion';

const Stepper = () => {
  return (
    <div className='bg-gray-300 py-[3rem]'>
      <div class="max-w-6xl mx-auto font-[sans-serif] text-[#333] ">
      <h2 class="md:text-4xl text-2xl font-extrabold text-center mb-16">How it works</h2>
      <div class="flex gap-12 flex-col md:flex-row justify-center items-center">
      <motion.div 
          initial={{ opacity: 0, y: 20 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties when component is visible
          transition={{ duration: 0.5 }} // Animation duration
          class="p-4 text-center flex flex-col justify-center items-center gap-5 rounded bg-white shadow-lg w-[15rem] md:w-[30rem]"
        >
         <Image src={step2} height={50} width={50} alt='step2' />
          <h3 class="text-xl font-semibold mb-2">Check Eligibility</h3>
          <p class="text-gray-500 text-sm">Check your eligibility for loan and Apply</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties when component is visible
          transition={{ duration: 0.5 }} // Animation duration
          class="p-4 text-center flex flex-col justify-center items-center gap-5 rounded bg-white shadow-lg w-[15rem] md:w-[30rem]"
        >
         <Image src={step2} height={50} width={50} alt='step2' />
          <h3 class="text-xl font-semibold mb-2">Submit Application</h3>
          <p class="text-gray-500 text-sm">Complete Application & Upload all Document </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties when component is visible
          transition={{ duration: 0.5 }} // Animation duration
          class="p-4 text-center flex flex-col justify-center items-center gap-5 rounded bg-white shadow-lg w-[15rem] md:w-[30rem]"
        >
         <Image src={step2} height={50} width={50} alt='step2' />
          <h3 class="text-xl font-semibold mb-2">Get Sanctioned</h3>
          <p class="text-gray-500 text-sm">We will evaluate your application propose a fair sanction</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties when component is visible
          transition={{ duration: 0.5 }} // Animation duration
          class="p-4 text-center flex flex-col justify-center items-center gap-5 rounded bg-white shadow-lg w-[15rem] md:w-[30rem]"
        >
         <Image src={step2} height={50} width={50} alt='step2' />
          <h3 class="text-xl font-semibold mb-2">Receive Funds</h3>
          <p class="text-gray-500 text-sm">Receive your loan within 7 Business days</p>
        </motion.div>
        
        
       
      </div>
    </div>
    </div>
  )
}

export default Stepper