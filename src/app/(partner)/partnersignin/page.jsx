"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Illustration from '../../../../public/Illustration.png'
import Link from 'next/link';

export default function Signin() {
  const [formData, setFormData] = useState({
    retailerId: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen mb-[6rem] md:mb-[0rem]">
      <div className="md:w-1/2 bg-blue-500 text-white p-10 flex flex-col justify-center items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
            Steps into the real Financial freedom.
          </h1>
          <div className="hidden md:block">
            <Image
             src={Illustration}
              alt="Financial Freedom"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
      <div className="md:w-1/2 bg-white p-10 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        
        <form>
          <div className="mb-4">
            <label className="block mb-1">Partner ID or Email ID</label>
            <input
              type="text"
              name="retailerId"
              value={formData.retailerId}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded">
            Sign In
          </button>
        </form>
        <p className="mt-4">
          Do not have an account?{' '}
          <Link href={"/partnersignup"} className="text-blue-500">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
