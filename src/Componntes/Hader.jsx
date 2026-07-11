import React, { useState } from 'react'
import Container from './Container'
import { FaApple } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Hader = () => {

    let [Manu , setManu] = useState(false)

    return (
        <>
            <section className='bg-[#161617CC] relative font-sans z-50'>
                <Container>
                    <div className="flex items-center justify-between lg:justify-center py-3 lg:py-0 min-h-[48px]">
                        
                        <div className='text-white text-2xl lg:hidden pl-4'>
                            <FaApple />
                        </div>

                        <div className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-[#161617] lg:bg-transparent ${Manu ? 'block' : 'hidden lg:block'}`}>
                            <ul className='flex flex-col lg:flex-row items-start lg:items-center justify-center gap-6 lg:gap-10 text-white p-5 lg:p-0 whitespace-nowrap text-sm'>
                                <li className='text-2xl hidden lg:block'><FaApple /></li>
                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>Store</li>
                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>Mac</li>
                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>ipade</li>
                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>iphone</li>
                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>Watch</li>
                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>AirPods</li>
                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>TV & Home</li>
                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>Entertainment</li>
                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>Accessories</li>
                                <li className='w-full border-b border-gray-800 lg:border-none pb-2 lg:pb-0 cursor-pointer'>Support</li>
                                <li className='text-2xl hidden lg:block'><IoIosSearch /></li>
                                <li className='text-2xl hidden lg:block'><FaShopify /></li>
                            </ul>
                        </div>

                        <div className="lg:hidden flex items-center gap-5 text-white text-2xl pr-4">
                            <IoIosSearch />
                            <FaShopify />
                            <div onClick={()=>setManu(!Manu)} className="cursor-pointer">
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