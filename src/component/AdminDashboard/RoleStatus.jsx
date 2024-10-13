"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaCodeBranch, FaUsersGear } from 'react-icons/fa6';
import { GiChessKing } from 'react-icons/gi';
import { FaStore, FaBan } from 'react-icons/fa';
import { FaBriefcase,  FaHourglassStart, FaEye } from 'react-icons/fa';


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


const jobStatusIcons = {
  Active: <FaBriefcase className="text-white text-4xl" />,
  Blocked: <FaBan className="text-white text-4xl" />,
  Pending: <FaHourglassStart className="text-white text-4xl" />,
  inReview: <FaEye className="text-white text-4xl" />,
};

const statusColors1 = {
  Active: 'bg-green-500',
  Blocked: 'bg-red-500',
  Pending: 'bg-yellow-500',
  inReview: 'bg-blue-500',
};

const JobStatusCard = ({ status, count }) => {
  const bgColor = statusColors1[status] || 'bg-gray-500';

  return (
    <motion.div
      className={`p-4 border rounded-lg shadow-md flex items-center justify-between ${bgColor}`}
      whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {jobStatusIcons[status] || <FaBriefcase className="text-white text-4xl" />}
      <div>
        <h2 className="text-xl font-semibold text-black">{status}</h2>
        <p className="text-lg text-black">{count}</p>
      </div>
    </motion.div>
  );
};

const statusIcons = {
  Active: <FaStore />,
  Blocked: <FaBan />,
};

const RectangularStatusCard = ({ status, count }) => (
  <motion.div
    className={`flex justify-between items-center p-6 w-full h-36 bg-gradient-to-r ${statusColors[status]} rounded-lg shadow-lg`}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Icon section */}
    <div className="flex items-center">
      <div className="text-6xl text-white mr-4">
        {statusIcons[status]} {/* Use appropriate icon for each status */}
      </div>
      <div>
        <h2 className="text-white text-2xl font-bold">{status}</h2>
      </div>
    </div>

    {/* Count section */}
    <div className="text-white text-5xl font-bold">
      {count}
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
const PartnerApplicationStatusOverview = () => {
  const [roleCounts, setRoleCounts] = useState({});
  const [statusCounts, setStatusCounts] = useState({});
  const [groceryCounts, setGroceryCounts] = useState({ Active: 0, Blocked: 0 });
  const [jobCounts, setJobCounts] = useState({ Blocked: 0, Active: 0, Pending: 0, inReview: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/user');
        const userData = await userResponse.json();

        // Process user data to get counts and status info
        const roles = userData.reduce((acc, user) => {
          const role = user.role;
          if (!acc[role]) {
            acc[role] = 0;
          }
          acc[role]++;
          return acc;
        }, {});

        const statuses = userData.reduce((acc, user) => {
          const status = user.status;
          if (!acc[status]) {
            acc[status] = 0;
          }
          acc[status]++;
          return acc;
        }, {});

        // Fetch data from /api/grocery for Active and Blocked counts
        const jobResponse = await fetch('/api/jobApplication');
        const jobData = await jobResponse.json();
        console.log(jobData); 
        const jobStatusCounts =jobData.applications.reduce(
          (acc, item) => {
            if (item.status === 'Active') acc.Active++;
            if (item.status === 'Blocked') acc.Blocked++;
            if (item.status === 'Pending') acc.Pending++;
            if (item.status === 'inReview') acc.inReview++;
            return acc;
          },
          { Blocked: 0, Active: 0, Pending: 0, inReview: 0 }
        );

        const groceryResponse = await fetch('/api/groceryRationCard/form');
        const groceryData = await groceryResponse.json();
        const groceryStatusCounts = groceryData.reduce(
          (acc, item) => {
            if (item.status === 'Active') acc.Active++;
            if (item.status === 'Blocked') acc.Blocked++;
            return acc;
          },
          { Active: 0, Blocked: 0 }
        );

        setRoleCounts(roles);
        setStatusCounts(statuses);
        setGroceryCounts(groceryStatusCounts);
        setJobCounts(jobStatusCounts);
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
      <h1 className="text-3xl font-bold mb-8 text-center">Partner Application Status Overview</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Role Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Admin', 'DSA', 'CSP', 'User', 'Branch'].map((role) => (
            <UserStatusCard key={role} status={role} count={roleCounts[role] || 0} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Status Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Blocked', 'Active', 'Pending', 'inReview'].map((status) => (
            <UserStatusCard key={status} status={status} count={statusCounts[status] || 0} />
          ))}
        </div>
      </div>

      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Grocery Status Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <RectangularStatusCard status="Active" count={groceryCounts.Active} />
          <RectangularStatusCard status="Blocked" count={groceryCounts.Blocked} />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Job Status Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Active', 'Blocked', 'Pending', 'inReview'].map((status) => (
            <JobStatusCard key={status} status={status} count={jobCounts[status] || 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerApplicationStatusOverview;
