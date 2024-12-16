"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import calculator from '../../../public/cal.png'
import Container from '../Shared/Container'

const InterestRate = () => {
  return (
    <div className='sm:p-10 p-6 font-[sans-serif] text-[#333] mb-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg'>
      <div className='flex flex-col justify-center items-center'>
        <div className=''>
          <h1 className='text-2xl font-bold mb-5 lg:text-3xl text-gray-900'>
            Lowest Loan Interest Rates
          </h1>
        </div>
        <motion.div 
          className='flex flex-col md:flex-row w-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg mb-12 md:mb-0 md:mr-6 w-full p-6 bg-white">
            <div className='w-full bg-blue-500 text-center shadow-lg p-4 rounded-lg'>
              <h1 className='text-sm md:text-xl font-bold text-white'>Current Interest Rates</h1>
            </div>
            <div className='overflow-x-auto'>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 text-black">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                      Loan Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                      Lowest Rate %
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Loan Against Property
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      9.35%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Home Loan
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      8.35%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Business Loan
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      14.00%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Personal Loan
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      10.55%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Gold Loan
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      10.50%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Education Loan
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      9.00%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg mb-12 md:mb-0 md:mr-6 w-full p-6 bg-white">
            <div className='w-full bg-blue-500 text-center shadow-lg p-4 rounded-lg'>
              <h1 className='text-sm font-bold md:text-xl text-white'>Current Interest Rates by Bank</h1>
            </div>
            <div className='overflow-x-auto'>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 text-black">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                      Bank
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                      Interest Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      HDFC Bank
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      10.5%-24.00% p.a.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ICICI Bank
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      10.50%- 16.00% p.a.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Yes Bank
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      10.99 - 20% p.a.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Kotak Mahindra Bank
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      10.99% and above
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Axis Bank
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      10.49%- 22% p.a.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      IndusInd Bank
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                      10.25% - 26% p.a.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default InterestRate
