"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import home from '../../../public/loan/homeloan.jpg'
import business from '../../../public/loan/business.jpg'
import personal from '../../../public/loan/personal.jpg'
import gold from '../../../public/loan/gold.jpg'
import education from '../../../public/loan/education.jpg'
import property from '../../../public/loan/property.jpg'

const Slider = () => {
  return (
    <div className='flex flex-col items-center bg-white py-12'>
      <div className='mb-6'>
        <h1 className='text-2xl md:text-3xl font-bold text-center'>Discover Our Featured Loan</h1>
      </div>
      <div className="overflow-x-hidden w-full">
        <motion.div
          className='flex space-x-6 p-6'
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20, // Adjust the duration to control the scroll speed
              ease: 'linear',
            },
          }}
        >
          <div className='flex-shrink-0 w-72 sm:w-96 md:w-112'>
            <Image
              src={home}
              height={500}
              width={500}
              alt='Home Loan'
              className='object-cover w-full h-full rounded-lg shadow-md'
            />
          </div>
          <div className='flex-shrink-0 w-72 sm:w-96 md:w-112'>
            <Image
              src={business}
              height={500}
              width={500}
              alt='Business Loan'
              className='object-cover w-full h-full rounded-lg shadow-md'
            />
          </div>
          <div className='flex-shrink-0 w-72 sm:w-96 md:w-112'>
            <Image
              src={personal}
              height={500}
              width={500}
              alt='Personal Loan'
              className='object-cover w-full h-full rounded-lg shadow-md'
            />
          </div>
          <div className='flex-shrink-0 w-72 sm:w-96 md:w-112'>
            <Image
              src={gold}
              height={500}
              width={500}
              alt='Gold Loan'
              className='object-cover w-full h-full rounded-lg shadow-md'
            />
          </div>
          <div className='flex-shrink-0 w-72 sm:w-96 md:w-112'>
            <Image
              src={education}
              height={500}
              width={500}
              alt='Education Loan'
              className='object-cover w-full h-full rounded-lg shadow-md'
            />
          </div>
          <div className='flex-shrink-0 w-72 sm:w-96 md:w-112'>
            <Image
              src={property}
              height={500}
              width={500}
              alt='Property Loan'
              className='object-cover w-full h-full rounded-lg shadow-md'
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slider
