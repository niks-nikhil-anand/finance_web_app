"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const SearchService = () => {
  const [pinCode, setPinCode] = useState('');
  const [isServiceable, setIsServiceable] = useState(null);
  const [serviceDetails, setServiceDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setIsServiceable(null);
    setServiceDetails([]);
    try {
      console.log("Fetching service availability for pinCode:", pinCode);
      const response = await axios.get(`/api/searchAvailablePincode?pinCode=${pinCode}`);
      console.log("API response:", response.data);

      if (response.status === 200 ) {
        console.log("Service details found:", response.data.data);
        console.log("Service details found:", response.data);
        setIsServiceable(true);
        setServiceDetails(response.data.data);
        setPinCode('');
      } else {
        console.log("Service not available for this pinCode.");
        setIsServiceable(false);
      }
    } catch (error) {
      console.error("Error fetching service availability:", error);
      setIsServiceable(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-500 p-4">
      <motion.div
        className="p-8 bg-gradient-to-r from-blue-400 to-blue-500 shadow-md rounded-lg w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Check Service Availability</h1>
        <div className="flex items-center mb-4 w-full flex-col gap-5">
          <input
            type="text"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="Enter 6-digit pin code"
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
            disabled={loading || pinCode.length !== 6}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <span className="loader mr-2"></span>
                Loading...
              </span>
            ) : (
              <FaSearch className='w-5' />
            )}
          </button>
        </div>
        {isServiceable === true && (
          <motion.div
            className="text-black text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-center mb-5">Service Available</h2>
            {serviceDetails.map((detail) => (
              <div key={detail._id} className="mb-4 p-4 bg-white rounded shadow">
                <p><strong className='font-bold'>Name:</strong> {detail.name}</p>
                <p><strong className='font-bold'>Services:</strong> {detail.services}</p>
                <p><strong className='font-bold'>Address:</strong> {detail.city}, {detail.state}, {detail.pinCode}</p>
                <p><strong className='font-bold'>Partner Type:</strong> {detail.role}</p>
                <p><strong className='font-bold'>Mobile Number:</strong> {detail.mobileNumber}</p>
                <p><strong className='font-bold'>Email Address:</strong> {detail.email}</p>
              </div>
            ))}
          </motion.div>
        )}
        {isServiceable === false && (
          <motion.div
            className="text-black text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Not serviceable here yet.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SearchService;
