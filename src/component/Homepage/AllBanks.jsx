import Image from 'next/image'
import React from 'react'
import Container from '../Shared/Container';
import bajajfinance from '../../../public/logo/bajajfinance.png'
import dhanvarsa from '../../../public/logo/dhanvarsa.jpeg'

const AllBanks = () => {
    const Banks = [
        {
            index: 0,
            image: "https://www.apnarupee.com/resources/images/img/AADHAR%20HOUSING%20FINANCE%201.png"
        },
        {
            index: 1,
            image: "https://www.apnarupee.com/resources/images/img/ADITYA%20BIRLA%20CAPITAL%201.png"
        },
        {
            index: 2,
            image: "https://www.apnarupee.com/resources/images/img/AXIS%20BANK%201.png"
        },
        {
            index: 3,
            image: "https://www.apnarupee.com/resources/images/img/HDFC%20BANK%201.png"
        },
        {
            index: 4,
            image: bajajfinance
        },
        {
            index: 5,
            image: dhanvarsa
        },
        {
            index: 6,
            image: "https://www.apnarupee.com/resources/images/img/MAHINDRA%20HOME%20FINANCE%201.png"
        },
        {
            index: 7,
            image: "https://www.apnarupee.com/resources/images/img/YES%20BANK%201.png"
        },
        {
            index: 8,
            image: "https://www.apnarupee.com/resources/images/img/FEDERAL%20BANK%201.png"
        },
        {
            index: 10,
            image: "https://www.apnarupee.com/resources/images/img/SBI%20HOME%20LOAN%201.png"
        },
        {
            index: 11,
            image: "https://www.apnarupee.com/resources/images/img/AXIS%20BANK%201.png"
        },
        {
            index: 12,
            image: "https://www.apnarupee.com/resources/images/img/BANDHAN%20BANK%20%201.png"
        },
        {
            index: 13,
            image: "https://www.apnarupee.com/resources/images/img/CENTRAL%20BANK%20OF%20INDIA%201.PNG"
        },
        {
            index: 14,
            image: "https://www.apnarupee.com/resources/images/img/JAI%20KISAN%201.png"
        },
        {
            index: 15,
            image: "https://www.apnarupee.com/resources/images/img/SHRIRAM%20%20FINANCE%201.png"
        },
        {
            index: 16,
            image: "https://www.apnarupee.com/resources/images/img/PNB%20%20HOUSING%20FINANCE%20LIMITED%201.png"
        },
        {
            index: 17,
            image: "https://www.apnarupee.com/resources/images/img/AAVAS%20FINANCIERS%201%20(1).png"
        },
        {
            index: 18,
            image: "https://www.apnarupee.com/resources/images/img/ADITYA%20BIRLA%20FINANCE%201.png"
        },
        {
            index: 19,
            image: "https://www.apnarupee.com/resources/images/img/ADITYA%20BIRLA%20CAPITAL%201.png"
        },
        {
            index: 20,
            image: "https://www.apnarupee.com/resources/images/img/ARKA%20FINCAP%201.png"
        },
        {
            index: 21,
            image: "https://www.apnarupee.com/resources/images/img/AU%20SMALL%20FINANCE%20BANK%201.png"
        },
        {
            index: 22,
            image: "https://www.apnarupee.com/resources/images/img/AXIS%20FINANCE%201.png"
        },
        {
            index: 23,
            image: "https://www.apnarupee.com/resources/images/img/BAJAJ%20FINANCE%20LIMITED%201.png"
        },
        {
            index: 24,
            image: "https://www.apnarupee.com/resources/images/img/BANK%20OF%20BARODA%20%201.PNG"
        },
        {
            index: 25,
            image: "https://www.apnarupee.com/resources/images/img/BANK%20OF%20INDIA%20%201.PNG"
        },
        {
            index: 26,
            image: "https://www.apnarupee.com/resources/images/img/CENT%20BANK%20HOME%20FINANCE%20%201.PNG"
        },
        {
            index: 27,
            image: "https://www.apnarupee.com/resources/images/img/CENTRAL%20BANK%20OF%20INDIA%201.PNG"
        },
        {
            index: 28,
            image: "https://www.apnarupee.com/resources/images/img/CHOLAMANDALAM%20%201.PNG"
        },
        {
            index: 29,
            image: "https://www.apnarupee.com/resources/images/img/CSB%20BANK%20%20%201.PNG"
        },
        {
            index: 30,
            image: "https://www.apnarupee.com/resources/images/img/DCB%20BANK%20%20%201.PNG"
        },
        {
            index: 32,
            image: "https://www.apnarupee.com/resources/images/img/EDELWEISS%201.png"
        },
        {
            index: 33,
            image: "https://www.apnarupee.com/resources/images/img/FULLERTON%20INDIA%201.png"
        },
        {
            index: 34,
            image: "https://www.apnarupee.com/resources/images/img/GODREJ%20CAPITAL%201.png"
        },
        {
            index: 35,
            image: "https://www.apnarupee.com/resources/images/img/HERO%20FINCORP%20%201.PNG"
        },
        {
            index: 36,
            image: "https://www.apnarupee.com/resources/images/img/HERO%20HOUSING%20FINANCE%201.png"
        },
        {
            index: 37,
            image: "https://www.apnarupee.com/resources/images/img/HINDUJA%20HOUSING%20%20FINANCE%20%201.PNG"
        },
        {
            index: 38,
            image: "https://www.apnarupee.com/resources/images/img/ICICI%20BANK%20%201.PNG"
        },
        {
            index: 39,
            image: "https://www.apnarupee.com/resources/images/img/ICICI%20HOME%20FINANCE%201.png"
        },
        {
            index: 40,
            image: "https://www.apnarupee.com/resources/images/img/IDFC%20FIRST%20BANK%20%201.PNG"
        },
        {
            index: 41,
            image: "https://www.apnarupee.com/resources/images/img/IIFL%20FINANCE%201.png"
        },
        {
            index: 42,
            image: "https://www.apnarupee.com/resources/images/img/INDIAN%20BANK%20%201.PNG"
        },
        {
            index: 43,
            image: "https://www.apnarupee.com/resources/images/img/IOB%201.png"
        },
        {
            index: 44,
            image: "https://www.apnarupee.com/resources/images/img/INDIA%20SHELTER%20HOME%20LOANS%20%201.png"
        },
        {
            index: 45,
            image: "https://www.apnarupee.com/resources/images/img/INDOSTAR%20CAPITAL%201.png"
        },
        {
            index: 46,
            image: "https://www.apnarupee.com/resources/images/img/KOTAK%20MAHINDRA%20BANK%201.png"
        },
        {
            index: 47,
            image: "https://www.apnarupee.com/resources/images/img/L1.png"
        },
        {
            index: 48,
            image: "https://www.apnarupee.com/resources/images/img/LIC%20HOUSING%20FINANCE%201.png"
        },
        {
            index: 49,
            image: "https://www.apnarupee.com/resources/images/img/MUTHOOT%20FINCORP%201.png"
        },
        {
            index: 50,
            image: "https://www.apnarupee.com/resources/images/img/PIRAMAL%20HOUSING%20FINANCE%201.png"
        },
        {
            index: 51,
            image: "https://www.apnarupee.com/resources/images/img/POONAWALLA%20FINCORP%201.png"
        },
        {
            index: 52,
            image: "https://www.apnarupee.com/resources/images/img/SHRIRAM%20HOUSING%20FINANCE%201.png"
        },
        {
            index: 53,
            image: "https://www.apnarupee.com/resources/images/img/SHUBHAM%20HOUSING%20FINANCE%201.png"
        },
        {
            index: 54,
            image: "https://www.apnarupee.com/resources/images/img/STANDARD%20CHARTERED%20BANK%201.png"
        },
        {
            index: 55,
            image: "https://www.apnarupee.com/resources/images/img/SUNDARAM%20FINANCE%201.png"
        },
        {
            index: 56,
            image: "https://www.apnarupee.com/resources/images/img/SVC%20CO-OPERATIVE%20BANK%20LIMITED%201.png"
        },
        {
            index: 57,
            image: "https://www.apnarupee.com/resources/images/img/TATA%20CAPITAL%201.png"
        },
        {
            index: 58,
            image: "https://www.apnarupee.com/resources/images/img/SOUTH%20INDIAN%20BANK%201.png"
        },
        {
            index: 59,
            image: "https://www.apnarupee.com/resources/images/img/UGRO%20CAPITAL%201.png"
        },
        {
            index: 60,
            image: "https://www.apnarupee.com/resources/images/img/UNION%20BANK%201.png"
        },
        {
            index: 61,
            image: "https://www.apnarupee.com/resources/images/img/UTKARSH%20SMALL%20FINANCE%20BANK%20%201.png"
        },
    ];

    return (
        <div className='flex flex-col justify-center items-center bg-gray-300 py-[3rem]'>
            <Container>
            <div className='flex justify-center items-center'>
                <h1 className='text-2xl md:text-3xl font-bold sm:text-4xl '>BANKS - OUR NBFC CHANNEL PARTNER NETWORK</h1>
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
