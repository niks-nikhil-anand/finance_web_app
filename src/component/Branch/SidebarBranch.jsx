"use client"
import React, { useState } from 'react'
import {  Menu } from 'lucide-react'
import {  MdSpaceDashboard , MdOutlinePeople  } from "react-icons/md";
import { FaHandHoldingUsd , FaMoneyCheckAlt  , FaPeopleCarry } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import {  FaHireAHelper , FaMoneyBillTransfer , FaCodeBranch } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { CiShop , CiBank } from "react-icons/ci";
import Link from 'next/link';
import { FaMoneyBillTrendUp , FaMoneyCheckDollar  } from "react-icons/fa6";


import { FcAcceptDatabase , FcBusinessman   } from "react-icons/fc";

export function SidebarBranch() {
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
      <aside className={`flex h-screen w-64 flex-col overflow-y-auto border-r gradient-blue px-5 py-8 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <a href="#" className="hidden lg:block">
          <FaCodeBranch   className="h-10 w-10 text-white" aria-hidden="true" />
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
              <label className="px-3 text-xs font-semibold uppercase text-white">DSA/CSP </label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
               href={"/dashboard/partner/loan"}
              >
                <FaMoneyBillTrendUp   className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Add DSA/CSP </span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/partner/gstitr"}
              >
                <FaMoneyCheckDollar  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">CSP </span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={"/dashboard/partner/gstitr"}
              >
                <MdSpaceDashboard className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">DSA</span>
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
              <label className="px-3 text-xs font-semibold uppercase text-white">DSA/CSP Leads</label>
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
            </div>
           
          </nav>
        </div>
      </aside>
    </div>
  );
}
