import PartnerApplicationStatusOverview from '@/component/AdminDashboard/RoleStatus'
import RoleStatusOverview from '@/component/AdminDashboard/RoleStatus'
import UserChart from '@/component/AdminDashboard/UserChart'
import UserStatusOverview from '@/component/AdminDashboard/UserStatus'
import React from 'react'

const page = () => {
 
  return (
    <div className=' mx-auto  w-[80%]'>
      <div classname = 'overflow-auto max-h-[30rem] '>
      <div className=''>
        {/* <RoleStatusOverview/> */}
        <PartnerApplicationStatusOverview/>
        
    </div>
      <div>
        {/* <UserChart/> */}
    </div>

      </div>
       
    </div>
  )
}

export default page