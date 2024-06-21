"use client"
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
     className='md:px-[12rem] md:py-[6rem] px-5 py-5'
    >
      <h1 className="text-3xl font-bold mb-4">Return and Refund Policy</h1>
      <p >Last updated: June 21, 2024</p>
      <p >Thank you for shopping at Legal257.</p>
      <p className='mt-4'>At Legal257, we strive to ensure our clients are satisfied with our services. However, if you are not entirely pleased with your purchase, we&apos;re here to help. Please review our return policy carefully:</p>
      <h4 className="text-2xl font-bold mt-4">Interpretation and Definition</h4>
      <h3 className="text-xl font-bold mt-4">Interpretation</h3>
      <p className='mt-4'>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
      <h3 className="text-xl font-bold mt-4">Definitions</h3>
      <p className='mt-4'>For the purposes of this Return and Refund Policy:</p>
      <ul className="list-disc ml-8">
        <li>Republish material from Legal257</li>
        <li>Sell, rent or sub-license material from Legal257</li>
        <li>Reproduce, duplicate or copy material from Legal257</li>
        <li>Redistribute content from Legal257</li>
      </ul>
      <h3 className="text-xl font-bold mt-4">Eligibility for Returns</h3>
      <p className='mt-4'>To be eligible for a return, please ensure that:</p>
      <ul className="list-disc ml-8">
        <li>The Goods were purchased within the last 7 days </li>
        <li>The Goods are in their original packaging.        </li>
      </ul>
      <h3 className="text-xl font-bold mt-4">Non-Returnable Goods</h3>
      <p className='mt-4'>The following Goods cannot be returned:</p>
      <ul className="list-disc ml-8">
        <li>Goods made to your specifications or clearly personalized.</li>
        <li>Goods which, by their nature, are not suitable to be returned, deteriorate rapidly, or where the date of expiry is over.
        </li>
        <li>Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.
        </li>
        <li>Goods which are, after delivery, inseparably mixed with other items.
        </li>
      </ul>
      <p className='mt-4'>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
      <h3 className="text-xl font-bold mt-4">Refund Policy      </h3>
      <p className='mt-4'>Only regular-priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to you if it is not permitted by applicable law.</p>



      <p className='mt-4'>If you have any questions about our return policy or need further assistance, please contact our customer service team.</p>
      <h3 className="text-xl font-bold mt-4">Our Services</h3>
      <p className='mt-4'>At Legal257, we are dedicated to providing top-notch financial and tax services to our valued clients. Our offerings include:</p>
      <ul className="list-disc ml-8">
        <li>Expert GST and ITR filing services to ensure your business remains compliant and stress-free.</li>
        <li>Competitive loan options tailored to meet your financial needs.</li>
      </ul>
      <p className='mt-4'>If you have any questions about our return policy or need further assistance, please contact our customer service team.</p>







      <h3 className="text-xl font-bold mt-4">Contact Us </h3>
      <p className='mt-4'>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
      <ul className="list-disc ml-8">
        <li>By email: csprozana@gmail.com</li>
        <li>By phone number: +91 94352 66783</li>
      </ul>
      <p className='mt-4'>Thank you for choosing Legal257.</p>

    </motion.div>
  );
};

export default PrivacyPolicy;
