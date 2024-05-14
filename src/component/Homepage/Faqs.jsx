"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../Shared/Container';

const faqs = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase if it is in its original condition."
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping usually takes 5-7 business days within the contiguous United States."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship internationally. Shipping costs will apply, and will be added at checkout."
  },
  {
    question: "Can I track my order?",
    answer: "Yes, you can track your order using the tracking number provided in your confirmation email."
  }
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div>
      <Container>
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center py-2 text-xl font-medium"
            >
              {faq.question}
              <motion.span
                initial={false}
                animate={{ rotate: expanded === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                &#9660;
              </motion.span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: expanded === index ? 'auto' : 0, opacity: expanded === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="pt-2 text-gray-600">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
      </Container>
    </div>
  );
};

export default FAQSection;
