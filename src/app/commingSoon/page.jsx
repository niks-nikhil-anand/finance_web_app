"use client"
import React from 'react';
import { motion } from 'framer-motion';

const text = "Coming Soon...";
const typingDelay = 100;

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 'auto' }}
        transition={{ duration: text.length * (typingDelay / 1000), ease: 'linear' }}
        className="text-white text-4xl font-mono border-r-2 border-white overflow-hidden whitespace-nowrap"
        style={{ animation: `typing ${text.length * (typingDelay / 1000)}s steps(${text.length})` }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default ComingSoon;
