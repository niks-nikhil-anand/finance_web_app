"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

const LoanCalculator = () => {
  const [amount, setAmount] = useState(88000);
  const [months, setMonths] = useState(14);
  const [rate, setRate] = useState(10);

  const calculateEMI = (amount, rate, months) => {
    const monthlyRate = rate / 12 / 100;
    return (
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    );
  };

  const emi = calculateEMI(amount, rate, months);
  const totalInterest = emi * months - amount;
  const totalAmount = amount + totalInterest;

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold text-blue-500 mb-6"
      >
        Loan Interest Calculator
      </motion.h2>
      <div className="mb-4">
        <label className="block text-gray-700">Loan Amount</label>
        <input
          type="range"
          min="1000"
          max="100000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full"
        />
        <span>₹ {amount}</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Loan Months</label>
        <input
          type="range"
          min="1"
          max="60"
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className="w-full"
        />
        <span>{months} Months</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Interest Rate</label>
        <input
          type="range"
          min="1"
          max="20"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full"
        />
        <span>{rate} %</span>
      </div>
      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold"
        >
          Monthly EMI: ₹ {emi.toFixed(2)}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-200 p-4 rounded-lg"
      >
        <div className="flex justify-between">
          <span>Total Interest</span>
          <span>₹ {totalInterest.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Amount Payable</span>
          <span>₹ {totalAmount.toFixed(2)}</span>
        </div>
      </motion.div>
      <div className="mt-6 text-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="gradient_yellow text-white base-bold px-4 py-2 rounded-lg"
        >
          Apply For Loan
        </motion.button>
      </div>
    </div>
  );
};

export default LoanCalculator;
