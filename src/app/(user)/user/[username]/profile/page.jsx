"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    services: '',
    role: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/cookies');
        const userData = response.data[0];
        setUser({
          name: userData.name,
          email: userData.email,
          mobile: userData. mobileNumber,
          services: userData.services,
          role: userData.role
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div 
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md frame"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className=" font-semibold mb-4 text-center text-gradient_yellow base-bold underline ">Profile Page</h1>
        <div className="mb-4 flex gap-2 justify-center items-center">
          <label className=" text-gradient-black base-bold">Username:</label>
          <p className="text-gray-900">{user.name}</p>
        </div>
        <div className="mb-4 flex gap-2 justify-center items-center">
          <label className="text-gradient-black block  base-bold">Email:</label>
          <p className="text-gray-900">{user.email}</p>
        </div>
        <div className="mb-4 flex gap-2 justify-center items-center">
          <label className="text-gradient-black block  base-bold">Mobile Number:</label>
          <p className="text-gray-900">{user.mobile}</p>
        </div>
        <div className="mb-4 flex gap-2 justify-center items-center">
          <label className="text-gradient-black block  base-bold">Services:</label>
          <p className="text-gray-900">{user.services}</p>
        </div>
        <div className="mb-4 flex gap-2 justify-center items-center">
          <label className="text-gradient-black block  base-bold">Role:</label>
          <p className="text-gray-900">{user.role}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
