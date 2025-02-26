import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = <>
        <li className='hover:bg-white hover:text-black hover:rounded-md'><Link href="/">Home</Link></li>
        <li className='hover:bg-white hover:text-black hover:rounded-md'><Link href="/aboutUs">About Us</Link></li>
        <li className='hover:bg-white hover:text-black hover:rounded-md'><Link href="/mortgageCalculator">Mortgage Calculator</Link></li>
        <li className='hover:bg-white hover:text-black hover:rounded-md'><Link href="/startPage">Start Page</Link></li>
    </>
    return (
        <div className="navbar  bg-[#004733] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-xl cursor-pointer">Medius</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Sign in</a>
            </div>
        </div>
    );
};

export default Navbar;