"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { toPng } from 'html-to-image';
import Image from 'next/image';
import stamp from '../../../../../public/vegetables/stamp.png'; 

const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleString('en-US', options);
};

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
          link.download = 'grocery-ration-card.png';
          link.click();
        })
        .catch((error) => {
          console.error('Error generating image:', error);
        });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
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
              className="w-full md:w-64 h-auto bg-white rounded-lg shadow-2xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
            <div className="bg-green-500 h-28 justify-center items-center relative rounded-t-lg flex flex-col py-5 shadow-2xl">
              <h1 className="text-sm text-black font-extrabold mt-12 underline">Jono Jivan Grocery Ration Card</h1>
              {rationCard.profilePhoto && (
                <Image
                  src={rationCard.profilePhoto}
                  alt="Profile"
                  height={100}
                  width={100}
                  className="border-4 border-white shadow-lg mt-3 rounded-full object-cover"
                  style={{ objectFit: 'cover', width: '100px', height: '100px' }}
                />
              )}
            </div>


              <div className="absolute top-10 right-3  p-2">
                  <Image
                    src={stamp}
                    alt="Stamp"
                    height={100}
                    width={100}
                    className="opacity-70"
                  />
                </div>
              <div className="text-center mt-10 flex justify-start flex-col  mb-3">

                <p className="flex items-center font-light justify-end px-5">
                 #{rationCard.uniqueNumber}
                </p>
                
                <h2 className="text-xl text-blue-700 font-extrabold m-5 underline">{rationCard.name}</h2>
                <div className=" text-sm flex flex-col flex-start px-2 ">
                  <p className="text-gray-600"><span className="font-bold"> Father&apos;s Name:</span> {rationCard.fatherName}</p>
                  <p><span className="font-bold">WhatsApp No:</span> {rationCard.whatsAppNumber}</p>
                  <p><span className="font-bold">Mobile:</span> {rationCard.mobileNumber}</p>
                  <p><span className="font-bold">Email: </span>{rationCard.email}</p>
                  <p> <span className="font-bold">Aadhaar No: </span>{rationCard.aadhaarNumber}</p>
                  <p><span className = "font-bold">PAN No:</span> {rationCard.panNumber}</p>
                  <p className="font-bold mt-2">Address:</p>
                  <p>Add: {rationCard.address}, {rationCard.district},</p>
                  <p>State: {rationCard.state}</p>
                  <p>Pin Code: {rationCard.pinCode}</p>
                  <p className="font-bold mt-2">Bank Details:</p>
                  <p>Account No: {rationCard.bankAccountNumber}</p>
                  <p>IFSC: {rationCard.ifscCode}</p>
                  <p>Bank Name: {rationCard.bankName}</p>
                </div>
                
                <hr/>
                <div className='px-5 mt-5'>
                <p className="flex items-center ">
                <span className= "font-bold">Date of Issue: </span>   {formatDateTime(rationCard.dateOfIssue)}
    </p>
              </div>
              </div>
            </motion.div>

            {/* Back Side of the Card */}
            <motion.div
  className="w-full md:w-64 h-auto bg-green-700 rounded-lg shadow-lg overflow-hidden relative"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <div className="p-4 text-white text-xs md:text-sm space-y-2">
    <h2 className="text-lg md:text-xl font-bold text-center mb-3">Terms and Conditions</h2>
    <ul className="list-disc list-inside space-y-2">
      <li className="font-semibold text-base">Ration Card Details:</li>
      <ul className="list-inside ml-7 space-y-1 text-sm">
        <li>Ration Card Type: Free</li>
        <li>Validity: 11 months</li>
        <li>Insurance Coverage: ₹1 lakh</li>
        <li>Eligibility: Age 18 to 45</li>
        <li>Usage: For grocery use only; not for personal use</li>
      </ul>
      <li className="font-semibold text-base">Shop Details:</li>
      <ul className="list-inside ml-7 space-y-1 text-sm">
        <li>Opening Time: 7:00 AM</li>
        <li>Closing Time: 9:00 PM</li>
      </ul>
      <li className="font-semibold text-base">Services Provided:</li>
      <ul className="list-inside ml-7 space-y-1 text-sm">
        <li>Grocery Home Delivery: Available</li>
        <li>JonoJivan Grocery Ration Card</li>
        <li>Digital Banking Service</li>
        <li>Financial Services</li>
        <li>All Types of Finance Loan Services</li>
      </ul>
    </ul>
    <hr/>
    <p className="flex items-center mt-3 my-5">
      <FaPhoneAlt className="mr-2 text-xl" />+91 8761873802
    </p>
    <p className="flex items-center">
                  <FaGlobe className="mr-2 text-2xl" /> <a href="http://legal257.in" className="underline">www.legal257.in</a>
                </p>
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
