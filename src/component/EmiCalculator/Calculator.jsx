"use client"
import React, { useState, useEffect } from 'react';
import { Slider, Typography, TextField, Grid } from '@mui/material';
import { Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';


const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(10);
  const [emiData, setEmiData] = useState([{ name: 'Principal', value: 0 }, { name: 'Interest', value: 0 }]);
  const [monthlyEmi, setMonthlyEmi] = useState(0);

  useEffect(() => {
    updateEmiData(loanAmount, interestRate, loanTerm);
  }, [loanAmount, interestRate, loanTerm]);

  const handleLoanAmountChange = (event, newValue) => {
    setLoanAmount(newValue);
  };

  const handleInterestRateChange = (event, newValue) => {
    setInterestRate(newValue);
  };

  const handleLoanTermChange = (event, newValue) => {
    setLoanTerm(newValue);
  };

  const updateEmiData = (amount, rate, term) => {
    const emi = calculateEmi(amount, rate, term);
    const principal = parseFloat(amount);
    const interest = parseFloat(emi) * term - principal;
    const newData = [
      { name: 'Principal', value: principal },
      { name: 'Interest', value: interest },
    ];
    setEmiData(newData);
    setMonthlyEmi(parseFloat(emi));
  };

  const calculateEmi = (amount, rate, term) => {
    const monthlyRate = rate / 1200;
    const emi = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -term));
    return emi.toFixed(0); // Changed toFixed to remove decimal values
  };

  const COLORS = ['#0088FE', '#FF0000'];

  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='bg-blue-50 w-full flex flex-col justify-center items-center sm:p-10 p-6 font-[sans-serif] text-[#333] mb-[2rem] shadow-lg'
  >
      <div>
        <h1 className='text-2xl font-bold sm:text-4xl'>EMI Calculator</h1>
      </div>
      <div className='flex justify-between  shadow-lg p-10 flex-col md:flex-row'>
        <div style={{}}>
          <div>
            <Typography>Loan Amount: ₹{loanAmount}</Typography>
            <Slider value={loanAmount} onChange={handleLoanAmountChange} min={10000} max={1000000} step={10000} />
            <TextField type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
          </div>
          <div>
            <Typography>Interest Rate: {Math.round(interestRate)}%</Typography>
            <Slider value={interestRate} onChange={handleInterestRateChange} min={1} max={20} step={0.5} />
            <TextField type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
          </div>
          <div>
            <Typography>Loan Term (Years): {loanTerm}</Typography>
            <Slider value={loanTerm} onChange={handleLoanTermChange} min={1} max={30} step={1} />
            <TextField type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
          </div>
        </div>
        <div style={{ position: 'relative' }} >
          <Typography variant="h6" style={{ textAlign: 'center', position: 'absolute', top: '34%', left: '50%', transform: 'translate(-50%, -50%)' }} className='md:w-[4rem]  md:font-bold text-sm text-center'>Total Amount: ₹{(emiData[0].value + emiData[1].value).toFixed(0)}</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={emiData}
                dataKey="value"
                nameKey="name"
                outerRadius="80%"
                innerRadius="60%"
                fill="#8884d8"
                label
              >
                {emiData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-5 ml-5">
  <div className="flex flex-col md:flex-row gap-6">
    <div className="w-full">
      <p>Monthly EMI: ₹{monthlyEmi}</p>
    </div>
    <div className="w-full">
      <p>Interest Paid: ₹{emiData[1].value.toFixed(0)}</p>
    </div>
    <div className="w-full">
      <p>Principal Amount: ₹{emiData[0].value}</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </motion.div>
  );
};

export default EmiCalculator;
