import Image from 'next/image'
import React from 'react'
import home from '../../../public/loan/homeloan.jpg'
import business from '../../../public/loan/business.jpg'
import personal from '../../../public/loan/personal.jpg'
import gold from '../../../public/loan/gold.jpg'
import education from '../../../public/loan/education.jpg'
import property from '../../../public/loan/property.jpg'

const Slider = () => {
  return (
    <div className='flex flex-col items-center bg-white py-8'>
      <div className='mb-4'>
        <h1 className='text-xl md:text-2xl font-bold text-center'>Discover Our Featured Loan</h1>
      </div>
      <div className='flex overflow-x-auto space-x-4 p-4 w-full'>
        <div className='flex-shrink-0 w-60 sm:w-80 md:w-96 '>
          <Image src={home} height={500} width={500} alt='Home Loan' className='object-cover w-full h-full rounded-lg'/>
        </div>
        <div className='flex-shrink-0 w-60 sm:w-80 md:w-96'>
          <Image src={business} height={500} width={500} alt='Business Loan' className='object-cover w-full h-full rounded-lg'/>
        </div>
        <div className='flex-shrink-0 w-60 sm:w-80 md:w-96'>
          <Image src={personal} height={500} width={500} alt='Personal Loan' className='object-cover w-full h-full rounded-lg'/>
        </div>
        <div className='flex-shrink-0 w-60 sm:w-80 md:w-96'>
          <Image src={gold} height={500} width={500} alt='Gold Loan' className='object-cover w-full h-full rounded-lg'/>
        </div>
        <div className='flex-shrink-0 w-60 sm:w-80 md:w-96'>
          <Image src={education} height={500} width={500} alt='Education Loan' className='object-cover w-full h-full rounded-lg'/>
        </div>
        <div className='flex-shrink-0 w-60 sm:w-80 md:w-96'>
          <Image src={property} height={500} width={500} alt='Property Loan' className='object-cover w-full h-full rounded-lg'/>
        </div>
      </div>
    </div>
  )
}

export default Slider
