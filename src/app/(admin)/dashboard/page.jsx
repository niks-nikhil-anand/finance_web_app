"use client"
import React, { useState, useEffect } from 'react'
import PartnerApplicationStatusOverview from '@/component/AdminDashboard/RoleStatus'
import PartnerApplicationChart from '@/component/AdminDashboard/UserApplicationChart'

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='overflow-auto w-full h-[90vh] no-scrollbar'>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div>
            <PartnerApplicationStatusOverview />
          </div>
          <div>
            <PartnerApplicationChart />
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
