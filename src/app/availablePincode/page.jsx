"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const SearchService = () => {
  const [pinCode, setPinCode] = useState('');
  const [isServiceable, setIsServiceable] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setIsServiceable(null);
    try {
      const response = await axios.post('/api/searchAvailablePincode', { pinCode });
      if (response.data.serviceable) {
        setIsServiceable(true);
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
    <div className="flex flex-col items-center justify-center min-h-screen gradient_yellow p-4">
      <motion.div 
        className="p-8 gradient-blue shadow-md rounded-lg w-full max-w-md" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-4 text-center"> Check Service Availability</h1>
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
            className="px-6 py-3 gradient-black text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
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
            className="text-green-500 text-center" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Available services: [List your services here]
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
