"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from '@react-icons/all-files/fa/FaDownload';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center">
        JonoJivan Grocery Ration Card
      </h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg shadow-lg"
      >
        <FaDownload className="mr-2" />
        Download Grocery Ration Card
      </motion.button>
    </div>
  );
};

export default Page;


