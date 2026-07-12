import React from 'react'
import Container from './Container'
import bennar from "../assets/bennar.png";

const Bennar = () => {
    return (
        <div>
            <div
                className='bennar_1 h-125 md:h-162.5 text-white flex flex-col items-center justify-start pt-6 md:pt-10 w-full bg-black bg-no-repeat bg-bottom bg-contain'
                style={{ backgroundImage: `url(${bennar})` }}
            >
                <div className="text-center font-sans px-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">iPhone 14 Pro</h2>
                    <p className="text-lg md:text-2xl text-[#f5f5f7] mt-1 md:mt-2 font-normal">Pro. Beyond.</p>
                    <div className="flex gap-4 md:gap-6 justify-center mt-2 md:mt-3 text-sm md:text-base text-[#2997ff]">
                        <span className="cursor-pointer hover:underline">Learn more &gt;</span>
                        <span className="cursor-pointer hover:underline">Buy &gt;</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Bennar