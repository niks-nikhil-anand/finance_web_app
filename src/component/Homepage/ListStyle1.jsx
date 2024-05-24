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
import Link from "next/link";

const Portfolio = () => {
  // State for controlling which category to display, default to "loan"
  const [showCard, setShowCard] = useState("loan");

  // Function to handle category change
  const handleProject = (category) => {
    setShowCard(category); // Update showCard state with the selected category
  };

  return (
    <>
      <Container className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
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
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Portfolio
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Category buttons */}
          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                {[ "Finance", "Loan", "Business"].map((category) => (
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
    category: "Business",
    title: "GST Return/Registration",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Business",
    title: "ITR Return/Registration",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  business,
    category: "Business",
    title: "Business Return/Registration",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  msme,
    category: "Business",
    title: "MSME REGISTRATION",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  food,
    category: "Business",
    title: "Food License",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  trade,
    category: "Business",
    title: "Trade License",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  noc,
    category: "Business",
    title: "Loan NOC Certificate",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  legal,
    category: "Business",
    title: "Legal Issues and Legal Notice",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: businessloan,
    category: "Loan",
    title: "Business Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  personalloan,
    category: "Loan",
    title: "Personal Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  homeloan,
    category: "Loan",
    title: "Home Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref: loanagainstproperty,
    category: "Loan",
    title: "Loan Against Property",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  gold,
    category: "Loan",
    title: "Gold Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  education,
    category: "Loan",
    title: "Education Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref: microfinance,
    category: "Loan",
    title: "Microfinance Group Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref: dailyloan,
    category: "Loan",
    title: "Daily Collection Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  mobileloan,
    category: "Loan",
    title: "Mobile App Micro Loan",
    button: "Apply Now",
    buttonHref: "/applyloan",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "Unified Payments Interface (UPI)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "BBPS (Bharat Bill Payment System)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "AEPS (Aadhaar Enabled Payment System)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "DMT (Domestic Money Transfer)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "CMS (Cash Management Services)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "CIBIL (Credit Information Bureau India Limited)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "NSDL PAN Card",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "MATM (Money at the Moment)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "P2P (Peer-to-Peer) Payments",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "NSDL PAN Card",
    button: "Apply Now",
    buttonHref: "#",
  },
 
  {
    ImageHref: ITR,
    category: "Finance",
    title: "Pay Bills , Recharge",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: ITR,
    category: "Finance",
    title: "Bank Transfer , Self Transfer",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: ITR,
    category: "Finance",
    title: "Pay Phone Number/Contacts(UPI)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "Scan QR Code(UPI)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: ITR,
    category: "Finance",
    title: "Activate UPI Lite(UPI)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref:  ITR,
    category: "Finance",
    title: "Pay UPI ID or Number",
    button: "Apply Now",
    buttonHref: "#",
  },
];

export default Portfolio;
