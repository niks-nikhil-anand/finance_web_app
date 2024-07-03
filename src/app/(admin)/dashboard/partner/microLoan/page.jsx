"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const LoanApplicationsTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/user/microLoan');
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
      <a href="#" onClick={() => handleImageClick(document)}>
        View Document
      </a>
    ) : 'Not Available';
  };


  const handleStatusChange = async (id, status) => {
    try {
      const response = await axios.post("/api/partner/updateStatusMicroLoan", {
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
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">Jonojivan Loan Lead</h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nominee Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guarantor Details</th>
              <th className="py-2 px-4 border border-gray-400">Status</th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partner Id</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aadhaar Card</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PAN Card</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank Passbook</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank Statements</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo Copy</th>
             
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applications.map((application) => (
              <tr key={application._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>{`Name: ${application.nominee.name}`}</div>
                  <div>{`Email: ${application.nominee.email}`}</div>
                  <div>{`Mobile: ${application.nominee.mobile}`}</div>
                  <div>{`Village: ${application.nominee.village}`}</div>
                  <div>{`Relation: ${application.nominee.relation}`}</div>
                  <div>{`DOB: ${new Date(application.nominee.dob).toLocaleDateString()}`}</div>
                  <div>{`PAN Card: ${application.nominee.panCardNumber}`}</div>
                  <div>{`Aadhaar Card: ${application.nominee.aadhaarCardNumber}`}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>{`Name: ${application.customer.name}`}</div>
                  <div>{`Email: ${application.customer.email}`}</div>
                  <div>{`Mobile: ${application.customer.mobile}`}</div>
                  <div>{`Village: ${application.customer.village}`}</div>
                  <div>{`Relation: ${application.customer.relation}`}</div>
                  <div>{`DOB: ${new Date(application.customer.dob).toLocaleDateString()}`}</div>
                  <div>{`PAN Card: ${application.customer.panCardNumber}`}</div>
                  <div>{`Aadhaar Card: ${application.customer.aadhaarCardNumber}`}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>{`Name: ${application.guarantor.name}`}</div>
                  <div>{`Email: ${application.guarantor.email}`}</div>
                  <div>{`Mobile: ${application.guarantor.mobile}`}</div>
                  <div>{`Village: ${application.guarantor.village}`}</div>
                  <div>{`Relation: ${application.guarantor.relation}`}</div>
                  <div>{`DOB: ${new Date(application.guarantor.dob).toLocaleDateString()}`}</div>
                  <div>{`PAN Card: ${application.guarantor.panCardNumber}`}</div>
                  <div>{`Aadhaar Card: ${application.guarantor.aadhaarCardNumber}`}</div>
                </td>
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
                <td className="px-6 py-4 whitespace-nowrap">{application.partner}</td>
                <td className="px-6 py-4 whitespace-nowrap">{renderDocument(application.aadhaarCard)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{renderDocument(application.panCard)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{renderDocument(application.bankPassbook)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{renderDocument(application.bankStatements)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{renderDocument(application.photoCopy)}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default LoanApplicationsTable;
