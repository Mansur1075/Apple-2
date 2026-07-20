import React from 'react'
import ttt from "../assets/ttt.png"
import RRR from "../assets/RRR.png"

const Fitness = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white font-sans">

            <div className="h-125 md:h-145 w-full relative overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 px-4 group cursor-pointer">
                <img
                    src={RRR}
                    alt="HomePod"
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform ease-in-out duration-1000 group-hover:scale-110"
                />
                <span className="absolute inset-0 z-0 m-auto aspect-square rounded-full bg-white opacity-0 transition-all ease-in-out duration-1000 group-hover:scale-125 group-hover:opacity-40 blur-xl pointer-events-none"></span>

                <div className="text-center z-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black transition-all duration-700 group-hover:tracking-wider">HomePod</h2>
                    <p className="text-base md:text-lg mt-1 text-black/80 font-medium transition-transform duration-700 group-hover:translate-y-1">sound</p>
                    <div className="flex gap-4 justify-center mt-4 text-sm md:text-base text-[#0066cc] font-semibold">
                        <span className="cursor-pointer hover:underline transition-colors duration-300">Learn more &gt;</span>
                        <span className="cursor-pointer hover:underline transition-colors duration-300">Buy &gt;</span>
                    </div>
                </div>
            </div>


            <div className="h-125 md:h-145 w-full relative overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 px-4 group cursor-pointer bg-white">

                <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity ease-in-out duration-700 group-hover:opacity-100 z-0"></div>

                <img
                    src={ttt}
                    alt="AirPods Pro Background"
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-all ease-in-out duration-1000 group-hover:scale-102 group-hover:-translate-y-2 group-hover:translate-x-1 group-hover:contrast-[1.08] group-hover:brightness-[1.02]"
                />
                <div className="text-center z-10 transition-transform ease-in-out duration-1000 group-hover:translate-y-1">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black transition-all duration-700 group-hover:text-black/90">AirPods Pro</h2>
                    <p className="text-base md:text-lg mt-1 text-black/80 font-medium max-w-70 md:max-w-none">Up to 2x more Active Noise Cancellation.</p>
                    <div className="flex gap-4 justify-center mt-3 text-sm md:text-base text-[#0066cc] font-semibold">
                        <span className="cursor-pointer hover:underline">Learn more &gt;</span>
                        <span className="cursor-pointer hover:underline">Buy &gt;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fitness