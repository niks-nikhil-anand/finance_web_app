// UserStatusOverview.js
"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const UserStatusCard = ({ status, count }) => {
  // Define colors based on status
  let bgColor = '';
  switch (status) {
    case 'Blocked':
      bgColor = 'bg-red-500';
      break;
    case 'Active':
      bgColor = 'bg-green-500';
      break;
    case 'Pending':
      bgColor = 'bg-yellow-500';
      break;
    case 'inReview':
      bgColor = 'bg-blue-500';
      break;
    default:
      bgColor = 'bg-gray-500';
  }

  return (
    <motion.div
      className={`p-4 border rounded-lg shadow-md ${bgColor}`}
      whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h2 className="text-xl font-semibold text-white">{status}</h2>
      <p className="text-lg text-white">{count}</p>
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
          const status = user.status;
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
      <h1 className="text-3xl font-bold mb-8">User Status Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Blocked', 'Active', 'Pending', 'inReview'].map(status => (
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
