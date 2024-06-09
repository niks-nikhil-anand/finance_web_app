"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import forgot from '../../../../public/accounts/forgot.png';
import Link from 'next/link';

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('/api/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setMessage('If the email is registered, you will receive a reset link.');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
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
            Forgot your password?
          </h1>
          <p className="mb-4 text-center md:text-left">
            Enter your email to reset your password.
          </p>
          <div className="hidden md:block">
            <Image
              src={forgot}
              alt="Reset Password"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
      <div className="md:w-1/2 bg-white p-10 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded">
            Reset Password
          </button>
        </form>
        {message && <p className="mt-4 text-red-500">{message}</p>}
        <p className="mt-4">
          Remembered your password?{' '}
          <Link href="/partnersignin" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
