"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const PartnerLoanTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/partner/gstUser');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching loan applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  const handleStatusChange = async (userId, status) => {
    try {
      await axios.post('/api/partner/updateStatusGstItr', { userId,  status });
      setApplications((prevApplications) =>
        prevApplications.map((application) =>
          application._id === userId ? { ...application,  status} : application
        )
      );
      
    } catch (error) {
     
      console.error("Error updating status:", error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto w-[80%] bg-gray-100"
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">GST User Applications</h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-purple-100">
              <th className="py-2 px-4 border border-gray-400">Name</th>
              <th className="py-2 px-4 border border-gray-400">Status</th>
              <th className="py-2 px-4 border border-gray-400">Email</th>
              <th className="py-2 px-4 border border-gray-400">Mobile Number</th>
              <th className="py-2 px-4 border border-gray-400">Registration Type</th>
              <th className="py-2 px-4 border border-gray-400">Aadhaar Card</th>
              <th className="py-2 px-4 border border-gray-400">PAN Card</th>
              <th className="py-2 px-4 border border-gray-400">Photo Copy</th>
              <th className="py-2 px-4 border border-gray-400">Bank Passbook</th>
              <th className="py-2 px-4 border border-gray-400">Electricity Bill</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border border-gray-300">{application.name || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">
                  <select
                    value={application.status}
                    onChange={(e) =>
                      handleStatusChange(
                        application._id,
                        e.target.value,
                      )
                    }
                    className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  >
                    {["Details Pending", "Under Processing", "Approved", "Rejected"].map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border border-gray-300">{application.email || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.mobileNumber || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.registrationType || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.aadhaarCard || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.aadhaarCard ? 'Aadhaar Card' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.panCard || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.panCard ? 'PAN Card' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.photoCopy || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.photoCopy ? 'Photo Copy' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.bankPassbook || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.bankPassbook ? 'Bank Passbook' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.electricityBill || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.electricityBill ? 'Electricity Bill' : 'Not Available'}
                  </a>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PartnerLoanTable;
