"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const PartnerLoanTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/partner/loanUser');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching loan applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  const handleStatusChange = async (id, status) => {
    try {
      const response = await axios.post("/api/updateRole", {
        userId: id,
        status,
      });
      setApplications((prevApplications) =>
        prevApplications.map((application) =>
          application._id === id
            ? { ...application, status }
            : application
        )
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating role and services:", error);
    }
  };


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto w-[80%] bg-gray-100"
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">Loan Applications</h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-purple-100">
              <th className="py-2 px-4 border border-gray-400">Name</th>
              <th className="py-2 px-4 border border-gray-400">Email</th>
              <th className="py-2 px-4 border border-gray-400">Status</th>
              <th className="py-2 px-4 border border-gray-400">Mobile Number</th>
              <th className="py-2 px-4 border border-gray-400">Gender</th>
              <th className="py-2 px-4 border border-gray-400">City</th>
              <th className="py-2 px-4 border border-gray-400">Employment Type</th>
              <th className="py-2 px-4 border border-gray-400">Monthly Income</th>
              <th className="py-2 px-4 border border-gray-400">Required Loan Amount</th>
              <th className="py-2 px-4 border border-gray-400">Pin Code</th>
              <th className="py-2 px-4 border border-gray-400">State</th>
              <th className="py-2 px-4 border border-gray-400">Marital Status</th>
              <th className="py-2 px-4 border border-gray-400">Loan Year</th>
              <th className="py-2 px-4 border border-gray-400">Loan Type</th>
              <th className="py-2 px-4 border border-gray-400">Aadhaar Card</th>
              <th className="py-2 px-4 border border-gray-400">PAN Card</th>
              <th className="py-2 px-4 border border-gray-400">Bank Passbook</th>
              <th className="py-2 px-4 border border-gray-400">Bank Statements</th>
              <th className="py-2 px-4 border border-gray-400">ITR File</th>
              <th className="py-2 px-4 border border-gray-400">MSME Certificate</th>
              <th className="py-2 px-4 border border-gray-400">Trade License</th>
              <th className="py-2 px-4 border border-gray-400">GST Certificate</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border border-gray-300">{application.name || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.email || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">
                  <select
                    value={application.status}
                    onChange={(e) =>
                      handleStatusChange(
                        application._id,
                        e.target.value,
                      )
                    }
                    className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  >
                    {["Details Pending", "Under Processing", "Approved", "Rejected"].map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border border-gray-300">{application.mobileNumber || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.gender || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.city || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.employmentType || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.monthlyIncome || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.requiredLoanAmount || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.pinCode || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.state || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.maritalStatus || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.loanYear || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">{application.loanType || 'Not Available'}</td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.aadhaarCard || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.aadhaarCard ? 'Aadhaar Card' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.panCard || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.panCard ? 'PAN Card' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.bankPassbook || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.bankPassbook ? 'Bank Passbook' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.bankStatements || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.bankStatements ? 'Bank Statements' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.itrFile || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.itrFile ? 'ITR File' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.msmeCertificate || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.msmeCertificate ? 'MSME Certificate' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.tradeLicense || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.tradeLicense ? 'Trade License' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.gstCertificate || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.gstCertificate ? 'GST Certificate' : 'Not Available'}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PartnerLoanTable;
