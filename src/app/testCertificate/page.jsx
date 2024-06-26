"use client"
import React from "react";
import { motion } from "framer-motion";

const IDCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Front Side of the Card */}
        <motion.div
          className="w-full md:w-64 h-96 bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-purple-600 h-24 flex justify-center items-center relative">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white absolute bottom-[-50%] transform translate-y-[-50%]"
            />
          </div>
          <div className="p-4 text-center mt-12">
            <h2 className="text-xl font-bold">Zadafiya Brothers</h2>
            <p className="text-gray-600">UX/UI Designer</p>
            <div className="mt-4">
              <img
                src="https://via.placeholder.com/100x100?text=QR"
                alt="QR Code"
                className="mx-auto"
              />
            </div>
            <p className="mt-4 text-sm">+91 8980849796</p>
            <p className="text-sm">Part-1,89 Harinadad</p>
            <p className="text-sm">D...Sdv..Sdf..Sfd..Sd.</p>
          </div>
        </motion.div>
        
        {/* Back Side of the Card */}
        <motion.div
          className="w-full md:w-64 h-96 bg-purple-600 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold text-white text-center">Information</h2>
            <div className="mt-4 text-white">
              <p className="font-bold">Email:</p>
              <p>Planicsdeveloper@gmail.com</p>
              <p className="font-bold mt-2">Mobile No:</p>
              <p>8460304196</p>
              <p className="font-bold mt-2">Office Address:</p>
              <p>part-1,89 harinadad</p>
              <p>d...sdv..sdf..sfd..sd.road,india</p>
              <div className="mt-4 flex justify-center">
                <img
                  src="https://via.placeholder.com/100x30?text=Barcode"
                  alt="Barcode"
                  className="w-32"
                />
              </div>
              <p className="mt-4 text-center">Planics Dev</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IDCard;
