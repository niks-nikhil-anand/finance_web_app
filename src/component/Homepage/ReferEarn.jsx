"use client"
// components/HeroSection.js
import Image from 'next/image';
import { motion } from 'framer-motion';
import banner from '../../../public/banner/refer.jpg';

const ReferEarn = () => {
    return (
        <div className="relative bg-gray-900 text-white min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-3 py-3 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90"></div>
        <div className="relative z-10 p-4 max-w-xl md:max-w-2xl text-center md:text-left">
            <motion.h1
                className="text-xl md:text-3xl lg:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Refer a Loan & Earn from <span className="text-yellow-500"> ₹1000 to ₹9000 per referral </span>
            </motion.h1>
            <motion.p
                className="text-sm md:text-lg lg:text-xl mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Refer your friends and colleagues to our hassle-free loan services and earn rewards ranging from Rs 1,000 to Rs 9,000 for every successful referral. Simply share the customer's WhatsApp number using the link provided and start enjoying the benefits of our innovative financial services today!
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
        <div className="relative z-10 mt-6 md:mt-0 max-w-xs lg:max-w-md">
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
