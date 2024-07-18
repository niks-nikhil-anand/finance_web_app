"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; 

const GroceryRationCard = () => {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('router.query changed:', router.query);
    if (router.query && router.query.email) {
      console.log('Setting email:', router.query.email);
      setEmail(router.query.email);
    }
  }, [router.query]);

  useEffect(() => {
    console.log('email changed:', email);
    if (email) {
      fetchData();
    }
  }, [email]);

  const fetchData = async () => {
    try {
      console.log('Fetching data for email:', email);
      const response = await fetch(`/api/rationCard/${email}`);
      if (response.ok) {
        const result = await response.json();
        console.log('Data fetched:', result);
        setData(result);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rationCard.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center">
        JonoJivan Grocery Ration Card
      </h1>
      {loading && <div>Loading...</div>}
      {!loading && !data && <div>No data found</div>}
      {!loading && data && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg shadow-lg"
          onClick={handleDownload}
        >
          <FaDownload className="mr-2" />
          Download Grocery Ration Card
        </motion.button>
      )}
    </div>
  );
};

export default GroceryRationCard;
