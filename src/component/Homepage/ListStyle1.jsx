"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "../Shared/Container";

const Portfolio = () => {
  // State for controlling which category to display
  const [showCard, setShowCard] = useState("all");

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
                {["All", "Finance", "Loan", "Business"].map((category) => (
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
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark ">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
              {title}
            </h3>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:bg-[#40a0ff] hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-black frame"
            >
              {button}
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const portfolioData = [
  {
    ImageHref: "https://i.ibb.co/64WfFPt/image-01.jpg",
    category: "Business",
    title: "GST Return/Registration",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/PT7ghRs/image-06.jpg",
    category: "Business",
    title: "ITR Return/Registration",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/vkt8C1P/image-02.jpg",
    category: "Business",
    title: "Business Return/Registration",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/3FKqS1G/image-03.jpg",
    category: "Business",
    title: "MSME REGISTRATION",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/m6dq2fX/image-04.jpg",
    category: "Business",
    title: "Food License",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Business",
    title: "Trade License",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Business",
    title: "Loan NOC Certificate",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Business",
    title: "Legal Issues and Legal Notice",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/64WfFPt/image-01.jpg",
    category: "Loan",
    title: "Business Loan",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/PT7ghRs/image-06.jpg",
    category: "Loan",
    title: "Personal Loan",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/vkt8C1P/image-02.jpg",
    category: "Home Loan",
    title: "Business Return/Registration",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/3FKqS1G/image-03.jpg",
    category: "Loan Against Property",
    title: "MSME REGISTRATION",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/m6dq2fX/image-04.jpg",
    category: "Loan",
    title: "Gold Loan",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Loan",
    title: "Education Loan",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Loan",
    title: "Microfinance Group Loan",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Loan",
    title: "Daily Collection Loan",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Loan",
    title: "Mobile App Micro Loan",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Loan",
    title: "Mobile Finance Loan",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "Unified Payments Interface (UPI)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "BBPS (Bharat Bill Payment System)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "AEPS (Aadhaar Enabled Payment System)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "DMT (Domestic Money Transfer)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "CMS (Cash Management Services)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "CIBIL (Credit Information Bureau India Limited)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "NSDL PAN Card",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "MATM (Money at the Moment)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "P2P (Peer-to-Peer) Payments",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "NSDL PAN Card",
    button: "Apply Now",
    buttonHref: "#",
  },
 
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "Pay Bills , Recharge",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "Bank Transfer , Self Transfer",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "Pay Phone Number/Contacts(UPI)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "Scan QR Code(UPI)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "Activate UPI Lite(UPI)",
    button: "Apply Now",
    buttonHref: "#",
  },
  {
    ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
    category: "Finance",
    title: "Pay UPI ID or Number",
    button: "Apply Now",
    buttonHref: "#",
  },
];

export default Portfolio;
