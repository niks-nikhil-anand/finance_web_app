"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoanForm = () => {
  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [village, setVillage] = useState('');
  const [nominee, setNominee] = useState('');
  const [relation, setRelation] = useState('');
  const [dob, setDob] = useState('');
  
  const handleFileChange = (e, setFile) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const notifyLoading = () => {
    toast.info("Submitting form...", {
      position: "bottom-right"
    });
  };

  const notifySuccess = () => {
    toast.success("Form submitted successfully!", {
      position: "bottom-right"
    });
  };

  const notifyError = (message) => {
    toast.error(`Error: ${message}`, {
      position: "bottom-right"
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    notifyLoading();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobileNumber', mobileNumber);
    formData.append('village', village);
    formData.append('nominee', nominee);
    formData.append('relation', relation);
    formData.append('dob', dob);

    if (aadhaarCard) formData.append('aadhaarCard', aadhaarCard);
    if (panCard) formData.append('panCard', panCard);

    try {
      const response = await fetch('/api/loanApplication', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setAadhaarCard(null);
        setPanCard(null);
        setName('');
        setEmail('');
        setMobileNumber('');
        setVillage('');
        setNominee('');
        setRelation('');
        setDob('');
        notifySuccess();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        notifyError(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      notifyError('Something went wrong.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-6 mb-[6rem] md:mb-[0rem]"
    >
      <div className='bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-md'>
        <h2 className="text-2xl font-bold mb-6 text-white">Loan Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Village</label>
            <input
              type="text"
              name="village"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Nominee</label>
            <input
              type="text"
              name="nominee"
              value={nominee}
              onChange={(e) => setNominee(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Relation</label>
            <input
              type="text"
              name="relation"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Aadhaar Card</label>
            <input
              type="file"
              name="aadhaarCard"
              onChange={(e) => handleFileChange(e, setAadhaarCard)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">PAN Card</label>
            <input
              type="file"
              name="panCard"
              onChange={(e) => handleFileChange(e, setPanCard)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default LoanForm;
