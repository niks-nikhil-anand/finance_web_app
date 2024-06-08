"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import Image from 'next/image';
import logo from '../../../../../../public/logo2.png';
import { toPng } from 'html-to-image';

const Certificate = () => {
    const [partner, setPartner] = useState(null);
    const [wallet, setWallet] = useState(null);
    const certificateRef = useRef();

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

    const downloadCertificate = () => {
        if (certificateRef.current) {
            toPng(certificateRef.current, { cacheBust: true, width: 1200, height: 700 })
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'certificate.png';
                    link.click();
                })
                .catch((error) => {
                    console.error('Error generating image:', error);
                });
        }
    };

    return (
        <div className='w-full flex justify-center items-center'>
            <div className="py-5 bg-gray-300">
                <motion.div
                    className="relative  md:w-[90%] md:h-auto bg-[#618597] p-5 md:p-8 text-gray-800 font-sans shadow-md mx-auto mt-10 w-full flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    ref={certificateRef}
                >
                    <div className="relative w-full h-full p-0 border border-gray-200 bg-white">
                        <div className="p-4 md:p-8">
                            <div className="text-center mb-4 md:mb-8">
                                <h2 className="font-cursive lg:text-3xl text-xl">Legal257 - Expert Financial and Tax Services</h2>
                            </div>

                            <div className="text-center mb-4 md:mb-8">
                                <Image
                                    src={logo}
                                    height={50}
                                    width={100}
                                    alt="Logo"
                                    className="w-24 mt-4 mx-auto"
                                />
                            </div>

                            <div className="text-center mb-4 md:mb-8">
                                <span className="block font-cursive text-[10px] md:text-2xl">
                                    This is to certify that <span className='font-semibold'>{partner?.name}</span> has officially joined Legal257. They are now granted full access to our professional services, having successfully completed their KYC (Know Your Customer) verification. {partner?.name} has joined as a branch <span className='font-semibold'>{wallet?.branchName}</span>.
                                </span>
                            </div>

                            <div className="text-center mb-4 md:mb-8">
                                <span className="block font-bold text-sm"> Legal257 - {wallet?.branchName} </span>
                            </div>

                            <div className="flex justify-between flex-col gap-[3rem]">
                                <div className="text-center md:text-left mb-4 md:mb-0">
                                    <span className="block font-bold text-xs">{partner?.city}, {partner?.state}</span>
                                    <span className="block font-bold text-xs">{wallet?.location}</span>
                                </div>

                                <div className="text-center md:text-right flex flex-col">
                                    <span className="block font-bold text-xs"><span className="font-semibold">Legal257 Id:- </span>{partner?._id}</span>
                                    <span className="block font-bold text-xs"><span className="font-semibold">Branch Id:- </span>{wallet?._id}</span>
                                    <span className="block font-bold text-xs"><span className="font-semibold">Username:- </span>{partner?.username}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <button onClick={downloadCertificate} className="text-white bg-blue-500 p-2 rounded mx-auto block mt-5">
                    Download Certificate
                </button>
            </div>
        </div>
    );
};

export default Certificate;
