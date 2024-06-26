"use client";
import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const roles = ['CSP', 'Branch', 'DSA', 'User', 'Admin'];
const statuses = ['Blocked', 'Active', 'Pending', 'inReview'];

const BarChart = ({ userRoles }) => {
  const data = {
    labels: roles,
    datasets: [
      {
        label: '# of Users',
        data: roles.map(role => userRoles[role] || 0),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'rgba(0, 0, 0, 1)',
        },
      },
      y: {
        ticks: {
          color: 'rgba(0, 0, 0, 1)',
        },
      },
    },
  };

  return (
    <motion.div
      className="p-4 bg-white rounded-lg shadow-2xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: '550px', height: '350px' }}
    >
      <Bar data={data} options={options} />
    </motion.div>
  );
};

const PieChart = ({ userStatuses }) => {
  const data = {
    labels: statuses,
    datasets: [
      {
        label: '# of Users',
        data: statuses.map(status => userStatuses[status] || 0),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <motion.div
      className="p-4 bg-white rounded-lg shadow-2xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: '350px', height: '350px' }}
    >
      <Pie data={data} />
    </motion.div>
  );
};

const PartnerApplicationChart = () => {
  const [userRoles, setUserRoles] = useState({});
  const [userStatuses, setUserStatuses] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/user'); // Update the endpoint as needed
        const users = response.data;

        const rolesCount = roles.reduce((acc, role) => {
          acc[role] = users.filter(user => user.role === role).length;
          return acc;
        }, {});

        const statusesCount = statuses.reduce((acc, status) => {
          acc[status] = users.filter(user => user.status === status).length;
          return acc;
        }, {});

        setUserRoles(rolesCount);
        setUserStatuses(statusesCount);
        setDataFetched(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">User Status Overview</h1>
      {dataFetched ? (
        <div className="flex justify-around gap-9">
          <BarChart userRoles={userRoles} />
          <PieChart userStatuses={userStatuses} />
        </div>
      ) : (
        <p className="text-center">Loading data...</p>
      )}
    </div>
  );
};

export default PartnerApplicationChart;
