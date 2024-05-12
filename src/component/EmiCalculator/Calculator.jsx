"use client"
import React, { useState, useEffect } from 'react';
import { Slider, Typography, TextField, Grid } from '@mui/material';
import { Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

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
    return emi.toFixed(2);
  };

  const COLORS = ['#0088FE', '#FFBB28'];

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
      <div style={{ width: '45%', position: 'relative' }}>
        <Typography variant="h6" style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Total Amount: {(emiData[0].value + emiData[1].value).toFixed(0)}</Typography>
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
        <div style={{ marginTop: '20px' }}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography>Monthly EMI: {monthlyEmi}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Principal Amount: {emiData[0].value}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Interest Paid: {emiData[1].value}</Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
