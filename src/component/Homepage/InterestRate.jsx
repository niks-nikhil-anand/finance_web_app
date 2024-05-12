import Image from 'next/image'
import React from 'react'
import calculator from '../../../public/cal.png'

const InterestRate = () => {
  return (
    <div className='sm:p-10 p-6 font-[sans-serif]  text-[#333] mb-[2rem]'>
      <div className='flex flex-col justify-center items-center'>
        <div className='mb-[3rem]'>
          <h1 className='text-3xl font-bold sm:text-4xl '>Lowest Loan Interest Rates</h1>
        </div>
        <div className='flex flex-col md:flex-row  '>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-[3rem] md:mb-0 md:mr-6 w-full  p-[2rem]">
            <div className='w-full bg-blue-500 text-center shadow-lg'>
              <h1 className='text-xl font-bold'>Current Interest Rates</h1>
            </div>
            <div>
              <table className="max-w-full divide-y divide-gray-200">
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      9.35%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    Home Loan
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    8.35%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    Business Loan
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    14.00%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    Personal Loan
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    10.55%
                    </td>
                  </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                        Gold Loan
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        10.50%
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                        Education Loan
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        9.00%
                        </td>
                    </tr>
                  {/* Add more rows for other loan types */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-[3rem] md:mb-0 md:mr-6 w-full  p-[2rem]">
            <div className='w-full bg-blue-500 text-center shadow-lg'>
              <h1 className='text-xl font-bold'>Current Interest Rates</h1>
            </div>
            <div>
              <table className="max-w-full divide-y divide-gray-200">
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
                    <td className="px-1 py-4 whitespace-nowrap">
                    10.5%-24.00% p.a. 
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    ICICI Bank 
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    10.50% p.a. - 16.00% p.a. 
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    Yes Bank 
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    10.99% p.a. onwards - 20% p.a. 
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    Kotak Mahindra Bank 
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    10.99% and above 
                    </td>
                  </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                        Axis Bank 
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        10.49% p.a.- 22% p.a. 
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                        IndusInd Bank 
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        10.25% p.a. - 26% p.a. 
                        </td>
                    </tr>
                  {/* Add more rows for other loan types */}
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default InterestRate
