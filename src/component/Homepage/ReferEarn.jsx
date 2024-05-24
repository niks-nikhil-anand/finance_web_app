"use client"
// components/HeroSection.js
import Image from 'next/image';
import { motion } from 'framer-motion';
import banner from '../../../public/banner/refer.jpg';

const ReferEarn = () => {
    return (
        <div className="relative bg-gray-900 text-white min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-6 py-3 md:px-12">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90"></div>
            <div className="relative z-10 p-8 max-w-xl md:max-w-3xl text-center md:text-left">
                <motion.h1
                    className="text-xl md:text-4xl lg:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                   Join our refer and earn program to  <span className="text-yellow-500">unlock exciting rewards!</span>
                </motion.h1>
                <motion.p
                    className="text-sm md:text-xl lg:text-2xl mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                   Refer your friends and colleagues to our fintech services, including hassle-free loans and comprehensive business solutions. Earn rewards for every successful referral and help us grow together. Start referring today and enjoy the benefits of our innovative financial services!
                </motion.p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <motion.a
                        href="/refer"
                        className="bg-red-500 hover:bg-red-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Refer & Earn Now
                    </motion.a>
                  
                </div>
            </div>
            <div className="relative z-10 mt-8 md:mt-0 max-w-xs lg:max-w-md">
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

export default ReferEarn;
