"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { FaReact, FaUser, FaUserCircle, FaUserSecret, FaUserTie } from 'react-icons/fa';
import { FaCodeBranch , FaUsersGear} from "react-icons/fa6";
import { GiChessKing } from "react-icons/gi";



const UserStatusCard = ({ status, count }) => {
  let bgColor = '';
  let icon = null;

  switch (status) {
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
    case 'Admin':
      bgColor = 'bg-gradient-to-r from-purple-500 to-purple-700';
      icon = <GiChessKing className="text-white text-4xl" />;
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

const UserStatusOverview = () => {
  const [userStatuses, setUserStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        
        // Count occurrences of each status
        const statusCounts = data.reduce((acc, user) => {
          const status = user.role;
          if (!acc[status]) {
            acc[status] = 0;
          }
          acc[status]++;
          return acc;
        }, {});

        // Prepare formatted statuses array
        const formattedStatuses = Object.keys(statusCounts).map(status => ({
          status,
          count: statusCounts[status],
        }));

        setUserStatuses(formattedStatuses);
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
    <div className="p-8">
              <h1 className="text-3xl font-bold mb-8">Partner Stats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Admin', 'DSA', 'CSP', 'User', 'Branch'].map(status => (
          <UserStatusCard
            key={status}
            status={status}
            count={userStatuses.find(item => item.status === status)?.count || 0}
          />
        ))}
      </div>
    </div>
  );
};

export default UserStatusOverview;
