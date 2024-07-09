"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReferForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    service: '',
    referMobileNumber: '',
    contactNumber: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const pickContact = async () => {
    if ('contacts' in navigator && 'ContactsManager' in window) {
      try {
        const contacts = await navigator.contacts.select(['name', 'tel'], { multiple: false });
        if (contacts.length > 0) {
          setFormData({
            ...formData,
            contactNumber: contacts[0].tel[0]
          });
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
        toast.error('Error fetching contacts');
      }
    } else {
      toast.error('Contacts API not supported on this device or browser.');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    notifyLoading();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('mobileNumber', formData.mobileNumber);
    data.append('service', formData.service);
    data.append('referMobileNumber', formData.referMobileNumber);
    data.append('contactNumber', formData.contactNumber);

    try {
      const response = await fetch('/api/referandearn', {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        console.log('Form submitted successfully');
        setFormData({
          name: '',
          mobileNumber: '',
          email: '',
          service: '',
          referMobileNumber: '',
          contactNumber: ''
        });
        notifySuccess();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-6 mb-[6rem] md:mb-[0rem] flex-col">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Refer and Earn</h1>
        <p className="text-gray-700 text-center mb-6">
          Refer a Loan friends and family & Earn from ₹1000 to ₹9000 per referral. Fill in the form below to refer someone.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
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
          <div className="mb-4 relative">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
    Select Financial Service
  </label>
  <select
    id="service"
    name="service"
    value={formData.service}
    onChange={handleChange}
    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline "
    required
  >
    <option value="" disabled>Select Financial Service</option>
    <option value="Personal Loan">Personal Loan</option>
    <option value="Business Loan">Business Loan</option>
    <option value="Loan Against Property">Loan Against Property</option>
    <option value="Home Loan">Home Loan</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4 mt-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
  </div>
</div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referMobileNumber">
              Whatsapp Number (Whom you want to refer)
            </label>
            <input
              type="tel"
              id="referMobileNumber"
              name="referMobileNumber"
              value={formData.referMobileNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
              Contact Number (Whom you want to refer)
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              onClick={pickContact}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
            >
              Pick a Contact
            </button>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? 'Uploading...' : 'Submit'}
            </button>
          </div>
        </form>
        <div>
          <p className="mt-2 text-sm text-gray-600 ">
            Already Applied?{' '}
            <Link
              href={"https://wa.link/248lpp"}
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Whatsapp Now
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ReferForm;
