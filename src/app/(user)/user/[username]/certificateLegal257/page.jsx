"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import { FaArrowLeft, FaCertificate } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';
import axios from 'axios';
import Image from 'next/image';
import logo from '../../../../../../public/logo2.png';
import hammer from '../../../../../../public/hammere.png';
import { toPng } from 'html-to-image';
import { MdVerified } from "react-icons/md";

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
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center">
            <div className="w-full max-w-6xl mt-5">
                <button onClick={() => window.history.back()} className="text-xl text-red-700 border-black rounded-full p-3">
                    <FaArrowLeft />
                </button>
            </div>

            <div className="py-5 w-full max-w-6xl">
                <motion.div
                    className="relative bg-white p-10 shadow-lg rounded-lg mx-auto mt-10 "
                    initial={{ opacity: 0, rotateY: 180 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1 }}
                    ref={certificateRef}
                >
                    {user && (
                        <div className="relative w-full h-full p-8 border-4 border-dashed border-blue-500 rounded-lg">
                            <div className="p-4 md:p-8">
                                <div className="flex justify-between">
                                    <div className="absolute top-0 left-0 mt-2 ml-2">
                                        <GrCertificate className="text-blue-500 text-4xl" />
                                    </div>
                                    <div className="absolute top-0 right-0 mt-2 mr-2">
                                        <FaCertificate className="text-green-500 text-6xl" />
                                    </div>
                                </div>

                                <div className="text-center mb-8">
                                    <h2 className="font-serif text-3xl md:text-4xl text-gray-800">
                                        Legal257 - Expert Financial and Tax Services
                                    </h2>
                                </div>

                                <div className="text-center mb-8">
                                    <Image
                                        src={logo}
                                        height={80}
                                        width={160}
                                        alt="Logo"
                                        className="w-24 mt-4 mx-auto"
                                    />
                                </div>

                                <div className="text-center mb-8">
                                    <span className="block font-serif text-lg md:text-2xl text-gray-700">
                                        This is to certify that <span className='font-bold'>{user.name}</span> has officially joined Legal257 and has been designated as a {user.role}. {user.name} is now granted full access to our professional services, with their KYC (Know Your Customer) verification successfully completed.
                                    </span>
                                </div>

                                <div className="text-center mb-8">
                                    <span className="block font-bold text-lg text-gray-600">{user.services} - At Legal257</span>
                                </div>

                                <div className="flex justify-between flex-col gap-4 md:flex-row">
                                    <div className="text-center md:text-left mb-4 md:mb-0">
                                        <span className="block font-bold text-sm text-gray-600">{user.city}, {user.state}</span>
                                    </div>

                                    <div className="text-center md:text-right flex flex-col">
                                        <span className="block font-bold text-sm text-gray-600"><span className="font-semibold">Legal257 Id:- </span>{user.id}</span>
                                        <span className="block font-bold text-sm text-gray-600"><span className="font-semibold">Username:- </span>{user.username}</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-6 left-4">
                                    <MdVerified className="text-blue-500 text-4xl" />
                                </div>

                                <div className="absolute bottom-2 left-2">
                                    <p className="text-sm font-bold text-gray-700">Verified by Legal257</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="absolute top-0 left-0 right-0 bottom-0 border-8 border-blue-500 border-solid rounded-lg"></div>
                </motion.div>
                <button onClick={downloadCertificate} className="text-white bg-blue-500 p-2 rounded mx-auto block mt-5">
                    Download Certificate
                </button>
            </div>
        </div>
    );
};

export default Certificate;
