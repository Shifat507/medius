import Image from 'next/image';
import house from '../assets/House.jpg'
import mortgageImage from '../assets/mortgage.jpg'
import withLaptop from '../assets/withLaptop.jpg'
import family from '../assets/familyImg.jpg'
const Faq = () => {
    return (
        <div className="max-w-6xl mx-auto py-10 px-4 mt-16">
            <div className='flex flex-col md:flex-row justify-between items-center mb-3'>
                <h2 className="text-3xl font-bold text-gray-800 ">
                    Got questions? <br /> We've got answers
                </h2>

                {/* Tabs */}
                <div className="flex flex-col md:flex-row justify-center space-x-4 mb-8">
                    <button className="btn btn-outline btn-success">Our products</button>
                    <button className="btn btn-outline">Calculators</button>
                    <button className="btn btn-outline">Guides & FAQs</button>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="card bg-[#f0f7f1] shadow-md flex flex-col p-12">
                    <h3 className="text-2xl font-bold mb-2 text-green-950">Buying your first home with Better</h3>
                    <Image
                        src={house}
                        width={220}
                        height={64}
                        alt="House"
                        className="rounded-md"
                    />
                    <button className="btn btn-circle btn-outline self-start mt-4">→</button>
                </div>

                {/* Card 2 */}
                <div className="card bg-[#f0f7f1] shadow-md p-12 flex flex-col md:flex-row col-span-2">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-green-950 ">One Day Mortgage®</h3>
                        <p className="text-green-950 text-xs">
                            Kids may learn fast, but the typical closing loan lender takes 45+ days.
                            Our One Day Mortgage offers a better solution.
                        </p>
                        <button className="btn btn-circle btn-outline self-start mt-4">→</button>
                    </div>
                    <Image
                        src={mortgageImage}
                        width={150}
                        height={100}
                        alt="One Day Mortgage"
                        className="mt-4"
                    />

                </div>

                {/* Card 3 */}
                <div className="card bg-[#f0f7f1] shadow-md p-12 flex flex-col md:flex-row col-span-2 gap-8 items-center">

                    <Image
                        src={withLaptop}
                        width={80}
                        height={50}
                        // objectFit='cover'
                        alt="Family using laptop"
                        className="rounded-md object-cover w-full h-full"
                    />
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-green-950">Better HELOC</h3>
                        <p className="text-sm text-gray-700">
                            Get cash from your home equity in as little as 7 days with Better HELOC.
                        </p>
                        <button className="btn btn-circle btn-outline self-start mt-4">→</button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="card bg-[#f0f7f1] shadow-md p-5 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2 text-green-950">Insurance</h3>
                    <button className="btn btn-circle btn-outline self-start my-4">→</button>
                    <Image
                        src={family}
                        width={400}
                        height={250}
                        alt="Insurance"
                        className="rounded-md"
                    />

                </div>
            </div>
        </div>
    );
};

export default Faq;
