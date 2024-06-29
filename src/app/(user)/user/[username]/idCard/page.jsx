"use client";
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import logo from '../../../../../../public/logo2.png';
import legalqr from '../../../../../../public/logo/legalqr.png';
import barcode from '../../../../../../public/barcode.gif';
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
          shop: userData.shopAddress,
          profilePic : userData.profilePic
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
    <div>
       <div>
                <button onClick={() => window.history.back()} className="text-xl text-red-700 border-black rounded-full p-3">
                    <FaArrowLeft />
                </button>
            </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
     
     <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ">
       {/* Front Side of the Card */}
       <motion.div
         className="w-full md:w-64 h-[30rem] bg-white rounded-lg shadow-2xl overflow-hidden relative"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
       >
         <div className="bg-purple-600 h-[8rem] flex justify-center items-center relative">
           <Image
             src={"https://via.placeholder.com/100"}
             alt="Profile"
             height={100}
             width={100}
             className="w-24 h-24 rounded-full border-4 border-white absolute bottom-[-50%] transform translate-y-[-50%]"
           />
         </div>
         <div className="p-4 text-center mt-8">
           <h2 className="text-xl  text-gradient-blue font-extrabold">{user.name}</h2>
           <p className="text-gray-600">{user.role}</p>
           <div className="mt-4">
             <Image
              src={legalqr}
              height={100}
              width={100}
               alt="QR Code"
               className="mx-auto"
             />
           </div>
           <p className="text-sm">{user.mobile}</p>
           <p className="text-sm">{user.username}</p>
           <p className="mt-4 text-sm ">{user.city}, {user.state}</p>
          
         </div>
         <div className=" absolute left-0">
             <Image
              src={logo}
              height={100}
              width={100}
               alt="QR Code"
               className="mx-auto"
             />
           </div>
       </motion.div>
       
       {/* Back Side of the Card */}
       <motion.div
         className="w-full md:w-64 h-[30rem] bg-purple-600 rounded-lg shadow-lg overflow-hidden relative"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
       >
         <div className="p-4">
           <h2 className="text-xl font-bold text-white text-center underline">Information</h2>
           <div className="mt-4 text-white">
             <p className="font-bold">Email:</p>
             <p>{user.email}</p>
             <p className="font-bold mt-2">Mobile No:</p>
             <p>{user.mobile}</p>
             <p className="font-bold mt-2">Legal257 Id:-</p>
             <p>{user.id}</p>
             <p className="font-bold mt-2">Legal257 Services:-</p>
             <p>{user.services}</p>
             <p className="font-bold mt-2">Office Address:</p>
             <p>{user.shop}</p>
            
           </div>
           <div className=" flex justify-center mt-[4rem]  ">
               <Image
                 src={barcode}
                 alt="Barcode"
                 height={800}
                 width={800}
                 className=""
               />
             </div>
         </div>
         <div className=" absolute left-0 bottom-2">
             <Image
              src={logo}
              height={100}
              width={100}
               alt="QR Code"
               className="mx-auto"
             />
           </div>
       </motion.div>
      
     </div>
   </div>
    </div>
    
  ) : null;
};

export default IdCard;
