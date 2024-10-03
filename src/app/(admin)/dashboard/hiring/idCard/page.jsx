"use client";
import React, { useState, useRef } from 'react';
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import { toPng } from 'html-to-image';
import { motion } from 'framer-motion';


const IdCard = () => {
  const [jobApplication, setJobApplication] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [buttonText, setButtonText] = useState('Download');
  const cardRef = useRef(null); 

  const handleSearch = async () => {
    if (email.trim() === '') {
      setError('Email is required');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/jobApplication/${email}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      setJobApplication(result[0]);
      setButtonText('Download'); 
    } catch (err) {
      setError(err.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        const dataUrl = await toPng(cardRef.current);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'job-card-Legal257.png';
        link.click();
        setButtonText('Search Again'); // Change button text after download
      } catch (err) {
        console.error('Error generating image:', err);
      }
    }
  };

  const handleSearchAgain = () => {
    setRationCard(null);
    setEmail('');
    setButtonText('Download');
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className='flex flex-col items-center bg-[#f5f6fa] w-full'>
      <div className="text-center bg-[#dfe1e8]  p-8 shadow-3xl w-full rounded-lg">
            <motion.input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email ID"
              className="inline-block bg-white text-[#a3a3a3] border-0 outline-0 p-5 w-[80%] rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:shadow-2xl focus:shadow-xl focus:ring-2 focus:ring-[#7f8ff4]"
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />

            <motion.button
              onClick={handleSearch}
              className="inline-block bg-[#7f8ff4] text-white rounded-lg p-3 px-9 ml-8 shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-blue-600 active:bg-blue-500 active:shadow-inner"
              whileTap={{ scale: 0.95, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
              whileHover={{ scale: 1.05 }}
            >
              Search
            </motion.button>

            {loading && <p className="mt-2">Loading...</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
      <div className="py-5 w-[90%] flex flex-col">
        {jobApplication && (
          <div className="flex flex-col items-center overflow-auto max-h-[30rem]">
            <div ref={cardRef} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
             
           <motion.div
              className="w-full md:w-64 h-auto bg-[#ffffff] rounded-lg shadow-2xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-black h-25 justify-center items-center relative rounded-t-lg flex flex-col py-5 shadow-2xl">
                <h1 className="text-lg text-white font-extrabold mt-3 underline">JobCard Legal257</h1>
                <p className="text-[10px] text-white font-extrabold mt-2 p-5">Top-notch financial , tax services also  include expert GST and ITR filing services to ensure your business remains compliant and stress-free</p>
              </div>

              
              <div className="text-center mt-10 flex justify-start flex-col mb-3"> 
                <h2 className="text-xl text-[#118806] font-extrabold m-5 underline">{jobApplication.name}</h2>
                <div className="text-sm flex flex-col flex-start px-2">
                  <p><span className="font-bold">Mobile:-</span> {jobApplication.mobile}</p>
                  <p><span className="font-bold">Email:-</span>{jobApplication.email}</p>
                  
                  <p className=" mt-2 font-bold">Address:</p>
                <p><span className="">City:-</span>{jobApplication.city}</p>
                <p>State: {jobApplication.state}</p>
                <p>Pin Code: {jobApplication.pinCode}</p>
                <p>Add: {jobApplication.address}</p>
                </div>
              </div>
              <div className='bg-[#118806] w-full  border-t-2 text-white p-5'>
              <p className="flex items-center ">
                    <span className="font-bold">Date of Issue: </span> {formatDateTime(jobApplication.dateOfIssue)}
                  </p>
              </div>
            </motion.div>

            {/* Back Side of the Card */}
            <motion.div
              className="w-full md:w-64 h-auto bg-[#ff9934] rounded-lg shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-4 text-black text-xs md:text-sm space-y-2">
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
                  <li><span className="font-medium">Shop Opening Time:</span>7:00 Am</li>
                  <li><span className="font-medium">Shop Closing Time:</span>9:00 Am</li>
                  <li><span className="font-medium">Shop Opening Date:</span>21/01/2025</li>
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
                <p className="font-bold mt-2"> Office Address:</p>
                <p>Add: Biswanath Chariali , Sonitpur </p>
                <p>State: Assam </p>
                <p>Pin Code: 784176</p>
              </div>
              <div className='bg-[#118806] w-full p-4 border-t-2 text-white'>
                  <p className="flex items-center mt-3 my-5">
                  <FaPhoneAlt className="mr-2 text-xl" />+91 8761873802
                </p>
                <p className="flex items-center">
                  <FaGlobe className="mr-2 text-2xl" /> <a href="http://legal257.in" className="underline">www.legal257.in</a>
                </p>
                  </div>
            </motion.div>
            </div>

            {jobApplication && (
              <button
                onClick={buttonText === 'Download' ? handleDownload : handleSearchAgain}
                className={`mt-4 ${buttonText === 'Download' ? 'bg-[#ff9934] hover:bg-[#ff7f1f]' : 'bg-[#7f8ff4] hover:bg-blue-600'} text-white p-2 rounded shadow`}
              >
                {buttonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default IdCard;
