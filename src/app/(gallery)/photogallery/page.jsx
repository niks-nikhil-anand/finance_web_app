"use client"
import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../../../public/gallery/img1.jpeg'
import img2 from '../../../../public/gallery/img2.jpeg'
import img3 from '../../../../public/gallery/img3.jpeg'
import img4 from '../../../../public/gallery/img4.jpeg'
import img5 from '../../../../public/gallery/img5.jpeg'
import img6 from '../../../../public/gallery/img6.jpeg'
import img7 from '../../../../public/gallery/img7.jpeg'
import img8 from '../../../../public/gallery/img8.jpeg'
import Image from 'next/image';


const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Image Gallery</h1>
      <div className="flex flex-wrap gap-[2rem] px-[2rem]">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={src}
              height={500}
              width={500}
              alt={`Placeholder ${index + 1}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
