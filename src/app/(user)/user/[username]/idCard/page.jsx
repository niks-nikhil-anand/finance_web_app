"use client";
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import logo from '../../../../../../public/logo2.png';
import legalqr from '../../../../../../public/logo/legalqr.png';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { toPng } from 'html-to-image';

const IdCard = () => {
  const [user, setUser] = useState(null);
  const cardRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/cookies');
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
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();

    return () => {};
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

  return user ? (
    <div className='flex flex-col'>
      <div className="mb-4 m-[2rem] border-2">
        <button onClick={() => window.history.back()} className="text-xl text-red-700 border-black rounded-full p-3">
          <FaArrowLeft />
        </button>
      </div>
      <div ref={cardRef} className="bg-transparent font-verdana mt-5 mb-5">
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
              <h3 className="text-sm my-1 font-light">
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
      <button onClick={downloadIdCard} className="text-white bg-blue-500 p-2 rounded mx-auto block my-5 ">
        Download ID Card
      </button>
    </div>
  ) : null;
};

export default IdCard;
