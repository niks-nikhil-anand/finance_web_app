"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ReferApplicationsTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/referandearn');
        setApplications(response.data);
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
      className="container mx-auto  w-[80%] bg-gray-100"
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue ">Refer Applications</h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-purple-100">
            <tr>
              <th className="py-2 px-4 border border-gray-300">Name</th>
              <th className="py-2 px-4 border border-gray-300">Email</th>
              <th className="py-2 px-4 border border-gray-300">Mobile Number</th>
              <th className="py-2 px-4 border border-gray-300">Service</th>
              <th className="py-2 px-4 border border-gray-300">Refer Mobile Number</th>
              <th className="py-2 px-4 border border-gray-300">contactNumber</th>
              <th className="py-2 px-4 border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <td className="py-2 px-4 border border-gray-300">{application.name}</td>
                <td className="py-2 px-4 border border-gray-300">{application.email}</td>
                <td className="py-2 px-4 border border-gray-300">{application.mobileNumber}</td>
                <td className="py-2 px-4 border border-gray-300">{application.service}</td>
                <td className="py-2 px-4 border border-gray-300">{application.referMobileNumber}</td>
                <td className="py-2 px-4 border border-gray-300">{application.contactNumber}</td>
                <td className="py-2 px-4 border border-gray-300">{application.status}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </motion.div>
  );
};

export default ReferApplicationsTable;
