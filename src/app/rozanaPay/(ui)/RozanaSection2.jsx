"use client"
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  "Scan QR Code: Quickly and securely pay by scanning QR codes.",
  "Pay Contacts: Easily send money to your contacts with just a few taps.",
  "Pay Phone Number: Transfer funds directly to any phone number.",
  "Bank Transfer: Effortlessly move money between bank accounts.",
  "Pay UPI ID or Number: Make payments using UPI IDs or numbers for a seamless experience.",
  "Self Transfer: Manage your own funds by transferring money between your accounts.",
  "Pay Bills: Take care of all your bill payments in one convenient place.",
  "Mobile Recharge: Instantly recharge your mobile phone without any hassle."
];

const RozanaPayDetails = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-100 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Coming Soon: Legal257 Rozana Pay</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-500">Simplifying Your Daily Transactions with Ease and Security - Legal257</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-lg md:text-xl leading-relaxed">
          Legal257 is excited to introduce Rozana Pay, an innovative payment platform designed to streamline your daily financial transactions with unmatched ease and security. Whether you're paying bills, transferring money, or recharging your mobile, Rozana Pay offers a comprehensive solution to meet all your needs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Key Features:</h3>
        <ul className="list-disc list-inside space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-lg md:text-xl">
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <p className="text-lg md:text-xl leading-relaxed">
          Legal257 Rozana Pay is designed to provide you with a secure, reliable, and user-friendly experience. Our platform ensures that every transaction is protected with the highest level of security protocols, giving you peace of mind with every payment.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4">
          Stay tuned for the official launch of Legal257 Rozana Pay and be ready to transform the way you handle your daily transactions. Simplify your financial life with Legal257 Rozana Pay – where convenience meets security.
        </p>
      </motion.div>
    </div>
  );
};

export default RozanaPayDetails;
