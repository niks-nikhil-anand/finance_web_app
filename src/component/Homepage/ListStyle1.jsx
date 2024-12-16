"use client"
import React, { useState, useEffect } from "react"; // Import useEffect from React

import { motion } from "framer-motion";
import Container from "../Shared/Container";
import Image from "next/image";

import GST from '../../../public/services/GST.jpg';
import ITR from '../../../public/services/ITR.jpg';
import business from '../../../public/services/business.jpg';
import msme from '../../../public/services/msme.jpg';
import food from '../../../public/services/food.jpg';
import trade from '../../../public/services/trade.jpg';
import noc from '../../../public/services/noc.jpeg';
import legal from '../../../public/services/legal.jpg';
import businessloan from '../../../public/services/businessloan.jpg';
import homeloan from '../../../public/services/homeloan.jpg';
import personalloan from '../../../public/services/personalloan.jpg';
import loanagainstproperty from '../../../public/services/loanagainstproperty.png';
import gold from '../../../public/services/gold.jpg';
import education from '../../../public/services/education.png';
import microfinance from '../../../public/services/microfinance.jpg';
import dailyloan from '../../../public/services/dailyloan.png';
import mobileloan from '../../../public/services/mobileloan.jpg';
import bbpay from '../../../public/services/bbpay.png';
import upi from '../../../public/services/upi.jpg';
import Aadhar from '../../../public/services/Aadhar.jpg';
import moneytransfer from '../../../public/services/moneytransfer.jpg';
import cashmgt from '../../../public/services/CASH-MGT.jpg';
import licence from '../../../public/services/licence.png';
import Link from "next/link";

