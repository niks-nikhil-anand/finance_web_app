import React, { useState, useEffect } from 'react'
import ColorfulCard from '@/component/User/Card'

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='md:h-[75vh]'>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="loader"></div>
        </div>
      ) : (
        <ColorfulCard />
      )}
    </div>
  )
}

export default Page
