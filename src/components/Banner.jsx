import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="hero bg-[#004733] min-h-screen"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-7xl font-bold text-[#1ee07f]">Mortgages <br />
                        made simple</h1>
                        
                        <button className="btn btn-primary">Start my approval</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;