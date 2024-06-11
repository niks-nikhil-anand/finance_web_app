"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ComplaintTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("/api/user/complaint");
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching job applications:", error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto w-[80%] bg-gray-100"
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">
        ALL Users - Legal 257
      </h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-purple-100">
            <tr>
              <th className="py-2 px-4 border border-gray-300">Name</th>
              <th className="py-2 px-4 border border-gray-300">Email</th>
              <th className="py-2 px-4 border border-gray-300">Phone Number</th>
              <th className="py-2 px-4 border border-gray-300">Message</th>
              <th className="py-2 px-4 border border-gray-300">Partner Id</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border border-gray-300">{application.name}</td>
                <td className="py-2 px-4 border border-gray-300">{application.email}</td>
                <td className="py-2 px-4 border border-gray-300">{application.phoneNumber}</td>
                <td className="py-2 px-4 border border-gray-300">{application.message}</td>
                <td className="py-2 px-4 border border-gray-300">{application.partner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ComplaintTable;
