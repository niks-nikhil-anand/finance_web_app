"use client"
import React from 'react';
import { motion } from 'framer-motion';

const YouTubePlayer = ({ videoId }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative w-full aspect-w-16 aspect-h-9">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/xNRJwmlRBNU?si=43RGVZTHY_r9BLGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default YouTubePlayer;
