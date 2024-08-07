"use client"
import React, { useEffect, useState } from 'react'
import {  Menu } from 'lucide-react'
import { FaHandHoldingUsd , FaUserAlt   , FaRupeeSign , FaRegCreditCard } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import {  FaMoneyBillTransfer , FaCodeBranch } from "react-icons/fa6";
import { TiUserAdd } from "react-icons/ti";
import { CiBank } from "react-icons/ci";
import Link from 'next/link';
import { MdOutlineLogout } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { PiCertificateBold } from "react-icons/pi";
import { useRouter } from 'next/navigation';
import { CgProfile } from "react-icons/cg";






import { FcAcceptDatabase} from "react-icons/fc";

export function SidebarBranch() {
  const [isOpen, setIsOpen] = useState(false);
  const [partner, setPartner] = useState([]);
  const router = useRouter();


  useEffect(() => {
    const fetchPartnerData = async () => {
      try {
        const response = await fetch('/api/branch/cookies');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPartner(data[0]);
        console.log(partner)
      } catch (error) {
        console.error('Error fetching partner data:', error);
      }finally{
        console.log(partner)
      }
    };

    fetchPartnerData();
  }, []); 

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/branch/logout', {
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


  const handleLinkClick = async () => {
    try {
      const response = await fetch('/api/branch/cookies');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPartner(data[0]);
      console.log(partner);
    } catch (error) {
      console.error('Error fetching partner data:', error);
    }
  };


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
              <label className="px-3 text-xs font-semibold uppercase text-white">Branch Name</label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
               href={"/dashboard"}
              >
                <FcAcceptDatabase  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium" onClick={handleLinkClick}>Dashboard</span>
              </Link>
              
            </div>
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">DSA/CSP </label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/addPartner`}
              >
                <TiUserAdd   className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium" onClick={handleLinkClick}>Add DSA/CSP </span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/allPartner`}
              >
                <FaUserAlt  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium" onClick={handleLinkClick}>DSA/CSP Partner</span>
              </Link>
             
              
            </div>
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">Banking</label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/rozanaWallet`}
              >
                <FaRupeeSign   className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium" onClick={handleLinkClick}>Rozana Pay</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/transactions`}
              >
                <FaRegCreditCard   className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium" onClick={handleLinkClick}>Transactions</span>
              </Link>
             
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/fintechBanking`}
              >
                <CiBank  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium" onClick={handleLinkClick}>Fintech Banking</span>
              </Link>
              
            </div>
           
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">DSA/CSP Leads</label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/gstbranch`}
              >
                <FcMoneyTransfer className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">GST/ITR Lead </span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/loan`}
              >
                <FaHandHoldingUsd className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Loan Lead</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/microLoan`}
              >
                <FaMoneyBillTransfer  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Jonojivan Loan Lead</span>
              </Link>
            </div>
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">JonoJivan Grocery </label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/jonoJivan_grocery`}
              >
                <FcMoneyTransfer className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Grocery Card Application</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/loan`}
              >
                <FaHandHoldingUsd className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Grocery Id Card</span>
              </Link>
              
            </div>
            <div className="space-y-3">
              <label className="px-3 text-xs font-semibold uppercase text-white">Accounts</label>
             
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/certificateBranch`}
              >
                <PiCertificateBold className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Certificate</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/idCard`}
              >
                <ImProfile  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Id Card</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
                href={`/branch/${partner.username}/profile`}
              >
                <CgProfile  className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Profile</span>
              </Link>
              
            </div>
           
          </nav>
          <button
            className="mt-6 flex items-center justify-between rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
            onClick={handleLogout}
          >
            <span>Logout</span>
            <MdOutlineLogout className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </aside>
    </div>
  );
}
