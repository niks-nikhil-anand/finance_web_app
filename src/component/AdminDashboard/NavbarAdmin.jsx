"use client"
import React, { useState } from 'react';
import { MdLightMode ,  MdDarkMode} from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
const NavbarAdmin = ({ toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white p-4 flex justify-between items-center shadow-md  ">
      <div className="text-xl font-bold">Admin Panel </div>
      <div className="text-xl font-bold">Legal 257 </div>
      <button onClick={toggleSidebar} className="md:hidden block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="hidden md:flex items-center gap-[2rem]">
        <button onClick={toggleDarkMode} className="p-2">
          {isDarkMode ? (
           <MdLightMode className="w-8 h-8" />
          ) : (
            <MdDarkMode className="w-8 h-8" />
          )}
        </button>
        <button className="">
        <IoIosNotifications className="w-8 h-8" />
        </button>
        <button className="">
        <IoSettings className="w-8 h-8" />
        </button>
        <div className="relative group">
          <button className="">
          <CgProfile className="w-8 h-8" />
          </button>
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

export default NavbarAdmin;

