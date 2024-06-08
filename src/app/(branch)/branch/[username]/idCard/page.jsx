"use client";
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toPng } from 'html-to-image';
import Image from 'next/image';
import logo from '../../../../../../public/logo2.png';
import legalqr from '../../../../../../public/logo/legalqr.png';

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

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="mb-4  border-2 inline-block">
        
      </div>
      <div ref={cardRef} className="bg-transparent font-verdana mt-5 mb-5 p-4">
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
                <span className="font-semibold">Branch Legal257</span>
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
              <span className="font-semibold"> {wallet.branchName}</span>

            </h2>
            <div className="flex flex-col items-start">
              <h3 className="text-sm my-1 font-light">
                <span className="font-semibold">Email Id:-</span> {partner.email}
              </h3>
              <h3 className="text-sm my-1 font-light">
                <span className="font-semibold">Username:- </span>{partner.username}
              </h3>
              <p className="text-xs my-1">
                <span className="font-bold mr-4">Branch Id:- </span>{wallet._id}
              </p>
            </div>
            <hr />
            <p className="text-xs my-1"> {wallet.location}</p>
          </div>
        </div>
      </div>
      <button onClick={downloadIdCard} className="text-white bg-blue-500 p-2 rounded mx-auto block my-5">
        Download ID Card
      </button>
    </div>
  );
};

export default IdCard;
