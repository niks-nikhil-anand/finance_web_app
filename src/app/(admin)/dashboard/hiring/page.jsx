"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobApplicationsTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/jobApplication');
        setApplications(response.data.applications);
      } catch (error) {
        console.error('Error fetching job applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Job Applications</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300">Name</th>
            <th className="py-2 px-4 border border-gray-300">Email</th>
            <th className="py-2 px-4 border border-gray-300">Mobile Number</th>
            <th className="py-2 px-4 border border-gray-300">Resume</th>
            <th className="py-2 px-4 border border-gray-300">Aadhaar Card</th>
            <th className="py-2 px-4 border border-gray-300">PAN Card</th>
            <th className="py-2 px-4 border border-gray-300">Qualification Certificate</th>
            <th className="py-2 px-4 border border-gray-300">Experience Certificate</th>
            <th className="py-2 px-4 border border-gray-300">Computer Certificate</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border border-gray-300">{application.name}</td>
              <td className="py-2 px-4 border border-gray-300">{application.email}</td>
              <td className="py-2 px-4 border border-gray-300">{application.mobile}</td>
              <td className="py-2 px-4 border border-gray-300">
                <a href={application.resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Resume</a>
              </td>
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
                  onClick={() => handleImageClick(application.qualificationCertificate)}
                  className="text-blue-500 hover:underline"
                >
                  View Qualification Certificate
                </a>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <a
                  href="#"
                  onClick={() => handleImageClick(application.experienceCertificate)}
                  className="text-blue-500 hover:underline"
                >
                  View Experience Certificate
                </a>
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <a
                  href="#"
                  onClick={() => handleImageClick(application.computerCertificate)}
                  className="text-blue-500 hover:underline"
                >
                  View Computer Certificate
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobApplicationsTable;
