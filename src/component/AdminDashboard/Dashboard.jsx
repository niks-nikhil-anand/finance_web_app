"use client";
import Card from '@/component/AdminDashboard/CardAdmin';
import Graph from '@/component/AdminDashboard/GraphAdmin';
import Table from '@/component/AdminDashboard/TableAdmin';
import React from 'react';


// Mock data
const tableData1 = [
  { Name: "John Doe", Age: 28, Occupation: "Engineer" },
  { Name: "Jane Smith", Age: 34, Occupation: "Designer" },
  // Add more rows as needed
];

const tableData2 = [
  { Product: "Laptop", Price: "$1000", Stock: 25 },
  { Product: "Phone", Price: "$500", Stock: 100 },
  // Add more rows as needed
];

const MockGraphComponent = () => (
  <div className="h-full bg-blue-200 rounded-lg"></div>
);

const Dashboard = () => {
  return (
    
    <div className="container  p-4">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* 3 Cards in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
        <Table title="Product Data" data={tableData2} />
      </div>
      
      {/* 2 Graphs in a Row */}
     
    </div>
  );
};

export default Dashboard;
