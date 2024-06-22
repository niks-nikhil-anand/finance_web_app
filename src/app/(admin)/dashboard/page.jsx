import CardDataStats from '@/component/AdminComp/CardDataStats'
import UserStatusOverview from '@/component/AdminDashboard/UserStatus'
import React from 'react'
import { FaBox, FaChartLine, FaEye, FaMoneyBillWave } from 'react-icons/fa'

const page = () => {
 
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
        <UserStatusOverview/>
    </div>
      <div>
      {/* <PartnerApplicationStatus userStatuses={userApplicationStatuses} /> */}
    </div>
    </div>
  )
}

export default page