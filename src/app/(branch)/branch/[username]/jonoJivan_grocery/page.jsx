"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const RationCardForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    fatherName: '',
    address: '',
    district: '',
    pinCode: '',
    state: '', 
    panchayatName: '',
    blockName: '',
    wardNumber: '',
    termsAgreed: false,
    // Move these fields to the second step
    whatsAppNumber: '',
    mobileNumber: '',
    aadhaarNumber: '',
    panNumber: '',
    bankAccountNumber: '',
    ifscCode: '',
    bankName: '',
  });
  const [photoCopy, setPhotoCopy] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (name === 'photoCopy' || name === 'profilePhoto') {
      if (name === 'photoCopy') {
        setPhotoCopy(files[0]);
      } else {
        setProfilePhoto(files[0]);
      }
    } else if (['pinCode', 'mobileNumber', 'whatsAppNumber'].includes(name)) {
      const formattedValue = value.replace(/\D/g, '');
      if (name === 'pinCode' && formattedValue.length <= 6) {
        setFormData({ ...formData, [name]: formattedValue });
      } else if ((name === 'mobileNumber' || name === 'whatsAppNumber') && formattedValue.length <= 10) {
        setFormData({ ...formData, [name]: formattedValue });
      }
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    console.log('handleSubmitStep1 called:', formData);
    setStep(2);
  };

  const handleBackStep2 = (e) => {
    e.preventDefault();
    console.log('handleBackStep2 called');
    setStep(1);
  };

  const handleSubmitStep2 = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (photoCopy) data.append('photoCopy', photoCopy);
    if (profilePhoto) data.append('profilePhoto', profilePhoto);

    try {
      const response = await fetch('/api/user/groceryRationCard', {
        method: 'POST',
        body: data,
      });

      console.log('handleSubmitStep2 response:', response);
      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          fatherName: '',
          address: '',
          district: '',
          pinCode: '',
          state: '', 
          panchayatName: '',
          blockName: '',
          wardNumber: '',
          termsAgreed: false,
          // Reset these fields as well
          whatsAppNumber: '',
          mobileNumber: '',
          aadhaarNumber: '',
          panNumber: '',
          bankAccountNumber: '',
          ifscCode: '',
          bankName: '',
        });
        setPhotoCopy(null);
        setProfilePhoto(null);
        setStep(1);

        const email = formData.email;
        router.push(`/groceryRationCard/${email}`);
      } else {
        const errorData = await response.json();
        console.log('handleSubmitStep2 error response:', errorData);
      }
    } catch (error) {
      console.log('handleSubmitStep2 catch error:', error);
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
    <div className="min-h-screen flex items-center justify-center p-6 md:mb-[0rem] flex-col w-full">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-7xl">
        <h1 className="text-2xl font-bold text-center mb-4">JONOJIVAN GROCERY RATION CARD</h1>
        <p className="text-gray-700 text-center mb-6">
          To download the grocery ration card, please fill out the form below.
        </p>
        {step === 1 && (
          <form onSubmit={handleSubmitStep1} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fatherName">
                Father&apos;s Name
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1 md:col-span-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="panchayatName">
                Panchayat Name
              </label>
              <input
                type="text"
                id="panchayatName"
                name="panchayatName"
                value={formData.panchayatName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="blockName">
                Block Name
              </label>
              <input
                type="text"
                id="blockName"
                name="blockName"
                value={formData.blockName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="wardNumber">
                Ward Number
              </label>
              <input
                type="text"
                id="wardNumber"
                name="wardNumber"
                value={formData.wardNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="district">
                District
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                State
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Select a state</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pinCode">
                PIN Code
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                maxLength={6}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="termsAgreed">
                <input
                  type="checkbox"
                  id="termsAgreed"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                  required
                />
                I agree to the terms and conditions
              </label>
            </div>
            <div className="col-span-1 md:col-span-3 flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
              >
                Next
              </button>
            </div>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmitStep2} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsAppNumber">
                WhatsApp Number
              </label>
              <input
                type="text"
                id="whatsAppNumber"
                name="whatsAppNumber"
                value={formData.whatsAppNumber}
                onChange={handleChange}
                maxLength={10}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                maxLength={10}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadhaarNumber">
                Aadhaar Number
              </label>
              <input
                type="text"
                id="aadhaarNumber"
                name="aadhaarNumber"
                value={formData.aadhaarNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="panNumber">
                PAN Number
              </label>
              <input
                type="text"
                id="panNumber"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankAccountNumber">
                Bank Account Number
              </label>
              <input
                type="text"
                id="bankAccountNumber"
                name="bankAccountNumber"
                value={formData.bankAccountNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ifscCode">
                IFSC Code
              </label>
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankName">
                Bank Name
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4 col-span-1 md:col-span-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoCopy">
                Upload Photo Copy
              </label>
              <input
                type="file"
                id="photoCopy"
                name="photoCopy"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                accept="image/*"
                required
              />
            </div>
            <div className="mb-4 col-span-1 md:col-span-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePhoto">
                Upload Profile Photo
              </label>
              <input
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                accept="image/*"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-3 flex justify-between">
              <button
                type="button"
                onClick={handleBackStep2}
                className="bg-gray-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RationCardForm;
