"use client"
// components/HeroSection.js
import Image from 'next/image';
import { motion } from 'framer-motion';
import banner from '../../../public/banner.png'

const Banner2 = () => {
    return (
      <div className="relative bg-gray-900 text-white min-h-[70vh] flex items-center justify-between px-6 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90"></div>
        <div className="relative z-10 p-8 max-w-xl md:max-w-3xl">
          <motion.h1
            className="text-xl  md:text-4xl lg:text-5xl font-bold mb-4"
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
          <div className="flex flex-col md:flex-row gap-4">
            <motion.a
              href="#"
              className="bg-red-500 hover:bg-red-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
             Apply Now
            </motion.a>
            <motion.a
              href="#"
              className="border border-blue-500 hover:bg-blue-500 text-white hover:text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Learn More
            </motion.a>
          </div>
        </div>
        <div className="relative z-10 hidden md:block max-w-xs lg:max-w-md">
          <Image
            src={banner} // Add your image path here
            alt="Financial Planning"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    );
  };
  
  export default Banner2;