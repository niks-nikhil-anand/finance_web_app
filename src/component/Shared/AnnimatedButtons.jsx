import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="rounded-md shadow-md px-4 py-2 bg-gradient-to-br from-gradient_yellow to-blue-bg-gradient text-white font-bold"
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
