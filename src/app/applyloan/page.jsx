"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    gender: '',
    city: '',
    purposeOfLoan: '',
    employmentType: '',
    monthlyIncome: '',
    requiredLoanAmount: '',
    aadhaarCard: null,
    panCard: null,
    bankPassbook: null,
    bankStatements: null,
    itrFile: null,
    msmeCertificate: null,
    tradeLicense: null,
    gstCertificate: null,
    pinCode: '',
    state: '',
    maritalStatus: '',
    loanYear: '',
    employerStatus: '',
    loanType: ''
  });

  const [step, setStep] = useState(1);

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];
  const loanTypes = [
    "BUSINESS LOAN", "PERSONAL LOAN", "HOME LOAN", "LOAN AGAINST PROPERTY",
    "GOLD LOAN", "EDUCATION LOAN", "MICRO FINANCE GROUP LOAN", "DAILY COLLECTION LOAN",
    "MOBILE APP MICRO LOAN", "MOBILE FINANCE LOAN"
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    const response = await fetch('/api/loanApplication', {
      method: 'POST',
      body: data
    });

    if (response.ok) {
      console.log('Form submitted successfully');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        mobileNumber: '',
        gender: '',
        city: '',
        purposeOfLoan: '',
        employmentType: '',
        monthlyIncome: '',
        requiredLoanAmount: '',
        aadhaarCard: null,
        panCard: null,
        bankPassbook: null,
        bankStatements: null,
        itrFile: null,
        msmeCertificate: null,
        tradeLicense: null,
        gstCertificate: null,
        pinCode: '',
        state: '',
        maritalStatus: '',
        loanYear: '',
        employerStatus: '',
        loanType: ''
      });
      setStep(1);
    } else {
      console.error('Failed to submit form');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col  items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-6 mb-[6rem] md:mb-[0rem]"
    >
      <div  className='bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-md'>

     
      <h2 className="text-2xl font-bold mb-6 text-white">Loan Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <div>
              <label className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Pin Code</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select State</option>
                {statesOfIndia.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-white">Marital Status</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Loan Type</label>
              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                {loanTypes.map((loan, index) => (
                  <option key={index} value={loan}>{loan}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Loan Duration</label>
              <select
                name="loanYear"
                value={formData.loanYear}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Duration</option>
                <option value="1 year">1 Year</option>
                <option value="2 years">2 Years</option>
                <option value="3 years">3 Years</option>
                <option value="4 years">4 Years</option>
                <option value="5 years">5 Years</option>
                <option value="6 year">6 Year</option>
                <option value="7 years">7 Years</option>
                <option value="8 years">8 Years</option>
                <option value="9 years">9 Years</option>
                <option value="10 years">10 Years</option>
                <option value="11 year">11 Year</option>
                <option value="12 years">12 Years</option>
                <option value="13 years">13 Years</option>
                <option value="14 years">14 Years</option>
                <option value="15 years">15 Years</option>
              </select>
            </div>
            <div>
  <label className="block text-sm font-medium text-white">Employment Type</label>
  <select
    name="employmentType"
    value={formData.employmentType}
    onChange={handleChange}
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="" disabled>Select employment type</option>
    <option value="business">Business</option>
    <option value="self-employed">Self Employed</option>
    <option value="government job">Government Job</option>
    <option value="private Job">Private Job</option>
    <option value="student">Student</option>
    <option value="other">Other</option>
  </select>
</div>

            <div>
              <label className="block text-sm font-medium text-white">Monthly Income</label>
              <input
                type="text"
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Required Loan Amount</label>
              <input
                type="text"
                name="requiredLoanAmount"
                value={formData.requiredLoanAmount}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div>
              <label className="block text-sm font-medium text-white">Aadhaar Card</label>
              <input
                type="file"
                name="aadhaarCard"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">PAN Card</label>
              <input
                type="file"
                name="panCard"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Bank Passbook</label>
              <input
                type="file"
                name="bankPassbook"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Bank Statements</label>
              <input
                type="file"
                name="bankStatements"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">ITR File</label>
              <input
                type="file"
                name="itrFile"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">MSME Certificate</label>
              <input
                type="file"
                name="msmeCertificate"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Trade License</label>
              <input
                type="file"
                name="tradeLicense"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">GST Certificate</label>
              <input
                type="file"
                name="gstCertificate"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}
        <div className="flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePreviousStep}
              className="px-4 py-2 text-white bg-gray-600 rounded-md"
            >
              Previous
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-4 py-2 text-white bg-blue-600 rounded-md"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-600 rounded-md"
            >
              Submit
            </button>
          )}
        </div>
      </form>
      </div>
    </motion.div>
  );
};

export default LoanForm;
