
"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, content, color }) => {
  return (
    <motion.div 
      className={`p-4 rounded-lg shadow-lg ${color} text-white`}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{content}</p>
    </motion.div>
  );
};

export default Card;
