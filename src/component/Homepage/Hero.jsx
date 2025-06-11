"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typing from "react-typing-effect";
import Image from "next/image";
import GST from "../../../public/heroSection/GST.jpg";
import businessLoan from "../../../public/heroSection/businessLoan.jpg";
import godlLoan from "../../../public/heroSection/goldLoan.jpg";
import personalLoan from "../../../public/heroSection/personalLoan.jpg";


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [GST , businessLoan, godlLoan, personalLoan , ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative flex flex-col md:flex-row bg-blue-50 dark:bg-gray-800">
        <div className="w-full md:w-[50vw] mx-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            key={currentSlide}
            className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh]"
          >
            <Image
              src={slides[currentSlide]}
              alt={`Hero ${currentSlide + 1}`}
              layout="fill"
             
            />
          </motion.div>
        </div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:flex lg:h-[60vh] lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-900 dark:text-white">
              <Typing
                text={[
                  "BUSINESS LOAN ",
                  "PERSONAL LOAN",
                  "HOME LOAN ",
                  "GOLD LOAN",
                ]}
                speed={100}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={1000}
                cursorRenderer={(cursor) => <span>{cursor}</span>}
                displayTextRenderer={(text, i) => {
                  return (
                    <span>
                      {text.split("").map((char, i) => (
                        <span key={i}>{char}</span>
                      ))}
                    </span>
                  );
                }}
              />
            </h1>
            <h4>
              <strong className="block font-extrabold text-rose-700 dark:text-rose-400 mt-5">
                {" "}
                Compare Best Loans Offer{" "}
              </strong>
            </h4>
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-gray-800 dark:text-gray-200">
              Filing your ITR and GST does not have to be a daunting task. With
              our hassle-free services, you can file your taxes quickly and
              efficiently.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <motion.div
                className="block w-full sm:w-auto"
                animate={{ x: [0, 10, 0] }} // Continuous horizontal movement
                transition={{
                  x: {
                    repeat: Infinity, // Infinite loop
                    repeatType: "loop", // Loop continuously
                    duration: 2, // Duration of one cycle
                    ease: "easeInOut", // Smooth easing
                  },
                }}
              >
                <motion.a
                  href="/applynow"
                  className="block rounded bg-yellow-400 px-12 py-3 text-sm font-medium text-black-500 shadow hover:bg-yellow-300 focus:outline-none focus:ring active:bg-rose-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Apply Now
                </motion.a>
              </motion.div>

              <motion.div
                className="block w-full sm:w-auto"
                animate={{ x: [0, -10, 0] }} // Continuous horizontal movement in the opposite direction
                transition={{
                  x: {
                    repeat: Infinity, // Infinite loop
                    repeatType: "loop", // Loop continuously
                    duration: 2, // Duration of one cycle
                    ease: "easeInOut", // Smooth easing
                  },
                }}
              >
                <motion.a
                  href="/applyloan"
                  className="block rounded bg-white px-12 py-3 text-sm font-medium text-yellow-500 shadow hover:text-black focus:outline-none focus:ring active:text-rose-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Check Eligibility
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
