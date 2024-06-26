// UserStatusOverview.js
"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillPersonFill } from 'react-icons/bs'; // Assuming you have installed react-icons
import { FaUserShield, FaUserCheck, FaUserClock, FaUserEdit } from 'react-icons/fa'; // Import other icons as needed

const UserStatusCard = ({ status, count }) => {
  // Define colors and icons based on status
  let bgColor = '';
  let icon = null;
  switch (status) {
    case 'Blocked':
      bgColor = 'bg-gradient-to-r from-red-500 to-red-700';
      icon = <FaUserShield className="text-3xl text-white mr-2" />;
      break;
    case 'Active':
      bgColor = 'bg-gradient-to-r from-green-500 to-green-700';
      icon = <FaUserCheck className="text-3xl text-white mr-2" />;
      break;
    case 'Pending':
      bgColor = 'bg-gradient-to-r from-yellow-500 to-yellow-700';
      icon = <FaUserClock className="text-3xl text-white mr-2" />;
      break;
    case 'inReview':
      bgColor = 'bg-gradient-to-r from-blue-500 to-blue-700';
      icon = <FaUserEdit className="text-3xl text-white mr-2" />;
      break;
    default:
      bgColor = 'bg-gray-500';
      icon = <BsFillPersonFill className="text-3xl text-white mr-2" />;
  }

  return (
    <motion.div
      className={`flex items-center px-[4rem] py-[1rem] border rounded-lg shadow-md ${bgColor}`}
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
    <div className="p-8 w-full">
      <div className="flex gap-9 justify-center items-center">
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
