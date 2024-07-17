"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const GroceryIdCardTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/groceryRationCard/form');
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

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`/api/groceryRationCard/form/${id}`, { status: newStatus });
      // Optionally update state or handle success message
    } catch (error) {
      console.error('Error updating status:', error);
      // Handle error gracefully
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto w-[80%] bg-gray-100"
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">Grocery Id Card Applications</h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-purple-100">
              <th className="py-2 px-4 border border-gray-400">Name</th>
              <th className="py-2 px-4 border border-gray-400">Email</th>
              <th className="py-2 px-4 border border-gray-400">Father's Name</th>
              <th className="py-2 px-4 border border-gray-400">Address</th>
              <th className="py-2 px-4 border border-gray-400">District</th>
              <th className="py-2 px-4 border border-gray-400">Pin Code</th>
              <th className="py-2 px-4 border border-gray-400">WhatsApp Number</th>
              <th className="py-2 px-4 border border-gray-400">Mobile Number</th>
              <th className="py-2 px-4 border border-gray-400">State</th>
              <th className="py-2 px-4 border border-gray-400">Aadhaar Number</th>
              <th className="py-2 px-4 border border-gray-400">PAN Number</th>
              <th className="py-2 px-4 border border-gray-400">Bank Account Number</th>
              <th className="py-2 px-4 border border-gray-400">IFSC Code</th>
              <th className="py-2 px-4 border border-gray-400">Bank Name</th>
              <th className="py-2 px-4 border border-gray-400">Photo Copy</th>
              <th className="py-2 px-4 border border-gray-400">Profile Photo</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border border-gray-300">{application.name || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.email || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.fatherName || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.address || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.district || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.pinCode || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.whatsAppNumber || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.mobileNumber || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.state || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.aadhaarNumber || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.panNumber || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.bankAccountNumber || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.ifscCode || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.bankName || 'Not Available'}</td>
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
                    onClick={() => handleImageClick(application.profilePhoto || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.profilePhoto ? 'Profile Photo' : 'Not Available'}
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

export default GroceryIdCardTable;
