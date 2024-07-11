"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

// Import the local image
const applyLoan = "/qrCodeCollection/applyLoan.jpeg";
const gstitr = "/qrCodeCollection/gstItr.jpeg";
const hiring = "/qrCodeCollection/hiring.jpeg";
const becomePartner = "/qrCodeCollection/becomePartner.jpeg";
const manualPayment = "/qrCodeCollection/manualPayment.jpeg";
const referAndEarn = "/qrCodeCollection/referAndEarn.jpeg";

const ImageDownload = () => {
  const images = [
    { url: applyLoan, name: "Legal257-Loan.jpg", title: "Loan Services" },
    { url: gstitr, name: "Legal257-GSTITR.jpg", title: "GST/ITR Services" },
    { url: hiring, name: "Legal257-Hiring.jpg", title: "Hiring-Work with Us" },
    { url: becomePartner, name: "Legal257-BecomePartner.jpg", title: "Become Our Partner" },
    { url: manualPayment, name: "Legal257-manualPayment.jpg", title: "Manual Payemnt" },
    { url: referAndEarn, name: "Legal257-referAndEarn.jpg", title: "Refer & Earn" },
  ];

  const handleDownload = (url, name) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', name);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="p-4 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2 text-center">{image.title}</h3>
            <img
              src={image.url}
              alt={`Downloadable ${index + 1}`}
              className="w-full h-[20rem] object-cover rounded-lg mb-4"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleDownload(image.url, image.name)}
              className="flex items-center justify-center w-full p-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
            >
              <FaDownload className="mr-2" />
              Download
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageDownload;
