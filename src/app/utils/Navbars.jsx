"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/component/Homepage/Navbar';

const Navbars = () => {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/dashboard');
  return !isAdminPage ? <Navbar /> : null;
};

export default Navbars;
