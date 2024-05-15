"use client"
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9hbnxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1634474588707-de99f09285c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxvYW58ZW58MHx8MHx8fDA%3D',
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Image Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={src}
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
