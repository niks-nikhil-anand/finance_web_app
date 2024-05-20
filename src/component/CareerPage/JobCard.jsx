"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const jobs = [
  { title: 'Chartered Accountant', code: 'CA', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'State Manager', code: 'SM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Area Sales Manager', code: 'ASM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Distributor Team Manager', code: 'DTM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Distributor Sales Manager', code: 'DSM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Zonal Branch Manager', code: 'ZBM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Zonal Manager', code: 'ZM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Team Service Manager', code: 'TSM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Team Manager', code: 'TM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Branch Manager', code: 'BM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Area Manager', code: 'AM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Retailer Team Leader', code: 'RTL', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Field Officer', code: 'FO', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Assistant Manager', code: 'AM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Relationship Manager', code: 'RM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Accountant', code: 'AC', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Cashier', code: 'CR', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'District Distributor Manager', code: 'DDM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Loan Manager', code: 'LM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Direct Selling Agent', code: 'DSA', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Royal Branch Manager', code: 'RBM', type: 'Fulltime', salary: '₹96k - 540k/year' },
  { title: 'Area Branch Manager', code: 'ABM', type: 'Fulltime', salary: '₹96k - 540k/year' },
];

const JobCard = ({ title, code, type, salary }) => (
  <motion.div
    className="bg-white shadow-lg rounded-lg md:p-4 mb-4 flex  items-center  flex-col justify-center md:flex-row md:justify-between"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div >
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="flex  mt-2 flex-col md:flex-row justify-start gap-2">
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">{type}</span>
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">{code}</span>
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">{salary}</span>
      </div>
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded my-5">Apply Now</button>
  </motion.div>
);

const CareerPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const jobsPerPage = 5;    
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const currentJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold sm:text-4xl mb-5 text-center">Career Opportunities</h1>
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 w-full px-4 py-2 border rounded-lg"
      />
      {currentJobs.map((job) => (
        <JobCard key={job.code} title={job.title} code={job.code} type={job.type} salary={job.salary} />
      ))}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={(e) => handleClick(e, index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
