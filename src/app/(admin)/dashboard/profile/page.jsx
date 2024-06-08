"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ProfilePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/admin/profile', { params: { email: searchTerm } });
        setProfiles(response.data);
        console.log(profiles)
      } catch (error) {
        console.error("Error fetching profiles:", error);
        console.log(profiles)
      }
    };

    if (searchTerm !== '') {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div className="container w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-md shadow-md p-6 mt-10 w-full h-[70vh]"
      >
        <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search by email Id"
            className="border border-gray-300 rounded-md py-2 px-4 mr-2 w-3/4"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            onClick={() => setSearchTerm(searchTerm)} // Added for clarity
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map(profile => (
            <div key={profile.id} className="bg-gray-100 rounded-md shadow-md p-4">
              <h2 className="text-lg font-semibold">{profile.name}</h2>
              <p>Username: {profile.username}</p>
              {/* Add more profile details */}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
