"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoanForm = () => {
  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [bankPassbook, setBankPassbook] = useState(null);
  const [bankStatement, setBankStatement] = useState(null);
  const [photoCopy, setPhotoCopy] = useState(null);

  // Nominee fields
  const [nomineeName, setNomineeName] = useState('');
  const [nomineeEmail, setNomineeEmail] = useState('');
  const [nomineeMobile, setNomineeMobile] = useState('');
  const [nomineeVillage, setNomineeVillage] = useState('');
  const [nomineeRelation, setNomineeRelation] = useState('');
  const [nomineeDOB, setNomineeDOB] = useState('');
  const [nomineePanCardNumber, setNomineePanCardNumber] = useState('');
  const [nomineeAadhaarCardNumber, setNomineeAadhaarCardNumber] = useState('');

  // Guarantor fields
  const [guarantorName, setGuarantorName] = useState('');
  const [guarantorEmail, setGuarantorEmail] = useState('');
  const [guarantorMobile, setGuarantorMobile] = useState('');
  const [guarantorVillage, setGuarantorVillage] = useState('');
  const [guarantorRelation, setGuarantorRelation] = useState('');
  const [guarantorDOB, setGuarantorDOB] = useState('');
  const [guarantorPanCardNumber, setGuarantorPanCardNumber] = useState('');
  const [guarantorAadhaarCardNumber, setGuarantorAadhaarCardNumber] = useState('');

  const [loanType, setLoanType] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e, setFile) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
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

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    notifyLoading();

    const formData = new FormData();
    formData.append('nomineeName', nomineeName);
    formData.append('nomineeEmail', nomineeEmail);
    formData.append('nomineeMobile', nomineeMobile);
    formData.append('nomineeVillage', nomineeVillage);
    formData.append('nomineeRelation', nomineeRelation);
    formData.append('nomineeDOB', nomineeDOB);
    formData.append('nomineePanCardNumber', nomineePanCardNumber);
    formData.append('nomineeAadhaarCardNumber', nomineeAadhaarCardNumber);
    formData.append('guarantorName', guarantorName);
    formData.append('guarantorEmail', guarantorEmail);
    formData.append('guarantorMobile', guarantorMobile);
    formData.append('guarantorVillage', guarantorVillage);
    formData.append('guarantorRelation', guarantorRelation);
    formData.append('guarantorDOB', guarantorDOB);
    formData.append('guarantorPanCardNumber', guarantorPanCardNumber);
    formData.append('guarantorAadhaarCardNumber', guarantorAadhaarCardNumber);
    formData.append('loanType', loanType);

    if (aadhaarCard) formData.append('aadhaarCard', aadhaarCard);
    if (panCard) formData.append('panCard', panCard);
    if (bankPassbook) formData.append('bankPassbook', bankPassbook);
    if (bankStatement) formData.append('bankStatement', bankStatement);
    if (photoCopy) formData.append('photoCopy', photoCopy);

    try {
      const response = await fetch('/api/loanApplication', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setNomineeName('');
        setNomineeEmail('');
        setNomineeMobile('');
        setNomineeVillage('');
        setNomineeRelation('');
        setNomineeDOB('');
        setNomineePanCardNumber('');
        setNomineeAadhaarCardNumber('');
        setGuarantorName('');
        setGuarantorEmail('');
        setGuarantorMobile('');
        setGuarantorVillage('');
        setGuarantorRelation('');
        setGuarantorDOB('');
        setGuarantorPanCardNumber('');
        setGuarantorAadhaarCardNumber('');
        setLoanType('');
        setAadhaarCard(null);
        setPanCard(null);
        setBankPassbook(null);
        setBankStatement(null);
        setPhotoCopy(null);
        notifySuccess();
      } else {
        const errorData = await response.json();
        notifyError(errorData.message);
      }
    } catch (error) {
      notifyError('Something went wrong.');
    } finally {
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

     
      <h2 className="text-2xl font-bold mb-6 text-white">JonoJivan Micro Loan Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
              <div>
                <label className="block text-sm font-medium text-white">Nominee Name</label>
                <input
                  type="text"
                  name="nomineeName"
                  value={nomineeName}
                  onChange={(e) => setNomineeName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Nominee Email</label>
                <input
                  type="email"
                  name="nomineeEmail"
                  value={nomineeEmail}
                  onChange={(e) => setNomineeEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Nominee Mobile Number</label>
                <input
                  type="text"
                  name="nomineeMobile"
                  value={nomineeMobile}
                  onChange={(e) => setNomineeMobile(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Nominee Village</label>
                <input
                  type="text"
                  name="nomineeVillage"
                  value={nomineeVillage}
                  onChange={(e) => setNomineeVillage(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Nominee Relation</label>
                <input
                  type="text"
                  name="nomineeRelation"
                  value={nomineeRelation}
                  onChange={(e) => setNomineeRelation(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Nominee Date of Birth</label>
                <input
                  type="date"
                  name="nomineeDOB"
                  value={nomineeDOB}
                  onChange={(e) => setNomineeDOB(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Nominee PAN Card Number</label>
                <input
                  type="text"
                  name="nomineePanCardNumber"
                  value={nomineePanCardNumber}
                  onChange={(e) => setNomineePanCardNumber(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Nominee Aadhaar Card Number</label>
                <input
                  type="text"
                  name="nomineeAadhaarCardNumber"
                  value={nomineeAadhaarCardNumber}
                  onChange={(e) => setNomineeAadhaarCardNumber(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              </>
        )}
        {step === 2 && (
          <>
              <div>
                <label className="block text-sm font-medium text-white">Guarantor Name</label>
                <input
                  type="text"
                  name="guarantorName"
                  value={guarantorName}
                  onChange={(e) => setGuarantorName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Guarantor Email</label>
                <input
                  type="email"
                  name="guarantorEmail"
                  value={guarantorEmail}
                  onChange={(e) => setGuarantorEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Guarantor Mobile Number</label>
                <input
                  type="text"
                  name="guarantorMobile"
                  value={guarantorMobile}
                  onChange={(e) => setGuarantorMobile(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Guarantor Village</label>
                <input
                  type="text"
                  name="guarantorVillage"
                  value={guarantorVillage}
                  onChange={(e) => setGuarantorVillage(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Guarantor Relation</label>
                <input
                  type="text"
                  name="guarantorRelation"
                  value={guarantorRelation}
                  onChange={(e) => setGuarantorRelation(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Guarantor Date of Birth</label>
                <input
                  type="date"
                  name="guarantorDOB"
                  value={guarantorDOB}
                  onChange={(e) => setGuarantorDOB(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Guarantor PAN Card Number</label>
                <input
                  type="text"
                  name="guarantorPanCardNumber"
                  value={guarantorPanCardNumber}
                  onChange={(e) => setGuarantorPanCardNumber(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Guarantor Aadhaar Card Number</label>
                <input
                  type="text"
                  name="guarantorAadhaarCardNumber"
                  value={guarantorAadhaarCardNumber}
                  onChange={(e) => setGuarantorAadhaarCardNumber(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              </>
        )}
        {step === 3 && (
          <>
              <div>
                <label className="block text-sm font-medium text-white">Loan Type</label>
                <select
                  name="loanType"
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>Select Loan Type</option>
                  <option value="personal">Micro Personal Loan</option>
                  <option value="business">Daily Collection Micro Loan</option>
                  <option value="education">Micro Finance Group Loan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Aadhaar Card</label>
                <input
                  type="file"
                  name="aadhaarCard"
                  onChange={(e) => handleFileChange(e, setAadhaarCard)}
                  className="mt-1 block w-full text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">PAN Card</label>
                <input
                  type="file"
                  name="panCard"
                  onChange={(e) => handleFileChange(e, setPanCard)}
                  className="mt-1 block w-full text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Bank Passbook</label>
                <input
                  type="file"
                  name="bankPassbook"
                  onChange={(e) => handleFileChange(e, setBankPassbook)}
                  className="mt-1 block w-full text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Bank Statement</label>
                <input
                  type="file"
                  name="bankStatement"
                  onChange={(e) => handleFileChange(e, setBankStatement)}
                  className="mt-1 block w-full text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Photo</label>
                <input
                  type="file"
                  name="photoCopy"
                  onChange={(e) => handleFileChange(e, setPhotoCopy)}
                  className="mt-1 block w-full text-white"
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