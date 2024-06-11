"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UpdateRoleForm = () => {
  const [emailId, setEmailId] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Moved this up
  
    const formData = new FormData();
    formData.append('emailId', emailId);
  
    try {
      const response = await fetch('/api/admin/createAdmin', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setSuccess(true);
        setEmailId('');
      } else {
        setError('Failed to update role. Please try again.');
      }
    } catch (err) {
      setError('Failed to update role. Please try again.');
    } finally {
      setLoading(false); // Moved this down
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
        <h2 className="text-2xl font-bold mb-4">Create Super Admin - Legal257</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email ID</label>
            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
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
            {loading ? 'Updating...' : 'Update Role'}
          </motion.button>
        </form>
        {success && <p className="text-green-500 mt-4">Role updated successfully!</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </motion.div>
    </div>
  );
};

export default UpdateRoleForm;