const Portfolio = () => {
  // State for controlling which category to display, default to "loan"
  const [showCard, setShowCard] = useState("FINANCE LOAN");
  const [visibleCount, setVisibleCount] = useState(5); // Initial visible cards set to 5

  const handleProject = (category) => {
    setShowCard(category); // Update showCard state with the selected category
  
    // Define color classes based on categories
    let colorClass = "";
    if (category.toLowerCase() === "fintech banking") {
      colorClass = "bg-red-500"; // Red color for FINTECH BANKING
    } else if (category.toLowerCase() === "finance loan") {
      colorClass = "bg-blue-500"; // Blue color for FINANCE LOAN
    } else if (category.toLowerCase() === "gst/itr tax pay") {
      colorClass = "bg-yellow-500"; // Yellow color for GST/ITR TAX PAY
    }
  
    // Update the button style with the color class
    const buttons = document.querySelectorAll(".portfolio-button");
    buttons.forEach((button) => {
      button.classList.remove("bg-red-500", "bg-blue-500", "bg-yellow-500");
      if (button.textContent.toLowerCase() === category.toLowerCase()) {
        button.classList.add(colorClass);
      }
    });
  };
  
  useEffect(() => {
    // Set default color for "FINTECH LOAN" when component mounts
    handleProject("FINANCE LOAN");
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Load 5 more cards
  };
  
  
  

  return (
    <>
      <Container className=" pb-12 lg:pt-[70px] lg:pb-[90px] dark:bg-dark mt-5">
        <div className=" mx-auto">
          {/* Portfolio header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap -mx-4"
          >
            {/* Portfolio title and description */}
            <div className="w-full px-4 py-1 md:px-8">
          <div className="mx-auto mb-8 max-w-screen-lg text-center">
            <span className="text-primary mb-4 block text-sm font-semibold text-yellow-400">
              Our Portfolio
            </span>
            <h2 className="text-dark mb-4 text-xl leading-tight font-bold sm:text-4xl md:text-5xl">
              Our Recent Projects
            </h2>
            <p className="text-body-color text-base dark:text-dark-6 sm:text-lg md:text-xl">
              Our offerings include expert GST and ITR filing services to ensure your business remains compliant and stress-free. Additionally, we offer competitive loan options tailored to meet your financial needs.
            </p>
          </div>
        </div>

          </motion.div>
          
          {/* Category buttons */}
          <div className="w-full flex flex-wrap justify-center items-center">
      <div className="w-full">
        <ul className="flex flex-wrap justify-center mb-2">
          {["FINTECH BANKING", "FINANCE LOAN", "GST/ITR TAX PAY"].map((category) => (
            <motion.li
              key={category}
              className="mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => handleProject(category.toLowerCase())} // Lowercase the category name
                className={`portfolio-button inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 text-body-color dark:text-dark-6 hover:bg-primary hover:text-gray`}
              >
                {category}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>

       {/* Portfolio cards */}
       <div className="flex flex-wrap -mx-4">
          {/* Filtered and limited portfolio data */}
          {portfolioData
            .filter((project) => project.category.toLowerCase() === showCard.toLowerCase())
            .slice(0, visibleCount) // Only show the visibleCount cards
            .map((project, index) => (
              <PortfolioCard
                key={index}
                ImageHref={project.ImageHref}
                category={project.category}
                title={project.title}
                button={project.button}
                buttonHref={project.buttonHref}
                showCard={showCard}
              />
            ))}
        </div>

        {/* View More Button */}
        {visibleCount < portfolioData.filter((project) => project.category.toLowerCase() === showCard.toLowerCase()).length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewMore}
              className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </Container>
    </>
  );
};



const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
        showCard === "FINANCE LOAN" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[15px] shadow-lg transition-transform transform hover:scale-105">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Image 
              src={ImageHref} 
              alt="portfolio" 
              className="w-full" 
              height={800} 
              width={800} 
            />
          </motion.div>
        </div>
        <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-2xl dark:shadow-box-dark transition-all">
          <span className="text-primary mb-2 block text-sm font-medium dark:text-gray-400">
            {category}
          </span>
          <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
            {title}
          </h3>
          <motion.div
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={buttonHref}
              className="gradient_yellow inline-block rounded-md border border-stroke dark:border-dark-3 py-[12px] px-7 text-sm font-medium transition hover:text-black dark:hover:text-white hover:shadow-lg"
            >
              {button}
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};



const portfolioData = [
 
  {
    ImageHref: businessloan,
    category: "FINANCE LOAN",
    title: "Business Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  personalloan,
    category: "FINANCE LOAN",
    title: "Personal Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  homeloan,
    category: "FINANCE LOAN",
    title: "Home Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref: loanagainstproperty,
    category: "FINANCE LOAN",
    title: "Loan Against Property",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  gold,
    category: "FINANCE LOAN",
    title: "Gold Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  education,
    category: "FINANCE LOAN",
    title: "Education Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref: microfinance,
    category: "FINANCE LOAN",
    title: "Microfinance Group Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref: dailyloan,
    category: "FINANCE LOAN",
    title: "Daily Collection Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  mobileloan,
    category: "FINANCE LOAN",
    title: "Mobile App Micro Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  upi,
    category: "FINTECH BANKING",
    title: "Unified Payments Interface (UPI)",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref:  bbpay,
    category: "FINTECH BANKING",
    title: "BBPS (Bharat Bill Payment System)",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref:  Aadhar,
    category: "FINTECH BANKING",
    title: "AEPS (Aadhaar Enabled Payment System)",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref:  moneytransfer,
    category: "FINTECH BANKING",
    title: "DMT (Domestic Money Transfer)",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref:  cashmgt,
    category: "FINTECH BANKING",
    title: "CMS (Cash Management Services)",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "CIBIL (Credit Information Bureau India Limited)",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "NSDL PAN Card",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "MATM (Money at the Moment)",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "P2P (Peer-to-Peer) Payments",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "NSDL PAN Card",
    button: "Coming Soon",
    buttonHref: "#",
  },
 
  {
    ImageHref: ITR,
    category: "FINTECH BANKING",
    title: "Pay Bills , Recharge",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref: ITR,
    category: "FINTECH BANKING",
    title: "Bank Transfer , Self Transfer",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref: ITR,
    category: "FINTECH BANKING",
    title: "Pay Phone Number/Contacts(UPI)",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "Scan QR Code(UPI)",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref: ITR,
    category: "FINTECH BANKING",
    title: "Activate UPI Lite(UPI)",
    button: "Coming Soon",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "Pay UPI ID or Number",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "GST/ITR TAX PAY",
    title: "ITR File New Registration",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  GST,
    category: "GST/ITR TAX PAY",
    title: "GST Registration",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  ITR,
    category: "GST/ITR TAX PAY",
    title: "ITR RETURN",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  ITR,
    category: "GST/ITR TAX PAY",
    title: "GST RETURN",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  business,
    category: "GST/ITR TAX PAY",
    title: "BUSINESS REGISTRATION",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  msme,
    category: "GST/ITR TAX PAY",
    title: "MSME REGISTRATION",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  legal,
    category: "GST/ITR TAX PAY",
    title: "LEGAL ISSUES LEGAL NOTICE",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  noc,
    category: "GST/ITR TAX PAY",
    title: "LOAN NOC CERTIFICATE",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  licence,
    category: "GST/ITR TAX PAY",
    title: "BUSINESS LICENSE",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  food,
    category: "GST/ITR TAX PAY",
    title: "FOOD LICENSE",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  trade,
    category: "GST/ITR TAX PAY",
    title: "TRADE LICENSE",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
];

export default Portfolio;
