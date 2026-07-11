import React from 'react'
import watch from "../assets/watch.png";

const Watch = () => {
  return (
    <div>
        <div className='bennar_1 bg-[#000000] text-white flex flex-col items-center pt-10 md:pt-16 pb-0 relative overflow-hidden w-full'>
                <div className="text-center z-10 font-sans px-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Watch</h2>
                    <h4 className=' text-[red]  lg:mt-4'>Lovable</h4>
                    <p className="text-lg md:text-2xl text-[#f5f5f7] mt-1 md:mt-2 font-normal">A healthy leap ahead.</p>
                    <div className="flex gap-4 md:gap-6 justify-center mt-2 md:mt-3 text-sm md:text-base text-[#2997ff]">
                        <span className="cursor-pointer hover:underline">Learn more &gt;</span>
                        <span className="cursor-pointer hover:underline">Buy &gt;</span>
                    </div>
                </div>
                <div className="w-full max-w-75 sm:max-w-125 md:max-w-200 lg:max-w-250 mt-6 md:mt-2 px-0 flex justify-center items-end">
                    <img src={watch} alt="" className="w-full h-auto object-contain block mx-auto"/>
                </div>
            </div>
    </div>
  )
}

export default Watch