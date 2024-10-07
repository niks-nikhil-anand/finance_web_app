"use client";
import React, { useState, useRef } from 'react';
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import { toPng } from 'html-to-image';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf'; // Import jsPDF for PDF generation

const IdCard = () => {
  const [jobApplication, setJobApplication] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [buttonText, setButtonText] = useState('Download');
  const cardRef = useRef(null); 

  const handleSearch = async () => {
    if (email.trim() === '') {
      setError('Email is required');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/jobApplication/${email}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      setJobApplication(result[0]);
      setButtonText('Download'); 
    } catch (err) {
      setError(err.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const { name, email, mobile, city, state, pinCode, jobTitle } = jobApplication;


    // First Page: Offer Letter Title
    doc.setFontSize(16);
    doc.setTextColor(40);
    doc.text('Job Offer Letter', 14, 20);

    // Add company name and introduction
    doc.setFontSize(18);
    doc.setTextColor(252, 186, 3); // Legal257 color
    doc.text('Legal257 Financial & Tax Services', 14, 30);
    doc.setFont("helvetica", "normal");

    // Greeting and offer introduction
    doc.setFontSize(14);
    doc.setTextColor(0);
    const greeting = `Dear ${name},`;
    const offerIntro = `We are pleased to extend you an offer for the position of ${jobTitle} at Legal257 Financial & Tax Services. We believe that your skills and experience will be an ideal match for our team.`;
    doc.text(greeting, 14, 50);
    doc.text(offerIntro, 14, 60, { maxWidth: 180 });

    // Job details
    doc.text(`Position: ${jobTitle}`, 14, 80);

    // Offer details and description of company
    const offerDescription = `At Legal257, we are dedicated to providing top-notch financial and tax services to our valued clients. Our offerings include expert GST and ITR filing services to ensure your business remains compliant and stress-free. Additionally, we offer competitive loan options tailored to meet your financial needs.`;
    doc.text(offerDescription, 14, 130, { maxWidth: 180 });

    // Terms of employment
    const employmentTerms = [
        '1. Acceptance of Offer: This offer is contingent upon the successful completion of any pre-employment requirements and the verification of the information you have provided.',
        '2. Confidentiality: During the course of your employment, you may have access to sensitive information. You agree to maintain confidentiality and not disclose any such information outside of the company.',
        '3. Termination: Either party may terminate the employment agreement by providing 30 days written notice.',
        '4. Benefits: You will be entitled to benefits in accordance with the company policies, which will be further discussed upon your joining.',
        '5. Governing Law: This offer letter shall be governed by and construed in accordance with the laws of the jurisdiction in which Legal257 operates.',
    ];

    let currentY = 160;
    const lineHeight = 10;

    employmentTerms.forEach((term) => {
        const wrappedText = doc.splitTextToSize(term, 180);
        wrappedText.forEach(line => {
            doc.text(line, 12, currentY);
            currentY += lineHeight;
        });
        currentY += 5; // Extra space between terms
    });

    // Sign off
    const signOff = `We look forward to working with you and are confident that you will make a significant contribution to our team. Please confirm your acceptance of this offer by signing and returning a copy of this letter.`;
    doc.text(signOff, 14, currentY + 10, { maxWidth: 180 });

    // Signature
    doc.text('Sincerely,', 14, currentY + 40);
    doc.text('Legal257 Financial & Tax Services', 14, currentY + 50);
    doc.text('HR Manager', 14, currentY + 60);

    // Save the PDF
    doc.save('job_offer_Legal257.pdf');
};


  const handleSearchAgain = () => {
    setJobApplication(null);
    setEmail('');
    setButtonText('Download');
  };

  return (
    <div className='flex flex-col items-center bg-[#f5f6fa] w-full'>
      <div className="text-center bg-[#dfe1e8]  p-8 shadow-3xl w-full rounded-lg">
        <motion.input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email ID"
          className="inline-block bg-white text-[#a3a3a3] border-0 outline-0 p-5 w-[80%] rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:shadow-2xl focus:shadow-xl focus:ring-2 focus:ring-[#7f8ff4]"
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
        />

        <motion.button
          onClick={handleSearch}
          className="inline-block bg-[#7f8ff4] text-white rounded-lg p-3 px-9 ml-8 shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-blue-600 active:bg-blue-500 active:shadow-inner"
          whileTap={{ scale: 0.95, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
          whileHover={{ scale: 1.05 }}
        >
          Search
        </motion.button>

        {loading && <p className="mt-2">Loading...</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {/* Show download button when jobApplication is found */}
      {jobApplication && (
        <motion.button
          onClick={buttonText === 'Download' ? generatePDF : handleSearchAgain}
          className="mt-5 bg-green-500 text-white p-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-green-600 active:bg-green-700"
          whileTap={{ scale: 0.95, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
          whileHover={{ scale: 1.05 }}
        >
          {buttonText}
        </motion.button>
      )}
    </div>
  );
};

export default IdCard;
