"use client"
import React, { useState } from 'react';
import { Slider, Typography, TextField } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(10);
  const [emiData, setEmiData] = useState([]);

  const handleLoanAmountChange = (event, newValue) => {
    setLoanAmount(newValue);
    updateEmiData(newValue, interestRate, loanTerm);
  };

  const handleInterestRateChange = (event, newValue) => {
    setInterestRate(newValue);
    updateEmiData(loanAmount, newValue, loanTerm);
  };

  const handleLoanTermChange = (event, newValue) => {
    setLoanTerm(newValue);
    updateEmiData(loanAmount, interestRate, newValue);
  };

  const updateEmiData = (amount, rate, term) => {
    // Calculate EMI data based on loan amount, interest rate, and loan term
    const emi = calculateEmi(amount, rate, term);
    // Generate data for the MUI chart
    const newData = [];
    for (let i = 1; i <= term; i++) {
      newData.push({ month: i, emi: emi * i });
    }
    setEmiData(newData);
  };

  const calculateEmi = (amount, rate, term) => {
    // EMI calculation logic (formula)
    const monthlyRate = rate / 1200;
    const emi = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -term));
    return emi.toFixed(2);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ width: '45%' }}>
        <Typography variant="h6">EMI Calculator</Typography>
        <div>
          <Typography>Loan Amount: {loanAmount}</Typography>
          <Slider value={loanAmount} onChange={handleLoanAmountChange} min={10000} max={1000000} step={10000} />
          <TextField type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
        </div>
        <div>
          <Typography>Interest Rate: {interestRate}%</Typography>
          <Slider value={interestRate} onChange={handleInterestRateChange} min={1} max={20} step={0.5} />
          <TextField type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </div>
        <div>
          <Typography>Loan Term (Years): {loanTerm}</Typography>
          <Slider value={loanTerm} onChange={handleLoanTermChange} min={1} max={30} step={1} />
          <TextField type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
        </div>
      </div>
      <div style={{ width: '45%' }}>
        <Typography variant="h6">EMI Chart</Typography>
        <LineChart width={400} height={300} data={emiData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="emi" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default EmiCalculator;
