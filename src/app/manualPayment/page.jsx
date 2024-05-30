"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import paymentQr from '../../../public/paymentqr.jpeg'
import Slider from '@/component/Homepage/Slider';

const page = () => {
  return (
    <div>
        <div className="relative bg-gray-900 text-white min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-6 py-3 md:px-12">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90"></div>
            <div className="relative z-10 p-8 max-w-xl md:max-w-3xl text-center md:text-left">
                <motion.h1
                    className="text-xl md:text-4xl lg:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Streamline Your Payment with Ease - Apply for <span className="text-yellow-500">Manual Payment</span>
                </motion.h1>
                <motion.p
                    className="text-sm md:text-xl lg:text-2xl mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Hassle-Free ITR and GST Filing - Start Your Application Today!
                </motion.p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
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
            </div>
            <div className="relative z-10 mt-8 md:mt-0 max-w-xs lg:max-w-md">
                <Image
                    src={paymentQr}
                    alt="Financial Planning"
                    width={500}
                    height={500}
                    className="rounded-lg"
                />
            </div>
        </div>
        <div>
            <Slider/>
        </div>
    </div>
  )
}

export default page


