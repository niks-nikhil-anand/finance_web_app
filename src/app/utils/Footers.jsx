"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Footer from '@/component/Homepage/Footer';

const Footers = () => {
  const pathname = usePathname();
  const isAdminPage =pathname.startsWith('/dashboard');
  return !isAdminPage ? (
  <Footer/>
) : null;
};

export default Footers