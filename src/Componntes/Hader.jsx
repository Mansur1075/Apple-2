import React, { useState } from 'react'
import Container from './Container'
import { FaApple } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { HiShoppingBag } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';

const Hader = () => {
    let [Manu, setManu] = useState(false)
    return (
        <>
            <section className='bg-[#161617CC] relative font-sans z-50'>
                <Container>
                    <div className="flex items-center justify-between lg:justify-center py-3 lg:py-0 min-h-12">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-white text-[28px] lg:hidden' : 'text-gray-400 hover:text-white text-[28px] lg:hidden transition-colors'}>
                            <FaApple />
                        </NavLink>
                        <div className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-[#161617] lg:bg-transparent ${Manu ? 'block' : 'hidden lg:block'}`}>
                            <ul className='flex flex-col lg:flex-row items-start lg:items-center justify-center gap-6 lg:gap-10 text-white p-5 lg:p-0 whitespace-nowrap text-sm'>
                                <li className='text-2xl hidden lg:block'>
                                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400 hover:text-white transition-colors'}>
                                        <FaApple />
                                    </NavLink>
                                </li>

                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>
                                    <NavLink to="/store" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors'}>Store</NavLink>
                                </li>

                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>
                                    <NavLink to="/apple3" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors'}>Mac</NavLink>
                                </li>

                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>
                                    <NavLink to="/ipad" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors'}>ipade</NavLink>
                                </li>

                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>
                                    <NavLink to="/iphone" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors'}>iphone</NavLink>
                                </li>

                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>
                                    <NavLink to="/watch" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors'}>Watch</NavLink>
                                </li>

                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>
                                    <NavLink to="/airpods" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors'}>AirPods</NavLink>
                                </li>

                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>
                                    <NavLink to="/tv-home" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors'}>TV & Home</NavLink>
                                </li>

                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>
                                    <NavLink to="/entertainment" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors'}>Entertainment</NavLink>
                                </li>

                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>
                                    <NavLink to="/accessories" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors'}>Accessories</NavLink>
                                </li>

                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>
                                    <NavLink to="/support" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors'}>Support</NavLink>
                                </li>

                                <li className='text-2xl hidden lg:block text-gray-400 hover:text-white transition-colors cursor-pointer'><IoIosSearch /></li>
                                <li className='text-2xl hidden lg:block text-gray-400 hover:text-white transition-colors cursor-pointer'><HiShoppingBag /></li>
                            </ul>
                        </div>

                        <div className="lg:hidden flex items-center gap-5 text-white text-2xl pr-4">
                            <IoIosSearch />
                            <HiShoppingBag />
                            <div onClick={() => setManu(!Manu)} className="cursor-pointer">
                                {Manu ? <RxCross1 /> : <FaBars />}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>








    )
}

export default Hader