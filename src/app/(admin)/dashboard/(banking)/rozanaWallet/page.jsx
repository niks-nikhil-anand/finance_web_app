"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const WalletManager = () => {
  const [balance, setBalance] = useState(0);
  const [addAmount, setAddAmount] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [userId, setUserId] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.post('/api/wallet/initialize'); // Ensure this endpoint exists and works

        const balanceResponse = await axios.get('/api/wallet/balance');
        setBalance(balanceResponse.data.balance);

        // Uncomment and ensure this endpoint exists and returns data in the expected format
        // const transactionsResponse = await axios.get('/api/wallet/transaction');
        // setTransactions(transactionsResponse.data.transactions);
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
      setTransactions(response.data.transactions);
      setAddAmount('');
    } catch (error) {
      console.error("Error adding balance:", error);
    } finally {
      console.log(addAmount);
    }
  };

  const handleSendBalance = async () => {
    if (!sendAmount || !userId) return;

    try {
      const response = await axios.post('/api/wallet/send', { amount: sendAmount, userId });
      setBalance(response.data.newBalance);
      setTransactions(response.data.transactions);
      setSendAmount('');
      setUserId('');
    } catch (error) {
      console.error("Error sending balance:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <motion.div
        className="mb-6 p-6 bg-white rounded-lg shadow-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Available Balance</h1>
        <div className="text-6xl mt-4">
          ₹ {balance.toLocaleString('en-IN')}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div
          className="p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Add Balance</h2>
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
          <h2 className="text-2xl font-bold mb-4">Send Balance</h2>
          <input
            type="number"
            value={sendAmount}
            onChange={(e) => setSendAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4"
            placeholder="Enter amount"
          />
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4"
            placeholder="Enter user ID"
          />
          <button
            onClick={handleSendBalance}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Send Balance
          </button>
        </motion.div>
      </div>

      <motion.div
        className="p-6 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">All Transactions</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Type</th>
              <th className="py-2 px-4 border">Amount</th>
              <th className="py-2 px-4 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-2 px-4 border">{transaction.id}</td>
                <td className="py-2 px-4 border">{transaction.type}</td>
                <td className="py-2 px-4 border">₹ {transaction.amount.toLocaleString('en-IN')}</td>
                <td className="py-2 px-4 border">{new Date(transaction.date).toLocaleString()}</td>
              </tr>
            ))}
            {transactions.length === 0 && (
              <tr>
                <td className="py-2 px-4 border" colSpan="4">No transactions</td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default WalletManager;
