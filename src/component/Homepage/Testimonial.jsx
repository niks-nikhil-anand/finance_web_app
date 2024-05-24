"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="sm:p-10 p-6 font-[sans-serif] bg-blue-50 text-[#333] shadow-xl">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-4"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="col-span-2">
              <h2 className="text-2xl font-extrabold">What our happy client say</h2>
              <p className="text-sm text-[#333] mt-4 leading-relaxed">
              At Legal257, we take pride in delivering exceptional financial and tax services. Our clients satisfaction is our top priority, and we are thrilled to share their positive experiences with you.
              </p>
            </div>
            <div className="flex space-x-4 items-end justify-end">
              <motion.div
                className="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#333] inline" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </motion.div>
              <motion.div
                className="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </motion.div>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-3 md:gap-6 max-md:gap-10 mt-12">
            {[
              {
                name: 'Rakesh Doe',
                title: 'Competitive Loan Options',
                image: 'https://readymadeui.com/profile_2.webp',
                testimonial:
                  'Legal257 has been a lifesaver when it comes to finding the right loan options for my financial needs. Their team took the time to understand my specific situation and offered me a tailored solution that was both competitive and flexible. The application process was straightforward, and I received my funds quickly. It is clear that they genuinely care about their clients financial well-being. Thank you, Legal257, for your outstanding service!',
              },
              {
                name: 'Sourabh Adair',
                title: 'GST and ITR Filing Services',
                image: 'https://readymadeui.com/profile_3.webp',
                testimonial:
                  '"I have been using Legal257 for my business, GST and ITR filing for the past year, and I couldn not be happier with their services. The team is incredibly knowledgeable and always up-to-date with the latest regulations, making the entire process smooth and stress-free. Their attention to detail and commitment to compliance have saved me countless hours and potential headaches. Highly recommended for anyone looking for reliable and professional tax services!',
              },
              {
                name: 'Khushi Konecki',
                title: 'Comprehensive Financial Services',
                image: 'https://readymadeui.com/profile_4.webp',
                testimonial:
                  'Legal257 has become my go-to for all financial and tax-related matters. Their comprehensive services, including expert GST and ITR filing, have kept my business compliant and worry-free. Additionally, their loan options have provided the financial support needed to grow my business. The team is professional, responsive, and truly dedicated to helping their clients succeed. I highly recommend Legal257 to anyone seeking top-notch financial and tax services.',
              },
            ].map((client, index) => (
              <motion.div
                key={index}
                className="max-w-[350px] h-auto lg:p-8 p-4 rounded-md bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="flex items-center">
                  <Image src={client.image} className="w-10 h-10 rounded-full" alt={client.name} height={50} width={50} />
                  <div className="ml-4">
                    <h4 className="text-sm font-extrabold">{client.name}</h4>
                    <p className="mt-1 text-xs text-gray-400">{client.title}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm leading-relaxed">{client.testimonial}</p>
                </div>
                <div className="flex space-x-2 mt-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-4 ${starIndex < 4 ? 'fill-[#facc15]' : 'fill-[#CED5D8]'}`}
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                      />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Testimonial
