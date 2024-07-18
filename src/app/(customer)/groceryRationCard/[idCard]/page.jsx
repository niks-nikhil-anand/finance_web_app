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
  
    // Front Side
    doc.setFillColor(51, 122, 183); 
    doc.rect(15, 15, 180, 100, 'F'); 
  
    // Title
    doc.setTextColor(255, 255, 255); // Text color
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Grocery Ration Card', 105, 30, { align: 'center' });
  
    // Card Details on Front Side
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(`Name: ${data.name}`, 70, 40);
    doc.text(`Father's Name: ${data.fatherName}`, 70, 50);
    doc.text(`Address: ${data.address}`, 70, 60);
    doc.text(`District: ${data.district}`, 70, 70);
    doc.text(`State: ${data.state}`, 70, 80);
  
    // Add a new page for back side
    doc.addPage();
  
    // Back Side
    doc.setFillColor(240); // Background color
    doc.rect(15, 15, 180, 100, 'F'); // Background rectangle
  
    // Title on Back Side
    doc.setTextColor(0); // Text color
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Additional Information', 105, 30, { align: 'center' });
  
    // Additional Details on Back Side
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(`Aadhaar Number: ${data.aadhaarNumber}`, 25, 50);
    doc.text(`PAN Number: ${data.panNumber}`, 25, 60);
  
    // Date and Signature lines (example)
    doc.setLineWidth(0.5);
    doc.line(25, 80, 90, 80); // Horizontal line
    doc.text('Date:', 25, 85);
    doc.line(100, 80, 165, 80); // Horizontal line
    doc.text('Signature:', 100, 85);
  
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
