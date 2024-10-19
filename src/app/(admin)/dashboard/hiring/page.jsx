"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobApplicationsTable = () => {
  const [applications, setApplications] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [applicationsPerPage] = useState(5); 

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
    setIsEditing(application._id);
    setEditData(application);
  };

  const handleEditChange = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEditSubmit = async (id) => {
    setLoading(true);
    try {
      await axios.put(`/api/jobApplication/edit/${id}`, editData);
      setApplications((prev) =>
        prev.map((app) => (app._id === id ? editData : app))
      );
      setIsEditing(null);
      notifySuccess();
    } catch (error) {
      notifyError("Failed to update application");
    } finally {
      setLoading(false);
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

  const indexOfLastApplication = currentPage * applicationsPerPage;
  const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
  const currentApplications = applications.slice(indexOfFirstApplication, indexOfLastApplication);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(applications.length / applicationsPerPage);

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
          
          <thead className="bg-gradient-to-r from-purple-400 to-blue-500 text-white">
            <tr>
              {[
                "Profile" , "Name", "Email", "Mobile Number", "Job Title", "Address", 
                "City", "State" , "Pincode" ,  "Status", "Date of Joining", "Salary", 
                "Unique Id",  "Resume", "Aadhaar Card", 
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
          {currentApplications.map((application, index) => (
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
                        type="text"
                        value={editData.pinCode}
                        onChange={(e) => handleEditChange("pinCode", e.target.value)}
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

                    <td className="py-2 px-4 border border-gray-300">
                      <input
                        type="date" // Use date input type for Date of Joining
                        value={editData.dateOfJoining.split('T')[0]} // Format date for input
                        onChange={(e) => handleEditChange("dateOfJoining", e.target.value)}
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
                      <span>{application.uniqueNumber}</span> {/* Display Unique Id as read-only */}
                    </td>
                    
                    {/* Add input fields for all other document fields similarly */}
                    <td className="py-2 px-4 border border-gray-300">
                      <div className="flex space-x-2">
                      <motion.button
                        className={`bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 shadow-lg ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                        onClick={() => handleEditSubmit(application._id)}
                        disabled={loading}
                      >
                        {loading ? 'Saving...' : 'Save'}
                      </motion.button>

                        <motion.button
                          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsEditing(null)}
                        >
                          Cancel
                        </motion.button>
                        </div>
                    </td>

                  </>
                ) : (
                  <>
                  <td className="py-2 px-4 border border-gray-300">
                      <img
                        src={application.profilePhoto} // Assuming profilePhoto is a URL
                        alt={`${application.name}'s profile`}
                        className="w-12 h-12 rounded-full cursor-pointer"
                        onClick={() => handleImageClick(application.profilePhoto)}
                      />
                    </td>
                    <td className="py-2 px-4 border border-gray-300">{application.name}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.email}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.mobile}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.jobTitle}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.address}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.city}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.state}</td>
                    <td className="py-2 px-4 border border-gray-300">  {application.pinCode} </td>
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
                <td className="py-2 px-4 border border-gray-300">
                  {new Date(application.dateOfJoining).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </td>
                    <td className="py-2 px-4 border border-gray-300">{application.salary}</td>
                    <td className="py-2 px-4 border border-gray-300">{application.uniqueNumber}</td>
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
      <div className="flex justify-center mt-4">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        onClick={() => paginate(index + 1)}
        className={`mx-1 px-3 py-1 border rounded ${
          currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        {index + 1}
      </button>
    ))}
  </div>
        <ToastContainer />
    </motion.div>
  );
};

export default JobApplicationsTable;

