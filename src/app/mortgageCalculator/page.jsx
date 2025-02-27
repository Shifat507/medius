'use client';

import React, { useState } from 'react';

const MortgageCalculator = () => {
    const [homePrice, setHomePrice] = useState(null);
    const [downPaymentPercentage, setDownPaymentPercentage] = useState(20);
    const [interestRate, setInterestRate] = useState(7);
    const [years, setYears] = useState(30);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const calculateMortgage = (homePrice, downPaymentPercentage, interestRate, years) => {
        if (!homePrice) {
            setMonthlyPayment(0);
            return;
        }

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

    return (
        <div className='bg-[#f0f7f1]'>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-3xl font-bold pt-20 pb-8'>Mortgage Calculator</h2>
                <p className='text-sm text-gray-500 w-2/4'>
                    Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI).
                    Get the whole picture and calculate your total monthly payment.
                </p>

                <div className='flex justify-between items-center my-16'>
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
                        <h3 className='w-72 px-2 py-2 text-2xl font-semibold'>$ {monthlyPayment}/mo</h3>
                    </div>
                    <div>
                        <button
                            
                            className='bg-[#004733] text-white px-6 py-3 rounded-3xl hover:bg-[#067A59] mt-6'
                        >
                            Get pre approved
                        </button>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center pb-16'>
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
    );
};

export default MortgageCalculator;
