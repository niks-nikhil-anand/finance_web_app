"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobApplicationsTable = () => {
  const [applications, setApplications] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // Track editing state
  const [editData, setEditData] = useState({}); // Data to edit

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("/api/jobApplication");
        setApplications(response.data.applications);
      } catch (error) {
        console.error("Error fetching job applications:", error);
      }
    };

    fetchApplications();
  }, []);

  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  const handleEditClick = (application) => {
    setIsEditing(application._id); // Set editing state with the ID
    setEditData(application); // Prepopulate with existing data
  };

  const handleEditChange = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEditSubmit = async (id) => {
    try {
      await axios.put(`/api/jobApplication/edit/${id}`, editData);
      setApplications((prev) =>
        prev.map((app) => (app._id === id ? editData : app))
      );
      setIsEditing(null); // Exit editing mode
      notifySuccess();
    } catch (error) {
      console.error("Error updating application:", error);
      notifyError("Failed to update application");
    }
  };

  const notifyLoading = () => {
    toast.info("Submitting...", {
      position: "bottom-right",
    });
  };

  const notifyDelete = () => {
    toast.success("Deleted successfully!", {
      position: "bottom-right",
    });
  };

  const notifySuccess = () => {
    toast.success("Updated successfully!", {
      position: "bottom-right",
    });
  };

  const notifyError = (message) => {
    toast.error(`Error: ${message}`, {
      position: "bottom-right",
    });
  };

  const handleRoleChange = async (userId, status) => {
    try {
      notifyLoading();
      await axios.post("/api/jobApplication/updateRole", { userId, status });
      setApplications((prevApplications) =>
        prevApplications.map((application) =>
          application._id === userId ? { ...application, status } : application
        )
      );
      notifySuccess();
    } catch (error) {
      notifyError("Error updating role and services");
      console.error("Error updating role and services:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`/api/jobApplication/edit/${id}`);
      setApplications((prev) => prev.filter((app) => app._id !== id)); 
      notifyDelete();
    } catch (error) {
      console.error("Error deleting application:", error);
      notifyError("Error deleting application");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto  w-[80%] bg-gray-100"
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">
        Job Applications
      </h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-purple-100">
            <tr>
              {[
                "Name", "Email", "Mobile Number", "Job Title", "Address", 
                "City/State/Pincode", "status","Date of Joining", "Salary", 
                "Unique Id", "Status", "Resume", "Aadhaar Card", 
                "PAN Card", "Payment Receipt", "Bank Passbook", 
                "Qualification Certificate", "Experience Certificate", 
                "Computer Certificate", "Actions"
              ].map((header) => (
                <th key={header} className="py-2 px-4 border border-gray-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {isEditing === application._id ? (
                  <>
                    <td className="py-2 px-4 border border-gray-300">
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => handleEditChange("name", e.target.value)}
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) => handleEditChange("email", e.target.value)}
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <input
                        type="text"
                        value={editData.mobile}
                        onChange={(e) => handleEditChange("mobile", e.target.value)}
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <input
                        type="text"
                        value={editData.jobTitle}
                        onChange={(e) => handleEditChange("jobTitle", e.target.value)}
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <input
                        type="text"
                        value={editData.address}
                        onChange={(e) => handleEditChange("address", e.target.value)}
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <input
                        type="text"
                        value={editData.city}
                        onChange={(e) => handleEditChange("city", e.target.value)}
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <input
                        type="text"
                        value={editData.state}
                        onChange={(e) => handleEditChange("state", e.target.value)}
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <input
                        type="number"
                        value={editData.salary}
                        onChange={(e) => handleEditChange("salary", e.target.value)}
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <input
                        type="text"
                        value={editData.uniqueNumber}
                        onChange={(e) => handleEditChange("uniqueNumber", e.target.value)}
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <select
                        value={editData.status}
                        onChange={(e) => handleEditChange("status", e.target.value)}
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      >
                        {["Active", "Blocked", "Pending", "In Review"].map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                    {/* Add input fields for all other document fields similarly */}
                    <td className="py-2 px-4 border border-gray-300">
                      <div className="flex space-x-2">
                        <motion.button
                          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleEditSubmit(application._id)}
                        >
                          Save
                        </motion.button>
                        <motion.button
                          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsEditing(null)} // Reset the edit state
                        >
                          Cancel
                        </motion.button>
                        </div>
                    </td>

                  </>
                ) : (
                  <>
                    <td className="py-2 px-4 border border-gray-300">{application.name}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.email}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.mobile}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.jobTitle}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.address}</td>
                    <td className="py-2 px-4 border border-gray-300">  {application.city} , {application.state} , {application.pinCode}</td>
                    <td className="py-2 px-4 border border-gray-300">
                  <select
                    value={application.status}
                    onChange={(e) =>
                      handleRoleChange(application._id, e.target.value) // Pass the new status
                    }
                    className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  >
                    {["Active", "Blocked", "Pending", "In Review"].map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                    <td className="py-2 px-4 border border-gray-300">{application.dateOfJoining}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.salary}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.uniqueNumber}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.status}</td>
                    <td className="py-2 px-4 border border-gray-300">
                      <a
                        href={application.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Resume
                      </a>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <a
                        href={application.aadhaarCard}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Aadhaar
                      </a>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <a
                        href={application.panCard}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View PAN
                      </a>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <a
                        href={application.paymentReceipt}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Payment Receipt
                      </a>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <a
                        href={application.bankPassbook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Bank Passbook
                      </a>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <a
                        href={application.qualificationCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Qualification Certificate
                      </a>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <a
                        href={application.experienceCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Experience Certificate
                      </a>
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      <a
                        href={application.computerCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Computer Certificate
                      </a>
                    </td>
                    <td className="py-2 px-4 border border-gray-300 flex space-x-4">
                      <motion.button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleEditClick(application)}
                      >
                        Edit
                      </motion.button>
                      <motion.button
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDeleteClick(application._id)}
                      >
                        Delete
                      </motion.button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default JobApplicationsTable;

