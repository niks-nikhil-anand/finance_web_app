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

  const notifyLoading = () => toast.info("Submitting...", { position: "bottom-right" });
  const notifyDelete = () => toast.success("Deleted successfully!", { position: "bottom-right" });
  const notifySuccess = () => toast.success("Updated successfully!", { position: "bottom-right" });
  const notifyError = (message) => toast.error(`Error: ${message}`, { position: "bottom-right" });

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

  const handleImageClick = (imageUrl) => window.open(imageUrl, '_blank');

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
      setApplications(prevApplications => prevApplications.filter(application => application._id !== id));
      notifyDelete();
    } catch (error) {
      notifyError("Error deleting application");
      console.error("Error deleting application:", error);
    }
  };

  const handleEditSave = async () => {
    try {
      await axios.put(`/api/groceryRationCard/form/${editingApplication._id}`, editingApplication);
      setApplications(prevApplications => prevApplications.map(application => 
        application._id === editingApplication._id ? editingApplication : application));
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
      const response = await axios.post("/api/groceryRationCard/form/uploadFile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setEditingApplication(prevApplication => ({ ...prevApplication, [fieldName]: response.data.fileUrl }));
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
      await axios.post("/api/groceryRationCard/form/deleteFile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setEditingApplication(prevApplication => ({ ...prevApplication, [fieldName]: null }));
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
          <thead className='bg-purple-100'>
            <tr >
              <th className="py-2 px-4 border border-gray-400">Profile</th>
              <th className="py-2 px-4 border border-gray-400">Name</th>
              <th className="py-2 px-4 border border-gray-400">Email</th>
              <th className="py-2 px-4 border border-gray-400">Status</th>
              <th className="py-2 px-4 border border-gray-400">Father&apos;s Name</th>
              <th className="py-2 px-4 border border-gray-400">Shop Address</th>
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
                  {editingApplication && editingApplication._id === application._id ? (
                    <select
                      name="status"
                      value={editingApplication.status}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  ) : (
                    application.status
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="fathersName"
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
                      name="whatsappNumber"
                      value={editingApplication.whatsappNumber}
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
                  {editingApplication && editingApplication._id === application._id ? (
                    application.photoCopy ? (
                      <>
                        <img
                          src={application.photoCopy}
                          alt="Photo Copy"
                          className="h-16 w-16 cursor-pointer object-cover"
                          onClick={() => handleImageClick(application.photoCopy)}
                        />
                        <button
                          onClick={() => handleFileDelete("photoCopy")}
                          className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
                        >
                          Delete
                        </button>
                      </>
                    ) : (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, "photoCopy")}
                      />
                    )
                  ) : (
                    application.photoCopy && (
                      <img
                        src={application.photoCopy}
                        alt="Photo Copy"
                        className="h-16 w-16 cursor-pointer object-cover"
                        onClick={() => handleImageClick(application.photoCopy)}
                      />
                    )
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    application.profilePhoto ? (
                      <>
                        <img
                          src={application.profilePhoto}
                          alt="Profile Photo"
                          className="h-16 w-16 cursor-pointer object-cover"
                          onClick={() => handleImageClick(application.profilePhoto)}
                        />
                        <button
                          onClick={() => handleFileDelete("profilePhoto")}
                          className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
                        >
                          Delete
                        </button>
                      </>
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
    <div className="flex space-x-4">
      <motion.button
        onClick={handleEditSave}
        className="flex items-center justify-center py-2 px-4 bg-green-500 text-white rounded-md shadow-lg"
        whileHover={{ scale: 1.1, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        Save
      </motion.button>
      <motion.button
        onClick={handleCancelClick}
        className="flex items-center justify-center py-2 px-4 bg-gray-500 text-white rounded-md shadow-lg"
        whileHover={{ scale: 1.1, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        Cancel
      </motion.button>
    </div>
  ) : (
    <div className="flex space-x-4">
      <motion.button
        onClick={() => handleEditClick(application)}
        className="flex items-center justify-center py-2 px-4 bg-blue-500 text-white rounded-md shadow-lg"
        whileHover={{ scale: 1.1, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        Edit
      </motion.button>
      <motion.button
        onClick={() => handleDeleteClick(application._id)}
        className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-md shadow-lg"
        whileHover={{ scale: 1.1, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        Delete
      </motion.button>
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

export default GroceryIdCardTable;
