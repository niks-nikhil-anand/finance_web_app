"use client"
import LoanForm from '@/app/applyloan/page';
import AnimatedButton from '@/component/Shared/AnnimatedButtons';
import { motion } from 'framer-motion';

const loans = [
  {
    bank: 'SBI',
    logo: 'https://myrupees.com/img/b1.png', // replace with your image paths
    interestRate: '8.35%',
    processingFee: 'NIL',
  },
  {
    bank: 'PNB',
    logo: 'https://myrupees.com/img/b15.png', // replace with your image paths
    interestRate: '8.50%',
    processingFee: 'Up to 1% of loan amount',
  },
  {
    bank: 'Bank of Baroda',
    logo: 'https://myrupees.com/img/b2.png',
    interestRate: '8.40%',
    processingFee: 'APF approved project processing fees Rs. 4130/- Without APF Rs.10,030/-',
  },
  {
    bank: 'HDFC Bank',
    logo: 'https://myrupees.com/img/b5.png',
    interestRate: '8.35%',
    processingFee: 'For Salaried Rs.1500+ GST for self employed 50% discount on fees applicable',
  },
  {
    bank: 'Axis Bank',
    logo: 'https://myrupees.com/img/b3.png',
    interestRate: '8.60%',
    processingFee: 'For Salaried 10,000 + GST Self Employed 0.5% + GST',
  },
  {
    bank: 'ICICI Bank',
    logo: 'https://myrupees.com/img/b4.png',
    interestRate: '8.60%',
    processingFee: 'Rs.2199',
  },
  {
    bank: 'Union Bank',
    logo: 'https://myrupees.com/img/b6.png',
    interestRate: '8.35%',
    processingFee: 'NIL',
  },
  {
    bank: 'Indian Bank',
    logo: 'https://myrupees.com/img/b7.png',
    interestRate: '8.40%',
    processingFee: '50% wavier under IHL',
  },
  {
    bank: 'IDFC',
    logo: 'https://myrupees.com/img/b9.png',
    interestRate: '8.35%',
    processingFee: 'NIL',
  },
  {
    bank: 'Union Bank',
    logo: 'https://myrupees.com/img/b10.png',
    interestRate: '8.35%',
    processingFee: 'NIL',
  },
  {
    bank: 'Union Bank',
    logo: 'https://myrupees.com/img/b11.png',
    interestRate: '8.35%',
    processingFee: 'NIL',
  },
];
const HomeLoanTable = () => {
  return (
    <div className='flex flex-col gradient_gray'>
      <div className='flex flex-col md:flex-row justify-center'>
        <div className='w-full md:w-[40rem] py-[3rem] md:pr-[2rem]'>
          <LoanForm/>
        </div>
        <div className='w-full md:w-[40rem] flex flex-col md:pt-[4rem] p-[2rem]'>
          <div>
            <h1 className='base-bold my-[2rem]'>Empowering Your Financial Freedom  <span className='text-gradient-blue'> with Legal257</span></h1>
            <p>Legal257 is dedicated to helping you achieve your dreams and aspirations with our Personal Loan solutions. Whether you&apos;re planning a dream vacation, renovating your home, funding your child&apos;s education, or covering unexpected expenses, our Personal Loan offerings provide you with the financial flexibility you need. With competitive interest rates, flexible repayment options, and quick approval processes, Legal257 ensures that your financial journey is smooth and rewarding. Take the first step towards realizing your goals with Legal257&apos;s Personal Loan solutions.</p>
          </div>
          
          <div>
            <h1 className='base-bold my-[2rem] '> Tailored  Your Needs  <span className='text-gradient-blue'> with Legal257</span> </h1>
            <p>At Legal257, we understand that financial needs vary from person to person. That&apos;s why our Personal Loan solutions are designed to be flexible and tailored to your specific requirements. Whether you need a small loan for immediate expenses or a larger loan for major life events, Legal257&apos;s Personal Loan offerings provide you with the funds you need, when you need them. Our hassle-free application process and dedicated support team ensure that you can focus on what matters most while we take care of your financial needs. Experience financial freedom and flexibility with Legal257&apos;s Personal Loan solutions today.</p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full md:min-w-full divide-y divide-gray-200">
          <thead className="gradient-black">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Apply Now
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Bank
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Rate of Interest %
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Processing Fee
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 x-paddings mx-5">
            {loans.map((loan, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="gradient_yellow text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full md:w-auto">
                    Apply Now
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={loan.logo} alt={`${loan.bank} logo`}  className="h-[1rem] md:h-[2rem]" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{loan.interestRate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{loan.processingFee}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeLoanTable;
