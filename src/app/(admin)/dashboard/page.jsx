"use client"
import PartnerApplicationStatusOverview from '@/component/AdminDashboard/RoleStatus'
import PartnerApplicationChart from '@/component/AdminDashboard/UserApplicationStatus'
import React from 'react'

const page = () => {
 
  return (
    <div className=' overflow-auto w-full h-[90vh] no-scrollbar'>
      <div classname = ' '>
      <div className=''>
        <PartnerApplicationStatusOverview/>
    </div>
      <div>
        <PartnerApplicationChart/>
    </div>

      </div>
       
    </div>
  )
}

export default page