"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';

const GroceryRationCard = () => {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Initial useEffect triggered');
    const emailFromURL = window.location.pathname.split('/')[2];
    setEmail(emailFromURL);
    console.log('Extracted email from URL:', emailFromURL);
  }, []);

  useEffect(() => {
    if (email) {
      console.log('Email state updated:', email);
      fetchData();
    }
  }, [email]);

  const fetchData = async () => {
    try {
      console.log('Fetching data for email:', email);
      const response = await fetch(`/api/groceryRationCard/${email}`);
      if (response.ok) {
        const result = await response.json();
        console.log('Data fetched:', result);
        setData(result[0]);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!data) return;

    const doc = new jsPDF();

    // Add title
    doc.setFontSize(22);
    doc.text('Grocery Ration Card', 20, 20);

    // Add email
    doc.setFontSize(16);
    doc.text(`Email: ${data.email}`, 20, 30);

    // Add additional data as needed
    // Assuming data has fields like name, rationCardNumber, etc.
    if (data.name) doc.text(`Name: ${data.name}`, 20, 40);
    if (data.rationCardNumber) doc.text(`Ration Card Number: ${data.rationCardNumber}`, 20, 50);

    // Download the PDF
    doc.save('rationCard.pdf');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center">
        JonoJivan Grocery Ration Card
      </h1>
      {loading && <div>Loading...</div>}
      {!loading && !data && <div>No data found</div>}
      {!loading && data && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg shadow-lg text-sm"
          onClick={handleDownload}
        >
          <FaDownload className="mr-2 " />
          Download Grocery Ration Card
        </motion.button>
      )}
    </div>
  );
};

export default GroceryRationCard;
