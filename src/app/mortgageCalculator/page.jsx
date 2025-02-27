'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import dit from '../../assets/equations/dti.jpeg'
import dit2 from '../../assets/equations/dti2.jpeg'
import mortgagePayments from '../../assets/equations/mortgagePayments.jpeg'
import mortgagePayments2 from '../../assets/equations/mortgagePayments2.jpeg'
import Image from 'next/image';
import Table from '@/components/Table';
import MoreResources from '@/components/MoreResources';

const MortgageCalculator = () => {
    const [homePrice, setHomePrice] = useState(null);
    const [downPaymentPercentage, setDownPaymentPercentage] = useState(20);
    const [interestRate, setInterestRate] = useState(7);
    const [years, setYears] = useState(30);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [total, setTotal] = useState(null);
    const [propertyTaxes, setPropertyTaxes] = useState(265);
    const [homeownersInsurance, setHomeownersInsurance] = useState(132);
    const [hoaFees, setHoaFees] = useState(132);
    const [utilities, setUtilities] = useState(100);

    const calculateMortgage = (homePrice, downPaymentPercentage, interestRate, years) => {
        if (!homePrice) {
            setMonthlyPayment(0);
            return;
        }
        // const propertyTaxes = 265;
        // const homeownersInsurance = 132;
        // const hoaFees = 132;
        // const utilities = 100;

        const downPayment = (homePrice * downPaymentPercentage) / 100;
        const loanAmount = homePrice - downPayment;
        const monthlyInterestRate = (interestRate / 100) / 12;
        const totalPayments = years * 12;

        const calculatedPayment =
            monthlyInterestRate === 0
                ? loanAmount / totalPayments
                : (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
                (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

        setMonthlyPayment(calculatedPayment.toFixed(2));
        setTotal((calculatedPayment + propertyTaxes + homeownersInsurance + hoaFees + utilities).toFixed(2));
    };

    // Handle Input Changes
    const handleHomePriceChange = (e) => {
        const value = parseFloat(e.target.value) || 0;
        setHomePrice(value);
        calculateMortgage(value, downPaymentPercentage, interestRate, years);
    };

    const handleDownPaymentChange = (e) => {
        const value = parseFloat(e.target.value) || 0;
        setDownPaymentPercentage(value);
        calculateMortgage(homePrice, value, interestRate, years);
    };

    const handleInterestRateChange = (e) => {
        const value = parseFloat(e.target.value) || 0;
        setInterestRate(value);
        calculateMortgage(homePrice, downPaymentPercentage, value, years);
    };

    const handleYearsChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setYears(value);
        calculateMortgage(homePrice, downPaymentPercentage, interestRate, value);
    };

    // Chart Data
    const chartData = [
        { name: 'Principal & Interest', amount: parseFloat(monthlyPayment) || 0, fill: "#017848" },
        { name: 'Property Taxes', amount: propertyTaxes, fill: "#6e4cf6" },
        { name: 'Homeowners Insurance', amount: homeownersInsurance, fill: "#8e8eeb" },
        { name: 'HOA Fees', amount: hoaFees, fill: "#ffd566" },
        { name: 'Utilities', amount: utilities, fill: "#fe8b72" }
    ];

    return (
        <div>
            <div className='bg-[#f0f7f1]'>
                <div className='w-11/12 mx-auto'>
                    <h2 className='text-3xl font-bold pt-20 pb-8'>Mortgage Calculator</h2>
                    <p className='text-sm text-gray-500 w-2/4'>
                        Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI).
                        Get the whole picture and calculate your total monthly payment.
                    </p>

                    <div className='flex flex-col md:flex-row justify-between items-center my-16'>
                        <div className='flex flex-col'>
                            <span className='text-lg font-semibold'>Home Price</span>
                            <input
                                className='w-72 border-2 border-gray-600 rounded-lg px-2 py-1 text-2xl font-semibold'
                                type='number'
                                value={homePrice}
                                onChange={handleHomePriceChange}
                                placeholder='$0.000'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-lg font-semibold'>Monthly Payment</span>
                            <h3 className='w-72 px-2 py-2 text-2xl font-semibold'>$ {total}/mo</h3>
                        </div>
                        <div>
                            <button

                                className='bg-[#004733] text-white px-6 py-3 rounded-3xl hover:bg-[#067A59] mt-6'
                            >
                                Get pre approved
                            </button>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center pb-16'>
                        <div className='w-64'>
                            <span className='ml-1 font-semibold'>Zip Code</span>
                            <label className='input input-bordered flex items-center gap-2'>
                                <input type='text' className='grow' value='6100' readOnly />
                            </label>
                        </div>
                        <div className='w-64'>
                            <span className='ml-1 font-semibold'>Down Payment (%)</span>
                            <label className='input input-bordered flex items-center gap-2'>
                                <input
                                    type='number'
                                    className='grow'
                                    value={downPaymentPercentage}
                                    onChange={handleDownPaymentChange}
                                    placeholder='20'
                                />
                                <span>%</span>
                            </label>
                        </div>
                        <div className='w-64'>
                            <span className='ml-1 font-semibold'>Interest Rate</span>
                            <label className='input input-bordered flex items-center gap-2'>
                                <input
                                    type='number'
                                    className='grow'
                                    value={interestRate}
                                    onChange={handleInterestRateChange}
                                    placeholder='0.0%'
                                />
                                <span>%</span>
                            </label>
                        </div>
                        <div className='w-64'>
                            <span className='ml-1 font-semibold'>Length of Loan</span>
                            <label className='input input-bordered flex items-center gap-2'>
                                <input
                                    type='number'
                                    className='grow'
                                    value={years}
                                    onChange={handleYearsChange}
                                    placeholder='Years'
                                />
                                <span>Yrs</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-around w-11/12 mx-auto mb-16'>
                <div>
                    {/* BarChart */}
                    <div className='flex flex-col items-center mt-12'>
                        <h2 className='text-xl font-semibold mb-4'>Monthly Mortgage Breakdown <br /> <span className='text-3xl font-semibold'>$ {total}/mo</span></h2>
                        <div className=''>
                            <BarChart width={350}
                                height={150} data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="amount" fill="##017848" />
                            </BarChart>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-8 md:gap-32'>
                    <div className='flex flex-col space-y-6'>
                        <span>Principal & interest</span>
                        <span>Property taxes
                        </span>
                        <span>Homeowners insurance</span>
                        <span>HOA fees</span>
                        <span>Utilities</span>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <span className='text-md font-semibold mb-3'>$ {monthlyPayment}</span>
                        <span className='text-md font-semibold border-2 border-gray-500 px-6 py-1 rounded-lg'>$ {propertyTaxes}</span>
                        <span className='text-md font-semibold border-2 border-gray-500 px-6 py-1 rounded-lg'>$ {homeownersInsurance}</span>
                        <span className='text-md font-semibold border-2 border-gray-500 px-6 py-1 rounded-lg'>$ {hoaFees}</span>
                        <span className='text-md font-semibold border-2 border-gray-500 px-6 py-1 rounded-lg'>$ {utilities}</span>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto'>
                <div className='mb-16'>
                    <div className='divider'></div>
                    <h3 className='text-2xl font-bold mb-3'>How does a mortgage calculator help me?</h3>
                    <p>When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</p>
                    <div className='divider'></div>
                </div>
                <div className='mb-16'>
                    <h3 className='text-2xl font-bold mb-3'>How much monthly mortgage payment can I afford?</h3>
                    <p>Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.

                        Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.</p>

                    <div className='flex justify-center my-4 py-3'>
                        <div>
                            <span>Formula for calculating your debt-to-income DTI ratio:</span>
                            <Image src={dit} width={600}></Image>
                        </div>
                    </div>

                    <div className='flex justify-center my-4 py-3'>
                        <div>
                            <span>Here’s an example of what calculating your DTI might look like:</span>
                            <Image src={dit2} width={600}></Image>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <h3 className='text-2xl font-bold mb-3'>How to calculate monthly mortgage payments?</h3>
                        <p>Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mb-3 mt-4'>Formula for calculating monthly mortgage payments</h3>
                        <p>The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p>
                    </div>
                    <div className='flex justify-center my-4 '>
                        <div className='space-y-4'>
                            <Image src={mortgagePayments} width={600}></Image>
                            <span>where:</span>

                            <div className=''>
                                <li>M is monthly mortgage payments</li>
                                <li>P is the principal loan amount (the amount you borrow)</li>
                                <li>r is the monthly interest rate
                                    (annual interest rate divided by 12 and expressed as a decimal)
                                    For example:
                                    if the annual interest rate is 5%,
                                    the monthly rate would be 0.05/12 = .00417, or .417%</li>
                                <li>n is the total number of payments in months
                                    For example:
                                    for a 30-year loan, n = 30×12 = 360 months</li>
                            </div>
                            <span className=''>Here’s a simple example:</span>
                            <Image src={mortgagePayments2} width={600}></Image>
                            <p>This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <h3 className='text-xl font-bold mb-3 mt-4'>How to use this mortgage calculator?</h3>
                        <p>Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.

                            Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.

                            The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator.

                            Fun fact: Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.</p>

                        <h3 className='text-xl font-bold mb-3 mt-4'>Do you know your property tax rate?</h3>
                        <p>While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from Forbes breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:</p>

                    </div>
                    {/* Table */}
                    <div className='my-8'>
                        <Table></Table>

                        <div className='divider'></div>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold mb-3 mt-4'>How is Better’s mortgage calculator different?</h3>
                        <h3 className='text-xl font-bold mb-3 mt-4'>This mortgage calculator shows your payments with taxes and insurance</h3>
                        <p>The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.

                            Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.

                            Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mb-3 mt-4'>This mortgage calculator shows your mortgage costs with PMI</h3>
                        <p>PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.

                            Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn’t risen above 10% since 1989.

                            PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.</p>

                        <h3 className='text-xl font-bold mb-3 mt-4'>This mortgage calculator includes HOA fees</h3>
                        <p>Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage costs.

                            Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It's important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments’ to cover unexpected expenses from time to time.</p>
                        <div className='divider my-4'></div>
                    </div>
                    <div>
                        <div>
                            <h3 className='text-2xl font-bold mb-3 mt-4'>How to reduce your monthly mortgage payments?</h3>
                            <p>The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.</p>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold mb-3 mt-4'>Extend the length of your mortgage</h3>
                            <p>The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, ‘extending the length of your mortgage’ is known as ‘increasing your loan term’.) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.</p>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold mb-3 mt-4'>Extend the length of your mortgage</h3>
                            <p>The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you’re able to put at least 20% of the home price towards your down payment, you’ll be able to avoid PMI (private mortgage insurance). Even if you can’t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.</p>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold mb-3 mt-4'>Get a lower interest rate</h3>
                            <p>Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your loan-to-value ratio (LTV).

                                Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.

                                If you think you may sell or refinance the home in the first 5-10 years of the mortgage, you could consider an adjustable-rate mortgage (ARM). An ARM offers a lower fixed interest rate for a set introductory period—typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won’t keep the mortgage for long.

                                If you’re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your debt-to-income ratio (DTI), lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.

                            </p>
                        </div>
                        <div className='divider my-8'></div>
                        <div>
                            <h3 className='text-xl font-bold mb-3 mt-4'>How much home can I afford?</h3>
                            <p>Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our home affordability calculator. This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.</p>
                            <div className='divider my-8'></div>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold mb-3 mt-4'>Next steps to buying a house</h3>
                            <p>There are 8 steps to buying a house and by using this calculator you’ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).

                                The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn’t impact your credit score. It’s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you’ll be offered.

                                If you’re ready to buy a home now, our definitive home buying checklist can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you’ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don’t have this kind of proof that they’re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.**</p>
                            <div className='divider my-8'></div>
                        </div>

                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-6">More resources</h2>
                    <MoreResources></MoreResources>
                </div>
                <span className='text-xs'>*See Better Real Estate discount terms and conditions.

                    **The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year fixed-rate mortgage product with Better Mortgage’s own offered rate for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is based on conventional, conforming fully-amortizing home purchase loans for borrowers with a loan-to-value of 80 percent and with excellent credit. Better Mortgage’s offered rate is based on pricing output for a 30-year fixed-rate mortgage product with a 30-day lock period for a single-family, owner-occupied residential property and a borrower with excellent (760 FICO) credit and a loan-to-value ratio of 80 percent. Individual savings could vary based on current market rates, property type, loan amount, loan-to-value, credit score, debt-to-income ratio and other variables.</span>
            </div>
        </div>
    );
};

export default MortgageCalculator;
