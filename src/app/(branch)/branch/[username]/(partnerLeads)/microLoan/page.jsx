"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const LoanApplicationsTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/branch/microLoan');
        console.log('Fetched applications:', response.data); // Debugging log
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

  const renderDocument = (document) => {
    return document ? (
      <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(document); }}>
        View Document
      </a>
    ) : 'Not Available';
  };

  const renderNomineeDetails = (nominee) => {
    if (!nominee) return 'Not Available';
    return (
      <>
        <div>{`Name: ${nominee.name}`}</div>
        <div>{`Email: ${nominee.email}`}</div>
        <div>{`Mobile: ${nominee.mobile}`}</div>
        <div>{`Village: ${nominee.village}`}</div>
        <div>{`Relation: ${nominee.relation}`}</div>
        <div>{`DOB: ${nominee.dob ? new Date(nominee.dob).toLocaleDateString() : 'N/A'}`}</div>
        <div>{`PAN Card: ${nominee.panCardNumber}`}</div>
        <div>{`Aadhaar Card: ${nominee.aadhaarCardNumber}`}</div>
      </>
    );
  };

  const renderGuarantorDetails = (guarantor) => {
    if (!guarantor) return 'Not Available';
    return (
      <>
        <div>{`Name: ${guarantor.name}`}</div>
        <div>{`Email: ${guarantor.email}`}</div>
        <div>{`Mobile: ${guarantor.mobile}`}</div>
        <div>{`Village: ${guarantor.village}`}</div>
        <div>{`Relation: ${guarantor.relation}`}</div>
        <div>{`DOB: ${guarantor.dob ? new Date(guarantor.dob).toLocaleDateString() : 'N/A'}`}</div>
        <div>{`PAN Card: ${guarantor.panCardNumber}`}</div>
        <div>{`Aadhaar Card: ${guarantor.aadhaarCardNumber}`}</div>
      </>
    );
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
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aadhaar Card</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PAN Card</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank Passbook</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank Statements</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo Copy</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nominee Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guarantor Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partner Id</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applications.map((application, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{renderDocument(application.aadhaarCard)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{renderDocument(application.panCard)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{renderDocument(application.bankPassbook)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{renderDocument(application.bankStatements)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{renderDocument(application.photoCopy)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{renderNomineeDetails(application.nominee)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{renderGuarantorDetails(application.guarantor)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{application.partner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default LoanApplicationsTable;
