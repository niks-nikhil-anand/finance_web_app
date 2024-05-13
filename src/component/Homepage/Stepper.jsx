import Image from 'next/image'
import React from 'react'
import step2 from '../../../public/step2.png'

const Stepper = () => {
  return (
    <div className='bg-gray-300 py-[3rem]'>
      <div class="max-w-6xl mx-auto font-[sans-serif] text-[#333] ">
      <h2 class="md:text-4xl text-2xl font-extrabold text-center mb-16">How it works</h2>
      <div class="flex gap-12 flex-col md:flex-row justify-center items-center">
        <div class="p-4 text-center flex flex-col justify-center items-center gap-5  rounded bg-white shadow-lg w-[15rem] md:w-[30rem]">
         <Image src={step2} height={50} width={50} alt='step2' />
          <h3 class="text-xl font-semibold mb-2">Check Eligibility</h3>
          <p class="text-gray-500 text-sm">Check your eligibility fora loan</p>
        </div>
        <div class="p-4 text-center flex flex-col justify-center items-center gap-5  rounded bg-white shadow-lg  w-[15rem] md:w-[30rem]">
         <Image src={step2} height={50} width={50} alt='step2' />
          <h3 class="text-xl font-semibold mb-2">Submit Application</h3>
          <p class="text-gray-500 text-sm">Complete a 100% application form & Document Collection At Your Door Steps</p>
        </div>
        <div class="p-4 text-center flex flex-col justify-center items-center gap-5  rounded bg-white shadow-lg  w-[15rem] md:w-[30rem]">
         <Image src={step2} height={50} width={50} alt='step2' />
          <h3 class="text-xl font-semibold mb-2">Get Sanctioned</h3>
          <p class="text-gray-500 text-sm">We will evaluate your application propose a fair sanction</p>
        </div>
        <div class="p-4 text-center flex flex-col justify-center items-center gap-5  rounded bg-white shadow-lg   w-[15rem] md:w-[30rem]">
         <Image src={step2} height={50} width={50} alt='step2' />
          <h3 class="text-xl font-semibold mb-2">Receive Funds</h3>
          <p class="text-gray-500 text-sm">Receive your loan within 7 days</p>
        </div>
        
        
       
      </div>
    </div>
    </div>
  )
}

export default Stepper