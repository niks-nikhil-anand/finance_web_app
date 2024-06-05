"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ReferApplicationsTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const transactionsResponse = await axios.get('/api/wallet/transaction');
        setApplications(transactionsResponse.data.transactions);
      } catch (error) {
        console.error('Error fetching refer applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto w-[80%] bg-gray-100"
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">All Transactions</h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-purple-100">
            <tr>
              <th className="py-2 px-4 border border-gray-300">ID</th>
              <th className="py-2 px-4 border border-gray-300">Type</th>
              <th className="py-2 px-4 border border-gray-300">Amount</th>
              <th className="py-2 px-4 border border-gray-300">Date</th>
              <th className="py-2 px-4 border border-gray-300">Time</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => {
              const date = new Date(application.date);
              const formattedDate = date.toLocaleDateString('en-IN');
              const formattedTime = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

              return (
                <motion.tr
                  key={index}
                  className="hover:bg-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <td className="py-2 px-4 border border-gray-300">{application._id}</td>
                  <td className="py-2 px-4 border border-gray-300">{application.type}</td>
                  <td className="py-2 px-4 border border-gray-300">{application.amount.toLocaleString('en-IN')}</td>
                  <td className="py-2 px-4 border border-gray-300">{formattedDate}</td>
                  <td className="py-2 px-4 border border-gray-300">{formattedTime}</td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ReferApplicationsTable;
