"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const SearchService = () => {
  const [pinCode, setPinCode] = useState('');
  const [isServiceable, setIsServiceable] = useState(null);
  const [serviceDetails, setServiceDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setIsServiceable(null);
    setServiceDetails({});
    try {
      const response = await axios.get(`/api/searchAvailablePincode?pinCode=${pinCode}`);
      if (response.status === 200) {
        setIsServiceable(true);
        setPinCode('')
        setServiceDetails(response.data.data);
      } else {
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
            className="text-black xt-center" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold  text-center mb-5">Service Available</h2>
            <p><strong className='font-bold'>Pin Code:</strong> {serviceDetails.pinCode}</p>
            <p><strong className='font-bold'>Message:</strong> {serviceDetails.message}</p>
            <p className='mt-5'><strong className='font-bold'>Available Services:</strong></p>
            <ul className='text-center'>
              {serviceDetails.availableServices.split(',').map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
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
