"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReferApplicationsTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/referandearn');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching refer applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Refer Applications</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300">Name</th>
            <th className="py-2 px-4 border border-gray-300">Email</th>
            <th className="py-2 px-4 border border-gray-300">Mobile Number</th>
            <th className="py-2 px-4 border border-gray-300">Service</th>
            <th className="py-2 px-4 border border-gray-300">Refer Mobile Number</th>
            <th className="py-2 px-4 border border-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border border-gray-300">{application.name}</td>
              <td className="py-2 px-4 border border-gray-300">{application.email}</td>
              <td className="py-2 px-4 border border-gray-300">{application.mobileNumber}</td>
              <td className="py-2 px-4 border border-gray-300">{application.service}</td>
              <td className="py-2 px-4 border border-gray-300">{application.referMobileNumber}</td>
              <td className="py-2 px-4 border border-gray-300">{application.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferApplicationsTable;
