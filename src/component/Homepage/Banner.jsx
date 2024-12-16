"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative flex flex-col md:flex-row min-h-[164px] py-6 pl-4 pr-4 md:px-16 lg:px-32 gradient-blue overflow-hidden justify-between">
      <div className="space-y-4 md:w-2/3">
        <motion.h1 
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          Compare Best <span className="text-yellow-500">Loan Offer</span>
        </motion.h1>
        <motion.p
          className="text-sm text-white opacity-80 mt-1"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
        >
          <span className="mr-2">•</span> With the Lowest Interest Rate
        </motion.p>
        <motion.p
          className="text-sm text-white opacity-80 mt-1"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: 'easeInOut' }}
        >
          <span className="mr-2">•</span> Easy and Fast Application Process
        </motion.p>
      </div>
      <div className="relative mt-4 md:mt-0">
        <Link href={"/applyloan"}>
          <motion.button 
            type="button"
            className="py-2.5 px-6 text-sm font-semibold bg-yellow-500 text-black hover:bg-yellow-400 mt-4 md:mt-0 transition-all duration-300 ease-in-out"
            animate={{
              scale: [1, 1.5, 1],  // Continuously increases and decreases the size
            }}
            transition={{
              repeat: Infinity,     // Repeat indefinitely
              repeatType: 'loop',   // Loop the animation
              duration: 2,          // Duration for one cycle of the animation
              ease: 'easeInOut',    // Smooth easing for the animation
            }}
          >
            Apply Now
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default Banner
