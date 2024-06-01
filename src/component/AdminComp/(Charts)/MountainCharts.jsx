"use client"
// MountainChart.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import 'chart.js/auto';
import 'tailwindcss/tailwind.css';

const demoData = {
  weekly: [12, 19, 3, 5, 2, 3, 7],
  monthly: [2, 3, 20, 5, 1, 4, 10, 15, 3, 7, 12, 19],
  yearly: [120, 130, 125, 140, 160, 155, 170]
};

const chartLabels = {
  weekly: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  yearly: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
};

const chartOptions = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const MountainChart = () => {
  const [dataType, setDataType] = useState('weekly');

  const handleChange = (event) => {
    setDataType(event.target.value);
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h4" className="font-bold">
          User Enrollment Statistics
        </Typography>
        <FormControl variant="outlined" className="w-48">
          <InputLabel>Data Type</InputLabel>
          <Select value={dataType} onChange={handleChange} label="Data Type">
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Card className="shadow-lg p-4">
        <CardContent>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Line
              data={{
                labels: chartLabels[dataType],
                datasets: [{
                  label: 'Students Added',
                  data: demoData[dataType],
                  fill: true,
                  backgroundColor: 'rgba(75,192,192,0.2)',
                  borderColor: 'rgba(75,192,192,1)',
                  tension: 0.4,
                }],
              }}
              options={chartOptions}
              height={200}
            />
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MountainChart;
