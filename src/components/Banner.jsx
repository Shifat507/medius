import React from 'react';
import mobileImg from '../assets/phone.png';
import { FcGoogle } from "react-icons/fc";

const Banner = () => {
    return (
        <div>
            <div
                className="hero bg-[#004733] min-h-screen"
                style={{
                    backgroundImage: `url(${mobileImg.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    height: '100vh'
                }}
            >
                <div className="hero-content text-neutral-content text-center">
                    <div>
                        <h1 className="mb-3 md:mb-52 text-4xl md:text-7xl font-bold text-[#1ee07f]">
                            Mortgages <br />
                            made simple
                        </h1>
                        <div className='flex flex-col md:flex-row md:gap-96 items-center mb-16'>
                            <div>
                                <button className="bg-[#1ee07f] text-[#295259] px-8 py-3 rounded-3xl hover:bg-[#004733] hover:text-white">Start my approval
                                </button>
                                <p className='text-[12px]'>⏱ 3 min | No credit impact</p>
                            </div>

                            <div >
                                <div className='flex'>
                                    <div>
                                        <FcGoogle size={25}></FcGoogle>
                                    </div>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input
                                            type="radio"
                                            name="rating-2"
                                            className="mask mask-star-2 bg-orange-400"
                                        />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                                <p className='text-[12px]'>4.6 Stars | 3177 Google reviews</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
