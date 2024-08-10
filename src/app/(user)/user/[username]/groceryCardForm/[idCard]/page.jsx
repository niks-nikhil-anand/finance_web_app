"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { toPng } from 'html-to-image';
import Image from 'next/image';
import stamp from '../../../../../../../public/vegetables/stamp.png'; 
import BanStamp from '../../../../../../../public/vegetables/banStamp.png'; 
import QRCode from 'qrcode.react'; 

const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleString('en-US', options);
};

const GroceryRationCard = () => {
  const [rationCard, setRationCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false); // State to track download action
  const cardRef = useRef(null);

  useEffect(() => {
    const fetchRationCard = async () => {
      try {
        const emailFromURL = window.location.pathname.split('/')[2];
        setEmail(emailFromURL);
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
    const cardElement = cardRef.current;
    if (cardElement) {
      toPng(cardElement)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'grocery-ration-card.png';
          link.click();
          setDownloaded(true); // Update state to trigger the display of the refresh button
        })
        .catch((error) => {
          console.error('Error generating image:', error);
        });
    }
  };

  const refreshPage = () => {
    window.location.reload(); // Reload the current page
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="mb-5">
        <button onClick={() => window.history.back()} className="text-xl text-red-700 border-black rounded-full p-3">
          <FaArrowLeft />
        </button>
      </div>
      {rationCard ? (
        <div className="flex flex-col items-center overflow-auto max-h-[30rem]">
          <div ref={cardRef} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Front Side of the Card */}
            <motion.div
              className="w-full md:w-64 h-auto bg-[#ffffff] rounded-lg shadow-2xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#ff9934] h-28 justify-center items-center relative rounded-t-lg flex flex-col py-5 shadow-2xl">
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

              <div className="absolute top-10 right-3 p-2">
                {rationCard.status === 'Blocked' ? (
                  <Image
                    src={BanStamp}
                    alt="Blocked Stamp"
                    height={100}
                    width={100}
                    className="opacity-70"
                  />
                ) : (
                  <Image
                    src={stamp}
                    alt="Stamp"
                    height={100}
                    width={100}
                    className="opacity-70"
                  />
                )}
              </div>
              <div className="text-center mt-10 flex justify-start flex-col mb-3">
                <p className="flex items-center font-light justify-end px-2">
                  <span className="underline">Grocery Ration Card:- </span> <span>#{rationCard.uniqueNumber}</span>
                </p>
                <h2 className="text-xl text-[#118806] font-extrabold m-5 underline">{rationCard.name}</h2>
                <div className="text-sm flex flex-col flex-start px-2">
                  <p className="text-gray-600"><span className="font-bold">Father&apos;s Name:</span> {rationCard.fatherName}</p>
                  <p><span className="font-bold">WhatsApp No:</span> {rationCard.whatsAppNumber}</p>
                  <p><span className="font-bold">Mobile:</span> {rationCard.mobileNumber}</p>
                  <p><span className="font-bold">Email: </span>{rationCard.email}</p>
                  <p><span className="font-bold">Aadhaar No: </span>{rationCard.aadhaarNumber}</p>
                  <p><span className="font-bold">PAN No:</span> {rationCard.panNumber}</p>
                  <p><span className="font-bold">Date of Birth:</span> {formatDateTime(rationCard.dob)}</p> {/* Added DOB here */}

                  <p className="font-bold mt-2">Bank Details:</p>
                  <p>Account No: {rationCard.bankAccountNumber}</p>
                  <p>IFSC: {rationCard.ifscCode}</p>
                  <p>Bank Name: {rationCard.bankName}</p>
                  <p className="font-bold mt-2">Address:</p>
                <p>Add: {rationCard.address}, {rationCard.district},</p>
                <p>State: {rationCard.state}</p>
                <p>Pin Code: {rationCard.pinCode}</p>
                </div>
                <div className='m-5'>
                  {email && (
                    <div className="flex justify-center mt-4 items-center">
                      <QRCode value={`www.legal257.in/groceryRationCard/${email}`} size={128} />
                    </div>
                  )}
                </div>
              </div>
              <div className='bg-[#118806] w-full  border-t-2 text-white p-5'>
                <p className="flex items-center ">
                  <span className="">Date of Issue: </span> {formatDateTime(rationCard.dateOfIssue)}
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
                    <li><span className="font-medium">Senior Citizen:</span> {rationCard.seniorCitizen}</li>
                    <li><span className="font-medium">Widow Status:</span> {rationCard.widowStatus}</li>
                    <li><span className="font-medium">HandiCap Status:</span> {rationCard.handicapStatus}</li>
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

          {rationCard && !downloaded ? (
            <button
              onClick={downloadIdCard}
              className="mt-4 bg-[#ff9934] text-white p-2 rounded shadow hover:bg-[#ff7f1f]"
            >
              Download
            </button>
          ) : downloaded ? (
            <button
              onClick={refreshPage}
              className="mt-4 bg-[#118806] text-white p-2 rounded shadow hover:bg-[#0f7e0a]"
            >
              Refresh
            </button>
          ) : null}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GroceryRationCard;
