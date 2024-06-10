"use client"
import React from 'react';
import { motion } from 'framer-motion';

const statusColors = {
  'Details Pending': 'from-yellow-400 via-yellow-500 to-yellow-600',
  'Under Processing': 'from-blue-400 via-blue-500 to-blue-600',
  Approved: 'from-green-400 via-green-500 to-green-600',
  Rejected: 'from-red-400 via-red-500 to-red-600',
};

const categories = ['GST/ITR', 'Loan User', 'Jono Jivan Micro Loan'];

const StatusCard = ({ category, status, count }) => {
  return (
    <motion.div
      className={`p-4 bg-gradient-to-r ${statusColors[status]} rounded-lg shadow-md`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-white text-lg font-bold mb-1">{category}</h2>
        <h3 className="text-white text-md mb-1">{status}</h3>
        <p className="text-white text-sm">Users: {count}</p>
      </div>
    </motion.div>
  );
};

const PartnerApplicationStatus = ({ userStatuses }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">User Status Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) =>
          userStatuses[category].map((statusInfo, index) => (
            <StatusCard
              key={index}
              category={category}
              status={statusInfo.status}
              count={statusInfo.count}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PartnerApplicationStatus;
