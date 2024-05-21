"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Footer from '@/component/Homepage/Footer';
import { FooterAdmin } from '@/component/AdminDashboard/FooterAdmin';

const Footers = () => {
    const pathname = usePathname();
    const isAdminPage = pathname === '/admin';
  return (
    <div>
          {isAdminPage ? <FooterAdmin /> : <Footer />}
    </div>
  )
}

export default Footers