"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Graph = ({ title, GraphComponent }) => {
  return (
    <motion.div 
      className="p-4 bg-white rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="h-64">
        <GraphComponent />
      </div>
    </motion.div>
  );
};

export default Graph;
