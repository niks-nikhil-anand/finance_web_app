"use client";
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhatsappIcon() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-20"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="https://wa.link/u95toi" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1EBE5A] focus:outline-none"
          aria-label="Chat with Legal257 on WhatsApp"
        >
          <FaWhatsapp size={32} />
        
      </Link>
    </motion.div>
  );
}
