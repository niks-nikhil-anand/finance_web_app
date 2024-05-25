"use client"
import React, { useState } from "react";
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
import Link from "next/link";

const Portfolio = () => {
  // State for controlling which category to display, default to "loan"
  const [showCard, setShowCard] = useState("FINANCE LOAN");

  // Function to handle category change
  const handleProject = (category) => {
    setShowCard(category); // Update showCard state with the selected category
  };

  return (
    <>
      <Container className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark mt-5">
        <div className="container mx-auto">
          {/* Portfolio header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap -mx-4"
          >
            {/* Portfolio title and description */}
            <div className="w-full px-4">
              <div className="mx-auto mb-[20px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Portfolio
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                Our offerings include expert GST and ITR filing services to ensure your business remains compliant and stress-free. Additionally, we offer competitive loan options tailored to meet your financial needs.
                </p>
                
              </div>
            </div>
          </motion.div>
          
          {/* Category buttons */}
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="w-full ">
              <ul className="flex flex-wrap justify-center mb-2 ">
                {[ "FINTECH BANKING", "FINANCE LOAN", "GST/ITR TAX PAY"].map((category) => (
                  <li className="mb-1" key={category}>
                    {/* Category button */}
                    <button
                      onClick={() => handleProject(category.toLowerCase())} // Lowercase the category name
                      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === category.toLowerCase() ? "activeClasses gradient-blue text-black" : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-gray"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
             
            </div>
          </div>

          {/* Portfolio cards */}
          <div className="flex flex-wrap -mx-4">
            {/* Map through portfolio data and render PortfolioCard component */}
            {portfolioData.map((project, index) => (
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
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px] ">
            <Image src={ImageHref} alt="portfolio" className="w-full" height={800} width={800} />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark ">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
              {title}
            </h3>
            <Link
              href={buttonHref}
              className="text-body-color dark:text-dark-6 bg-gray-300 inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-black frame"
            >
              {button}
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const portfolioData = [
  {
    ImageHref: GST,
    category: "GST/ITR TAX PAY",
    title: "GST Return/Registration",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  ITR,
    category: "GST/ITR TAX PAY",
    title: "ITR Return/Registration",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  business,
    category: "GST/ITR TAX PAY",
    title: "Business Return/Registration",
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
    ImageHref:  food,
    category: "GST/ITR TAX PAY",
    title: "Food License",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  trade,
    category: "GST/ITR TAX PAY",
    title: "Trade License",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  noc,
    category: "GST/ITR TAX PAY",
    title: "Loan NOC Certificate",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
  {
    ImageHref:  legal,
    category: "GST/ITR TAX PAY",
    title: "Legal Issues and Legal Notice",
    button: "Apply Now",
    buttonHref: "/applynow",
  },
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
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  bbpay,
    category: "FINTECH BANKING",
    title: "BBPS (Bharat Bill Payment System)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  Aadhar,
    category: "FINTECH BANKING",
    title: "AEPS (Aadhaar Enabled Payment System)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  moneytransfer,
    category: "FINTECH BANKING",
    title: "DMT (Domestic Money Transfer)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  cashmgt,
    category: "FINTECH BANKING",
    title: "CMS (Cash Management Services)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "CIBIL (Credit Information Bureau India Limited)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "NSDL PAN Card",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "MATM (Money at the Moment)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "P2P (Peer-to-Peer) Payments",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "NSDL PAN Card",
    button: "Apply Now",
    buttonHref: "#",
  },
 
  {
    ImageHref: ITR,
    category: "FINTECH BANKING",
    title: "Pay Bills , Recharge",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: ITR,
    category: "FINTECH BANKING",
    title: "Bank Transfer , Self Transfer",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: ITR,
    category: "FINTECH BANKING",
    title: "Pay Phone Number/Contacts(UPI)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "Scan QR Code(UPI)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: ITR,
    category: "FINTECH BANKING",
    title: "Activate UPI Lite(UPI)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "FINTECH BANKING",
    title: "Pay UPI ID or Number",
    button: "Apply Now",
    buttonHref: "#",
  },
];

export default Portfolio;
