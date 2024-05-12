import Image from 'next/image'
import React from 'react'

const AllBanks = () => {

    const Banks = [
        {
            index : 0 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 1 ,
            image: "https://www.apnarupee.com/resources/images/img/BAJAJ%20FINSERV%201.png"
        },
        {
            index : 2 ,
            image: "https://www.apnarupee.com/resources/images/img/BANDHAN%20BANK%20%201.png"
        },
        {
            index : 3 ,
            image: "https://www.apnarupee.com/resources/images/img/HDFC%20BANK%201.png"
        },
        {
            index : 4 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 5 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 6 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 7,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 8 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 10 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 11 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 12 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 13 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 14 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 15 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index : 16 ,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
       
    ];

    return (
        <div className='flex flex-col justify-center items-center bg-blue-50 mt-[3rem]'>
            <div>
                <h1 className='text-3xl font-bold sm:text-4xl '>Banks In Our Network</h1>
            </div>
            <div className='flex mt-[2rem]'>
                <div className='flex flex-wrap gap-[2rem]  justify-center'>
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
