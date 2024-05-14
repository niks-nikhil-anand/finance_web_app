"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    panNumber: '',
    retailerId: '',
    address: '',
    panCard: null,
    adharCard: null,
    photo: null,
    proofOfResidence: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-lg mx-auto p-4 sm:p-8 bg-white shadow-md rounded-lg">
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <h2 className="text-2xl font-bold mb-6">Step 1: Personal Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">PAN Number</label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Retailer ID</label>
            <input
              type="text"
              name="retailerId"
              value={formData.retailerId}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Next
          </button>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <h2 className="text-2xl font-bold mb-6">Step 2: Upload Documents</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Upload PAN Card</label>
            <input
              type="file"
              name="panCard"
              onChange={handleFileChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Front Aadhar Card</label>
            <input
              type="file"
              name="adharCard"
              onChange={handleFileChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Photo</label>
            <input
              type="file"
              name="photo"
              onChange={handleFileChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Electricity Bill or Rent Agreement</label>
            <input
              type="file"
              name="proofOfResidence"
              onChange={handleFileChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2"
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Submit
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Form;
