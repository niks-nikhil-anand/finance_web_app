"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AvailablePincodeTable = () => {
  const [pincodes, setPincodes] = useState([]);
  const [editingApplication, setEditingApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
    const fetchPincodes = async () => {
      try {
        const response = await axios.get("/api/admin/availablePincode");
        setPincodes(response.data);
      } catch (error) {
        console.error("Error fetching pincodes:", error);
      }
    };

    fetchPincodes();
  }, []);

  const handleEditClick = (application) => {
    setEditingApplication(application);
    setShowModal(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`/api/admin/editDeletePincode/${id}`);
      setPincodes((prevPincodes) =>
        prevPincodes.filter((application) => application._id !== id)
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
      await axios.put(`/api/admin/editDeletePincode/${editingApplication._id}`, editingApplication);
      setPincodes((prevPincodes) =>
        prevPincodes.map((application) =>
          application._id === editingApplication._id ? editingApplication : application
        )
      );
      setEditingApplication(null);
      setShowModal(false);
      notifySuccess();
    } catch (error) {
      console.error("Error updating application:", error);
      notifyError("Error updating application");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingApplication((prevApplication) => ({
      ...prevApplication,
      [name]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto w-[80%] bg-gray-100"
    >
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">
        Available Pincodes - Legal 257
      </h2>
      <div className="overflow-auto max-h-[30rem]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-purple-100">
            <tr>
              <th className="py-2 px-4 border border-gray-300">PinCode</th>
              <th className="py-2 px-4 border border-gray-300">Available Services</th>
              <th className="py-2 px-4 border border-gray-300">Message</th>
              <th className="py-2 px-4 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(pincodes) && pincodes.map((application) => (
              <tr key={application._id} className="hover:bg-gray-100">
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
                      name="availableServices"
                      value={editingApplication.availableServices}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.availableServices
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {editingApplication && editingApplication._id === application._id ? (
                    <input
                      type="text"
                      name="message"
                      value={editingApplication.message}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-md"
                    />
                  ) : (
                    application.message
                  )}
                </td>
                <td className="py-2 px-4 border border-gray-300 flex space-x-2">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && editingApplication && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-[90%] md:w-[50%]">
            <h2 className="text-xl font-bold mb-4">Edit Application</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">PinCode</label>
                <input
                  type="text"
                  name="pinCode"
                  value={editingApplication.pinCode}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1">Available Services</label>
                <input
                  type="text"
                  name="availableServices"
                  value={editingApplication.availableServices}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1">Message</label>
                <input
                  type="text"
                  name="message"
                  value={editingApplication.message}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleEditSave}
                  className="bg-green-500 text-white py-2 px-4 rounded-md"
                >
                  Save
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setEditingApplication(null)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md ml-2"
                >
                  Cancel
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AvailablePincodeTable;
