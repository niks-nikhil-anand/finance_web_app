import React from 'react'
import { Copy, Code, Heart } from 'lucide-react'

export function Feature() {
  return (
    <section className=''>
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="mb-4 max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-widest text-black">
            100+ Tailwind Components
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black">
            DevUI makes it easy to build beautiful websites
          </h2>
        </div>
        <hr />
        <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start">
            <Copy className="h-9 w-9 text-gray-700" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Simply Copy & Paste</h3>
              <p className="mt-3 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Code className="h-9 w-9 text-gray-700" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Easy to Customize</h3>
              <p className="mt-3 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Heart className="h-9 w-9 text-gray-700" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Made with TailwindCSS</h3>
              <p className="mt-3 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
