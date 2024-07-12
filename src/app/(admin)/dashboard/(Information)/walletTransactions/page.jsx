"use client"
"use client"
import React, { useState } from 'react';
import axios from 'axios';

const WalletDetails = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUserData = async (email) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`/api/admin/wallet/${email}`);
      const userData = response.data;
      setUser({
        totalAmount: userData.totalAmount,
        transactions: userData.transactions || []  // Ensure transactions is an array
      });
    } catch (error) {
      setError('Error fetching user data. Please try again.');
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (email) {
      fetchUserData(email);
    }
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <div className="py-5 w-full flex flex-col">
        <div className="text-center bg-[#ecd6d6] m-5 p-8 shadow-3xl w-full">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email ID"
            className="inline-block bg-[#fff] text-[#a3a3a3] shadow-md border-0 outline-0 p-5 w-[80%]"
          />
          <button
            onClick={handleSearch}
            className="inline-block bg-[#7f8ff4] text-white shadow-md rounded p-3 px-9 transition-all duration-200 ease-in cursor-pointer ml-[-86px] hover:bg-blue-600 active:bg-blue-500 active:shadow-inner"
          >
            Search
          </button>
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
        {user && (
          <div className="w-full flex flex-col items-center">
            <div className="bg-transparent font-verdana mb-5">
              <div className="p-4 bg-gray-100 rounded-lg shadow-lg w-[55rem]">
                <div className="text-center">
                  <h3 className="text-md font-semibold mb-2">Wallet Information</h3>
                  <p className="text-sm my-1">Total Amount: ${user.totalAmount}</p>
                  <h4 className="text-sm font-semibold mt-4 mb-2">Transactions:</h4>
                  <div className="overflow-x-auto w-full">
                    <table className="min-w-full bg-white border-collapse overflow-hidden">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="text-xs py-2 px-4 font-semibold text-left">Date</th>
                          <th className="text-xs py-2 px-4 font-semibold text-left">Type</th>
                          <th className="text-xs py-2 px-4 font-semibold text-left">Amount</th>
                          <th className="text-xs py-2 px-4 font-semibold text-left">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.transactions.map((transaction, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                            <td className="text-xs py-2 px-4">{new Date(transaction.date).toLocaleDateString()}</td>
                            <td className="text-xs py-2 px-4">{transaction.type}</td>
                            <td className="text-xs py-2 px-4">${transaction.amount}</td>
                            <td className="text-xs py-2 px-4">{transaction.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletDetails;
