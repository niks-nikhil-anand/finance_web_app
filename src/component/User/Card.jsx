import React from 'react';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { 
  FaFileInvoiceDollar, 
  FaMoneyCheckAlt, 
  FaEnvelope, 
  FaComments, 
  FaBuilding, 
  FaRegFileAlt, 
  FaWallet 
} from 'react-icons/fa';

import { GiPayMoney } from "react-icons/gi";

import Link from 'next/link';

const cardData = [
  {
    title: 'GST/ITR',
    icon: FaFileInvoiceDollar,
    bgColor: 'bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500',
    link: 'gstitr',
  },
  {
    title: 'Loan',
    icon: FaMoneyCheckAlt,
    bgColor: 'bg-gradient-to-r from-green-400 via-blue-400 to-purple-500',
    link: 'loan',
  },
  {
    title: 'Jono Jivan Micro Loan',
    icon: GiPayMoney ,
    bgColor: 'bg-gradient-to-r from-green-400 via-blue-400 to-purple-500',
    link: 'loan',
  },
  {
    title: 'Contact Us',
    icon: FaEnvelope,
    bgColor: 'bg-gradient-to-r from-blue-500 via-teal-400 to-green-400',
    link: 'contactus',
  },
  {
    title: 'Chat Now',
    icon: FaComments,
    bgColor: 'bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400',
    link: 'chatnow',
  },
  {
    title: 'Fintech Services',
    icon: FaBuilding,
    bgColor: 'bg-gradient-to-r from-purple-400 via-pink-400 to-red-400',
    link: 'fintech',
  },
  {
    title: 'Complaint',
    icon: FaRegFileAlt,
    bgColor: 'bg-gradient-to-r from-red-400 via-yellow-400 to-green-400',
    link: 'complaint',
  },
  {
    title: 'Status of Application',
    icon: FaRegFileAlt,
    bgColor: 'bg-gradient-to-r from-green-400 via-teal-400 to-blue-400',
    link: 'status',
  },
  {
    title: 'Wallet',
    icon: FaWallet,
    bgColor: 'bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400',
    link: 'wallet',
  },
];

const ColorfulCard = () => {
  const cookieStore = cookies();
  const authToken = cookieStore.get('userAuthToken');
  const username = jwt.decode(authToken.value)?.username;

  return (
    <div className="flex flex-wrap justify-center items-center space-y-4 p-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-6 m-2 rounded-lg shadow-lg text-white w-48 ${card.bgColor}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
          transition={{ duration: 0.3 }}
        >
          <Link href={`/user/${username}/${card.link}`}>
           
              <card.icon className="text-6xl mb-4" />
              <h2 className="text-xl font-bold text-center">{card.title}</h2>
            
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ColorfulCard;
