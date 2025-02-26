import Image from 'next/image';
import React from 'react';

import review1 from '../assets/review1.png';
import review2 from '../assets/review2.png';
import review3 from '../assets/review3.png';

const Reviews = () => {
    return (
        <div className='mt-16 flex flex-col md:flex-row gap-4 md:gap-16 justify-center items-center'>

            <div className="w-[270px] md:w-[360px] h-[400px] relative">
                <div className="carousel w-full h-full">
                    <div id="item1" className="carousel-item w-full relative">
                        <Image
                            src={review1}
                            alt="client review"
                            className="rounded-2xl object-contain"
                            layout="intrinsic"
                            width={360}
                            height={400}
                        />
                    </div>
                    <div id="item2" className="carousel-item w-full relative">
                        <Image
                            src={review2}
                            alt="client review"
                            className="rounded-2xl object-contain"
                            layout="intrinsic"
                            width={360}
                            height={400}
                        />
                    </div>
                    <div id="item3" className="carousel-item w-full relative">
                        <Image
                            src={review3}
                            alt="client review"
                            className="rounded-2xl object-contain"
                            layout="intrinsic"
                            width={360}
                            height={400}
                        />
                    </div>
                </div>

                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                </div>
            </div>

            <div>
                <h2 className='text-5xl font-bold'>Find out why <br /> we’re better.</h2>
                <button className='bg-[#004733] text-white px-6 py-2 rounded-2xl hover:bg-[#067A59] mt-6'>
                    See all our stories
                </button>
            </div>
        </div>
    );
};

export default Reviews;
