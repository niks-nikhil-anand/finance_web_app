"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoanApplicationsTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/loanApplication');
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

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Loan Applications</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300">Name</th>
            <th className="py-2 px-4 border border-gray-300">Email</th>
            <th className="py-2 px-4 border border-gray-300">Mobile Number</th>
            <th className="py-2 px-4 border border-gray-300">Gender</th>
            <th className="py-2 px-4 border border-gray-300">City</th>
            <th className="py-2 px-4 border border-gray-300">Employment Type</th>
            <th className="py-2 px-4 border border-gray-300">Monthly Income</th>
            <th className="py-2 px-4 border border-gray-300">Required Loan Amount</th>
            <th className="py-2 px-4 border border-gray-300">Pin Code</th>
            <th className="py-2 px-4 border border-gray-300">State</th>
            <th className="py-2 px-4 border border-gray-300">Marital Status</th>
            <th className="py-2 px-4 border border-gray-300">Loan Year</th>
            <th className="py-2 px-4 border border-gray-300">Loan Type</th>
            <th className="py-2 px-4 border border-gray-300">Aadhaar Card</th>
            <th className="py-2 px-4 border border-gray-300">PAN Card</th>
            <th className="py-2 px-4 border border-gray-300">Bank Passbook</th>
            <th className="py-2 px-4 border border-gray-300">Bank Statements</th>
            <th className="py-2 px-4 border border-gray-300">ITR File</th>
            <th className="py-2 px-4 border border-gray-300">MSME Certificate</th>
            <th className="py-2 px-4 border border-gray-300">Trade License</th>
            <th className="py-2 px-4 border border-gray-300">GST Certificate</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border border-gray-300">{application.name}</td>
              <td className="py-2 px-4 border border-gray-300">{application.email}</td>
              <td className="py-2 px-4 border border-gray-300">{application.mobileNumber}</td>
              <td className="py-2 px-4 border border-gray-300">{application.gender}</td>
              <td className="py-2 px-4 border border-gray-300">{application.city}</td>
              <td className="py-2 px-4 border border-gray-300">{application.employmentType}</td>
              <td className="py-2 px-4 border border-gray-300">{application.monthlyIncome}</td>
              <td className="py-2 px-4 border border-gray-300">{application.requiredLoanAmount}</td>
              <td className="py-2 px-4 border border-gray-300">{application.pinCode}</td>
              <td className="py-2 px-4 border border-gray-300">{application.state}</td>
              <td className="py-2 px-4 border border-gray-300">{application.maritalStatus}</td>
              <td className="py-2 px-4 border border-gray-300">{application.loanYear}</td>
              <td className="py-2 px-4 border border-gray-300">{application.loanType}</td>
              <td className="py-2 px-4 border border-gray-300">
                <a
                  href="#"
                  onClick={() => handleImageClick(application.aadhaarCard)}
                  className="text-blue-500 hover:underline"
                >
                  View Aadhaar Card
                </a>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <a
                  href="#"
                  onClick={() => handleImageClick(application.panCard)}
                  className="text-blue-500 hover:underline"
                >
                  View PAN Card
                </a>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <a
                  href="#"
                  onClick={() => handleImageClick(application.bankPassbook)}
                  className="text-blue-500 hover:underline"
                >
                  View Bank Passbook
                </a>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <a
                  href="#"
                  onClick={() => handleImageClick(application.bankStatements)}
                  className="text-blue-500 hover:underline"
                >
                  View Bank Statements
                </a>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <a
                  href="#"
                  onClick={() => handleImageClick(application.itrFile)}
                  className="text-blue-500 hover:underline"
                >
                  View ITR File
                </a>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <a
                  href="#"
                  onClick={() => handleImageClick(application.msmeCertificate)}
                  className="text-blue-500 hover:underline"
                >
                  View MSME Certificate
                </a>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <a
                  href="#"
                  onClick={() => handleImageClick(application.tradeLicense)}
                  className="text-blue-500 hover:underline"
                >
                  View Trade License
                </a>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <a
                  href="#"
                  onClick={() => handleImageClick(application.gstCertificate)}
                  className="text-blue-500 hover:underline"
                >
                  View GST Certificate
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanApplicationsTable;
