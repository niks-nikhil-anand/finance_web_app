"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobApplicationsTable = () => {
  const [applications, setApplications] = useState([]);
  const [editingApplication, setEditingApplication] = useState(null);
  const [originalApplication, setOriginalApplication] = useState(null);

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

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("/api/partnerApplication");
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching job applications:", error);
      }
    };

    fetchApplications();
  }, []);

  const handleEditClick = (application) => {
    setOriginalApplication(application);
    setEditingApplication({ ...application });
  };

  const handleCancelClick = () => {
    setEditingApplication(null);
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
      await axios.post("/api/updateRole", { userId, role, status, services });
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

  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("field", fieldName);
    formData.append("userId", editingApplication._id);

    try {
      const response = await axios.post("/api/admin/uploadFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setEditingApplication((prevApplication) => ({
        ...prevApplication,
        [fieldName]: response.data.fileUrl,
      }));
      notifySuccess();
    } catch (error) {
      notifyError("Error uploading file");
      console.error("Error uploading file:", error);
    }
  };

  const handleFileDelete = async (fieldName) => {
    const formData = new FormData();
    formData.append("fieldName", fieldName);
    formData.append("userId", editingApplication._id);
    try {
      const response = await axios.post("/api/admin/deleteFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setEditingApplication((prevApplication) => ({
        ...prevApplication,
        [fieldName]: null,
      }));
      notifySuccess();
    } catch (error) {
      notifyError("Error deleting file");
      console.error("Error deleting file:", error);
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
              <th className="py-2 px-4 border border-gray-300">PinCode</th>
              <th className="py-2 px-4 border border-gray-300">Shop Address</th>
              <th className="py-2 px-4 border border-gray-300">Want Partner Type</th>
              <th className="py-2 px-4 border border-gray-300">Interest</th>
              <th className="py-2 px-4 border border-gray-300">Aadhaar Card</th>
              <th className="py-2 px-4 border border-gray-300">PAN Card</th>
              <th className="py-2 px-4 border border-gray-300">Bank Passbook</th>
              <th className="py-2 px-4 border border-gray-300">Shop Photo Copy</th>
              <th className="py-2 px-4 border border-gray-300">MSME Certificate</th>
              <th className="py-2 px-4 border border-gray-300">Trade Licence</th>
              <th className="py-2 px-4 border border-gray-300">Photo Copy</th>
              <th className="py-2 px-4 border border-gray-300">User Legal257 ID</th>
              <th className="py-2 px-4 border border-gray-300">Username</th>
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
                      "JonoJivan Grocery"
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
                    {["Active", "Blocked" , "Pending" , "inReview"].map((status) => (
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
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="pinCode"
                      value={editingApplication.pinCode}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.pinCode
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="shopAddress"
                      value={editingApplication.shopAddress}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.shopAddress
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">{application.wantPartnerType}</td>
                <td className="py-2 px-4 border border-gray-300">{application.interest}</td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <div>
                      {editingApplication.aadhaarCard ? (
                        <div className="flex flex-col items-center">
                          <button
                            onClick={() => window.open(editingApplication.aadhaarCard, "_blank")}
                            className="py-1 px-2 bg-blue-500 text-white rounded-md mb-2"
                          >
                            View Document
                          </button>
                          <button
                            onClick={() => handleFileDelete("aadhaarCard")}
                            className="py-1 px-2 bg-red-500 text-white rounded-md mb-2"
                          >
                            Delete
                          </button>
                        </div>
                      ) : (
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload(e, "aadhaarCard")}
                          className="py-1 px-2 border border-gray-300 rounded-md"
                        />
                      )}
                    </div>
                  ) : (
                    application.aadhaarCard ? (
                      <button
                        onClick={() => window.open(application.aadhaarCard, "_blank")}
                        className="py-1 px-2 bg-blue-500 text-white rounded-md"
                      >
                        View Document
                      </button>
                    ) : (
                      "No Document Available"
                    )
                  )}
                </td>
                {["panCard", "bankPassbook", "shopPhotoCopy", "msmeCertificate", "tradeLicense", "photoCopy"].map((doc) => (
                  <td key={doc} className="py-2 px-4 border border-gray-300">
                    {editingApplication && editingApplication._id === application._id ? (
                      <div>
                        {editingApplication[doc] ? (
                          <div className="flex flex-col items-center">
                            <button
                              onClick={() => window.open(editingApplication[doc], "_blank")}
                              className="py-1 px-2 bg-blue-500 text-white rounded-md mb-2"
                            >
                              View Document
                            </button>
                            <button
                              onClick={() => handleFileDelete(doc)}
                              className="py-1 px-2 bg-red-500 text-white rounded-md mb-2"
                            >
                              Delete
                            </button>
                          </div>
                        ) : (
                          <input
                            type="file"
                            onChange={(e) => handleFileUpload(e, doc)}
                            className="py-1 px-2 border border-gray-300 rounded-md"
                          />
                        )}
                      </div>
                    ) : (
                      application[doc] ? (
                        <button
                          onClick={() => window.open(application[doc], "_blank")}
                          className="py-1 px-2 bg-blue-500 text-white rounded-md"
                        >
                          View Document
                        </button>
                      ) : (
                        "No Document Available"
                      )
                    )}
                  </td>
                ))}
                <td className="py-2 px-4 border border-gray-300">{application._id}</td>
                <td className="py-2 px-4 border border-gray-300">{application.username}</td>
                <td className="py-2 px-4 border border-gray-300">{application.branch}</td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleEditSave}
                        className="py-1 px-2 bg-green-500 text-white rounded-md"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelClick}
                        className="py-1 px-2 bg-gray-500 text-white rounded-md"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditClick(application)}
                        className="py-1 px-2 bg-blue-500 text-white rounded-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(application._id)}
                        className="py-1 px-2 bg-red-500 text-white rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
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
