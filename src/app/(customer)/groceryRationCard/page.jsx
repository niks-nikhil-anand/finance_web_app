"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RationCardForm = () => {
  const [step, setStep] = useState(1); // Step state to control form steps
  const [formDataStep1, setFormDataStep1] = useState({
    name: '',
    fatherName: '',
    address: '',
    panchayatName: '',
    district: '',
    pin: '',
    whatNumber: '',
    mobileNumber: ''
  });
  const [formDataStep2, setFormDataStep2] = useState({
    aadhaarNumber: '',
    panNumber: '',
    photoCopy: null, // Updated to hold file object
    bankAccountNumber: '',
    ifscCode: '',
    bankName: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChangeStep1 = (e) => {
    const { name, value } = e.target;
    if (name === 'pin') {
      // Limit to 6 digits only
      const trimmedValue = value.slice(0, 6);
      setFormDataStep1({
        ...formDataStep1,
        [name]: trimmedValue.replace(/\D/, '') // Only allow numbers
      });
    } else if (name === 'mobileNumber' || name === 'whatNumber') {
      // Limit to +91 followed by 10 digits
      const formattedValue = value.replace(/\D/g, ''); // Remove non-digit characters
      if (formattedValue.length <= 10) {
        setFormDataStep1({
          ...formDataStep1,
          [name]: formattedValue
        });
      }
    } else {
      setFormDataStep1({
        ...formDataStep1,
        [name]: value
      });
    }
  };

  const handleChangeStep2 = (e) => {
    const { name, value } = e.target;
    if (name === 'photoCopy') {
      setFormDataStep2({
        ...formDataStep2,
        photoCopy: e.target.files[0] // Set file object for upload
      });
    } else {
      setFormDataStep2({
        ...formDataStep2,
        [name]: value
      });
    }
  };

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    setStep(2); // Move to step 2
  };

  const handleBackStep2 = (e) => {
    e.preventDefault();
    setStep(1); // Move back to step 1
  };

  const handleSubmitStep2 = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    Object.entries(formDataStep1).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append('photoCopy', formDataStep2.photoCopy); // Append file to FormData

    try {
      const response = await fetch('/api/rationCard', {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        toast.success('Form submitted successfully!');
        setFormDataStep1({
          name: '',
          fatherName: '',
          address: '',
          panchayatName: '',
          district: '',
          pin: '',
          whatNumber: '',
          mobileNumber: ''
        });
        setFormDataStep2({
          aadhaarNumber: '',
          panNumber: '',
          photoCopy: null,
          bankAccountNumber: '',
          ifscCode: '',
          bankName: ''
        });
        setStep(1); // Reset to step 1 after successful submission
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-6 md:mb-[0rem] flex-col">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">JONOJIVAN GROCERY RATION CARD</h1>
        <p className="text-gray-700 text-center mb-6">
          To download the grocery ration card, please fill out the form below.
        </p>
        {step === 1 && (
          <form onSubmit={handleSubmitStep1}>
            {/* Step 1 fields */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formDataStep1.name}
                onChange={handleChangeStep1}
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
                value={formDataStep1.fatherName}
                onChange={handleChangeStep1}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Address with Block Name
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formDataStep1.address}
                onChange={handleChangeStep1}
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
                value={formDataStep1.panchayatName}
                onChange={handleChangeStep1}
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
                value={formDataStep1.district}
                onChange={handleChangeStep1}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pin">
                PIN
              </label>
              <input
                type="text"
                id="pin"
                name="pin"
                value={formDataStep1.pin}
                onChange={handleChangeStep1}
                maxLength="6" // Limit to 6 digits
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatNumber">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatNumber"
                name="whatNumber"
                value={formDataStep1.whatNumber}
                onChange={handleChangeStep1}
                maxLength="12" // Limit to +91 followed by 10 digits
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formDataStep1.mobileNumber}
                onChange={handleChangeStep1}
                maxLength="12" // Limit to +91 followed by 10 digits
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* End of Step 1 fields */}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Continue to Step 2
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmitStep2}>
            {/* Step 2 fields */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadhaarNumber">
                Aadhaar Number
              </label>
              <input
                type="text"
                id="aadhaarNumber"
                name="aadhaarNumber"
                value={formDataStep2.aadhaarNumber}
                onChange={handleChangeStep2}
                maxLength="12" // Limit Aadhaar number to 12 digits
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
                value={formDataStep2.panNumber}
                onChange={handleChangeStep2}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoCopy">
                Upload Photo Copy
              </label>
              <input
                type="file" // Changed input type to file for uploading files
                id="photoCopy"
                name="photoCopy"
                accept=".jpg,.jpeg,.png,.pdf" // Specify accepted file types
                onChange={handleChangeStep2}
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
                value={formDataStep2.bankAccountNumber}
                onChange={handleChangeStep2}
                maxLength="14" // Limit bank account number to 14 digits
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
                value={formDataStep2.ifscCode}
                onChange={handleChangeStep2}
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
                value={formDataStep2.bankName}
                onChange={handleChangeStep2}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* End of Step 2 fields */}

            {/* Back button */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleBackStep2}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Back to Step 1
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default RationCardForm;
