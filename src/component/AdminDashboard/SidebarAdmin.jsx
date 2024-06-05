"use client"
import React, { useState } from 'react'
import {  Menu } from 'lucide-react'
import Link from 'next/link';
import {  MdSpaceDashboard , MdOutlinePeople  } from "react-icons/md";
import { FaHandHoldingUsd , FaCodeBranch  } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import {  FaHireAHelper , FaMoneyBillTransfer ,  FaMoneyBillTrendUp , FaMoneyCheckDollar  } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { CiShop , CiBank } from "react-icons/ci";
import { RiAdminFill } from "react-icons/ri";



import { FcAcceptDatabase , FcBusinessman   } from "react-icons/fc";

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
          <FcAcceptDatabase   className="h-10 w-10 text-white" aria-hidden="true" />
        </a>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6">
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">Main</label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
               href={"/dashboard"}
              >
                <FcAcceptDatabase  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Dashboard</span>
              </Link>
              
            </div>
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">Partner Leads</label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
               href={"/dashboard/partner/loan"}
              >
                <FaMoneyBillTrendUp   className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Loan Leads</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/partner/gstitr"}
              >
                <FaMoneyCheckDollar  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">GST/ITR Leads</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/partner/gstitr"}
              >
                <MdSpaceDashboard className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Jonojivan Loan Lead</span>
              </Link>
             
              
            </div>
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">Banking</label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
               href={"/dashboard/rozanaWallet"}
              >
                <FaMoneyBillTrendUp   className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Rozana Pay</span>
              </Link>
             
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/partner/gstitr"}
              >
                <CiBank  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Fintech Banking</span>
              </Link>
              
            </div>
           
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">Customer Leads</label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
              href={"/dashboard/gstItr"}
              >
                <FcMoneyTransfer className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">GST/ITR Lead </span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
               href={"/dashboard/loan"}
              >
                <FaHandHoldingUsd className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Loan Lead</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
               href={"/dashboard/microLoan"}
              >
                <FaMoneyBillTransfer  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Jonojivan Loan Lead</span>
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
              <label className="px-3 text-xs font-semibold uppercase text-white">Update Role</label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/createBranch"}
              >
                 <FaCodeBranch  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Create Branch</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/user/branch"}
              >
                 <RiAdminFill className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Create Admin</span>
              </Link>
              
              
            </div>
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">User</label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/user"}
              >
                 <FcBusinessman  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">User</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/user/branch"}
              >
                 <FaCodeBranch className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Branch</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/user/dsa"}
              >
                <MdOutlinePeople  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">DSA</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/user/csp"}
              >
                <CiShop  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">CSP</span>
              </Link>
              
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
}
