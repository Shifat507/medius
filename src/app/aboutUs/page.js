import Stories from '@/components/Stories';
import Image from 'next/image';
import React from 'react';

import softBank from '../../assets/sponsors/softBank.jpg'
import ally from '../../assets/sponsors/ally.jpg'
import city from '../../assets/sponsors/city.jpg'
import pingan from '../../assets/sponsors/pinganBank.jpg'
import goldman from '../../assets/sponsors/goldMan.jpg'
import kpcb from '../../assets/sponsors/kpcb.jpg'
import american from '../../assets/sponsors/american.jpg'
import Timeline from '@/components/Timeline';



const AboutUs = () => {
    const sponsors = [
        { name: 'SoftBank', src:  softBank  },
        { name: 'Ally', src:  ally  },
        { name: 'Citi', src:  city  },
        { name: 'Ping An Bank', src:  pingan  },
        { name: 'Goldman Sachs', src:  goldman },
        { name: 'KPCB', src:  kpcb },
        { name: 'American Express', src: american }
    ];
    return (
        <div>
            <div className='text-center h-screen'>
                <h2 className='text-3xl font-bold text-green-800 pt-5 md:pt-36'>Our mission</h2>
                <h4 className='text-4xl font-bold'>We’re making homeownership simpler,  faster — <br /> and most importantly, more accessible for all <br />Americans.</h4>
            </div>
            <div>
                <Stories></Stories>
            </div>

            <div className='my-16 bg-[#017848]'>
                <div className='w-10/12 mx-auto py-24 text-white'>
                    <h2 className='text-5xl font-bold  mb-8'>How we’re changing things</h2>
                    <p>
                        Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
                        <br /> <br />
                        That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
                    </p>
                </div>
            </div>

            {/* Sponsors */}
            <div className="py-12 text-center mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Backed by</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.name} className="w-32 h-12 flex items-center justify-center">
                            <Image
                                src={sponsor.src}
                                alt={sponsor.name}
                                width={120}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* TimeLine */}
            <Timeline></Timeline>

        </div>
    );
};

export default AboutUs;