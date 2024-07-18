"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { toPng } from 'html-to-image';
import Image from 'next/image'; // Assuming you're using Next.js Image component

const GroceryRationCard = () => {
  const [rationCard, setRationCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRationCard = async () => {
      try {
        const emailFromURL = window.location.pathname.split('/')[2];
        const response = await fetch(`/api/groceryRationCard/${emailFromURL}`);
        if (response.ok) {
          const result = await response.json();
          setRationCard(result[0]);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRationCard();
  }, []);

  const downloadIdCard = () => {
    const cardElement = document.getElementById('id-card');
    if (cardElement) {
      toPng(cardElement)
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

  return (
    <div className='bg-gray-100 min-h-screen p-5'>
      <div className="mb-5">
        <button onClick={() => window.history.back()} className="text-xl text-red-700 border-black rounded-full p-3">
          <FaArrowLeft />
        </button>
      </div>
      {rationCard ? (
        <div className="flex justify-center items-center">
          <div id="id-card" className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Front Side of the Card */}
            <motion.div
              className="w-full md:w-64 h-auto md:max-h-[30rem] bg-white rounded-lg shadow-2xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-green-600 h-[8rem]  justify-center items-center relative rounded-t-lg flex flex-col">
                <h1 className="text-sm text-black font-extrabold mt-5 underline">Jono Jivan Grocery Ration Card</h1>
                <Image
                  src={rationCard.profilePhoto}
                  alt="Profile"
                  height={100}
                  width={100}
                  className="w-22 h-22 border-4 border-white shadow-lg mb-5 mt-3 rounded-full"
                />
              </div>
              <div className="p-4 text-center mt-8 flex justify-start flex-col">
                <h2 className="text-xl text-blue-700 font-extrabold">{rationCard.name}</h2>
                <p className="text-gray-600">Father's Name: {rationCard.fatherName}</p>
                <div className="mt-4">
                </div>
                <p className="text-sm">WhatsApp No: {rationCard.whatsAppNumber}</p>
                <p className="text-sm">Mobile: {rationCard.mobileNumber}</p>
                <p className="mt-4 text-sm">Address: {rationCard.address}, {rationCard.district}, {rationCard.state} - {rationCard.pinCode}</p>
              </div>

              <div className="">
                <Image
                  src={rationCard.profilePhoto}
                  height={100}
                  width={100}
                  alt="Logo"
                  className="mx-auto"
                />
              </div>
            </motion.div>

            {/* Back Side of the Card */}
            <motion.div
              className="w-full md:w-64 h-auto md:max-h-[30rem] bg-green-600 rounded-lg shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-4">
                <h2 className="text-xl font-bold text-white text-center mb-4">Information</h2>
                <div className="text-white">
                  <p className="font-bold">Email:</p>
                  <p>{rationCard.email}</p>
                  <p className="font-bold mt-2">Aadhaar No:</p>
                  <p>{rationCard.aadhaarNumber}</p>
                  <p className="font-bold mt-2">PAN No:</p>
                  <p>{rationCard.panNumber}</p>
                  <p className="font-bold mt-2">Bank Details:</p>
                  <p>Account No: {rationCard.bankAccountNumber}</p>
                  <p>IFSC: {rationCard.ifscCode}</p>
                  <p>Bank Name: {rationCard.bankName}</p>
                  <p className="font-bold mt-2">Address Details:</p>
                  <p>Address:- {rationCard.address}</p>
                  <p>State: {rationCard.state}</p>
                  <p>District: {rationCard.district}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={downloadIdCard} className="text-white bg-blue-500 p-2 rounded mx-auto block mt-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Download ID Card
      </button>
    </div>
  );
};

export default GroceryRationCard;
