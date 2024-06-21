"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

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
          isVerified: userData.isVerified,
          services: userData.services,
          role: userData.role,
          city: userData.city,
          state: userData.state,
          shopAddress: userData.shopAddress,
          username: userData.username,
          id: userData._id,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleVerification = async () => {
    try {
      await axios.post(`/api/verify/${user.id}`);
      setUser({ ...user, isVerified: true });
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };

  return (
    <div className="container w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-md shadow-md p-6 mt-10 w-full h-full"
      >
        <div className="mb-4 border-2 inline-block">
          <button onClick={() => window.history.back()} className="text-xl text-red-700 border-black rounded-full p-3">
            <FaArrowLeft />
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
        {user ? (
          <div className="flex flex-col w-full gap-4">
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>Name:</span> {user.name}</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>Username:</span> {user.username}</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>Verified:</span> {user.isVerified ? 'Already Verified' : 'Not Verified'}</p>
              {!user.isVerified && (
                <button onClick={handleVerification} className="text-blue-500 hover:underline focus:outline-none">
                  <Link  href={`/user/${user.username}/verifyAccount`}>
                  Click here to verify
                  </Link>
                 
                </button>
              )}
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>Email:</span> {user.email}</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>Mobile No.:</span> {user.mobile}</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>Services:</span> {user.services}</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>Role:</span> {user.role}</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>City:</span> {user.city}</p>
              <p><span className='text-lg font-semibold'>State:</span> {user.state}</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>Shop Address:</span> {user.shopAddress}</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>Legal257 Id:</span> {user.id}</p>
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
