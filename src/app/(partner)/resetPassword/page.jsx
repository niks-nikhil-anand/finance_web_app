"use client";
import React, { useState, Suspense } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const ChangePassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [newPassword, setNewPassword] = useState('');
  const [reenterNewPassword, setReenterNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const notifyLoading = () => {
    toast.info("Changing password...", {
      position: "bottom-right"
    });
  };

  const notifySuccess = () => {
    toast.success("Password changed successfully!", {
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

    if (newPassword !== reenterNewPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const formData = new FormData();
    formData.append('newPassword', newPassword);
    formData.append('token', token);
    setLoading(true);
    notifyLoading();

    try {
      const response = await fetch('/api/changePassword', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setNewPassword('');
        setReenterNewPassword('');
        notifySuccess();
      } else {
        notifyError('Something went wrong.');
      }
    } catch (error) {
      notifyError(error.message || "Error changing password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-white mt-[10rem] mb-[10rem]">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Re-enter New Password</label>
          <input
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={reenterNewPassword}
            onChange={(e) => setReenterNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

const ChangePasswordWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ChangePassword />
  </Suspense>
);

export default ChangePasswordWrapper;
