import Image from 'next/image'
import React from 'react'
import Container from '../Shared/Container';

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
            image: "https://www.apnarupee.com/resources/images/img/IDBI%20BANK%201.png"
        },
        {
            index : 5 ,
            image: "https://www.apnarupee.com/resources/images/img/INDUSIND%20BANK%201.png"
        },
        {
            index : 6 ,
            image: "https://www.apnarupee.com/resources/images/img/MAHINDRA%20HOME%20FINANCE%201.png"
        },
        {
            index : 7,
            image: "https://www.apnarupee.com/resources/images/img/YES%20BANK%201.png"
        },
        {
            index : 8 ,
            image: "https://www.apnarupee.com/resources/images/img/FEDERAL%20BANK%201.png"
        },
        {
            index : 10 ,
            image: "https://www.apnarupee.com/resources/images/img/SBI%20HOME%20LOAN%201.png"
        },
        {
            index : 11 ,
            image: "https://www.apnarupee.com/resources/images/img/AXIS%20BANK%201.png"
        },
        {
            index : 12 ,
            image: "https://www.apnarupee.com/resources/images/img/BANDHAN%20BANK%20%201.png"
        },
        {
            index : 13 ,
            image: "https://www.apnarupee.com/resources/images/img/CENTRAL%20BANK%20OF%20INDIA%201.PNG"
        },
        {
            index : 14 ,
            image: "https://www.apnarupee.com/resources/images/img/JAI%20KISAN%201.png"
        },
        {
            index : 15 ,
            image: "https://www.apnarupee.com/resources/images/img/SHRIRAM%20%20FINANCE%201.png"
        },
        {
            index : 16 ,
            image: "https://www.apnarupee.com/resources/images/img/PNB%20%20HOUSING%20FINANCE%20LIMITED%201.png"
        },
       
    ];

    return (
        <div className='flex flex-col justify-center items-center bg-gray-300 py-[3rem]'>
            <Container>
            <div className='flex justify-center items-center'>
                <h1 className='text-2xl md:text-3xl font-bold sm:text-4xl '>Banks In Our Network</h1>
            </div>
            <div className='flex mt-[2rem]'>
                <div className='flex flex-wrap gap-[2rem]  justify-center '>
                    {Banks.map((bank, index) => (
                        <div key={index} className='bg-white p-1 shadow-lg rounded-lg w-[4.3rem] md:w-[10rem]'>
                            <Image src={bank.image} height={150} width={150} alt='bank'/>
                        </div>
                    ))}
                </div>
            </div>
            </Container>
        </div>
    );
}

export default AllBanks;
