"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Link from 'next/link';

const NavbarUser = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/user/username');
        setUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href={"/"}> 
        <div className="text-white font-bold text-lg">Legal 257 - DSA</div>
        </Link>
        <motion.div
          className="text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
         {/* {username && <span>Welcome, {username}</span>} */}
         <span>Welcome , Nikhil</span>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavbarUser;
