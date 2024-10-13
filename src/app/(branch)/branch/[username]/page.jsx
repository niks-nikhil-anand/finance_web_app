"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaCodeBranch, FaUsersGear } from 'react-icons/fa6';
import { GiChessKing } from 'react-icons/gi';

// Define status colors and categories
const statusColors = {
  'Details Pending': 'from-yellow-400 via-yellow-500 to-yellow-600',
  'Under Processing': 'from-blue-400 via-blue-500 to-blue-600',
  Approved: 'from-green-400 via-green-500 to-green-600',
  Rejected: 'from-red-400 via-red-500 to-red-600',
  Blocked: 'from-red-500 via-red-600 to-red-700',
  Active: 'from-green-500 via-green-600 to-green-700',
  Pending: 'from-yellow-500 via-yellow-600 to-yellow-700',
  inReview: 'from-blue-500 via-blue-600 to-blue-700',
};

// StatusCard Component
const StatusCard = ({ category, status, count }) => (
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

// UserStatusCard Component
const UserStatusCard = ({ status, count }) => {
  let bgColor = '';
  let icon = null;

  switch (status) {
    case 'Admin':
      bgColor = 'bg-gradient-to-r from-purple-500 to-purple-700';
      icon = <GiChessKing className="text-white text-4xl" />;
      break;
    case 'CSP':
      bgColor = 'bg-gradient-to-r from-red-500 to-red-700';
      icon = <FaUserTie className="text-white text-4xl" />;
      break;
    case 'Branch':
      bgColor = 'bg-gradient-to-r from-green-500 to-green-700';
      icon = <FaCodeBranch className="text-white text-4xl" />;
      break;
    case 'DSA':
      bgColor = 'bg-gradient-to-r from-yellow-500 to-yellow-700';
      icon = <FaUserTie className="text-white text-4xl" />;
      break;
    case 'User':
      bgColor = 'bg-gradient-to-r from-blue-500 to-blue-700';
      icon = <FaUsersGear className="text-white text-4xl" />;
      break;
    case 'Blocked':
      bgColor = 'bg-gradient-to-r from-red-500 to-red-700';
      icon = <FaUserTie className="text-white text-4xl" />;
      break;
    case 'Active':
      bgColor = 'bg-gradient-to-r from-green-500 to-green-700';
      icon = <FaUserTie className="text-white text-4xl" />;
      break;
    case 'Pending':
      bgColor = 'bg-gradient-to-r from-yellow-500 to-yellow-700';
      icon = <FaUserTie className="text-white text-4xl" />;
      break;
    case 'inReview':
      bgColor = 'bg-gradient-to-r from-blue-500 to-blue-700';
      icon = <FaUserTie className="text-white text-4xl" />;
      break;
    default:
      bgColor = 'bg-gray-500';
  }

  return (
    <motion.div
      className={`p-4 border rounded-lg shadow-md flex items-center justify-between ${bgColor}`}
      whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {icon}
      <div>
        <h2 className="text-xl font-semibold text-white">{status}</h2>
        <p className="text-lg text-white">{count}</p>
      </div>
    </motion.div>
  );
};

// Main Component
const BranchApplicationStatusOverview = () => {
  const [roleCounts, setRoleCounts] = useState({});
  const [statusCounts, setStatusCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeInOut" } 
    },
    hover: { 
      textShadow: "0px 4px 20px rgba(0, 255, 255, 0.7), 0px 8px 40px rgba(0, 255, 255, 0.4)", 
      scale: 1.1 
    }
  };
  
  const liquidFlowVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();

        // Process data to get counts and status info
        const roles = data.reduce((acc, user) => {
          const role = user.role;
          if (!acc[role]) {
            acc[role] = 0;
          }
          acc[role]++;
          return acc;
        }, {});

        const statuses = data.reduce((acc, user) => {
          const status = user.status;
          if (!acc[status]) {
            acc[status] = 0;
          }
          acc[status]++;
          return acc;
        }, {});

        setRoleCounts(roles);
        setStatusCounts(statuses);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-8">Error: {error.message}</div>;
  }

  return (
    <div className="w-full p-10">
     <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-pink-500 to-red-500 animate-pulse transition-transform transform hover:scale-110 ">
  Branch Application Status Overview
</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Role Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Admin', 'DSA', 'CSP', 'User', 'Branch'].map(role => (
            <UserStatusCard
              key={role}
              status={role}
              count={roleCounts[role] || 0}
            />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Status Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Blocked', 'Active', 'Pending', 'inReview'].map(status => (
            <UserStatusCard
              key={status}
              status={status}
              count={statusCounts[status] || 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchApplicationStatusOverview;
