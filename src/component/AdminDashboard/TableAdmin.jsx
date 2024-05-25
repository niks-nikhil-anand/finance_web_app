"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Table = ({ title, data }) => {
  return (
    <motion.div 
      className="p-4 bg-white rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, index) => (
              <th key={index} className="py-2 px-4 border border-gray-300">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex} className="py-2 px-4 border border-gray-300">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Table;
