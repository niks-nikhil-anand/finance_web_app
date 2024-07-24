"use client"
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

const GroceryIdCardTable = () => {
  const [applications, setApplications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentApplication, setCurrentApplication] = useState(null);

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
      setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleEdit = (application) => {
    setCurrentApplication(application);
    setIsOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/groceryRationCard/form/${id}`);
      setApplications(applications.filter(application => application._id !== id));
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(`/api/groceryRationCard/form/${currentApplication._id}`, currentApplication);
      setApplications(applications.map(app => app._id === currentApplication._id ? currentApplication : app));
      setIsOpen(false);
    } catch (error) {
      console.error('Error saving application:', error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto w-[80%] bg-gray-100 p-4"
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">Grocery Id Card Applications</h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-purple-100">
              <th className="py-2 px-4 border border-gray-400">Name</th>
              <th className="py-2 px-4 border border-gray-400">Email</th>
              <th className="py-2 px-4 border border-gray-400">Status</th>
              <th className="py-2 px-4 border border-gray-400">Father&apos;s Name</th>
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
              <th className="py-2 px-4 border border-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border border-gray-300">{application.name || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.email || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">
                  <select
                    value={application.status}
                    onChange={(e) =>
                      handleStatusChange(application._id, e.target.value)
                    }
                    className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  >
                    {["Active", "Blocked"].map((status) => (
                      <option key={status} value={status} >
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
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
                <td className="py-2 px-4 border border-gray-300 flex space-x-2">
                  <button
                    onClick={() => handleEdit(application)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(application._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 z-10 max-w-md w-full"
          >
            <Dialog.Title className="text-lg font-bold mb-4">Edit Application</Dialog.Title>
            {currentApplication && (
              <>
                <label className="block mb-2">
                  Name:
                  <input
                    type="text"
                    value={currentApplication.name}
                    onChange={(e) => setCurrentApplication({ ...currentApplication, name: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </label>
                {/* Add more fields as needed */}
                <div className="flex justify-end space-x-2 mt-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </Dialog>
    </motion.div>
  );
};

export default GroceryIdCardTable;
