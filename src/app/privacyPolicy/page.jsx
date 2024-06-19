"use client"
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
     className='px-[12rem] py-[6rem]'
    >
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>Last updated: June 19, 2024</p>
      <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
      <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank" rel="noopener noreferrer">Privacy Policy Generator</a>.</p>
      <h2 className="text-2xl font-bold mt-8">Interpretation and Definitions</h2>
      <h3 className="text-xl font-bold mt-4">Interpretation</h3>
      <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
      <h3 className="text-xl font-bold mt-4">Definitions</h3>
      <p>For the purposes of this Privacy Policy:</p>
      <ul className="list-disc ml-8">
        <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
        <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
        <li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Legal 257, Uttar Khatowal Nagaon, Assam.</li>
        {/* Add more list items here */}
      </ul>
      <h2 className="text-2xl font-bold mt-8">Collecting and Using Your Personal Data</h2>
      <h3 className="text-xl font-bold mt-4">Types of Data Collected</h3>
      <h4 className="text-lg font-bold mt-4">Personal Data</h4>
      <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
      <ul className="list-disc ml-8">
        <li className="mb-2">Email address</li>
        <li className="mb-2">First name and last name</li>
        <li className="mb-2">Phone number</li>
        <li className="mb-2">Address, State, Province, ZIP/Postal code, City</li>
        <li className="mb-2">Usage Data</li>
      </ul>
      <h2 className="text-2xl font-bold mt-8">Use of Your Personal Data</h2>
      <p>The Company may use Personal Data for the following purposes:</p>
      <ul className="list-disc ml-8">
        <li className="mb-2">To provide and maintain our Service, including to monitor the usage of our Service.</li>
        <li className="mb-2">To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
        <li className="mb-2">For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
        <li className="mb-2">To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
        <li className="mb-2">To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
        <li  className="mb-2">To manage Your requests: To attend and manage Your requests to Us.</li>
        <li className="mb-2">For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
        <li className="mb-2">For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
      </ul>
      <p>We may share Your personal information in the following situations:</p>
      <ul className="list-disc ml-8">
        <li className="mb-2">With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
        <li className="mb-2">For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
        <li className="mb-2">With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
        <li className="mb-2">With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
        <li className="mb-2">With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
        <li className="mb-2">With Your consent: We may disclose Your personal information for any other purpose with Your consent.</li>
        <ul className="list-disc ml-8">
        <li className="mb-2">With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
        <li className="mb-2">With Your consent: We may disclose Your personal information for any other purpose with Your consent.</li>
      </ul>
      </ul>
      {/* Add more paragraphs and sections */}
      <h2 className="text-2xl font-bold mt-8">Contact Us</h2>
      <ul className="list-disc ml-8">
        <li className="mb-2"><p>By visiting this page on our website: <a href="https://www.legal257.in/contact" rel="external nofollow noopener" target="_blank">https://www.legal257.in/contact</a></p></li>
        <li className="mb-2"><p>By phone number: +91 94352 66783</p></li>
      </ul>
    </motion.div>
  );
};

export default PrivacyPolicy;
