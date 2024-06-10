import CardDataStats from '@/component/AdminComp/CardDataStats'
import PartnerApplicationStatus from '@/component/AdminDashboard/UserApplicationStatus';
import UserApplicationStatus from '@/component/AdminDashboard/UserApplicationStatus';
import UserStatus from '@/component/AdminDashboard/UserStatus';
import React from 'react'
import { FaBox, FaChartLine, FaEye, FaMoneyBillWave } from 'react-icons/fa'

const page = () => {
  const userStatuses = [
    { status: 'Blocked', count: 10 },
    { status: 'Active', count: 50 },
    { status: 'Pending', count: 20 },
    { status: 'inReview', count: 5 }
  ];
  const userApplicationStatuses = {
    'GST/ITR': [
      { status: 'Details Pending', count: 10 },
      { status: 'Under Processing', count: 5 },
      { status: 'Approved', count: 8 },
      { status: 'Rejected', count: 2 },
    ],
    'Loan User': [
      { status: 'Details Pending', count: 7 },
      { status: 'Under Processing', count: 4 },
      { status: 'Approved', count: 12 },
      { status: 'Rejected', count: 3 },
    ],
    'Jono Jivan Micro Loan': [
      { status: 'Details Pending', count: 6 },
      { status: 'Under Processing', count: 3 },
      { status: 'Approved', count: 10 },
      { status: 'Rejected', count: 1 },
    ],
  };
  return (
    <div className=''>
       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-6">
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
      <div>
      <UserStatus userStatuses={userStatuses} />
    </div>
      <div>
      {/* <PartnerApplicationStatus userStatuses={userApplicationStatuses} /> */}
    </div>
    </div>
  )
}

export default page