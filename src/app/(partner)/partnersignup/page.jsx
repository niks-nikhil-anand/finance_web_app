"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import growth from '../../../../public/growth.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import QrCode from '../../../../public/paymentqr.jpeg'

export default function Signup() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    pinCode: '',
    state: '',
    partnerType: '',
    interest: '',
    message: '',
    password: '',
    username: '',
    shopAddress:'' 
  });

  const [showQrCode, setShowQrCode] = useState(false); 


  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [paymentReceipt, setPaymentReceipt] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [bankPassbook, setBankPassbook] = useState(null);
  const [shopPhotoCopy, setShopPhotoCopy] = useState(null);
  const [msmeCertificate, setMsmeCertificate] = useState(null);
  const [photoCopy, setPhotoCopy] = useState(null);
  const [foodLicence, setFoodLicence] = useState(null);
  const [tradeLicence, setTradeLicence] = useState(null);
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

  const handleUsernameChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 15);
    setFormData({ ...formData, username: 'Legal257' + value });
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 13);
    setFormData({ ...formData, phone: '+91' + value });
  };
  
  const handlePincodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setFormData({ ...formData, pinCode: value });
  };


  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePreviousStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const toggleQrCode = () => {
    setShowQrCode(!showQrCode); // Toggle the QR code visibility
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
    data.append('username', formData.username);
    data.append('password', formData.password);
    data.append('city', formData.city);
    data.append('state', formData.state);
    data.append('pinCode', formData.pinCode);
    data.append('partnerType', formData.partnerType);
    data.append('interest', formData.interest);
    data.append('message', formData.message); 
    data.append('shopAddress', formData.shopAddress); 
    

    if (aadhaarCard) data.append('aadhaarCard', aadhaarCard);
    if (paymentReceipt) data.append('paymentReceipt', paymentReceipt);
    if (panCard) data.append('panCard', panCard);
    if (bankPassbook) data.append('bankPassbook', bankPassbook);
    if (shopPhotoCopy) data.append('shopPhotoCopy', shopPhotoCopy);
    if (msmeCertificate) data.append('msmeCertificate', msmeCertificate);
    if (photoCopy) data.append('photoCopy', photoCopy);
    if (foodLicence) data.append('foodLicence', foodLicence);
    if (tradeLicence) data.append('tradeLicence', tradeLicence);

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
        setPhotoCopy(null);
        setFoodLicence(null);
        setTradeLicence(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          pinCode: '',
          state: '',
          partnerType: '',
          interest: '',
          message: '',
          password: '',
          username: '',
          shopAddress:''
        });
        notifySuccess();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
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

  useEffect(() => {
    setFormData({ ...formData, username: 'Legal257' });
  }, []);

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
        <h2 className="text-xl md:text-2xl font-bold mb-4">Become DSA/CSP/Branch With Legal257</h2>
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
                <label className="block mb-1">Unique Id(15 digits only)</label>
                <div className="flex">
                  <span className="bg-gray-200 p-2 rounded-l">Legal257</span>
                  <input
                    type="text"
                    name="username"
                    value={formData.username.replace('Legal257', '')}
                    onChange={handleUsernameChange}
                    className="w-full border border-gray-300 p-2 rounded-r"
                    maxLength={15}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Phone Number</label>
                <div className="flex">
                <span className="bg-gray-200 p-2 rounded-l">+91</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone.replace('+91', '')}
                  onChange={handlePhoneChange}
                  maxLength={10}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Shop Address</label>
                <textarea
                  name="shopAddress"
                  value={formData.shopAddress}
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
                <label className="block mb-1">Pin Code</label>
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handlePincodeChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  maxLength={6}
                  required
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
                  <option value="" disabled>Select a state</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-6">
  {/* Partner Type Dropdown */}
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium text-gray-700">
      Type of Partner 
    </label>
    <select
      name="partnerType"
      value={formData.partnerType}
      onChange={handleInputChange}
      className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      <option value="" disabled>Select a partner type</option>
    <option value="CSP">CSP</option>
    <option value="Branch">Branch</option>
    <option value="DSA">DSA</option>
    </select>
  </div>

  {/* Buttons for QR Code */}
  <div className="flex flex-row justify-between items-center gap-2">
  <button
    onClick={toggleQrCode}
    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded shadow text-sm transition duration-200"
  >
    View QR Code
  </button>
  <a
    href="/paymentqr.jpeg"
    download="paymentqr.jpeg"
    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded shadow text-sm text-center transition duration-200"
  >
    Download QR Code
  </a>
