"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const WalletManager = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.post('/api/user/wallet/initialize'); // Ensure this endpoint exists and works

        const balanceResponse = await axios.get('/api/user/wallet/balance');
        setBalance(balanceResponse.data.balance);

        const transactionsResponse = await axios.get('/api/user/wallet/transaction');
        setTransactions(transactionsResponse.data.transactions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <motion.div
        className="mb-6 p-6 bg-white rounded-lg shadow-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue">Available Balance</h1>
        <div className="text-6xl mt-4">
          ₹ {balance.toLocaleString('en-IN')}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <motion.div
          className="p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4">Transactions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 flex md:table-row flex-col w-full md:w-auto">
                <tr className="flex md:table-row flex-col w-full md:w-auto">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="flex md:table-row flex-col w-full md:w-auto">
                    <td className="px-6 py-4 whitespace-nowrap">{transaction.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹ {transaction.amount.toLocaleString('en-IN')}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.date).toLocaleDateString('en-IN')}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.date).toLocaleTimeString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WalletManager;
