import React from 'react'

const Banner = () => {
  return (
    <div>
        <div class="grid grid-cols-3 min-h-[164px] py-6 px-16 bg-blue-500 font-[sans-serif] overflow-hidden">
    <div class="col-span-2">
        <h1 class="text-3xl font-bold text-white">Welcome to ReadymadeUI!</h1>
        <p class="text-sm text-gray-200 mt-1">Best tailwind css readymade UI plateform</p>
        <a href="javascript:void(0)"><button type="button"
                class="py-2.5 px-4 text-sm font-semibold bg-white text-blue-500 hover:bg-slate-100 mt-4 rounded">Get
                Started</button></a>
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