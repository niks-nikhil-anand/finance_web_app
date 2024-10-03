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
        setButtonText('Search Again'); 
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
              className="w-full md:w-[19rem] h-auto bg-[#ffffff] rounded-lg shadow-2xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-black h-25 justify-center items-center relative rounded-t-lg flex flex-col py-5 shadow-2xl">
                <h1 className="text-lg text-white font-extrabold mt-3 underline">JobCard Legal257</h1>
                <p className="text-[10px] text-white font-extrabold mt-2 p-5">Top-notch financial , tax services also  include expert GST and ITR filing services to ensure your business remains compliant and stress-free</p>
              </div>

              
              <div className="text-center mt-5 flex justify-start flex-col mb-3 gap-3"> 
                <h2 className="text-xl text-black font-extrabold mx-5 mt-3 underline">{jobApplication.name}</h2>
                <div className="text-sm flex flex-col flex-start px-2">
                  <p><span className="font-bold">Mobile:-</span> {jobApplication.mobile}</p>
                  <p><span className="font-bold">Email:-</span>{jobApplication.email}</p>
                <p><span className="font-bold">City:-<span></span></span>{jobApplication.city}</p>
                <p><span className="font-bold">State:</span> {jobApplication.state}</p>
                <p><span className="font-bold">Pin Code:-</span> {jobApplication.pinCode}</p>
                <p><span className="font-bold">Address:-</span> {jobApplication.address}</p>
                </div>
              </div>
              <div className='bg-[#118806] w-full  border-t-2 text-white p-5'>
              <p className="flex items-center ">
                    <span className="font-bold">Applied Date: </span>  {formatDateTime(jobApplication.createdAt)}
                  </p>
              </div>
            </motion.div>

            

            {/* Back Side of the Card */}
                        <motion.div
              className="w-full md:w-[19rem] h-auto bg-[#ff9934] rounded-lg shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-4 text-black text-xs md:text-sm space-y-2">
                <h2 className="text-lg md:text-xl font-bold text-center mb-3">Job Card Terms and Conditions</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li className="font-semibold text-base">Job Card Details:</li>
                  <ul className="list-inside ml-7 space-y-1 text-sm">
                    <li><span className="font-medium">Job Type:</span> Full-Time</li>
                    <li><span className="font-medium">Contract Period:</span> 12 months</li>
                    <li><span className="font-medium">Insurance Coverage:</span> ₹2 lakh</li>
                    <li><span className="font-medium">Eligibility:</span> Age 18 to 50</li>
                    <li><span className="font-medium">Usage:</span> Valid for job-related activities only</li>
                  </ul>
                  <li className="font-semibold text-base">Office Details:</li>
                  <ul className="list-inside ml-7 space-y-1 text-sm">
                    <li><span className="font-medium">Office Working Hours:</span> 9:00 AM to 6:00 PM</li>
                    <li><span className="font-medium">Office Opening Date:</span> 01/02/2025</li>
                  </ul>
                  <li className="font-semibold text-base">Services Provided:</li>
                  <ul className="list-inside ml-7 space-y-1 text-sm">
                    <li><span className="font-medium">Financial Support:</span> Available</li>
                    <li><span className="font-medium">Digital Banking Services:</span> Available</li>
                    <li><span className="font-medium">Loan Options:</span> Tailored as per eligibility</li>
                    <li><span className="font-medium">Training and Skill Development:</span> Provided</li>
                  </ul>
                </ul>
                <hr />
                
              </div>
              <div className='bg-[#118806] w-full p-4 border-t-2 text-white'>
                <p className="flex items-center mt-3 my-5">
                <p>Biswanath Chariali, Sonitpur, Assam - 784176</p>
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
