"use client";
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toPng } from 'html-to-image';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../../../../../../public/logo2.png';
import legalqr from '../../../../../../public/logo/legalqr.png';
import blank_profile from '../../../../../../public/blank_profile_pic.png';
import barcode from '../../../../../../public/barcode.gif';

const IdCard = () => {
  const [partner, setPartner] = useState(null);
  const [wallet, setWallet] = useState(null);
  const cardRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/branch/profile');
        const userData = response.data.Partner;
        const walletData = response.data.branch[0];
        setPartner(userData);
        setWallet(walletData);

        console.log(walletData)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const downloadIdCard = () => {
    if (cardRef.current) {
      toPng(cardRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'id-card.png';
          link.click();
        })
        .catch((error) => {
          console.error('Error generating image:', error);
        });
    }
  };

  if (!partner) {
    return <div>Loading...</div>;
  }

  return partner ? (
    <div className='flex flex-col items-center justify-center w-full bg-gradient-to-r from-gray-100 to-gray-300 '>
      
      <div className="py-5 w-full max-w-6xl flex justify-between">
        <div ref={cardRef} className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-4">
          {/* Front Side of the Card */}
          <motion.div
            className="w-full md:w-64 h-[30rem] bg-white rounded-lg shadow-2xl overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-purple-600 h-[8rem] flex justify-center items-center relative">
              <Image
                src={partner.profilePic || blank_profile}
                alt="Profile"
                height={100}
                width={100}
                className="w-22 h-22 border-4 border-white shadow-lg mb-5 mt-3"
              />
            </div>
            <div className="p-4 text-center mt-8">
              <h2 className="text-xl text-gradient-blue font-extrabold">{partner.name}</h2>
              <p className="text-gray-600">{partner.role}</p>
              <div className="mt-4">
                <Image
                  src={legalqr}
                  height={100}
                  width={100}
                  alt="QR Code"
                  className="mx-auto"
                />
              </div>
              <p className="text-sm">{partner.mobile}</p>
              <p className="text-sm">{partner.username}</p>
              <p className="mt-4 text-sm">{partner.city}, {partner.state}</p>
            </div>
            <div className="absolute left-0">
              <Image
                src={logo}
                height={100}
                width={100}
                alt="Logo"
                className="mx-auto"
              />
            </div>
          </motion.div>

          {/* Back Side of the Card */}
          <motion.div
            className="w-full md:w-64 h-[30rem] bg-purple-600 rounded-lg shadow-lg overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-4">
              <h2 className="text-xl font-bold text-white text-center underline">Information</h2>
              <div className="mt-4 text-white">
                <p className="font-bold">Email:</p>
                <p>{partner.email}</p>
                <p className="font-bold mt-2">Mobile No:</p>
                <p>{partner.mobile}</p>
                <p className="font-bold mt-2">Legal257 Id:</p>
                <p>{partner.id}</p>
                <p className="font-bold mt-2">Legal257 Services:</p>
                <p>{partner.services}</p>
                <p className="font-bold mt-2">Office Address:</p>
                <p>{partner.shop}</p>
              </div>
              <div className="flex justify-center mt-[4rem]">
                <Image
                  src={barcode}
                  alt="Barcode"
                  height={800}
                  width={800}
                  className=""
                />
              </div>
            </div>
            <div className="absolute left-0 bottom-2">
              <Image
                src={logo}
                height={100}
                width={100}
                alt="Logo"
                className="mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <button onClick={downloadIdCard} className="text-white bg-blue-500 p-2 rounded  mt-5">
        Download IdCard
      </button>
    </div>
  ) : null;
};

export default IdCard;
