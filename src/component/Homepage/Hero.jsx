"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import hero2 from '../../../public/hero2.jpg';
import hero3 from '../../../public/hero3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [ hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative flex md:flex-row flex-col">
        
        <div>
        <div className="w-full mx-auto overflow-hidden ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key={currentSlide}
          >
            <Image src={slides[currentSlide]} alt={`Hero ${currentSlide + 1}`} />
          </motion.div>
        </div>
        </div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[60vh] lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Compare Best Loan
              <strong className="block font-extrabold text-rose-700"> Offer </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Apply Now
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Check Eligibility
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
