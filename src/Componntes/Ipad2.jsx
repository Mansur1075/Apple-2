import React from 'react'
import box2 from "../assets/box2.png"
import box from "../assets/box.png"

const Ipad2 = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white font-sans">

            <div className="h-125 md:h-145 w-full relative overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 px-4">

                <img
                    src={box}
                    alt="iPad Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="text-center z-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">HomePod</h2>
                    <p className="text-base md:text-lg mt-1 text-white">sound</p>
                    <div className="flex gap-4 justify-center mt-2 text-sm md:text-base text-[#0066cc]">
                        <span className="cursor-pointer hover:underline">Learn more &gt;</span>
                        <span className="cursor-pointer hover:underline">Buy &gt;</span>
                    </div>
                </div>
            </div>
            <div className="h-125 md:h-145 w-full relative overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 px-4">
                <img
                    src={box2}
                    alt="MacBook Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="text-center z-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">AirPods Pro</h2>
                    <p className="text-base md:text-lg mt-1 text-white">Up to 2x more Active Noise Cancellation.</p>
                    <div className="flex gap-4 justify-center mt-2 text-sm md:text-base text-white">
                        <span className="cursor-pointer hover:underline">Learn more &gt;</span>
                        <span className="cursor-pointer hover:underline">Buy &gt;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ipad2