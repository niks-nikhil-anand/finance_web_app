"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import growth from '../../../../public/growth.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    pincode: '',
    state: '',
    partnerType: '',
    interest: '',
    message: '',
    password: '',
  });

  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [bankPassbook, setBankPassbook] = useState(null);
  const [shopPhotoCopy, setShopPhotoCopy] = useState(null);
  const [msmeCertificate, setMsmeCertificate] = useState(null);
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);

  const handleFileChange = (e, setFile) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePreviousStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const notifyLoading = () => {
    toast.info("Submitting form...", {
      position: "bottom-right"
    });
  };

  const notifySuccess = () => {
    toast.success("Form submitted successfully!", {
      position: "bottom-right"
    });
  };

  const notifyError = (message) => {
    toast.error(`Error: ${message}`, {
      position: "bottom-right"
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    notifyLoading(); 
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('password', formData.password);
    data.append('city', formData.city);
    data.append('state', formData.state);
    data.append('partnerType', formData.partnerType);
    data.append('interest', formData.interest);
    data.append('message', formData.message);

    if (aadhaarCard) data.append('aadhaarCard', aadhaarCard);
    if (panCard) data.append('panCard', panCard);
    if (bankPassbook) data.append('bankPassbook', bankPassbook);
    if (shopPhotoCopy) data.append('shopPhotoCopy', shopPhotoCopy);
    if (msmeCertificate) data.append('msmeCertificate', msmeCertificate);

    try {
      const response = await fetch('/api/partnerApplication', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        setAadhaarCard(null);
        setPanCard(null);
        setBankPassbook(null);
        setShopPhotoCopy(null);
        setMsmeCertificate(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          pincode: '',
          state: '',
          partnerType: '',
          interest: '',
          message: '',
          password: '',
        });
        notifySuccess();

        
      } else {
        console.error('Error:', await response.json());
        notifyError(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      notifyError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry'
  ];

  return (
    <div className="flex flex-col md:flex-row mb-[20rem] md:mb-[0rem]">
      <div className="md:w-1/2 bg-yellow-500 text-white p-10 flex flex-col justify-center items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left text-white">
            Steps into the real Financial freedom.
          </h1>
          <div className="hidden md:block">
            <Image
              src={growth}
              alt="Financial Freedom"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
      <div className="md:w-1/2 bg-white p-10 flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Become A Loan Agent / DSA With Legal257</h2>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div className="mb-4">
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Partner Type</label>
                <select
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">Select Partner Type</option>
                  <option value="CSP">CSP</option>
                  <option value="Branch">Branch</option>
                  <option value="DSA">DSA</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Interested In</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="" disabled>Select Interest</option>
                  <option value="Sourcing Finance Loan Service">Sourcing Finance Loan Service</option>
                  <option value="Fintech Banking Service">Fintech Banking Service</option>
                  <option value="GST ITR Tax Pay Service">GST ITR Tax Pay Service</option>
                  <option value="All Services">All Services</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <button
                onClick={handleNextStep}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="mb-4">
                <label className="block mb-1">Aadhaar Card</label>
                <input
                  type="file"
                  name="aadhaarCard"
                  onChange={(e) => handleFileChange(e, setAadhaarCard)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">PAN Card</label>
                <input
                  type="file"
                  name="panCard"
                  onChange={(e) => handleFileChange(e, setPanCard)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Bank Passbook</label>
                <input
                  type="file"
                  name="bankPassbook"
                  onChange={(e) => handleFileChange(e, setBankPassbook)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Shop Photo Copy</label>
                <input
                  type="file"
                  name="shopPhotoCopy"
                  onChange={(e) => handleFileChange(e, setShopPhotoCopy)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">MSME Certificate</label>
                <input
                  type="file"
                  name="msmeCertificate"
                  onChange={(e) => handleFileChange(e, setMsmeCertificate)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={handlePreviousStep}
                  className="bg-gray-500 text-white py-2 px-4 rounded"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </>
          )}
        </form>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}
