"use client";
import React, { useEffect, useState } from "react";
import axios from "axios"; 
import {
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaBuilding,
} from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaIndianRupeeSign, FaIdCard } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { GiPayMoney } from "react-icons/gi";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { LuVegan } from "react-icons/lu";
import LogoutButton from "./LogoutButton.jsx";

const cardData = [
  {
    title: "GST/ITR",
    icon: FaFileInvoiceDollar,
    bgColor: "bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500",
    link: "gstitr",
  },
  {
    title: "Loan",
    icon: FaMoneyCheckAlt,
    bgColor: "bg-gradient-to-r from-green-400 via-blue-400 to-purple-500",
    link: "loan",
  },
  {
    title: "Jono Jivan Micro Loan",
    icon: GiPayMoney,
    bgColor: "bg-gradient-to-r from-green-400 via-blue-400 to-purple-500",
    link: "microLoan",
  },
  {
    title: "Banking Services",
    icon: FaBuilding,
    bgColor: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400",
    link: "fintech",
  },
  {
    title: "Jono Jivan Grocery Card",
    icon: LuVegan,
    bgColor: "bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400",
    link: "groceryCardForm",
  },
  {
    title: "Complaint",
    icon: MdConnectWithoutContact,
    bgColor: "bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500",
    link: "complaint",
  },
  {
    title: "Rozana Pay",
    icon: FaIndianRupeeSign,
    bgColor: "bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400",
    link: "wallet",
  },
  {
    title: "Certificate",
    icon: PiCertificateBold,
    bgColor: "bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400",
    link: "certificateLegal257",
  },
  {
    title: "Agreement",
    icon: FaFilePdf,
    bgColor: "bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500",
    link: "agreement",
  },
  {
    title: "Status",
    icon: TbTruckDelivery,
    bgColor: "bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400",
    link: "status",
  },
  {
    title: "Id Card",
    icon: FaIdCard,
    bgColor: "bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400",
    link: "idCard",
  },
  {
    title: "Profile",
    icon: ImProfile,
    bgColor: "bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500",
    link: "profile",
  },
  {
    title: "LogOut",
    icon: LuLogOut,
    bgColor: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400",
    link: "logout",
  },
];

const ColorfulCard = () => {
  const [username, setUsername] = useState("");
  const [services, setServices] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user/cookies");
        setUsername(response.data.username);
        setServices(response.data.services);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (title) => {
    console.log("Clicked:", title);
  };

  const filteredCardData = cardData.filter((card) => {
    if (services === "GST/ITR Services") {
      return [
        "gstitr",
        "wallet",
        "profile",
        "logout",
        "status",
        "complaint",
        "idCard",
        "certificateLegal257",
        "agreement",
        "grocery",
      ].includes(card.link);
    } else if (services === "Finance Services-Loan") {
      return [
        "loan",
        "microLoan",
        "wallet",
        "profile",
        "logout",
        "status",
        "complaint",
        "idCard",
        "certificateLegal257",
        "agreement",
        "grocery",
      ].includes(card.link);
    } else if (services === "JonoJivan Grocery") {
      return [
        "groceryCardForm",
        "wallet",
        "profile",
        "logout",
        "status",
        "complaint",
        "idCard",
        "certificateLegal257",
        "agreement",
        
      ].includes(card.link);
    } else if (services === "JonoJivan Micro Loan") {
      return [
        "loan",
        "microLoan",
        "wallet",
        "profile",
        "logout",
        "status",
        "complaint",
        "idCard",
        "certificateLegal257",
        "agreement",
        "grocery",
      ].includes(card.link);
    } else if (services === "All Services") {
      return true;
    }
    return false;
  });

  return (
    <div className="flex flex-wrap justify-center items-center p-4 gap-4 md:mb-10">
      {filteredCardData.map((card, index) => (
        card.link === "logout" ? (
          <LogoutButton key={index} bgColor={card.bgColor} />
        ) : (
          <Link href={`/user/${username}/${card.link}`} key={index}>
            <div
              className={`flex flex-col items-center justify-center p-4 md:p-6 m-2 rounded-lg shadow-lg text-white w-full sm:w-48 ${card.bgColor} transition-transform transform hover:scale-105`}
              onClick={() => handleButtonClick(card.title)}
            >
              <card.icon className="text-4xl md:text-6xl mb-2 md:mb-4" />
              <h2 className="text-lg md:text-xl font-bold text-center">
                {card.title}
              </h2>
            </div>
          </Link>
        )
      ))}
    </div>
  );
};

export default ColorfulCard;
