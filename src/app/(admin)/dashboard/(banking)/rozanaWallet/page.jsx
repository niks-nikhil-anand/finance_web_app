"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import DeductBalanceForm from '@/component/AdminDashboard/DeductBalance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WalletManager = () => {
  const [balance, setBalance] = useState(0);
  const [addAmount, setAddAmount] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [sendEmail, setSendEmail] = useState('');



  const notifySuccess = () => {
    toast.success("Done", {
      position: "bottom-right"
    });
  };

  const notifyError = (message) => {
    toast.error(`Error: ${message}`, {
      position: "bottom-right"
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.post('/api/wallet/initialize'); 
        const balanceResponse = await axios.get('/api/wallet/balance');
        setBalance(balanceResponse.data.balance);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddBalance = async () => {
    if (!addAmount) return;

    try {
      const response = await axios.post('/api/wallet/addBalance', { amount: addAmount });
      setBalance(response.data.newBalance);
      setAddAmount('');
      notifySuccess();
    } catch (error) {
      console.error("Error adding balance:", error);
      notifyError();
    }
  };

  const handleSendBalance = async () => {
    if (!sendAmount || !sendEmail) return;

    try {
      const response = await axios.post('/api/wallet/send', { amount: sendAmount, email: sendEmail });
      setBalance(response.data.newBalance);
      setSendAmount('');
      setSendEmail('');
      notifySuccess();
    } catch (error) {
      console.error("Error sending balance:", error);
      notifyError();
    }
  };

  return (
    <div className="p-6 bg-gray-100  w-full   ">
      <motion.div
        className="mb-6 p-6 bg-white rounded-lg shadow-md text-center frame "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">Available Balance</h1>
        <div className="text-6xl mt-4">
          ₹ {balance.toLocaleString('en-IN')}
        </div>
      </motion.div>

      <div className="flex gap-5 mb-6 justify-center bg-gradient-to-r from-yellow-400 via-gray-500 to-blue-700 p-4 ">
        <motion.div
          className="p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">Add Balance</h2>
          <input
            type="number"
            value={addAmount}
            onChange={(e) => setAddAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4"
            placeholder="Enter amount"
          />
          <button
            onClick={handleAddBalance}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add Balance
          </button>
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">Send Balance</h2>
          <input
            type="number"
            value={sendAmount}
            onChange={(e) => setSendAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4"
            placeholder="Enter amount"
          />
          <input
            type="email"
            value={sendEmail}
            onChange={(e) => setSendEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4"
            placeholder="Enter Email Id"
          />
          <button
            onClick={handleSendBalance}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Send Balance
          </button>
        </motion.div>
        <DeductBalanceForm/>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default WalletManager;
