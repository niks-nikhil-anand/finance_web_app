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
    return null; 
  }

  return <Navbar />;
};

export default Navbars;
