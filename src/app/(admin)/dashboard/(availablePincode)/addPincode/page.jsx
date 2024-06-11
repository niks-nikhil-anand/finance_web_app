"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UpdateRoleForm = () => {
  const [availableServices, setAvailableServices] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData();
    formData.append('availableServices', availableServices);
    formData.append('pinCode', pinCode);
    formData.append('message', message);
  
    try {
      const response = await fetch('/api/admin/availablePincode', {
        method: 'POST',
        body: formData,
      }); 
      if (response.ok) {
        setSuccess(true);
        setAvailableServices('');
        setPinCode('');
        setMessage('');
      } else {
        setError('Failed to update role. Please try again.');
      }
    } catch (err) {
      setError('Failed to update role. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 w-full ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Add Available Pincode - Legal257</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Services</label>
            <select
              value={availableServices}
              onChange={(e) => setAvailableServices(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Services</option>
              <option value="GST/ITR Services">GST/ITR Services</option>
              <option value="Fintech Services">Fintech Services</option>
              <option value="Finance Services-Loan">Finance Services-Loan</option>
              <option value="JonoJivan Micro Loan">JonoJivan Micro Loan</option>
              <option value="All Services">All Services</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Pincode</label>
            <input
              type="text"
              value={pinCode}
              onChange={(e) => {
                const input = e.target.value;
                if (input.match(/^\d{0,6}$/)) {
                  setPinCode(input);
                }
              }}
              maxLength={6}
              required
              className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-200"
          >
            {loading ? 'Adding....' : 'Add Pincode'}
          </motion.button>
        </form>
        {success && <p className="text-green-500 mt-4">Role updated successfully!</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </motion.div>
    </div>
  );
};

export default UpdateRoleForm;
