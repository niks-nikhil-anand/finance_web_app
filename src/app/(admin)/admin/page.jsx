"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { ArrowRight, Eye, EyeOff, Mail, Lock } from 'lucide-react'; // Import additional icons

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(''); // Default value is 'Super Admin'
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const notifyLoading = () => {
    toast.info("Submitting form...", {
      position: "bottom-right"
    });
  };

  const notifySuccess = () => {
    toast.success("Logging in....", {
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
    data.append('email', email);
    data.append('password', password);

    try {
      const endpoint = userType === 'Super Admin' ? '/api/loginAdmin' : '/api/branch/login';
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        console.log('Form submitted successfully');
        setEmail('');
        setPassword('');
        notifySuccess();

        if (userType === 'Branch') {
          const userResponse = await fetch(`/api/params/${email}`);
          if (userResponse.ok) {
            const userResult = await userResponse.json();
            const username = userResult[0].username;
            router.push(`/branch/${username}`);
          } else {
            notifyError('Failed to fetch user details');
          }
        } else {
          router.push('/dashboard');
        }
      } else {
        const errorResult = await response.json();
        console.error('Error:', errorResult);
        notifyError(errorResult.message || 'Failed to submit the form');
      }
    } catch (error) {
      console.error('Error:', error);
      notifyError('Something went wrong.');
    } finally {
      setLoading(false);
      console.log(data)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-4">
            <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
              Account Type
            </label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Select Account Type</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Branch">Branch</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-2 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />

            <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent pl-10 pr-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
          </div>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-2 relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />

            <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent pl-10 pr-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type={showPassword ? "text" : "password"} // Toggle password visibility
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
               <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </div>
            </div>
          </div>
          
         
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300 w-full"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
