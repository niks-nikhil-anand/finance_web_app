"use client";
import React, { useState, useRef } from 'react';
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import { toPng } from 'html-to-image';
import stamp from '../../../../../../../public/vegetables/stamp.png'; 
import { motion } from 'framer-motion';

const IdCard = () => {
  const [rationCard, setRationCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const cardRef = useRef(); 

  const handleSearch = async () => {
    if (email) {
      setLoading(true);
      try {
        const response = await fetch(`/api/groceryRationCard/${email}`);
        if (response.ok) {
          const result = await response.json();
          setRationCard(result[0]);
          setError('');
        } else {
          setError('Failed to fetch data');
        }
      } catch {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Email is required');
    }
  };

  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        const dataUrl = await toPng(cardRef.current);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'grocery-ration-card.png';
        link.click();
      } catch {
        console.error('Error generating image');
      }
    }
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleString('en-US', options);
  };

  return (
    <div className='flex flex-col items-center bg-[#f5f6fa] w-full'>
      <div className="py-5 w-[80%] flex flex-col">
        <div className="text-center bg-[#ecd6d6] m-5 p-8 shadow-3xl w-full">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email ID"
            className="inline-block bg-white text-[#a3a3a3] shadow-md border-0 outline-0 p-5 w-[80%]"
          />
          <button
            onClick={handleSearch}
            className="inline-block bg-[#7f8ff4] text-white shadow-md rounded p-3 px-9 transition-all duration-200 ease-in cursor-pointer ml-2 hover:bg-blue-600 active:bg-blue-500 active:shadow-inner"
          >
            Search
          </button>
          {loading && <p className="mt-2">Loading...</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        {rationCard && (
          <div className="flex flex-col items-center overflow-auto max-h-[30rem]">
            <div ref={cardRef} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
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
                      <li><span className="font-medium">Ration Card Type:</span> Free</li>
                      <li><span className="font-medium">Validity:</span> 11 months</li>
                      <li><span className="font-medium">Insurance Coverage:</span> ₹1 lakh</li>
                      <li><span className="font-medium">Eligibility:</span> Age 18 to 45</li>
                      <li><span className="font-medium">Usage:</span> For grocery use only (not for personal use)</li>
                    </ul>
                    <li className="font-semibold text-base">Shop Details:</li>
                    <ul className="list-inside ml-7 space-y-1 text-sm">
                      <li><span className="font-medium">Opening Time:</span> 7:00 AM</li>
                      <li><span className="font-medium">Closing Time:</span> 9:00 PM</li>
                    </ul>
                    <li className="font-semibold text-base">Services Provided:</li>
                    <ul className="list-inside ml-7 space-y-1 text-sm">
                      <li><span className="font-medium">Grocery Home Delivery:</span> Available</li>
                      <li><span className="font-medium">Digital Banking Service:</span> Available</li>
                      <li><span className="font-medium">Financial Services:</span> Available</li>
                      <li><span className="font-medium">All Types of Finance Loan Services:</span> Available</li>
                    </ul>
                  </ul>
                  <hr />
                  <p className="flex items-center mt-3 my-5">
                    <FaPhoneAlt className="mr-2 text-xl" />+91 8761873802
                  </p>
                  <p className="flex items-center">
                    <FaGlobe className="mr-2 text-2xl" /> <a href="http://legal257.in" className="underline">www.legal257.in</a>
                  </p>
                </div>
              </motion.div>
            </div>
            {rationCard && (
              <button
                onClick={handleDownload}
                className="mt-4 bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-600"
              >
                Download
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default IdCard;
