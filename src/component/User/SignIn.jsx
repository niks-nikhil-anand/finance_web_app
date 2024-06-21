"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Eye, EyeOff } from 'lucide-react'; // Import Eye and EyeOff icons
import Link from 'next/link';
import { motion } from 'framer-motion';

const SignInUser = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      const response = await fetch('/api/loginUser', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        setEmail('');
        setPassword('');
        notifySuccess();

        // Fetch username after successful login
        const userResponse = await fetch(`/api/params/${email}`);
        if (userResponse.ok) {
          const userResult = await userResponse.json();
          console.log(userResult);
          const username = userResult[0].username;
          router.push(`/user/${username}`);
        } else {
          notifyError('Failed to fetch username.');
        }
      } else {
        notifyError('Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      notifyError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="text-base font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-base font-medium text-gray-900">
                Password
              </label>
              <Link
                href={"/forgotpassword"}
                title=""
                className="text-sm font-semibold text-black hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="mt-2 relative">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
          <div>
            <motion.button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              whileTap={{ scale: 0.95 }}
            >
              {loading ? 'Logging in...' : 'Log in'} <ArrowRight className="ml-2" size={16} />
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInUser;
