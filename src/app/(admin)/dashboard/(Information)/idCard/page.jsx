"use client";
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { toPng } from 'html-to-image';
import logo from '../../../../../../public/logo2.png';
import legalqr from '../../../../../../public/logo/legalqr.png';

const IdCard = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const cardRef = useRef();

  const fetchUserData = async (email) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`/api/admin/certificate/${email}`);
      const userData = response.data[0];
      setUser({
        name: userData.name,
        email: userData.email,
        mobile: userData.mobileNumber,
        services: userData.services,
        role: userData.role,
        city: userData.city,
        state: userData.state,
        username: userData.username,
        id: userData._id,
      });
    } catch (error) {
      setError('Error fetching user data. Please try again.');
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleSearch = () => {
    if (email) {
      fetchUserData(email);
    }
  };

  return (
    <div className='flex flex-col items-center  #f5f6fa w-full'>
      <div className="py-5 w-[80%] flex flex-col">
        <div className="text-center bg-[#ecd6d6] m-5  p-8 shadow-3xl w-full">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email ID"
            className="inline-block bg-[#fff] text-[#a3a3a3] shadow-md border-0 outline-0 p-5 w-[80%]"
          />
          <button
            onClick={handleSearch}
            className="inline-block bg-[#7f8ff4] text-white shadow-md rounded p-3 px-9 transition-all duration-200 ease-in cursor-pointer ml-[-86px] hover:bg-blue-600 active:bg-blue-500 active:shadow-inner"
          >
            Search
          </button>
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
        {user && (
          <div className="w-full flex flex-col items-center">
            <div ref={cardRef} className="bg-transparent font-verdana mb-5">
              <div className="w-11 h-10 bg-red-700 mx-auto rounded relative border border-red-800">
                <div className="absolute top-2.5 w-full h-px bg-red-800"></div>
              </div>
              <div className="bg-black w-16 mx-auto h-4 rounded-t">
                <div className="bg-white w-12 h-1.5 mx-auto rounded"></div>
              </div>
              <div className="relative w-56 p-1 mx-auto bg-gray-900 rounded-lg">
                <div className="absolute top-[105px] left-[222px] w-2 bg-gray-800 h-24 rounded-l"></div>
                <div className="absolute top-[105px] w-2 bg-gray-800 h-24 rounded-r"></div>
                <div className="p-2 bg-white rounded-lg text-center shadow-md">
                  <div className="header">
                    <h3 className="text-sm my-1 font-light text-left">
                      <span className="font-semibold">{user.role}</span>
                    </h3>
                    <Image
                      src={logo}
                      height={34}
                      width={80}
                      alt="Logo"
                      className="w-24 mt-4 mx-auto"
                    />
                  </div>
                  <div className="photo mt-4">
                    <Image
                      src={legalqr}
                      alt="Profile"
                      className="w-20 mx-auto border border-gray-300"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h2 className="text-lg my-1">
                    <span className="font-semibold">{user.name}</span>
                  </h2>
                  <div className="flex justify-end flex-col">
                    <h3 className="text-[12px] my-1 font-light">
                      <span className="font-semibold">Email Id:-</span> {user.email}
                    </h3>
                    <h3 className="text-sm my-1 font-light">
                      <span className="font-semibold">Username:- </span>{user.username}
                    </h3>
                    <p className="text-xs my-1">
                      <span className="font-bold mr-[1rem]">Services:- </span>{user.services}
                    </p>
                  </div>
                  <hr />
                  <p className="text-xs my-1">{user.city}, {user.state}</p>
                  <p className="text-xs my-1">{user.mobile}</p>
                </div>
              </div>
            </div>
            <button
              onClick={downloadIdCard}
              className="inline-block bg-blue-500 text-white shadow-md rounded p-3 px-9 transition-all duration-200 ease-in cursor-pointer mx-auto  my-5 hover:bg-blue-600 active:bg-blue-500 active:shadow-inner"
            >
              Download ID Card
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdCard;
