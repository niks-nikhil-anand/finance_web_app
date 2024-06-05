"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/component/Homepage/Navbar';

const Navbars = () => {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/dashboard');
  const isUserPage = pathname.startsWith('/user');
  const isBranchPage = pathname.startsWith('/branch');

  if (isAdminPage || isUserPage || isBranchPage) {
    return null; // Don't render navbar for admin and user pages
  }

  return <Navbar />;
};

export default Navbars;
