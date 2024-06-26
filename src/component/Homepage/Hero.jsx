"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typing from 'react-typing-effect';
import Image from 'next/image';
import hero2 from '../../../public/hero2.jpg';
import hero3 from '../../../public/hero3.jpg';
import Aadhar from '../../../public/services/Aadhar.jpg';
import gst1 from '../../../public/services/gst1.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [hero2, hero3 , Aadhar , gst1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative flex flex-col md:flex-row bg-blue-50">
        <div className="w-full md:w-[50vw] mx-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            key={currentSlide}
            className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]"
          >
            <Image 
              src={slides[currentSlide]} 
              alt={`Hero ${currentSlide + 1}`} 
              layout="fill" 
              objectFit="cover" 
              className=""
            />
          </motion.div>
        </div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:flex lg:h-[60vh] lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <Typing
                text={['BUSINESS LOAN ', 'PERSONAL LOAN' , 'HOME LOAN ' , 'GOLD LOAN' , 'EDUCATION LOAN ']}
                speed={100}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={1000}
                cursorRenderer={cursor => <span>{cursor}</span>}
                displayTextRenderer={(text, i) => {
                  return (
                    <span>
                      {text.split('').map((char, i) => (
                        <span key={i}>{char}</span>
                      ))}
                    </span>
                  );
                }}
              />
             
            </h1>
                <h4>
                <strong className="block font-extrabold text-rose-700 mt-5"> Compare Best Loans Offer </strong>
                </h4>
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Filing your ITR and GST does not have to be a daunting task. With our hassle-free services, you can file your taxes quickly and efficiently.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <motion.a
                href="/applynow"
                className="block w-full rounded bg-yellow-500 px-12 py-3 text-sm font-medium text-black-500 shadow hover:bg-yellow-300 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Apply Now
              </motion.a>

              <motion.a
                href="/applyloan"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-yellow-500 shadow hover:text-yellow-400 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Check Eligibility
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
