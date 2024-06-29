"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import blank_profile from '../../../../../../public/blank_profile_pic.png';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

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
          profilePic: userData.profilePic,
        });
        setProfilePic(userData.profilePic);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleVerification = async () => {
    try {
      await axios.post(`/api/sendVerificationOTP`);
      setUser({ ...user, isVerified: true });
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };

  const handleProfilePicUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('profilePic', file);

    try {
      const response = await axios.post('/api/uploadProfilePic', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setProfilePic(response.data.profilePicUrl);
    } catch (error) {
      console.error('Error uploading profile picture:', error);
    }
  };

  const handleProfilePicRemove = async () => {
    try {
      await axios.post('/api/removeProfilePic');
      setProfilePic(null);
    } catch (error) {
      console.error('Error removing profile picture:', error);
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
        <div className="mb-4 border-black inline-block">
          <button onClick={() => window.history.back()} className="text-xl text-red-700 border-transparent rounded-full p-3">
            <FaArrowLeft />
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
        {user ? (
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col items-center mb-4">
              <div className="relative">
                <img
                  src={profilePic || blank_profile}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200 shadow-md"
                />
                {profilePic && (
                  <div className="absolute top-0 right-0">
                    <button
                      onClick={handleProfilePicRemove}
                      className="text-red-500 hover:underline focus:outline-none"
                    >
                      Remove Image
                    </button>
                  </div>
                )}
              </div>
              <div className="bg-gray-100 rounded-md shadow-md p-4 w-full">
                <p><span className='text-lg font-semibold'>Name:</span> {user.name}</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>Username:</span> {user.username}</p>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4">
              <p><span className='text-lg font-semibold'>Verified:</span> {user.isVerified ? 'Already Verified' : 'Not Verified'}</p>
              {!user.isVerified && (
                <button onClick={handleVerification} className="text-blue-500 hover:underline focus:outline-none">
                  <Link href={`/user/${user.username}/verifyAccount`}>
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
              <p><span className='text-lg font-semibold'>Legal Id:</span> {user.id}</p>
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
