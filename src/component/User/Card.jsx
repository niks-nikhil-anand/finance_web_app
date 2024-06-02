"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFileInvoiceDollar, 
  FaMoneyCheckAlt, 
  FaEnvelope, 
  FaComments, 
  FaBuilding, 
  FaRegFileAlt, 
  FaWallet 
} from 'react-icons/fa';

const cardData = [
  {
    title: 'GST/ITR',
    icon: FaFileInvoiceDollar,
    bgColor: 'bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500',
  },
  {
    title: 'Loan',
    icon: FaMoneyCheckAlt,
    bgColor: 'bg-gradient-to-r from-green-400 via-blue-400 to-purple-500',
  },
  {
    title: 'Contact Us',
    icon: FaEnvelope,
    bgColor: 'bg-gradient-to-r from-blue-500 via-teal-400 to-green-400',
  },
  {
    title: 'Chat Now',
    icon: FaComments,
    bgColor: 'bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400',
  },
  {
    title: 'Fintech Services',
    icon: FaBuilding,
    bgColor: 'bg-gradient-to-r from-purple-400 via-pink-400 to-red-400',
  },
  {
    title: 'Complaint',
    icon: FaRegFileAlt,
    bgColor: 'bg-gradient-to-r from-red-400 via-yellow-400 to-green-400',
  },
  {
    title: 'Status of Application',
    icon: FaRegFileAlt,
    bgColor: 'bg-gradient-to-r from-green-400 via-teal-400 to-blue-400',
  },
  {
    title: 'Wallet',
    icon: FaWallet,
    bgColor: 'bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400',
  },
];

const ColorfulCard = () => {
  return (
    <div className="flex flex-wrap justify-center items-center space-y-4 p-4">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center justify-center p-6 m-2 rounded-lg shadow-lg text-white w-48 ${card.bgColor}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
          transition={{ duration: 0.3 }}
        >
          <card.icon className="text-6xl mb-4" />
          <h2 className="text-xl font-bold text-center">{card.title}</h2>
        </motion.div>
      ))}
    </div>
  );
};

export default ColorfulCard;
