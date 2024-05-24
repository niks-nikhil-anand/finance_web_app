import React from 'react'

const Blog = () => {
  return (
    <div>
        <div class="bg-white font-[sans-serif] p-4">
      <div class="max-w-6xl max-md:max-w-lg mx-auto">
        <div>
          <h2 class="text-3xl font-extrabold text-[#333] inline-block">LATEST BLOGS</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
            <img src="https://images.pexels.com/photos/8927687/pexels-photo-8927687.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Post 1" class="lg:w-2/5 min-h-[250px] h-full object-cover" />
            <div class="p-6 lg:w-3/5">
              <h3 class="text-xl font-bold text-[#333]">Hassle-Free ITR and GST Filing - Start Your Application Today!</h3>
              <span class="text-sm block text-gray-400 mt-2">10 MAY 2024 | Legal 257</span>
              <p class="text-sm mt-4">Navigating the complexities of tax filing can be daunting for both individuals and businesses. Whether you are dealing with Income Tax Returns (ITR) or Goods and Services Tax (GST), the process can often be time-consuming and stressful. </p>
              <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
            </div>
          </div>
          <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
            <img src="https://images.pexels.com/photos/1666471/pexels-photo-1666471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Post 2" class="lg:w-2/5 min-h-[250px] h-full object-cover" />
            <div class="p-6 lg:w-3/5">
              <h3 class="text-xl font-bold text-[#333]">Streamline Your Business Operations with Legal257 Comprehensive Solutions</h3>
              <span class="text-sm block text-gray-400 mt-2">7 JUN 2023 | BY MARK ADAIR</span>
              <p class="text-sm mt-4">Running a business involves juggling numerous responsibilities, from managing finances to ensuring compliance with legal regulations. Legal257 simplifies this process by offering a suite of services designed to streamline your operations. </p>
              <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
            </div>
          </div>
          <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
            <img src="https://images.pexels.com/photos/1595386/pexels-photo-1595386.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Post 2" class="lg:w-2/5 min-h-[250px] h-full object-cover" />
            <div class="p-6 lg:w-3/5">
              <h3 class="text-xl font-bold text-[#333]">Enhance Your Business Efficiency with Tailored Financial Solutions</h3>
              <span class="text-sm block text-gray-400 mt-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <p class="text-sm mt-4">Efficiency is key to maintaining a competitive edge in today fast-paced business environment. Tailored financial solutions from Legal257 can significantly enhance your business efficiency. Our services include personalized tax planning, optimized cash flow management, and strategic financial advice that aligns with your business objectives.</p>
              <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
            </div>
          </div>
          <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
            <img src="https://images.pexels.com/photos/7648051/pexels-photo-7648051.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Post 2" class="lg:w-2/5 min-h-[250px] h-full object-cover" />
            <div class="p-6 lg:w-3/5">
              <h3 class="text-xl font-bold text-[#333]"> Simplify Business Compliance with Expert Legal and Financial Assistance</h3>
              <span class="text-sm block text-gray-400 mt-2">10 DEC 2023 | BY SIMON KONECKI</span>
              <p class="text-sm mt-4">Ensuring compliance with various regulatory requirements can be a complex and time-consuming task for businesses. Legal257 offers expert legal and financial assistance to simplify this process. Our comprehensive services cover GST and ITR filing, business and MSME registration, and obtaining necessary licenses such as trade and food licenses.</p>
              <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Blog