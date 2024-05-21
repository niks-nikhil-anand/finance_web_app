"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import NavbarAdmin from '@/component/AdminDashboard/NavbarAdmin';
import Navbar from '@/component/Homepage/Navbar';


const Navbars = () => {
    const pathname = usePathname();
    const isAdminPage = pathname === '/admin';
  return (
    <div>
         {isAdminPage ? <NavbarAdmin /> : <Navbar />}
    </div>
  )
}

export default Navbars