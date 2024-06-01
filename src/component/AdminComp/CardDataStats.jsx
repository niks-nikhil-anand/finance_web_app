"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const CardDataStats = ({ title, total, rate, levelUp, levelDown, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-stroke bg-white px-8 py-8 shadow-lg dark:border-strokedark dark:bg-boxdark"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-600 dark:from-blue-700 dark:to-purple-900">
        {children}
      </div>

      <div className="mt-6 flex items-end justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-inner">
        <div>
          <h4 className="text-2xl font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-md font-medium text-gray-700 dark:text-gray-300">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-lg font-medium ${
            levelUp ? 'text-green-500' : levelDown ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          {rate}
          {levelUp && <FaArrowUp className="text-green-500" size={16} />}
          {levelDown && <FaArrowDown className="text-red-500" size={16} />}
        </span>
      </div>
    </motion.div>
  );
};

export default CardDataStats;
