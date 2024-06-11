"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ApplicationStatus = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const statusColors = {
    'Details Pending': 'bg-yellow-500',
    'Under Processing': 'bg-blue-500',
    'Approved': 'bg-green-500',
    'Rejected': 'bg-red-500',
  };

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('/api/user/status');
        const data = response.data;
        const allApplications = [
          ...data.gstApplications,
          ...data.loanApplications,
          ...data.microLoanApplications,
        ];
        setApplications(allApplications);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error loading status</div>;

  return (
    <div className="max-w-2xl mx-auto my-4">
      {Array.isArray(applications) && applications.length > 0 ? (
        applications.map((application) => (
          <motion.div
            key={application._id}
            className="my-4 p-4 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl font-bold mb-2">{application.name}</h1>
            <motion.div
              className={`w-full text-center text-white py-2 rounded ${statusColors[application.status]}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {application.status}
            </motion.div>
          </motion.div>
        ))
      ) : (
        <div className="text-center">No applications found.</div>
      )}
    </div>
  );
};

export default ApplicationStatus;
