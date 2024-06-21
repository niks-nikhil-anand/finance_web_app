"use client"
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus the next input field
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleVerify = () => {
    // Add verification logic here
    if (otp.join('').length === 6) {
      setIsVerified(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
        <p className="mb-4">Please enter the 6-digit OTP sent to your email.</p>
        <div className="flex justify-center space-x-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 border border-gray-300 text-center text-xl font-semibold rounded"
            />
          ))}
        </div>
        <motion.button
          onClick={handleVerify}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          whileTap={{ scale: 0.95 }}
        >
          Verify Account
        </motion.button>
        {isVerified && (
          <motion.div
            className="mt-4 text-green-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            OTP Verified Successfully!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default OTPVerification;
