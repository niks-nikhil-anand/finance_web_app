import React from 'react';
import { Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const PieChartComponent = () => {
  const data1 = {
    labels: ['DSA', 'Branch', 'CSP'],
    datasets: [
      {
        data: [10, 5, 15], // Example data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const data2 = {
    labels: ['Loan Leads', 'GST/ITR Leads', 'Hiring Leads', 'Partner Application Leads'],
    datasets: [
      {
        data: [20, 10, 15, 5], // Example data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-around mt-5 bg-gray-200 shadow-lg p-5">
      <motion.div
        className="mb-10 w-[18rem] h-[18rem] bg-white shadow-lg "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-xl font-bold mb-4">DSA, Branch, CSP Distribution</h2>
        <Pie data={data1} />
      </motion.div>

      <motion.div
        className="mb-10 w-[20rem] h-[20rem] bg-white shadow-lg "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-xl font-bold mb-4">Leads Distribution</h2>
        <Pie data={data2} />
      </motion.div>
    </div>
  );
};

export default PieChartComponent;
