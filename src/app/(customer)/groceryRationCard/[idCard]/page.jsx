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
              <div className="bg-green-600 h-[8rem] justify-center items-center relative rounded-t-lg flex flex-col">
                <h1 className="text-sm text-black font-extrabold mt-5 underline">Jono Jivan Grocery Ration Card</h1>
                <Image
                  src={rationCard.profilePhoto}
                  alt="Profile"
                  height={100}
                  width={100}
                  className="w-22 h-22 border-4 border-white shadow-lg mb-5 mt-3 rounded-full"
                />
                {/* Colorful Vegetable SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-12 h-12 text-green-500">
                  <path fill="currentColor" d="M7.279 5.9c0-.918-.406-1.75-1.039-2.317C5.37 3.736 5.106 3.45 5.073 3.22c-.046-.386.297-.66.602-.67.27.01.635.18.97.562.37.45.842.845 1.38 1.196.63-.418 1.182-.957 1.63-1.618.474-.68.65-1.476.43-2.273-.158-.545-.56-1.06-1.126-1.4C7.836-.207 6.85-.28 6.154.243 5.5.722 4.943 1.57 4.73 2.534c-.26 1.28-.04 2.494.617 3.54.604 1.054 1.52 1.736 2.675 2.156.23.075.466.117.702.156.3.053.574.105.835.156.354.078.724.16 1.085.294-.11.22-.275.546-.446.902-.373.77-.744 1.7-.74 2.74-.004.95.277 1.794.808 2.48-.23-.278-.442-.595-.62-.95-.325-.72-.437-1.505-.437-2.285 0-.78.14-1.564.36-2.33.11-.36.24-.703.37-1.037.1-.24.223-.48.36-.706.25-.4.61-.76 1.04-1.043.43-.28.94-.445 1.45-.446.492.006.96.174 1.378.492.358.292.658.682.874 1.13.296.624.374 1.34.222 2.02-.065.26-.15.518-.246.77.12-.05.24-.105.356-.163.573-.29 1.095-.66 1.573-1.105.828-.78 1.513-1.745 1.944-2.828.414-.974.585-2.02.508-3.082-.06-.744-.314-1.462-.744-2.098-.19-.266-.394-.51-.614-.742-.21-.22-.442-.41-.686-.586-.632-.434-1.38-.666-2.158-.668-1.326 0-2.576.818-3.104 2.036-.85 1.883-.558 4.248.63 5.826.544.878 1.33 1.594 2.248 2.11.955.55 2.04.876 3.176.99-.133-.313-.296-.613-.494-.906-.45-.62-1.058-1.1-1.746-1.446-.62-.31-1.304-.484-2.022-.486-.662.002-1.284.188-1.828.526-.788.47-1.423 1.163-1.768 1.98-.213.507-.347 1.036-.4 1.584z"/>
                </svg>
              </div>
              <div className="p-4 text-center mt-8 flex justify-start flex-col">
                <h2 className="text-xl text-blue-700 font-extrabold">{rationCard.name}</h2>
                <p className="text-gray-600">Father's Name: {rationCard.fatherName}</p>
                <div className="mt-4">
                  <p className="text-sm">WhatsApp No: {rationCard.whatsAppNumber}</p>
                  <p className="text-sm">Mobile: {rationCard.mobileNumber}</p>
                  <p className="mt-4 text-sm">Address: {rationCard.address}, {rationCard.district}, {rationCard.state} - {rationCard.pinCode}</p>
                </div>
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
                  <p>Address: {rationCard.address}</p>
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
