"use client";
import MountainChart from '@/component/AdminComp/(Charts)/MountainCharts';
import PieChartComponent from '@/component/AdminComp/(Charts)/PieCharts';
import CardDataStats from '@/component/AdminComp/CardDataStats';
import Card from '@/component/AdminDashboard/CardAdmin';
import Graph from '@/component/AdminDashboard/GraphAdmin';
import Table from '@/component/AdminDashboard/TableAdmin';
import React from 'react';
import { FaEye, FaMoneyBillWave, FaBox, FaChartLine } from 'react-icons/fa';


// Mock data
const tableData1 = [
  { Name: "John Doe", Role: 24, Services: "Finance" },
  { Name: "Jane Smith", Role: 34, Occupation: "GST/ITR" },
  { Name: "John Doe", Role: 24, Services: "Finance" },
  { Name: "Jane Smith", Role: 34, Occupation: "GST/ITR" },
  { Name: "John Doe", Role: 24, Services: "Finance" },
  { Name: "Jane Smith", Role: 34, Occupation: "GST/ITR" },
  { Name: "John Doe", Role: 24, Services: "Finance" },
  { Name: "Jane Smith", Role: 34, Occupation: "GST/ITR" },
  
];

const tableData2 = [
  { User: "User1", Wallet: "₹1000", Role: 25 },
  { Product: "User2", Wallet: "₹500", Role: 100 },
  { User: "User1", Wallet: "₹1000", Role: 25 },
  { Product: "User2", Wallet: "₹500", Role: 100 },
  { User: "User1", Wallet: "₹1000", Role: 25 },
  { Product: "User2", Wallet: "₹500", Role: 100 },
  { User: "User1", Wallet: "₹1000", Role: 25 },
  { Product: "User2", Wallet: "₹500", Role: 100 },
  // Add more rows as needed
];

const MockGraphComponent = () => (
  <div className="h-full bg-blue-200 rounded-lg"></div>
);

const Dashboard = () => {
  return (
    <div className="container  p-4  mx-auto  w-[80%] bg-gray-100 overflow-auto max-h-[40rem] no-scrollbar ">
      <h1 className="text-2xl font-bold mb-4 mt-4 text-center text-gradient-blue ">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
          <FaEye className="text-primary dark:text-white" size={22} />
        </CardDataStats>
        <CardDataStats title="Total Profit" total="$45.2K" rate="4.35%" levelUp>
          <FaMoneyBillWave className="text-primary dark:text-white" size={20} />
        </CardDataStats>
        <CardDataStats title="Total Users" total="2.450" rate="2.59%" levelUp>
          <FaBox className="text-primary dark:text-white" size={22} />
        </CardDataStats>
        <CardDataStats title="Total Expenses" total="$4.256" rate="0.11%" levelUp={false}>
          <FaChartLine className="text-primary dark:text-white" size={20} />
        </CardDataStats>
      </div>
      {/* 3 Cards in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mt-5">
        <Card title="Card 1" content="Content for card 1" color="bg-blue-500" />
        <Card title="Card 2" content="Content for card 2" color="bg-green-500" />
        <Card title="Card 3" content="Content for card 3" color="bg-red-500" />
      </div>
      
      {/* 2 Cards in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card title="Card 4" content="Content for card 4" color="bg-purple-500" />
        <Card title="Card 5" content="Content for card 5" color="bg-yellow-500" />
      </div>
      
      {/* 2 Tables in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Table title="User Data" data={tableData1} />
        <Table title="Wallet Data" data={tableData2} />
      </div>

      <div>
        <MountainChart/>
      </div>
      <div>
        <PieChartComponent/>
      </div>
      
      {/* 2 Graphs in a Row */}
     
    </div>
  );
};

export default Dashboard;
