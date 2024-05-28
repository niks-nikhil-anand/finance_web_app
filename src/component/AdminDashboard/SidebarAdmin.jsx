"use client"
import React, { useState } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench, Menu } from 'lucide-react'
import { MdDashboard , MdSpaceDashboard , MdOutlinePeople  } from "react-icons/md";
import { FaHandHoldingUsd , FaMoneyCheckAlt , FaCodeBranch , FaPeopleCarry } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaUsersLine , FaHireAHelper } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import Link from 'next/link';









export function SidebarAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="lg:hidden flex justify-between items-center bg-gray-800 p-4">
        <button
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <aside className={`flex h-screen w-64 flex-col overflow-y-auto border-r bg-gray-800 px-5 py-8 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <a href="#" className="hidden lg:block">
          <MdDashboard  className="h-10 w-10 text-white" aria-hidden="true" />
        </a>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6">
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">Main</label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
               href={"/dashboard"}
              >
                <MdSpaceDashboard className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Dashboard</span>
              </Link>
              
            </div>
           
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">Leads</label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
              href={"/dashboard/gstItr"}
              >
                <FcMoneyTransfer className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">GST/ITR </span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
               href={"/dashboard/loan"}
              >
                <FaHandHoldingUsd className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Loan</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/refer"}
              >
                <IoShareSocialSharp  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Refer Leads</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/hiring"}
              >
                <FaHireAHelper  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium"> Hiring Leads</span>
              </Link>
            </div>
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">User</label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href="#"
              >
                 <FaUsersLine className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">User</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href="#"
              >
                 <FaCodeBranch className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Branch</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href="#"
              >
                <MdOutlinePeople  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">DSA</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href="#"
              >
                <CiShop  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">CSP</span>
              </a>
              
            </div>
            
           
            
          </nav>
        </div>
      </aside>
    </div>
  );
}
