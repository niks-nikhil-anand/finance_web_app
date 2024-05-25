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
    // Handle image click to enlarge
    console.log('Clicked image URL:', imageUrl);
  };

  return (
    <div>
      <h2>Job Applications</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Resume</th>
            <th>Aadhaar Card</th>
            <th>PAN Card</th>
            <th>Qualification Certificate</th>
            <th>Experience Certificate</th>
            <th>Computer Certificate</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={index}>
              <td>{application.name}</td>
              <td>{application.email}</td>
              <td>{application.mobile}</td>
              <td>
                <a href={application.resume} target="_blank" rel="noopener noreferrer">View Resume</a>
              </td>
              <td>
                <img
                  src={application.aadhaarCard}
                  alt="Aadhaar Card"
                  onClick={() => handleImageClick(application.aadhaarCard)}
                  style={{ cursor: 'pointer', maxWidth: '100px' }}
                />
              </td>
              <td>
                <img
                  src={application.panCard}
                  alt="PAN Card"
                  onClick={() => handleImageClick(application.panCard)}
                  style={{ cursor: 'pointer', maxWidth: '100px' }}
                />
              </td>
              <td>
                <img
                  src={application.qualificationCertificate}
                  alt="Qualification Certificate"
                  onClick={() => handleImageClick(application.qualificationCertificate)}
                  style={{ cursor: 'pointer', maxWidth: '100px' }}
                />
              </td>
              <td>
                <img
                  src={application.experienceCertificate}
                  alt="Experience Certificate"
                  onClick={() => handleImageClick(application.experienceCertificate)}
                  style={{ cursor: 'pointer', maxWidth: '100px' }}
                />
              </td>
              <td>
                <img
                  src={application.computerCertificate}
                  alt="Computer Certificate"
                  onClick={() => handleImageClick(application.computerCertificate)}
                  style={{ cursor: 'pointer', maxWidth: '100px' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobApplicationsTable;
