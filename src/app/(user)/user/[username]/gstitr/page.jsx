"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import paymentqr from '../../../public/paymentqr.jpeg'
import Image from 'next/image';

const userGSTItrForm = () => {
  const [step, setStep] = useState(1);
  const [registrationType, setRegistrationType] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
  });

  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [bankPassbook, setBankPassbook] = useState(null);
  const [bankStatements, setBankStatements] = useState(null);
  const [electricityBill, setElectricityBill] = useState(null);
  const [photocopy, setPhotocopy] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e, setFile) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

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

    // Check if the input is for the mobile number and contains only digits
    if (name === 'mobileNumber' && !/^\d*$/.test(value)) {
      return; // Skip update if the value contains non-numeric characters
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
    setLoading(true);
    notifyLoading();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('mobileNumber', formData.mobileNumber);
    data.append('partnerID', formData.partnerID);
    data.append('registrationType', registrationType);

    if (aadhaarCard) data.append('aadhaarCard', aadhaarCard);
    if (panCard) data.append('panCard', panCard);
    if (bankPassbook) data.append('bankPassbook', bankPassbook);
    if (bankStatements) data.append('bankStatements', bankStatements);
    if (electricityBill) data.append('electricityBill', electricityBill);
    if (photocopy) data.append('photocopy', photocopy);

    try {
      const response = await fetch('/api/gstUser', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        setAadhaarCard(null);
        setPanCard(null);
        setBankPassbook(null);
        setBankStatements(null);
        setElectricityBill(null);
        setPhotocopy(null);
        setFormData({
          name: '',
          email: '',
          mobileNumber: '',
        });
        setRegistrationType('');
        notifySuccess();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        notifyError(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      notifyError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-6 gap-5">
      
      <div>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-md ">
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
                  pattern="\d*"
                  maxLength="10"
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
                  <option disabled value="">
                    Select Registration Type
                  </option>
                  <option value="ITR File New Registration">ITR File New Registration</option>
                  <option value="GST Registration">GST Registration</option>
                  <option value="ITR RETURN">ITR RETURN</option>
                  <option value="GST RETURN">GST RETURN</option>
                  <option value="BUSINESS REGISTRATION">BUSINESS REGISTRATION</option>
                  <option value="MSME REGISTRATION">MSME REGISTRATION</option>
                  <option value="LEGAL ISSUES LEGAL NOTICE">LEGAL ISSUES LEGAL NOTICE</option>
                  <option value="LOAN NOC CERTIFICATE">LOAN NOC CERTIFICATE</option>
                  <option value="BUSINESS LICENSE">BUSINESS LICENSE</option>
                  <option value="FOOD LICENSE">FOOD LICENSE</option>
                  <option value="TRADE LICENSE">TRADE LICENSE</option>
                </select>
                {error && (
                  <p className="text-red-500 mt-2">{error}</p>
                )}
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
              <div className="mb-4">
                <label className="block text-white">AADHAAR CARD</label>
                <input
                  type="file"
                  name="aadhaarCard"
                  onChange={(e) => handleFileChange(e, setAadhaarCard)}
                  className="w-full p-2 rounded bg-white bg-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">PAN CARD</label>
                <input
                  type="file"
                  name="panCard"
                  onChange={(e) => handleFileChange(e, setPanCard)}
                  className="w-full p-2 rounded bg-white bg-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">BANK STATEMENTS</label>
                <input
                  type="file"
                  name="bankStatements"
                  onChange={(e) => handleFileChange(e, setBankStatements)}
                  className="w-full p-2 rounded bg-white bg-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">ELECTRICITY BILL OR RENT AGREEMENT</label>
                <input
                  type="file"
                  name="electricityBill"
                  onChange={(e) => handleFileChange(e, setElectricityBill)}
                  className="w-full p-2 rounded bg-white bg-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">PHOTO COPY</label>
                <input
                  type="file"
                  name="photocopy"
                  onChange={(e) => handleFileChange(e, setPhotocopy)}
                  className="w-full p-2 rounded bg-white bg-opacity-50"
                />
              </div>
              <div className="flex justify-between">
  <motion.button
    type="button"
    onClick={handlePreviousStep}
    className="w-1/3 p-2 bg-gray-400 rounded text-white"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Previous
  </motion.button>
  <motion.button
    type="submit"
    className="w-1/3 p-2 bg-blue-500 rounded text-white"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {loading ? 'Uploading...' : 'Submit'}
  </motion.button>
</div>

             
            </motion.div>
          )}
        </form>
        <ToastContainer position="bottom-right" />
      </div>
      </div>
      
    </div>
  );
};

export default userGSTItrForm;

                