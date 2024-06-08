"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import Image from 'next/image';
import logo from '../../../../../../public/logo2.png';
import { toPng } from 'html-to-image';

const Certificate = () => {
    const [user, setUser] = useState(null);
    const certificateRef = useRef();

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
        <div>
            <div>
                <button onClick={() => window.history.back()} className="text-xl text-red-700 border-black rounded-full p-3">
                    <FaArrowLeft />
                </button>
            </div>

            <div className="py-5 bg-gray-300">
                <motion.div
                    className="relative lg:w-[800px] lg:h-[600px] md:w-[90%] md:h-auto bg-[#618597] p-5 md:p-8 text-gray-800 font-sans shadow-md mx-auto mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    ref={certificateRef}
                    
                >
                    <div className="relative w-full h-full p-0 border border-gray-200 bg-white">
                        {user && (
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
                                        This is to certify that <span className='font-semibold'>{user.name} </span> has officially joined Legal257 and has been designated as a {user.role}. {user.name} is now granted full access to our professional services, with their KYC (Know Your Customer) verification successfully completed.
                                    </span>
                                </div>

                                <div className="text-center mb-4 md:mb-8">
                                    <span className="block font-bold text-sm">{user.services} - At Legal257</span>
                                </div>

                                <div className="flex justify-between flex-col gap-[3rem]">
                                    <div className="text-center md:text-left mb-4 md:mb-0">
                                        <span className="block font-bold text-xs">{user.city}, {user.state}</span>
                                    </div>

                                    <div className="text-center md:text-right flex flex-col">
                                        <span className="block font-bold text-xs"> <span className="font-semibold">Legal257 Id:- </span>{user.id}</span>
                                        <span className="block font-bold text-xs"> <span className="font-semibold">Username:- </span>{user.username}</span>
                                    </div>
                                </div>
                            </div>
                        )}
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
