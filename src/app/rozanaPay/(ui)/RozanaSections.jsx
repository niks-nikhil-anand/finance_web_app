"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaQrcode, FaUserFriends, FaPhone, FaUniversity, FaMoneyBillWave, FaExchangeAlt, FaFileInvoiceDollar, FaMobileAlt } from 'react-icons/fa';

const cardsData = [
  { title: 'Scan QR Code', icon: <FaQrcode /> },
  { title: 'Pay Contacts', icon: <FaUserFriends /> },
  { title: 'Pay Phone Number', icon: <FaPhone /> },
  { title: 'Bank Transfer', icon: <FaUniversity /> },
  { title: 'Pay UPI ID or Number', icon: <FaMoneyBillWave /> },
  { title: 'Self Transfer', icon: <FaExchangeAlt /> },
  { title: 'Pay Bills', icon: <FaFileInvoiceDollar /> },
  { title: 'Mobile Recharge', icon: <FaMobileAlt /> },
];

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
  },
  initial: {
    scale: 1,
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
  },
};

const RozanaSection = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Rozana Pay</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-4 shadow-lg flex flex-col items-center justify-center text-center"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <div className="text-4xl text-blue-500 mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold">{card.title}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RozanaSection;
