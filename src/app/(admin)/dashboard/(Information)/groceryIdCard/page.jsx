"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GroceryIdCardTable = () => {
  const [applications, setApplications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingApplication, setEditingApplication] = useState(null);
  const [originalApplication, setOriginalApplication] = useState(null);
  const [error, setError] = useState(null);

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
        const response = await axios.get('/api/groceryRationCard/form');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };
    fetchApplications();
  }, []);

  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`/api/groceryRationCard/form/${id}`, { status: newStatus });
      setApplications(applications.map(app => app._id === id ? { ...app, status: newStatus } : app));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleEditClick = (application) => {
    setOriginalApplication(application);
    setEditingApplication({ ...application });
    setIsOpen(true);
  };

  const handleCancelClick = () => {
    setEditingApplication(null);
    setIsOpen(false);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`/api/groceryRationCard/form/${id}`);
      setApplications(prevApplications =>
        prevApplications.filter(application => application._id !== id)
      );
      notifyDelete();
    } catch (error) {
      notifyError("Error deleting application");
      console.error("Error deleting application:", error);
    }
  };

  const handleEditSave = async () => {
    try {
      const response = await axios.put(`/api/groceryRationCard/form/${editingApplication._id}`, editingApplication);
      setApplications(prevApplications =>
        prevApplications.map(application =>
          application._id === editingApplication._id ? editingApplication : application
        )
      );
      setEditingApplication(null);
      setIsOpen(false);
      notifySuccess();
    } catch (error) {
      console.error("Error updating application:", error);
      notifyError("Error updating application");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingApplication(prevApplication => ({ ...prevApplication, [name]: value }));
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
      setEditingApplication(prevApplication => ({
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
      await axios.post("/api/admin/deleteFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setEditingApplication(prevApplication => ({
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
      className="container mx-auto w-[80%] bg-gray-100 p-4"
    >
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">Grocery Id Card Applications</h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-purple-100">

              <th className="py-2 px-4 border border-gray-400">Profile</th>
              <th className="py-2 px-4 border border-gray-400">Name</th>
              <th className="py-2 px-4 border border-gray-400">Email</th>
              <th className="py-2 px-4 border border-gray-400">Status</th>
              <th className="py-2 px-4 border border-gray-400">Father&apos;s Name</th>
              <th className="py-2 px-4 border border-gray-400">Address</th>
              <th className="py-2 px-4 border border-gray-400">District</th>
              <th className="py-2 px-4 border border-gray-400">Pin Code</th>
              <th className="py-2 px-4 border border-gray-400">WhatsApp Number</th>
              <th className="py-2 px-4 border border-gray-400">Mobile Number</th>
              <th className="py-2 px-4 border border-gray-400">State</th>
              <th className="py-2 px-4 border border-gray-400">Aadhaar Number</th>
              <th className="py-2 px-4 border border-gray-400">PAN Number</th>
              <th className="py-2 px-4 border border-gray-400">Bank Account Number</th>
              <th className="py-2 px-4 border border-gray-400">IFSC Code</th>
              <th className="py-2 px-4 border border-gray-400">Bank Name</th>
              <th className="py-2 px-4 border border-gray-400">Photo Copy</th>
              <th className="py-2 px-4 border border-gray-400">Profile Photo</th>
              <th className="py-2 px-4 border border-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={index} className="hover:bg-gray-100">
                 <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    application.profilePhoto ? (
                      <img
                        src={application.profilePhoto}
                        alt="Profile Photo"
                        className="h-16 w-16 cursor-pointer object-cover"
                        onClick={() => handleImageClick(application.profilePhoto)}
                      />
                    ) : (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, "profilePhoto")}
                      />
                    )
                  ) : (
                    application.profilePhoto && (
                      <img
                        src={application.profilePhoto}
                        alt="Profile Photo"
                        className="h-16 w-16 cursor-pointer object-cover"
                        onClick={() => handleImageClick(application.profilePhoto)}
                      />
                    )
                  )}
                </td>
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
                    value={application.status}
                    onChange={(e) =>
                      handleStatusChange(application._id, e.target.value)
                    }
                    className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  >
                    {["Active", "Blocked"].map((status) => (
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
                      name="fatherName"
                      value={editingApplication.fatherName}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.fatherName
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="address"
                      value={editingApplication.address}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.address
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="district"
                      value={editingApplication.district}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.district
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
                      name="whatsAppNumber"
                      value={editingApplication.whatsAppNumber}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.whatsAppNumber
                  )}
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
                  {application.state || 'Not Available'}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="aadhaarNumber"
                      value={editingApplication.aadhaarNumber}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.aadhaarNumber
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="panNumber"
                      value={editingApplication.panNumber}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.panNumber
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="bankAccountNumber"
                      value={editingApplication.bankAccountNumber}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.bankAccountNumber
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="ifscCode"
                      value={editingApplication.ifscCode}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.ifscCode
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="bankName"
                      value={editingApplication.bankName}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.bankName
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.photoCopy || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.photoCopy ? 'Photo Copy' : 'Not Available'}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href="#"
                    onClick={() => handleImageClick(application.profilePhoto || '#')}
                    className="text-blue-500 hover:underline"
                  >
                    {application.profilePhoto ? 'Profile Photo' : 'Not Available'}
                  </a>
                </td>
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
    </motion.div>
  );
};

export default GroceryIdCardTable;
