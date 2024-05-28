"use client"
import Container from '@/component/Shared/Container';
import React from 'react';

const YouTubePlayer = () => {
 
  return (
    <Container>
<div className='className="flex items-center justify-center min-h-screen bg-gray-100"'>
  <div>
    <h1 className='heading3 text-gradient-blue text-center'>Welcome to Legal257, your trusted destination for all things financial, tax-related, and business services.</h1>
    </div>

   
    <div className="">
    <div className="videowrapper relative w-full pb-[56.25%] pt-6 h-0">
     <iframe  src="https://www.youtube-nocookie.com/embed/wdgH3_SXUZk?si=ldd-npOEMO82o1Mi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>

    </div>
    </Container>
  );
};

export default YouTubePlayer;
