"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const DeductBalanceForm = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/wallet/deductBalance', { email, amount });
      console.log('Response:', response.data);
      // handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error:', error);
      // handle error (e.g., show an error message)
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="flex justify-center items-center     "
    >
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full ">
        <h2 className="text-2xl font-bold mb-6 text-center">Deduct Balance</h2>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Deduct Amount</label>
          <input 
            type="number" 
            id="amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        
        <div className="flex items-center justify-between">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Deduct
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default DeductBalanceForm;
