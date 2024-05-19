import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div>
        <div class="flex min-h-[164px] py-6 pl-3 gradient-blue overflow-hidden md:pl-[10rem]">
    <div class="col-span-2">
        <h1 class="heading3  font-bold text-black">Compare Best <span className='text-yellow-500'>Loan  Offer</span></h1>
        <p class="text-sm text-black mt-1">With Lowest Interest Rate</p>
        <Link href={"/applynow"}><button type="button"
                class="py-2.5 px-4 text-sm font-semibold bg-yellow-500 text-black-500 hover:bg-yellow-400 mt-4 rounded">Apply Now</button></Link>
    </div>
    <div class="relative max-lg:hidden">
        <img src="https://readymadeui.com/readymadeui_banner2.webp" alt="Banner Image"
            class="w-fill right-4 top-[-13px] absolute skew-x-[-16deg] rotate-2" />
    </div>
</div>
    </div>
  )
}

export default Banner