"use client"
import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion'
import appbanner from '../../../public/appbanner.png'
import qr from '../../../public/qr.png'
import gp from '../../../public/gp.svg'

const DownloadAppSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-900">
      <div className="md:w-1/2">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-4xl font-bold text-white mb-4"
        >
          Download the Legal257 Mobile App
        </motion.h2>
        <ul className="text-sm md:text-xl text-white mb-4">
          {['Comprehensive ITR and GST Filing Services', 
            'Get exclusive Loans and Credit Card offers', 
            'Enjoy a seamless experience'].map((text, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="flex items-center mb-2"
            >
              <span className="text-yellow-500 mr-2">✔</span>
              {text}
            </motion.li>
          ))}
        </ul>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-yellow-500 mb-4"
        >
          Scan or click to Download App on your mobile
        </motion.p>
        <div className="flex items-center mb-4">
          <Image
           src={qr}
           width={400}
           height={400}
            alt="QR Code"
            className="w-24 h-24 mr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex flex-col md:flex-row items-center">
            <motion.a
              href="#"
              className="mr-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image src={gp} alt="Google Play" height={200} width={200} className="w-32 h-auto" />
            </motion.a>
           
          </div>
        </div>
      </div>
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={appbanner} alt="Mobile App" height={500} width={500} className="w-[20rem] " />
      </motion.div>
    </div>
  );
};

export default DownloadAppSection;
