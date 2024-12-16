"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../Shared/Container';

const faqs = [
  {
    question: "What services does Legal257 offer?",
    answer: "At Legal257, we offer comprehensive financial and tax services including GST and ITR filing, as well as competitive loan options tailored to meet your financial needs."
  },
  {
    question: "How can Legal257 help with GST filing?",
    answer: "Our expert team ensures accurate and timely GST filing, helping your business stay compliant with all regulatory requirements, thereby avoiding any penalties."
  },
  {
    question: "What is the process for filing an ITR with Legal257?",
    answer: "Filing an ITR with Legal257 is simple. Just provide us with the necessary financial documents, and our experienced professionals will handle the rest, ensuring accuracy and timely submission."
  },
  {
    question: "What types of loans does Legal257 offer?",
    answer: "Legal257 offers a variety of loan options including personal loans, business loans, and MSME loans. Our loan products are designed to meet diverse financial needs with competitive interest rates and flexible terms."
  },
  {
    question: "How can I apply for a loan through Legal257?",
    answer: "To apply for a loan, you can visit our website and fill out the online application form. Alternatively, you can contact our customer service team for assistance. We will guide you through the process and help you find the best loan option for your needs."
  },
  {
    question: "What documents are required for GST and ITR filing?",
    answer: "For GST filing, you typically need purchase and sales invoices, GST registration details, and bank statements. For ITR filing, you need income details, bank statements, investment proofs, and previous year's tax returns. Our team will provide a detailed list based on your specific situation."
  },
  {
    question: "How do I contact Legal257 for support or queries?",
    answer: "You can contact us through our website's contact form, email us at csprozana@gmail.com, or call our customer service number at 123-456-7890. Our team is available to assist you with any queries or support you may need."
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
<div className="py-8">
  <Container className="px-6 md:px-12">
    <h2 className="text-3xl font-bold text-center mb-12 mt-12">Frequently Asked Questions</h2>
    <div className="space-y-6 mb-12">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b-2 border-gray-200 pb-6">
          <motion.button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left flex justify-between items-center py-3 text-sm md:text-xl font-medium text-gray-700 hover:text-gray-900 transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {faq.question}
            <motion.span
              initial={false}
              animate={{ rotate: expanded === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg"
            >
              &#9660;
            </motion.span>
          </motion.button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: expanded === index ? 'auto' : 0, opacity: expanded === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600">{faq.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  </Container>
</div>

  );
};

export default FAQSection;
