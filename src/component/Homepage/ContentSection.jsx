import React from 'react'
import Container from '../Shared/Container'
import Link from 'next/link'
import Image from 'next/image'
import gif1 from '../../../public/gif1.gif'
import gif2 from '../../../public/gif2.gif'
import gif3 from '../../../public/gif3.gif'

const ContentSection = () => {
  return (
    <div>
 

<section className='sm:p-10   bg-gray-300 text-[#333] shadow-xl'>
<Container>   
  <div className="max-w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="flex gap-5 flex-col md:flex-row">
      <div className=" max-w-full text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right ">
        <h2 className="md:text-3xl  font-extrabold text-xl"> One-Stop Solution for Financial and Tax Services</h2>

        <p className="mt-4 text-black-600 ">
        At Legal257, we offer a full suite of financial and tax services . From expert GST and ITR filing services to competitive loan offerings.
        </p>

        <Link
         href={"/applynow"}
          className="mt-8 inline-block rounded bg-yellow-500 px-12 py-3 md:text-2xl font-medium text-black transition hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 text-xl"
        >
          Apply Now
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-[2rem]">
        <a
          className="block rounded-xl border border-yellow-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 bg-white focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <Image src={gif1} alt="Example GIF" className="mx-auto" height={50} width={50} />
          </span>

          <h2 className="mt-2 font-bold">Best Loan Offer</h2>

          <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Whether you need funds for a home, car, education, or personal expenses, our best loan offers are tailored to suit your needs. 
          </p>
        </a>

        <a
          className="block rounded-xl border border-yellow-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 bg-white focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <Image src={gif2} alt="Example GIF" className="mx-auto" height={50} width={50} />
          </span>

          <h2 className="mt-2 font-bold">ITR Filling Service</h2>

          <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Ensure your income tax returns are filed accurately and on time with our expert ITR filing services. 
          </p>
        </a>
        <a
          className="block rounded-xl border border-yellow-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 bg-white focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <Image src={gif3} alt="Example GIF" className="mx-auto" height={50} width={50} />
          </span>

          <h2 className="mt-2 font-bold ">GST Filling </h2>

          <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Navigate the complexities of GST compliance with ease. Our GST filing services  ensuring timely and accurate filings. 
          </p>
        </a>
      </div>
    </div>
  </div>
  </Container> 
</section>

    </div>
  )
}

export default ContentSection