import React from 'react'
import bennarr from "../assets/bennarr.png";

const Iphone14 = () => {
  return (
    <div>
        <div className='bennar_1 bg-[#FBFBFD] text-black flex flex-col items-center pt-10 md:pt-16 pb-0 relative overflow-hidden w-full'>
                <div className="text-center z-10 font-sans px-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">iPhone 14 </h2>
                    <p className="text-lg md:text-2xl text-black mt-1 md:mt-2 font-normal">Pro. Beyond.</p>
                    <div className="flex gap-4 md:gap-6 justify-center mt-2 md:mt-3 text-sm md:text-base text-[#2997ff]">
                        <span className="cursor-pointer hover:underline">Learn more &gt;</span>
                        <span className="cursor-pointer hover:underline">Buy &gt;</span>
                    </div>
                </div>
                <div className="w-full max-w-75 sm:max-w-125 md:max-w-200 lg:max-w-250 mt-6 md:mt-2 px-0 flex justify-center items-end">
                    <img src={bennarr} alt="" className="w-full h-auto object-contain block mx-auto"/>
                </div>
            </div>
    </div>
  )
}

export default Iphone14