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
    return emi.toFixed(0); // Changed toFixed to remove decimal values
  };

  const COLORS = ['#0088FE', '#FF0000'];

  return (
    <div className='bg-gray-300 w-full flex flex-col justify-center items-center sm:p-10 p-6 font-[sans-serif] text-[#333] mb-[2rem]'>
      <div>
        <h1 className='text-3xl font-bold sm:text-4xl'>EMI Calculator</h1>
      </div>
      <div className='flex justify-between  mt-10 shadow-lg p-10 flex-col md:flex-row'>
        <div style={{}}>
          <Typography variant="h6">EMI Calculator</Typography>
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
          <Typography variant="h6" style={{ textAlign: 'center', position: 'absolute', top: '34%', left: '50%', transform: 'translate(-50%, -50%)' }} className='md:w-[4rem]  md:font-bold text-xl text-center'>Total Amount: ₹{(emiData[0].value + emiData[1].value).toFixed(0)}</Typography>
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
          <div style={{ marginTop: '20px' }} className='ml-5 '>
            <Grid container spacing={1} className='flex flex-col md:flex-row gap-6'>
              <Grid  className='w-full'>
                <Typography>Monthly EMI: ₹{monthlyEmi}</Typography>
              </Grid>
              <Grid className='w-full'>
                <Typography>Interest Paid: ₹{emiData[1].value.toFixed(0)}</Typography>
              </Grid>
              <Grid className='w-full'>
                <Typography>Principal Amount: ₹{emiData[0].value}</Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
