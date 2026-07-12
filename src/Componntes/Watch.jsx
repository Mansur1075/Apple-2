import React from 'react'
import watch from "../assets/watch.png";

const Watch = () => {
    return (
        <div>
            <div
                className='bennar_1 h-125 md:h-162.5 text-white flex flex-col items-center justify-start pt-20 md:pt-16 w-full bg-[#000000] bg-no-repeat bg-bottom bg-[length:auto_60%] sm:bg-contain'
                style={{ backgroundImage: `url(${watch})` }}
            >
                <div className="text-center font-sans px-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Watch</h2>
                    <h4 className='text-[red] lg:mt-4'>Lovable</h4>
                    <p className="text-lg md:text-2xl text-[#f5f5f7] mt-1 md:mt-2 font-normal">A healthy leap ahead.</p>
                    <div className="flex gap-4 md:gap-6 justify-center mt-2 md:mt-3 text-sm md:text-base text-[#2997ff]">
                        <span className="cursor-pointer hover:underline">Learn more &gt;</span>
                        <span className="cursor-pointer hover:underline">Buy &gt;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch