"use client"
import React from 'react';
import { motion } from 'framer-motion';

const UserStatusCard = ({ status, count }) => {
  const statusColors = {
    Blocked: 'from-red-400 via-red-500 to-red-600',
    Active: 'from-green-400 via-green-500 to-green-600',
    Pending: 'from-yellow-400 via-yellow-500 to-yellow-600',
    inReview: 'from-blue-400 via-blue-500 to-blue-600'
  };

  return (
    <motion.div
      className={`p-6 bg-gradient-to-r ${statusColors[status]} rounded-lg shadow-md`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-white text-2xl font-bold mb-2">{status}</h2>
      <p className="text-white text-lg">Number of Users: {count}</p>
    </motion.div>
  );
};

const UserStatus = ({ userStatuses }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Partner Status Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStatuses.map((userStatus, index) => (
          <UserStatusCard
            key={index}
            status={userStatus.status}
            count={userStatus.count}
          />
        ))}
      </div>
    </div>
  );
};

export default UserStatus;
