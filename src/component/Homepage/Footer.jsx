import Image from 'next/image'
import React from 'react'
import logo2 from '../../../public/logo2.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer class="bg-gray-900 font-sans tracking-wide">
      <div class="py-14 px-6 sm:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          <div class="lg:col-span-2">
            <a href='javascript:void(0)'><Image src={logo2} alt="logo"
              class='w-44 mb-8'  height={70} width={200}/></a>
            <p class="text-gray-300 text-sm">At Legal257, we are dedicated to providing top-notch financial and tax services to our valued clients. Our offerings include expert GST and ITR filing services to ensure your business remains compliant and stress-free. Additionally, we offer competitive loan options tailored to meet your financial needs.</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-8 text-white">Navigation</h4>
            <ul class="space-y-4">
              <li><Link href={"/about"} class="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link href={"/contact"} class="text-gray-300 hover:text-white text-sm">Contact Us</Link></li>
              <li><Link href={"/partnersignup"} class="text-gray-300 hover:text-white text-sm">Become Our Partner</Link></li>
              <li><Link href={"/career"} class="text-gray-300 hover:text-white text-sm">Career</Link></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-8 text-white">Loan Type</h4>
            <ul class="space-y-4">
              <li><Link href="/personalloan"  class="text-gray-300 hover:text-white text-sm">Personal Loan</Link></li>
              <li><Link href="/businessloan" class="text-gray-300 hover:text-white text-sm">Business Loan</Link></li>
              <li><Link href="/loanproperty" class="text-gray-300 hover:text-white text-sm">Loan Against Property</Link></li>
              <li><Link href="//homeloan" class="text-gray-300 hover:text-white text-sm">Home Loan</Link></li>
            </ul>
            

          </div>

          <div>
            <h4 class="text-lg font-semibold mb-8 text-white">Contact Us</h4>
            <div class="space-y-4">
              <p class="text-gray-300 text-sm">Uttar Khatowal Nagaon Assam</p>
              <p class="text-gray-300 text-sm">ISO 9001:2015 R 24/7</p>
              <p class="text-gray-300 text-sm">csprozana@gmail.com</p>
              <p class="text-gray-300 text-sm">+91 94352 66783</p>
            </div>
          </div>

        </div>
      </div>

      <div class="text-center py-5 bg-gray-600">
        <p class='text-white text-sm'>© 2024<a href='https://devtrekker.site/' target='_blank'
          class="hover:underline mx-1">Legal 257 | All right Reserved</a>| Developed by Nikhil</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer