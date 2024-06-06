"use client"
import React from 'react';
import { motion } from 'framer-motion';

const typingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ComingSoon = () => {
  const text = "Fintech Banking - Coming Soon";

  return (
    <div className="flex items-center justify-center w-full ">
      <motion.div
        className="text-6xl font-extrabold bg-clip-text text-transparent text-gradient-blue flex"
        initial="hidden"
        animate="visible"
        variants={typingVariants}
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
        <motion.span
          className=" gradient-black w-1 h-16 ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default ComingSoon;
