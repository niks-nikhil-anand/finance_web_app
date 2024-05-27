"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const GstApplicationsTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/businessApplication');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching GST applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container bg-gray-100 p-4 h-full"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">GST/ITR Applications</h2>
      <div className="table-responsive overflow-x-scroll">
      <table className="table-auto bg-white border border-gray-300 min-w-full">
          <thead className="bg-purple-100">
            <tr className=''>
              <th className="py-2 px-4 border border-gray-300">Name</th>
              <th className="py-2 px-2 border border-gray-300 w-36">Email</th>
              <th className="py-2 px-4 border border-gray-300">Mobile Number</th>
              <th className="py-2 px-4 border border-gray-300">Partner ID</th>
              <th className="py-2 px-4 border border-gray-300">Registration Type</th>
              <th className="py-2 px-4 border border-gray-300">Aadhaar Card</th>
              <th className="py-2 px-4 border border-gray-300">PAN Card</th>
              <th className="py-2 px-4 border border-gray-300">Bank Passbook</th>
              <th className="py-2 px-4 border border-gray-300">Electricity Bill</th>
              <th className="py-2 px-4 border border-gray-300">Photo</th>
              <th className="py-2 px-4 border border-gray-300">Bank Statements</th>
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
                <td className="py-2 px-2 border border-gray-300 text-sm">{application.email}</td>
                <td className="py-2 px-4 border border-gray-300">{application.mobileNumber}</td>
                <td className="py-2 px-4 border border-gray-300">{application.partnerID}</td>
                <td className="py-2 px-4 border border-gray-300">{application.registrationType}</td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.aadhaarCard && (
                    <a
                      href="#"
                      onClick={() => handleImageClick(application.aadhaarCard)}
                      className="text-blue-500 hover:underline"
                    >
                      View Aadhaar Card
                    </a>
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.panCard && (
                    <a
                      href="#"
                      onClick={() => handleImageClick(application.panCard)}
                      className="text-blue-500 hover:underline"
                    >
                      View PAN Card
                    </a>
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.bankPassbook && (
                    <a
                      href="#"
                      onClick={() => handleImageClick(application.bankPassbook)}
                      className="text-blue-500 hover:underline"
                    >
                      View Bank Passbook
                    </a>
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.electricityBill && (
                    <a
                      href="#"
                      onClick={() => handleImageClick(application.electricityBill)}
                      className="text-blue-500 hover:underline"
                    >
                      View Electricity Bill
                    </a>
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.photoCopy && (
                    <a
                      href="#"
                      onClick={() => handleImageClick(application.photoCopy)}
                      className="text-blue-500 hover:underline"
                    >
                      View Photo
                    </a>
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.bankStatement && (
                    <a
                      href="#"
                      onClick={() => handleImageClick(application.bankStatement)}
                      className="text-blue-500 hover:underline"
                    >
                      View Bank Statements
                    </a>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default GstApplicationsTable;
