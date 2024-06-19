'use client'

import React from 'react'
import { MapPin } from 'lucide-react'



export default function AboutPageOne() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Made with love, right here in India
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          Our comprehensive range of services, including GST and ITR filing and loan offerings, are designed to provide you with the support you need to manage your finances effectively. With our experienced team by your side, you can rest assured that your financial well-being is in good hands.
          </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt=""
          />
        </div>
        <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-start">
         
            <div  className="flex flex-col mt-5 w-full  gap-3">
              <MapPin className="h-5 w-5" />
              <p className="w-full text-xl font-semibold  text-gray-900">ISO 9001:2015 R 24/7</p>
              <p className="w-full text-base text-gray-700">Uttar Khatowal Nagaon , Assam , 782124 </p>
              <p className="text-sm font-medium"> Email :- csprozana@gmail.com</p>
            </div>
          
        </div>
        <hr className="mt-20" />
        <div className="flex flex-col items-center py-16 md:flex-row justify-between md:gap-[6rem] ">
  <div className="">
    <p className="text-sm font-semibold md:text-base my-5">Contact Us  &rarr;</p>
    
    <p className="text-base text-gray-600 md:text-lg">
    If you have any queries or concerns, please feel free to contact us. We believe in prioritizing our customers and are dedicated to addressing your needs and questions promptly. Your satisfaction is our top priority, and we are here to assist you in any way we can.
    </p>
    <p className="text-base text-gray-600 md:text-lg">
    Our dedicated customer support team is always ready to assist you. Whether you have questions about our services, need help with an order, or require technical support, we are here to help. We strive to provide timely and effective solutions to ensure your experience with us is seamless and satisfactory.
  </p>
    <button
      type="button"
      className="rounded-md bg-black my-5 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      csprozana@gmail.com
    </button>
    
  </div>


          <div className="md:mt-o mt-10 w-full ">
            <img
              src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    
      
    </div>
  )
}
