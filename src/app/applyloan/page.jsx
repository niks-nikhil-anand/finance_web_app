"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
  const [purposeOfLoan, setPurposeOfLoan] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [loading, setLoading] = useState(false);
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [requiredLoanAmount, setRequiredLoanAmount] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [loanYear, setLoanYear] = useState('');
  const [employerStatus, setEmployerStatus] = useState('');
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

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('aadhaarCard', aadhaarCard);
    formData.append('panCard', panCard);
    formData.append('bankPassbook', bankPassbook);
    formData.append('bankStatements', bankStatements);
    formData.append('itrFile', itrFile);
    formData.append('msmeCertificate', msmeCertificate);
    formData.append('tradeLicense', tradeLicense);
    formData.append('gstCertificate', gstCertificate);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobileNumber', mobileNumber);
    formData.append('gender', gender);
    formData.append('city', city);
    formData.append('purposeOfLoan', purposeOfLoan);
    formData.append('employmentType', employmentType);
    formData.append('monthlyIncome', monthlyIncome);
    formData.append('requiredLoanAmount', requiredLoanAmount);
    formData.append('pinCode', pinCode);
    formData.append('state', state);
    formData.append('maritalStatus', maritalStatus);
    formData.append('loanYear', loanYear);
    formData.append('employerStatus', employerStatus);
    formData.append('loanType', loanType);

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
        setPurposeOfLoan('');
        setEmploymentType('');
        setMonthlyIncome('');
        setRequiredLoanAmount('');
        setPinCode('');
        setState('');
        setMaritalStatus('');
        setLoanYear('');
        setEmployerStatus('');
        setLoanType('');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.log(formData)
      console.error('Error:', error);
      alert('An error occurred while uploading the resume');
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
                <option value="">Select Gender</option>
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
                onChange={(e) => setPinCode(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                <option value="">Select State</option>
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
                <option value="">Select Marital Status</option>
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
                <option value="">Select Duration</option>
                <option value="1 year">1 Year</option>
                <option value="2 years">2 Years</option>
                <option value="3 years">3 Years</option>
                <option value="4 years">4 Years</option>
                <option value="5 years">5 Years</option>
                <option value="6 year">6 Year</option>
                <option value="7 years">7 Years</option>
                <option value="8 years">8 Years</option>
                <option value="9 years">9 Years</option>
                <option value="10 years">10 Years</option>
                <option value="11 year">11 Year</option>
                <option value="12 years">12 Years</option>
                <option value="13 years">13 Years</option>
                <option value="14 years">14 Years</option>
                <option value="15 years">15 Years</option>
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
              <input
                type="text"
                name="monthlyIncome"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Required Loan Amount</label>
              <input
                type="text"
                name="requiredLoanAmount"
                value={requiredLoanAmount}
                onChange={(e) => setRequiredLoanAmount(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
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
              >
                {loading ? 'Uploading...' : 'Submit'}
            </button>
          )}
        </div>
      </form>
      </div>
    </motion.div>
  );
};

export default LoanForm
