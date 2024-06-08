"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/cookies');
        const userData = response.data[0];
        setUser({
          name: userData.name,
          email: userData.email,
          mobile: userData.mobileNumber,
          services: userData.services,
          role: userData.role,
          city: userData.city,
          state: userData.state,
          username: userData.username,
          id: userData._id,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-md shadow-md p-6 mt-10 w-full h-full  "
      >
        <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
        {user ? (
          <div className="flex flex-col w-full gap-4 ">
            <div key={user.id} className="bg-gray-100 rounded-md shadow-md p-4">
              <p className=""><span className='text-lg font-semibold'>Name:-</span> {user.name}</p>
            </div>
            <div key={user.id} className="bg-gray-100 rounded-md shadow-md p-4">
            <p><span className='text-lg font-semibold'>Username:-</span>  {user.username}</p>
            </div>
            <div key={user.id} className="bg-gray-100 rounded-md shadow-md p-4">
            <p><span className='text-lg font-semibold'>Email:-</span>  {user.email}</p>
            </div>
            <div key={user.id} className="bg-gray-100 rounded-md shadow-md p-4">
            <p><span className='text-lg font-semibold'>Mobile No.:-</span>  {user.mobile}</p>
            </div>
            <div key={user.id} className="bg-gray-100 rounded-md shadow-md p-4">
            <p><span className='text-lg font-semibold'>Services:-</span>  {user.services}</p>
            </div>
            <div key={user.id} className="bg-gray-100 rounded-md shadow-md p-4">
            <p><span className='text-lg font-semibold'>Role:-</span>  {user.role}</p>
            </div>
            <div key={user.id} className="bg-gray-100 rounded-md shadow-md p-4">
            <p><span className='text-lg font-semibold'>City:-</span>  {user.city}</p>
              <p><span className='text-lg font-semibold'>State:-</span>  {user.state}</p>
            </div>
            <div key={user.id} className="bg-gray-100 rounded-md shadow-md p-4">
            <p><span className='text-lg font-semibold'>Legal257 Id:-</span>  {user.id}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;
