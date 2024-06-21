"use client";

import Image from 'next/image';
import { useState } from 'react';
import forgot from '../../../../public/accounts/forgot.png';
import Link from 'next/link';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

export default function ForgotPassword() {
 
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);


  const notifyLoading = () => {
    toast.info("Sending email...", {
      position: "bottom-right"
    });
  };

  const notifySuccess = () => {
    toast.success("Email is sent to reset Password", {
      position: "bottom-right"
    });
  };

  const notifyError = (message) => {
    toast.error(`Error: ${message}`, {
      position: "bottom-right"
    });
  };


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    setLoading(true);
    notifyLoading();
    try {
      const response = await fetch('/api/forgotPassword', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setEmail('');
        notifySuccess();
      } else {
        notifyError('Something went wrong.');
      }
    } catch (error) {
      console.log(formData)
      setLoading(false);
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
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-2 rounded bg-white bg-opacity-50 border-2	"
          required
        />
          </div>
          <motion.button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded"
            disabled={loading}
            
            whileTap={{ scale: 0.95 }}
          >
          {loading ? 'Sending...' : 'Send Reset Link'}
          </motion.button>
        </form>
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
