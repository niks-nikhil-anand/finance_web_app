"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const JobApplicationsTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/branch/allPartner');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching job applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleRoleChange = async (id, role, isApproved, services) => {
    try {
      const response = await axios.post('/api/updateRole', { userId: id, role, isApproved, services });
      setApplications((prevApplications) =>
        prevApplications.map((application) =>
          application._id === id ? { ...application, role, isApproved: isApproved === 'Yes', services } : application
        )
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error updating role and services:', error);
    }
  };

  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto w-[80%] bg-gray-100"
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">ALL Users - Legal 257</h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-purple-100">
            <tr>
              <th className="py-2 px-4 border border-gray-300">Name</th>
              <th className="py-2 px-4 border border-gray-300">Email</th>
              <th className="py-2 px-4 border border-gray-300">Role</th>
              <th className="py-2 px-4 border border-gray-300">Services</th>
              <th className="py-2 px-4 border border-gray-300">KYC Approved</th>
              <th className="py-2 px-4 border border-gray-300">Mobile Number</th>
              <th className="py-2 px-4 border border-gray-300">City</th>
              <th className="py-2 px-4 border border-gray-300">State</th>
              <th className="py-2 px-4 border border-gray-300">Partner Type</th>
              <th className="py-2 px-4 border border-gray-300">Interest</th>
              <th className="py-2 px-4 border border-gray-300">Aadhaar Card</th>
              <th className="py-2 px-4 border border-gray-300">PAN Card</th>
              <th className="py-2 px-4 border border-gray-300">Bank Passbook</th>
              <th className="py-2 px-4 border border-gray-300">Shop Photo Copy</th>
              <th className="py-2 px-4 border border-gray-300">MSME Certificate</th>
              <th className="py-2 px-4 border border-gray-300">User Legal257 ID</th>
              <th className="py-2 px-4 border border-gray-300">Branch ID </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border border-gray-300">{application.name}</td>
                <td className="py-2 px-4 border border-gray-300">{application.email}</td>
                <td className="py-2 px-4 border border-gray-300">
                  <select
                    value={application.role}
                    onChange={(e) => handleRoleChange(application._id, e.target.value, application.isApproved, application.services)}
                    className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  >
                    {['CSP', 'Branch', 'DSA', 'User', 'Admin'].map((role) => (
                      <option key={role} value={role} disabled={role === 'Branch' || role === 'Admin'}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <select
                    value={application.services}
                    onChange={(e) => handleRoleChange(application._id, application.role, application.isApproved, e.target.value)}
                    className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  >
                    {['GST/ITR Services', 'Fintech Services', 'Finance Services-Loan', 'All Services', 'None'].map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <select
                    value={application.isApproved ? 'Yes' : 'No'}
                    onChange={(e) => handleRoleChange(application._id, application.role, e.target.value, application.services)}
                    className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </td>
                <td className="py-2 px-4 border border-gray-300">{application.mobileNumber}</td>
                <td className="py-2 px-4 border border-gray-300">{application.city}</td>
                <td className="py-2 px-4 border border-gray-300">{application.state}</td>
                <td className="py-2 px-4 border border-gray-300">{application.partnerType}</td>
                <td className="py-2 px-4 border border-gray-300">{application.interest}</td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.aadhaarCard ? (
                    <a
                      href="#"
                      onClick={() => handleImageClick(application.aadhaarCard)}
                      className="text-blue-500 hover:underline"
                    >
                      View Aadhaar Card
                    </a>
                  ) : (
                    'Not Available'
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.panCard ? (
                    <a
                      href="#"
                      onClick={() => handleImageClick(application.panCard)}
                      className="text-blue-500 hover:underline"
                    >
                      View PAN Card
                    </a>
                  ) : (
                    'Not Available'
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.bankPassbook ? (
                    <a
                      href="#"
                      onClick={() => handleImageClick(application.bankPassbook)}
                      className="text-blue-500 hover:underline"
                    >
                      View Bank Passbook
                    </a>
                  ) : (
                    'Not Available'
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.shopPhotoCopy ? (
                    <a
                      href="#"
                      onClick={() => handleImageClick(application.shopPhotoCopy)}
                      className="text-blue-500 hover:underline"
                    >
                      View Shop Photo Copy
                    </a>
                  ) : (
                    'Not Available'
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.msmeCertificate ? (
                    <a
                      href="#"
                      onClick={() => handleImageClick(application.msmeCertificate)}
                      className="text-blue-500 hover:underline"
                    >
                      View MSME Certificate
                    </a>
                  ) : (
                    'Not Available'
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">{application.username}</td>
                <td className="py-2 px-4 border border-gray-300">{application.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default JobApplicationsTable;
