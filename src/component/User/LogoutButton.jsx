// LogoutButton.js
'use client'; // This directive tells Next.js this is a client component

import React from 'react';
import { useRouter } from 'next/navigation';
import { LuLogOut } from 'react-icons/lu';

const LogoutButton = ({ bgColor }) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/user/logout', {
        method: 'POST',
      });
      const data = await response.json();
      if (response.ok) {
        router.push('/');
      } else {
        alert(`Logout failed: ${data.message}`);
      }
    } catch (error) {
      alert(`Logout failed: ${error.message}`);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center p-4 md:p-6 m-2 rounded-lg shadow-lg text-white w-full md:w-48 ${bgColor}`}
      onClick={handleLogout}
      style={{ cursor: 'pointer' }}
    >
      <LuLogOut className="text-4xl md:text-6xl mb-2 md:mb-4" />
      <h2 className="text-lg md:text-xl font-bold text-center">LogOut</h2>
    </div>
  );
};

export default LogoutButton;
