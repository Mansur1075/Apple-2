import React from 'react'
import box2 from "../assets/box2.png"
import box from "../assets/box.png"

const Ipad2 = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white font-sans">

            <div className="h-125 md:h-145 w-full relative overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 px-4 group">
                <img
                    src={box}
                    alt="HomePod"
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-all ease-in-out duration-700 group-hover:scale-110 group-hover:brightness-90"
                />
                <span className="absolute inset-0 z-0 m-auto aspect-square rounded-full border border-white opacity-0 transition-all ease-in-out duration-1000 group-hover:scale-150 group-hover:opacity-100 pointer-events-none"></span>

                <div className="text-center z-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">HomePod</h2>
                    <p className="text-base md:text-lg mt-1 text-white opacity-90">Sound</p>
                    <div className="flex gap-4 justify-center mt-3 text-sm md:text-base text-[#0066cc] font-medium">
                        <span className="cursor-pointer hover:underline hover:text-[#2997ff] transition-colors duration-300">Learn more &gt;</span>
                        <span className="cursor-pointer hover:underline hover:text-[#2997ff] transition-colors duration-300">Buy &gt;</span>
                    </div>
                </div>
            </div>


            <div className="h-125 md:h-145 w-full relative overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 px-4 group">
                <img
                    src={box2}
                    alt="MacBook Background"
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-all ease-in-out duration-700 group-hover:scale-105 group-hover:blur-[2px] group-hover:brightness-75"
                />
                <span className="absolute inset-0 z-0 bg-radial from-white/20 to-transparent opacity-0 transition-opacity ease-in-out duration-700 group-hover:opacity-100 pointer-events-none"></span>

                <div className="text-center z-10 transition-transform ease-in-out duration-500 group-hover:scale-102">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">AirPods Pro</h2>
                    <p className="text-base md:text-lg mt-1 text-white/90">Up to 2x more Active Noise Cancellation.</p>
                    <div className="flex gap-4 justify-center mt-3 text-sm md:text-base text-[#2997ff] font-medium">
                        <span className="cursor-pointer hover:underline transition-colors duration-300">Learn more &gt;</span>
                        <span className="cursor-pointer hover:underline transition-colors duration-300">Buy &gt;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ipad2