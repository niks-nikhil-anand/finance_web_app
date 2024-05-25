"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GlassmorphismForm = () => {
  const [step, setStep] = useState(1);
  const [registrationType, setRegistrationType] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    partnerID: '',
    files: {},
  });

  const handleNextStep = () => {
    if (!registrationType) {
      setError('Please select a registration type.');
    } else {
      setError('');
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => setStep(step - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, files: { ...formData.files, [name]: files[0] } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('mobileNumber', formData.mobileNumber);
    data.append('partnerID', formData.partnerID);
    data.append('registrationType', registrationType);

    Object.keys(formData.files).forEach((key) => {
      data.append('file', formData.files[key]);
    });

    try {
      const response = await fetch('/api/businessApplication', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
      } else {
        console.error('Error:', await response.json());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-6 mb-[6rem] md:mb-[0rem]">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">GST/ITR Filling Form</h2>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <div className="mb-4">
                <label className="block text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-white bg-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-white bg-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Mobile Number</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-white bg-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Partner ID (Optional)</label>
                <input
                  type="text"
                  name="partnerID"
                  value={formData.partnerID}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-white bg-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Registration Type</label>
                <select
                  name="registrationType"
                  value={registrationType}
                  onChange={(e) => setRegistrationType(e.target.value)}
                  className="w-full p-2 rounded bg-white bg-opacity-50"
                >
                  <option value="">Select Registration Type</option>
                  <option value="itr">ITR File New Registration</option>
                  <option value="gst">GST Registration</option>
                  <option value="itr">ITR RETURN</option>
                  <option value="itr">GST RETURN</option>
                  <option value="itr">BUSINESS REGISTRATION</option>
                  <option value="gst">MSME REGISTRATION</option>
                  <option value="itr">LEGAL ISSUES LEGAL NOTICE</option>
                  <option value="gst">LOAN NOC CERTIFICATE</option>
                  <option value="itr">BUSINESS LICENSE</option>
                  <option value="gst">FOOD LICENSE</option>
                  <option value="gst">TRADE LICENSE</option>
                </select>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </div>
              <button
                type="button"
                className="w-full p-2 bg-blue-500 rounded text-white"
                onClick={handleNextStep}
              >
                Next
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {registrationType === 'itr' && (
                <>
                  <div className="mb-4">
                    <label className="block text-white">AADHAAR CARD</label>
                    <input type="file" name="aadhaar" onChange={handleFileChange} className="w-full p-2 rounded bg-white bg-opacity-50" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white">PAN CARD</label>
                    <input type="file" name="pan" onChange={handleFileChange} className="w-full p-2 rounded bg-white bg-opacity-50" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white">BANK PASSBOOK</label>
                    <input type="file" name="bankPassbook" onChange={handleFileChange} className="w-full p-2 rounded bg-white bg-opacity-50" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white">BANK STATEMENTS</label>
                    <input type="file" name="bankStatements" onChange={handleFileChange} className="w-full p-2 rounded bg-white bg-opacity-50" />
                  </div>
                </>
              )}
              {registrationType === 'gst' && (
                <>
                  <div className="mb-4">
                    <label className="block text-white">AADHAAR CARD</label>
                    <input type="file" name="aadhaar" onChange={handleFileChange} className="w-full p-2 rounded bg-white bg-opacity-50" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white">PAN CARD</label>
                    <input type="file" name="pan" onChange={handleFileChange} className="w-full p-2 rounded bg-white bg-opacity-50" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white">PHOTO COPY</label>
                    <input type="file" name="photo" onChange={handleFileChange} className="w-full p-2 rounded bg-white bg-opacity-50" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white">BANK PASSBOOK</label>
                    <input type="file" name="bankPassbook" onChange={handleFileChange} className="w-full p-2 rounded bg-white bg-opacity-50" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white">ELECTRICITY BILL OR RENT AGREEMENT</label>
                    <input type="file" name="electricityBill" onChange={handleFileChange} className="w-full p-2 rounded bg-white bg-opacity-50" />
                  </div>
                </>
              )}
              <div className="flex justify-between">
                <button
                  type="button"
                  className="w-full p-2 bg-blue-500 rounded text-white mr-2"
                  onClick={handlePreviousStep}
                >
                  Back
                </button>
                <button type="submit" className="w-full p-2 bg-green-500 rounded text-white ml-2">
                  Submit
                </button>
              </div>
            </motion.div>
          )}
       
       </form>
      </div>
    </div>
  );
};

export default GlassmorphismForm;
