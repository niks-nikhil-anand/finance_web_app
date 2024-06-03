"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoanForm = () => {
  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [bankPassbook, setBankPassbook] = useState(null);
  const [bankStatements, setBankStatements] = useState(null);
  const [itrFile, setITRFile] = useState(null);
  const [msmeCertificate, setMsmeCertificate] = useState(null);
  const [tradeLicense, setTradeLicense] = useState(null);
  const [gstCertificate, setGstCertificate] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  

  const [employmentType, setEmploymentType] = useState('');
  const [loading, setLoading] = useState(false);
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [requiredLoanAmount, setRequiredLoanAmount] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [loanYear, setLoanYear] = useState('');
  const [loanType, setLoanType] = useState('');
  const [step, setStep] = useState(1);

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];
  const loanTypes = [
    "BUSINESS LOAN", "PERSONAL LOAN", "HOME LOAN", "LOAN AGAINST PROPERTY",
    "GOLD LOAN", "EDUCATION LOAN", "MICRO FINANCE GROUP LOAN", "DAILY COLLECTION LOAN",
    "MOBILE APP MICRO LOAN", "MOBILE FINANCE LOAN"
  ];

  const handleFileChange = (e, setFile) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }
  const handlePinCodeChange = (e) => {
    const value = e.target.value;
    if (value.match(/^\d{0,6}$/)) {
      setPinCode(value);
    }
  };
  const handleMonthlyIncomeChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); 
    setMonthlyIncome(value);
  };
  const handleRequiredLoanAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); 
    setRequiredLoanAmount(value);
  };
  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
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

    const formData = new FormData();
   
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobileNumber', mobileNumber);
    formData.append('gender', gender);
    formData.append('city', city);
    formData.append('employmentType', employmentType);
    formData.append('monthlyIncome', monthlyIncome);
    formData.append('requiredLoanAmount', requiredLoanAmount);
    formData.append('pinCode', pinCode);
    formData.append('state', state);
    formData.append('maritalStatus', maritalStatus);
    formData.append('loanYear', loanYear);
    formData.append('loanType', loanType);

    if (aadhaarCard) formData.append('aadhaarCard', aadhaarCard);
    if (panCard) formData.append('panCard', panCard);
    if (bankPassbook) formData.append('bankPassbook', bankPassbook);
    if (bankStatements)  formData.append('bankStatements', bankStatements);
    if (itrFile)  formData.append('itrFile', itrFile);
    if (msmeCertificate) formData.append('msmeCertificate', msmeCertificate);
    if (tradeLicense) formData.append('tradeLicense', tradeLicense);
    if (gstCertificate) formData.append('gstCertificate', gstCertificate);
    

    try {
      const response = await fetch('/api/loanApplication', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log(formData)
        setBankPassbook(null);
        setAadhaarCard(null);
        setPanCard(null);
        setBankStatements(null);
        setITRFile(null);
        setMsmeCertificate(null);
        setGstCertificate(null);
        setTradeLicense(null);
        setName('');
        setEmail('');
        setMobileNumber('');
        setGender('');
        setCity('');
        setEmploymentType('');
        setMonthlyIncome('');
        setRequiredLoanAmount('');
        setPinCode('');
        setState('');
        setMaritalStatus('');
        setLoanYear('');
        setLoanType('');
        notifySuccess();
      } else {
        console.error('Error:', await response.json());
        notifyError(errorData.message);
      }
    } catch (error) {
      console.log(formData)
      console.error('Error:', error);
      notifyError('Something went wrong.');
    } finally {
       console.log(formData)
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col  items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-6 mb-[6rem] md:mb-[0rem]"
    >
      <div  className='bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-md'>

     
      <h2 className="text-2xl font-bold mb-6 text-white">Loan Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <div>
              <label className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Gender</label>
              <select
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">City</label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
                    <label className="block text-sm font-medium text-white">Pin Code</label>
                    <input
                      type="text"
                      name="pinCode"
                      value={pinCode}
                      onChange={handlePinCodeChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      pattern="\d{6}"
                      maxLength="6"
                    />
    </div>
            <div>
              <label className="block text-sm font-medium text-white">State</label>
              <select
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>Select State</option>
                {statesOfIndia.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-white">Marital Status</label>
              <select
                name="maritalStatus"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Loan Type</label>
              <select
                name="loanType"
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                    <option value="" disabled>Select Loan type</option>
                {loanTypes.map((loan, index) => (
                  <option key={index} value={loan}>{loan}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Loan Duration</label>
              <select
                name="loanYear"
                value={loanYear}
                onChange={(e) => setLoanYear(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>Select Duration</option>
                <option value="1 year">1 Year</option>
                <option value="2 years">2 Year</option>
                <option value="3 years">3 Year</option>
                <option value="4 years">4 Year</option>
                <option value="5 years">5 Year</option>
                <option value="6 year">6 Year</option>
                <option value="7 years">7 Year</option>
                <option value="8 years">8 Year</option>
                <option value="9 years">9 Year</option>
                <option value="10 years">10 Year</option>
                <option value="11 year">11 Year</option>
                <option value="12 years">12 Year</option>
                <option value="13 years">13 Year</option>
                <option value="14 years">14 Year</option>
                <option value="15 years">15 Year</option>
              </select>
            </div>
            <div>
  <label className="block text-sm font-medium text-white">Employment Type</label>
  <select
    name="employmentType"
    value={employmentType}
    onChange={(e) => setEmploymentType(e.target.value)} 
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="" disabled>Select employment type</option>
    <option value="business">Business</option>
    <option value="self-employed">Self Employed</option>
    <option value="government job">Government Job</option>
    <option value="private Job">Private Job</option>
    <option value="student">Student</option>
    <option value="other">Other</option>
  </select>
</div>
<div>
<label className="block text-sm font-medium text-white">Monthly Income</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">₹</span>
        </div>
        <input
          type="text"
          name="monthlyIncome"
          value={monthlyIncome}
          onChange={handleMonthlyIncomeChange}
          className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="0.00"
        />
      </div>
      </div>
      <div>
      <label className="block text-sm font-medium text-white">Required Loan Amount</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">₹</span>
        </div>
        <input
          type="text"
          name="requiredLoanAmount"
          value={requiredLoanAmount}
          onChange={handleRequiredLoanAmountChange}
          className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="0.00"
        />
      </div>
      </div>
          </>
        )}
        {step === 3 && (
          <>
            <div>
              <label className="block text-sm font-medium text-white">Aadhaar Card</label>
              <input
                type="file"
                name="aadhaarCard"
                
                onChange={(e) => handleFileChange(e, setAadhaarCard)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">PAN Card</label>
              <input
                type="file"
                name="panCard"
                onChange={(e) => handleFileChange(e, setPanCard)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Bank Passbook</label>
              <input
                type="file"
                name="bankPassbook"
                onChange={(e) => handleFileChange(e, setBankPassbook)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Bank Statements</label>
              <input
                type="file"
                name="bankStatements"
                onChange={(e) => handleFileChange(e, setBankStatements)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">ITR File</label>
              <input
                type="file"
                name="itrFile"
                onChange={(e) => handleFileChange(e, setITRFile)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">MSME Certificate</label>
              <input
                type="file"
                name="msmeCertificate"
                onChange={(e) => handleFileChange(e, setMsmeCertificate)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Trade License</label>
              <input
                type="file"
                name="tradeLicense"
                onChange={(e) => handleFileChange(e, setTradeLicense)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">GST Certificate</label>
              <input
                type="file"
                name="gstCertificate"
                onChange={(e) => handleFileChange(e, setGstCertificate)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}
        <div className="flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePreviousStep}
              className="px-4 py-2 text-white bg-gray-600 rounded-md"
            >
              Previous
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-4 py-2 text-white bg-blue-600 rounded-md"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-600 rounded-md"
              disabled={loading}
              >  {loading ? 'Uploading...' : 'Submit'}
              
            </button>
          )}
        </div>
      </form>
      </div>
    </motion.div>
  );
};

export default LoanForm
