"use client"
// components/HeroSection.js
import Image from 'next/image';
import { motion } from 'framer-motion';
import banner from '../../../public/banner.png';

const Banner2 = () => {
    return (
        <div className="relative bg-gray-900 text-white min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-3 py-12 md:px-16 md:py-16">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-80"></div>
    <div className="relative z-10 p-8 max-w-xl md:max-w-3xl text-center md:text-left">
    <motion.h1
        className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-gray-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
    >
        Streamline Your Tax Filing with Ease - Apply for <span className="text-yellow-500">ITR and GST Now!</span>
    </motion.h1>
    <motion.p
        className="text-sm md:text-xl lg:text-2xl mb-8 text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
    >
        Hassle-Free ITR and GST Filing
        <span className="text-red-500 font-bold mt-2"> Start Your Application Today!</span>
    </motion.p>
    <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
        <motion.a
            href="/applynow"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
        >
            Apply Now
        </motion.a>
    </div>
</div>

    <div className="relative z-10 mt-8 md:mt-0 max-w-xs lg:max-w-md">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
        >
            <Image
                src={banner}
                alt="Financial Planning"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
            />
        </motion.div>
    </div>
</div>

    );
};

export default Banner2;
