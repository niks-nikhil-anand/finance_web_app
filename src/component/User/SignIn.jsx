"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SignInUser = () => {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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
    data.append('email', email);
    data.append('password', password);
    try {
        const response = await fetch('/api/loginUser', {
            method: 'POST',
            body: data,
          });

      if (!res.ok) {
        const result = await response.json();
        console.log('Success:', result);
        console.log('Form submitted successfully');
        setEmail('');
        setPassword('');
        notifySuccess();
        
      }
    }catch (error) {
        console.error('Error:', error);
        notifyError('Something went wrong.');
      } finally {
        setLoading(false);
        console.log(data)
      }
    };

  const fetchUserDetails = async (identifier) => {
    const res = await fetch(`/api/getUserDetails?identifier=${identifier}`);
    if (res.ok) {
      return res.json();
    }
    return null;
  };

  return (
    <div>
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
                placeholder="Email"
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
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
               {loading ? 'Logging in...' : 'Log in'} <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInUser;
