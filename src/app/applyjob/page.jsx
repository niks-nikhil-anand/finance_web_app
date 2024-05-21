"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    job: '',
    aadhaar: null,
    pan: null,
    passbook: null,
    photocopy: null,
    qualification: null,
    experience: null,
    resume: null,
    computer: null,
    terms: false,
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-lg p-8 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Job Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Job Applied For</label>
            <select
  name="job"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
  value={formData.job}
  onChange={handleChange}
  required
>
  <option value="">Select a job</option>
  <option value="ACCOUNTANT">ACCOUNTANT</option>
  <option value="AREA BRANCH MANAGER">AREA BRANCH MANAGER</option>
  <option value="AREA MANAGER">AREA MANAGER</option>
  <option value="AREA SALES MANAGER">AREA SALES MANAGER</option>
  <option value="ASSISTANT MANAGER">ASSISTANT MANAGER</option>
  <option value="BRANCH MANAGER">BRANCH MANAGER</option>
  <option value="CASHIER">CASHIER</option>
  <option value="CHARTERED ACCOUNTANT">CHARTERED ACCOUNTANT</option>
  <option value="DIRECT SELLING AGENT">DIRECT SELLING AGENT</option>
  <option value="DISTRICT DISTRIBUTOR MANAGER">DISTRICT DISTRIBUTOR MANAGER</option>
  <option value="DISTRIBUTOR SALES MANAGER">DISTRIBUTOR SALES MANAGER</option>
  <option value="DISTRIBUTOR TEAM MANAGER">DISTRIBUTOR TEAM MANAGER</option>
  <option value="FIELD OFFICER">FIELD OFFICER</option>
  <option value="LOAN MANAGER">LOAN MANAGER</option>
  <option value="RETAILER TEAM LEADER">RETAILER TEAM LEADER</option>
  <option value="RELATIONSHIP MANAGER">RELATIONSHIP MANAGER</option>
  <option value="ROYAL BRANCH MANAGER">ROYAL BRANCH MANAGER</option>
  <option value="STATE MANAGER">STATE MANAGER</option>
  <option value="TEAM MANAGER">TEAM MANAGER</option>
  <option value="TEAM SERVICE MANAGER">TEAM SERVICE MANAGER</option>
  <option value="ZONAL BRANCH MANAGER">ZONAL BRANCH MANAGER</option>
  <option value="ZONAL MANAGER">ZONAL MANAGER</option>
</select>

          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Upload Aadhaar Card</label>
            <input
              type="file"
              name="aadhaar"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Upload PAN Card</label>
            <input
              type="file"
              name="pan"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Upload Passbook</label>
            <input
              type="file"
              name="passbook"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Upload Photo Copy</label>
            <input
              type="file"
              name="photocopy"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Upload Qualification Certificate</label>
            <input
              type="file"
              name="qualification"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Upload Experience Certificate</label>
            <input
              type="file"
              name="experience"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Upload Resume</label>
            <input
              type="file"
              name="resume"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Upload Computer Certificate</label>
            <input
              type="file"
              name="computer"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-50"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              className="mr-2"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <label className="text-sm"><label className="text-sm">I agree to the terms and conditions</label></label>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default JobApplicationForm;
