import Image from 'next/image'
import React from 'react'

const AllBanks = () => {

    const Banks = [
        {
            index : 0 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
       
    ];

    return (
        <div className='flex flex-col justify-center items-center bg-blue-50'>
            <div>
                <h1 className='text-3xl font-bold sm:text-4xl '>Banks In Our Network</h1>
            </div>
            <div className='flex mt-[2rem]'>
                <div className='flex flex-wrap gap-[2rem] w-[60%]'>
                    {Banks.map((bank, index) => (
                        <div key={index} className='bg-white p-5'>
                            <Image src={bank.image} height={150} width={150} alt='bank'/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllBanks;
