"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Wallet = () => {
  const [totalAmount, setTotalAmount] = useState(1000); // Example initial amount
  const [availableToWithdraw, setAvailableToWithdraw] = useState(800); // Example initial available amount
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Deposit', amount: 500, dateTime: '2024-06-03 10:30 AM', message: 'Received from GST/ITR' },
    { id: 2, type: 'Withdrawal', amount: -200, dateTime: '2024-06-02 03:45 PM', message: 'Grocery Loan' },
    { id: 3, type: 'Deposit', amount: 300, dateTime: '2024-06-01 09:15 AM', message: 'Salary credit' },
    // Add more transactions as needed
  ]);

  return (
    <div className="wallet-container p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Your Wallet</h2>
      <div className="wallet-info grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <motion.div
          className="wallet-card p-4 bg-blue-200 rounded-md shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-2">Total Amount</h3>
          <p className="text-xl font-bold">{totalAmount}</p>
        </motion.div>
        <motion.div
          className="wallet-card p-4 bg-green-200 rounded-md shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold mb-2">Available to Withdraw</h3>
          <p className="text-xl font-bold">{availableToWithdraw}</p>
        </motion.div>
      </div>
      <h3 className="text-lg font-semibold mb-2">All Transactions</h3>
      <ul className="transactions-list">
        {transactions.map((transaction) => (
          <motion.li
            key={transaction.id}
            className={`transaction-item ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'} p-4 bg-gray-100 rounded-md shadow-md`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="mb-2 md:mb-0">
                <p>{transaction.type}</p>
                <p>{transaction.amount}</p>
              </div>
              <div className="text-sm">
                <p>{transaction.dateTime}</p>
                <p>{transaction.message}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Wallet;
