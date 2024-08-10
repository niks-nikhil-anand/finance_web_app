"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsChevronDown } from 'react-icons/bs';
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
    whatsAppNumber: '',
    mobileNumber: '',
    state: '',
    aadhaarNumber: '',
    panNumber: '',
    bankAccountNumber: '',
    ifscCode: '',
    bankName: '',
    panchayatName: '',
    blockName: '',
    wardNumber: '',
    gender: '',
    widowStatus: '',
    handicapStatus: '',
    dob: '',
    termsAgreed: false,
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
    {
      setFormData({ ...formData, [name]: value });
    }
  }
};

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmitStep2 = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleBackStep = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmitStep3 = async (e) => {
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

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          fatherName: '',
          address: '',
          district: '',
          pinCode: '',
          whatsAppNumber: '',
          mobileNumber: '',
          state: '',
          aadhaarNumber: '',
          panNumber: '',
          bankAccountNumber: '',
          ifscCode: '',
          bankName: '',
          panchayatName: '',
          blockName: '',
          wardNumber: '',
          gender: '',
          widowStatus: '',
          handicapStatus: '',
          dob: '',
          seniorCitizen:'',
          termsAgreed: false,
        });
        setPhotoCopy(null);
        setProfilePhoto(null);
        setStep(1);
        toast.success('Form submitted successfully!');
        router.push(`/groceryRationCard/${formData.email}`);
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      toast.error('An error occurred while submitting the form.');
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-6 md:mb-[0rem] flex-col">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">JONOJIVAN GROCERY RATION CARD</h1>
        <p className="text-gray-700 text-center mb-6">
          To download the grocery ration card, please fill out the form below.
        </p>

        {step === 1 && (
          <form onSubmit={handleSubmitStep1}>
          <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
           
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsAppNumber">
                WhatsApp Number
              </label>
              <input
                type="text"
                id="whatsAppNumber"
                name="whatsAppNumber"
                value={formData.whatsAppNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Next
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmitStep2}>
             <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pinCode">
                Pin Code
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                State
              </label>
              <div className="relative">
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select a state</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <BsChevronDown />
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Widow Status</label>
              <div className="flex items-center">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="widowStatus"
                    value="yes"
                    checked={formData.widowStatus === 'yes'}
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                    required
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="widowStatus"
                    value="no"
                    checked={formData.widowStatus === 'no'}
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                    required
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Senior Citizen</label>
              <div className="flex items-center">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="seniorCitizen"
                    value="yes"
                    checked={formData.seniorCitizen === 'yes'}
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                    required
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="seniorCitizen"
                    value="no"
                    checked={formData.seniorCitizen === 'no'}
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                    required
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Handicap Status</label>
              <div className="flex items-center">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="handicapStatus"
                    value="yes"
                    checked={formData.handicapStatus === 'yes'}
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                    required
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="handicapStatus"
                    value="no"
                    checked={formData.handicapStatus === 'no'}
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                    required
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
      <div className="flex items-center">
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
            className="form-radio text-blue-500"
            required
          />
          <span className="ml-2">Male</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
            className="form-radio text-blue-500"
            required
          />
          <span className="ml-2">Female</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === 'other'}
            onChange={handleChange}
            className="form-radio text-blue-500"
            required
          />
          <span className="ml-2">Other</span>
        </label>
      </div>
    </div>
            
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleBackStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmitStep3}>
           <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoCopy">
                Aadhaar Copy
              </label>
              <input
                type="file"
                id="photoCopy"
                name="photoCopy"
                accept=".jpg, .jpeg, .png"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePhoto">
                Passport Size Photo
              </label>
              <input
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                accept=".jpg, .jpeg, .png"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
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
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleBackStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default RationCardForm;
