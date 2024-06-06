import React from 'react';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { 
  FaFileInvoiceDollar, 
  FaMoneyCheckAlt,  
  FaBuilding, 
  FaRegFileAlt, 
  FaWallet 
} from 'react-icons/fa';
import { FaIndianRupeeSign , FaWpforms } from 'react-icons/fa6';
import { ImProfile } from 'react-icons/im';
import { GiPayMoney } from 'react-icons/gi';
import Link from 'next/link';
import { LuLogOut } from "react-icons/lu";

import LogoutButton from './LogoutButton.jsx';

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
    icon: GiPayMoney,
    bgColor: 'bg-gradient-to-r from-green-400 via-blue-400 to-purple-500',
    link: 'microLoan',
  },
  {
    title: 'Fintech Services',
    icon: FaBuilding,
    bgColor: 'bg-gradient-to-r from-purple-400 via-pink-400 to-red-400',
    link: 'fintech',
  },
  {
    title: 'Complaint',
    icon: FaWpforms,
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
    title: 'Rozana Pay',
    icon: FaIndianRupeeSign,
    bgColor: 'bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400',
    link: 'wallet',
  },
  {
    title: 'Profile',
    icon: ImProfile,
    bgColor: 'bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400',
    link: 'profile',
  },
  {
    title: 'LogOut',
    icon: LuLogOut,
    bgColor: 'bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400',
    link: 'logout',
  },
];

const ColorfulCard = () => {
  const cookieStore = cookies();
  const authToken = cookieStore.get('userAuthToken');
  const username = jwt.decode(authToken.value)?.username;

  return (
    <div className="flex flex-wrap justify-center items-center space-y-2 p-4 gap-4">
      {cardData.map((card, index) => (
        card.link === 'logout' ? (
          <LogoutButton key={index} bgColor={card.bgColor} />
        ) : (
          <Link href={`/user/${username}/${card.link}`} key={index} passHref>
            <div
              className={`flex flex-col items-center justify-center p-4 md:p-6 m-2 rounded-lg shadow-lg text-white w-full md:w-48 ${card.bgColor}`}
            >
              <card.icon className="text-4xl md:text-6xl mb-2 md:mb-4" />
              <h2 className="text-lg md:text-xl font-bold text-center">{card.title}</h2>
            </div>
          </Link>
        )
      ))}
    </div>
  );
};

export default ColorfulCard;
