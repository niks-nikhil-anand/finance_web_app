"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobApplicationsTable = () => {
  const [applications, setApplications] = useState([]);
  const [editingApplication, setEditingApplication] = useState(null);

  const notifyLoading = () => {
    toast.info("Submitting...", {
      position: "bottom-right"
    });
  };

  const notifyDelete = () => {
    toast.success("Deleted  successfully!", {
      position: "bottom-right"
    });
  };
  const notifySuccess = () => {
    toast.success("Updated  successfully!", {
      position: "bottom-right"
    });
  };

  const notifyError = (message) => {
    toast.error(`Error: ${message}`, {
      position: "bottom-right"
    });
  };

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

  
  const handleEditClick = (application) => {
    setEditingApplication(application);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`/api/utils/${id}`);
      setApplications((prevApplications) =>
        prevApplications.filter((application) => application._id !== id)
      );
      notifyDelete();
    } catch (error) {
      notifyError("Error deleting application");
      console.error("Error deleting application:", error);
    }
  };

  const handleEditSave = async () => {
    try {
      console.log("Editing Application:", editingApplication);
      const response = await axios.put(`/api/utils/${editingApplication._id}`, editingApplication);
      setApplications((prevApplications) =>
        prevApplications.map((application) =>
          application._id === editingApplication._id ? editingApplication : application
        )
      );
      setEditingApplication(null);
      notifySuccess();
    } catch (error) {
      console.error("Error updating application:", error);
      notifyError("Error updating application");
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingApplication((prevApplication) => ({ ...prevApplication, [name]: value }));
  };

  const handleRoleChange = async (userId, role, status, services) => {
    try {
      notifyLoading();
      await axios.post('/api/updateRole', { userId, role, status, services });
      setApplications((prevApplications) =>
        prevApplications.map((application) =>
          application._id === userId ? { ...application, role, status, services } : application
        )
      );
      notifySuccess();
    } catch (error) {
      notifyError("Error updating role and services");
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
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">
        ALL Users - Legal 257
      </h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-purple-100">
            <tr>
              <th className="py-2 px-4 border border-gray-300">Name</th>
              <th className="py-2 px-4 border border-gray-300">Email</th>
              <th className="py-2 px-4 border border-gray-300">Role</th>
              <th className="py-2 px-4 border border-gray-300">Services</th>
              <th className="py-2 px-4 border border-gray-300">Status</th>
              <th className="py-2 px-4 border border-gray-300">Mobile Number</th>
              <th className="py-2 px-4 border border-gray-300">City</th>
              <th className="py-2 px-4 border border-gray-300">State</th>
              <th className="py-2 px-4 border border-gray-300">Want Partner Type</th>
              <th className="py-2 px-4 border border-gray-300">Interest</th>
              <th className="py-2 px-4 border border-gray-300">Aadhaar Card</th>
              <th className="py-2 px-4 border border-gray-300">PAN Card</th>
              <th className="py-2 px-4 border border-gray-300">Bank Passbook</th>
              <th className="py-2 px-4 border border-gray-300">Shop Photo Copy</th>
              <th className="py-2 px-4 border border-gray-300">MSME Certificate</th>
              <th className="py-2 px-4 border border-gray-300">photoCopy</th>
              <th className="py-2 px-4 border border-gray-300">tradeLicense</th>
              <th className="py-2 px-4 border border-gray-300">User Legal257 ID</th>
              <th className="py-2 px-4 border border-gray-300">Branch</th>
              <th className="py-2 px-4 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="name"
                      value={editingApplication.name}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.name
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="email"
                      name="email"
                      value={editingApplication.email}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.email
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <select
                    value={application.role}
                    onChange={(e) =>
                      handleRoleChange(
                        application._id,
                        e.target.value,
                        application.status,
                        application.services
                      )
                    }
                    className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  >
                    {["CSP", "Branch", "DSA", "User", "Admin"].map((role) => (
                      <option key={role} value={role} disabled={role === "Admin" || role === "Branch"}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <select
                    value={application.services}
                    onChange={(e) =>
                      handleRoleChange(
                        application._id,
                        application.role,
                        application.status,
                        e.target.value
                      )
                    }
                    className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  >
                    {[
                      "GST/ITR Services",
                      "Fintech Services",
                      "Finance Services-Loan",
                      "All Services",
                      "JonoJivan Micro Loan",
                    ].map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <select
                    value={application.status}
                    onChange={(e) =>
                      handleRoleChange(
                        application._id,
                        application.role,
                        e.target.value,
                        application.services
                      )
                    }
                    className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  >
                    {["Blocked", "Active", "Pending", "inReview"].map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="mobileNumber"
                      value={editingApplication.mobileNumber}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.mobileNumber
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="city"
                      value={editingApplication.city}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.city
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="state"
                      value={editingApplication.state}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.state
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">{application.wantPartnerType}</td>
                <td className="py-2 px-4 border border-gray-300">{application.interest}</td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.aadhaarCard ? (
                    <a
                      href="#"
                      onClick={() => window.open(application.aadhaarCard, "_blank")}
                      className="text-blue-500 underline"
                    >
                      View Aadhaar Card
                    </a>
                  ) : (
                    "No Aadhaar Card"
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.panCard ? (
                    <a
                      href="#"
                      onClick={() => window.open(application.panCard, "_blank")}
                      className="text-blue-500 underline"
                    >
                      View PAN Card
                    </a>
                  ) : (
                    "No PAN Card"
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.bankPassbook ? (
                    <a
                      href="#"
                      onClick={() => window.open(application.bankPassbook, "_blank")}
                      className="text-blue-500 underline"
                    >
                      View Bank Passbook
                    </a>
                  ) : (
                    "No Bank Passbook"
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.shopPhotoCopy ? (
                    <a
                      href="#"
                      onClick={() => window.open(application.shopPhotoCopy, "_blank")}
                      className="text-blue-500 underline"
                    >
                      View Shop Photo Copy
                    </a>
                  ) : (
                    "No Shop Photo Copy"
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.msmeCertificate ? (
                    <a
                      href="#"
                      onClick={() => window.open(application.msmeCertificate, "_blank")}
                      className="text-blue-500 underline"
                    >
                      View MSME Certificate
                    </a>
                  ) : (
                    "No MSME Certificate"
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.photoCopy ? (
                    <a
                      href="#"
                      onClick={() => window.open(application.photoCopy, "_blank")}
                      className="text-blue-500 underline"
                    >
                      View photoCopy
                    </a>
                  ) : (
                    "No photoCopy"
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {application.tradeLicense ? (
                    <a
                      href="#"
                      onClick={() => window.open(application.tradeLicense, "_blank")}
                      className="text-blue-500 underline"
                    >
                      View tradeLicense
                    </a>
                  ) : (
                    "No tradeLicense"
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">{application._id}</td>
                <td className="py-2 px-4 border border-gray-300">{application.branch}</td>
                <td className="py-2 px-4 border border-gray-300 flex flex-col space-y-2">
  {editingApplication && editingApplication._id === application._id ? (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleEditSave}
        className="bg-green-500 text-white py-1 px-2 rounded-md"
      >
        Save
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setEditingApplication(null)}
        className="bg-red-500 text-white py-1 px-2 rounded-md"
      >
        Cancel
      </motion.button>
    </>
  ) : (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleEditClick(application)}
        className="bg-blue-500 text-white py-1 px-2 rounded-md"
      >
        Edit
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleDeleteClick(application._id)}
        className="bg-red-500 text-white py-1 px-2 rounded-md"
      >
        Delete
      </motion.button>
    </>
  )}
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default JobApplicationsTable;