</div>


  {/* QR Code Modal */}
  {showQrCode && (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded shadow-lg text-center w-11/12 md:w-3/4 lg:w-1/2">
        <button
          onClick={toggleQrCode}
          className="absolute top-3 right-3 text-white bg-red-500 p-2 rounded-full hover:bg-red-600 transition duration-200"
        >
          Close
        </button>
        <Image
          src={QrCode}
          alt="QR Code"
          width={400}
          height={400}
          className="mx-auto"
        />
      </div>
    </div>
  )}
</div>



              <button
                type="button"
                onClick={handleNextStep}
                className="bg-blue-500 text-white p-2 rounded w-full mt-10"
              >
                Next
              </button>
              <div>
                <p className="mt-2 text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                href={"/partnersignin"}
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
               Login
              </Link>
            </p>
                </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="mb-4">
                <label className="block mb-1">Interest with Fees</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="" disabled>
        Select a type + Fees
      </option>
      <option value="BANKING_BRANCH">Banking Branch ₹11,800</option>
      <option value="BANKING_CSP">Banking CSP ₹5,900</option>
      <option value="FINANCIAL_DSA">Financial DSA ₹2,500</option>
      <option value="JONOJIVAN_BRANCH">JonoJivan Grocery Branch ₹30,000</option>
      <option value="JONOJIVAN_DSA">JonoJivan Grocery DSA ₹15,000</option>
      <option value="GP_JONOJIVAN_WAREHOUSE">
        GP JonoJivan Grocery Warehouse ₹70,000
      </option>
      <option value="JONOJIVAN_PINCODE_WAREHOUSE">
        JonoJivan Delivery Area Pin Code Warehouse ₹1,20,000
      </option>
      <option value="CITY_JONOJIVAN_COURIER">
        City JonoJivan Courier Booking Franchise ₹2,500
      </option>
      <option value="ZONAL_JONOJIVAN_GROCERY">
        Zonal JonoJivan Grocery Distribution ₹7,00,000
      </option>
      <option value="ZONAL_JONOJIVAN_DELIVERY">
        Zonal JonoJivan Delivery Warehouse ₹5,00,000
      </option>
      <option value="ZONAL_JONOJIVAN_COURIER">
        Zonal JonoJivan Courier Booking Franchise Warehouse ₹3,00,000
      </option>
      <option value="DISTRICT_JONOJIVAN_WAREHOUSE">
        District JonoJivan Grocery Warehouse ₹2,50,000
      </option>
      <option value="DISTRICT_JONOJIVAN_COURIER">
        District JonoJivan Courier Booking Franchise ₹50,000
      </option>
      <option value="DISTRICT_JONOJIVAN_DELIVERY">
        District JonoJivan Delivery Warehouse ₹2,00,000
      </option>
                  
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
              <div className="mb-4">
                <label className="block mb-1">Payment Receipt(Nonrefundable Amount)</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setPaymentReceipt)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Aadhaar Card</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setAadhaarCard)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">PAN Card</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setPanCard)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Bank Passbook</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setBankPassbook)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Shop Photo Copy</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setShopPhotoCopy)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">MSME Certificate</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setMsmeCertificate)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Photo Copy</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setPhotoCopy)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Food Licence</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setFoodLicence)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Trade Licence</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setTradeLicence)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded "
                >
                   {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
