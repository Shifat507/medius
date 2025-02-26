import React from 'react';

const Stories = () => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-8 w-10/12 mx-auto mb-16'>
            <div>
                <h2 className='text-4xl font-bold mb-8'>The status quo is broken</h2>
                <p className='text-md text-gray-600'>
                    The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
                </p>

                <button className='bg-[#004733] text-white px-6 py-3 rounded-3xl hover:bg-[#067A59] mt-6'>
                    Read Vishal's Story
                </button>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[280px] h-[120px] md:w-[560px] md:h-[315px]">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/1KjYlLBM9j4?si=8XGtiP_NRMqQG3bd" 
                        title="YouTube video player" 
                        
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Stories;
