import React from 'react';
import { LuCirclePercent } from "react-icons/lu";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaMobileAlt } from "react-icons/fa";
import buyHome from '../../assets/home/buyHome.jpeg';
import refinanceMortgage from '../../assets/home/refinanceMortgage.jpeg';
import getCash from '../../assets/home/getCash.jpeg';
import Image from 'next/image';

const Start = () => {
    return (
        <div className='mt-12'>
            <div className="divider">
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>
            <h3 className='text-4xl font-bold text-center mt-16 mb-8'>Hi, I'm Betsy! <br />
                What can I help you with?</h3>
            <div className='max-w-72 md:max-w-96 mx-auto space-y-5'>
                <div className='flex items-center gap-6 border-2 border-gray-500 hover:border-green-600 cursor-pointer rounded-lg hover:text-green-600'>
                    <div className='p-1'>
                        <Image src={buyHome} width={50}></Image>
                    </div>
                    <div className='border-3 border-gray-600'>
                        <span className='text-md font-semibold'>Buying a Home</span>
                    </div>
                </div>
                <div className='flex items-center gap-6 border-2 border-gray-600 hover:border-green-600 cursor-pointer rounded-lg hover:text-green-600'>
                    <div className='p-1'>
                        <Image src={refinanceMortgage} width={50}></Image>
                    </div>
                    <div className='border-3 border-gray-600'>
                        <span className='text-md font-semibold'>Refinance my mortgage</span>
                    </div>
                </div>
                <div className='flex items-center gap-6 border-2 border-gray-600 hover:border-green-600 cursor-pointer rounded-lg hover:text-green-600'>
                    <div className='p-1'>
                        <Image src={getCash} width={50}></Image>
                    </div>
                    <div className='border-3 border-gray-600'>
                        <span className='text-md font-semibold'>Get cash from my home</span>
                    </div>
                </div>
            </div>

            {/* stats */}
            <div className='flex justify-center my-16'>
                <div className='flex items-center gap-8 md:gap-40'>
                    <div className='text-center'>
                        <span className='text-xl md:text-3xl font-semibold'>$100B</span>
                        <p>home loans funded entirely online</p>
                    </div>
                    <div className='text-center'>
                        <span className='text-xl md:text-3xl font-semibold'>400K</span>
                        <p>Customers who chose a Better Mortgage</p>
                    </div>
                </div>
            </div>

            {/* Unlock Section */}
            <div className='max-w-lg bg-[#f0f7f1] rounded-xl mx-auto flex justify-center py-12 mb-16'>
                <div className='text-gray-500'>
                    <p>After a few questions, you'll unlock:</p>
                    <p className='flex items-center gap-2'><span className='text-green-600 '><LuCirclePercent size={20} /></span> Custom mortgage rates</p>
                    <p className='flex items-center gap-2'><span className='text-green-600 '><LuCircleDollarSign size={20} /></span>Exclusive offers</p>
                    <p className='flex items-center gap-2'><span className='text-green-600 '><FaMobileAlt size={20} /></span>A personalized dashboard</p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Start;