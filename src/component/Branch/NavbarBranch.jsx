"use client"
import React, { useState } from 'react';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FcSettings } from "react-icons/fc";
import { motion } from 'framer-motion';

const NavbarBranch = ({ toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="gradient-black dark:from-gray-700 dark:via-gray-900 dark:to-black text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">Branch - Legal257</div>
      <div className="text-xl font-bold">Legal 257</div>
      <button onClick={toggleSidebar} className="md:hidden block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="hidden md:flex items-center gap-4">
        <motion.button onClick={toggleDarkMode} className="p-2" whileHover={{ scale: 1.1 }}>
          {isDarkMode ? (
            <MdLightMode className="w-8 h-8" />
          ) : (
            <MdDarkMode className="w-8 h-8" />
          )}
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }}>
          <IoIosNotifications className="w-8 h-8" />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }}>
          <FcSettings className="w-8 h-8" />
        </motion.button>
        <div className="relative group">
          <motion.button whileHover={{ scale: 1.1 }}>
            <CgProfile className="w-8 h-8" />
          </motion.button>
          <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded shadow-lg z-20">
            <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</a>
            <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
            <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBranch;
