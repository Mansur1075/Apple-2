import React from 'react'
import ipad2 from "../assets/ipad2.png"
import ipad1 from "../assets/ipad1.png"
const IPad = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white font-sans">

        <div className="h-125 md:h-145 w-full relative overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 px-4">

          <img
            src={ipad2}
            alt="iPad Background"
            className="absolute inset-0 w-full h-full object-cover z-0 hover:scale-105 ease-in-out duration-300 "
          />
          <div className="text-center z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">iPad</h2>
            <p className="text-base md:text-lg mt-1 text-[#1d1d1f]">Lovable. Drawable. Magical.</p>
            <div className="flex gap-4 justify-center mt-2 text-sm md:text-base text-[#0066cc]">
              <span className="cursor-pointer hover:underline">Learn more &gt;</span>
              <span className="cursor-pointer hover:underline">Buy &gt;</span>
            </div>
          </div>
        </div>
        <div className="h-125 md:h-145 w-full relative overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 px-4">
          <img
            src={ipad1}
            alt="MacBook Background"
            className="absolute inset-0 w-full h-full object-cover z-0 hover:scale-105 ease-in-out duration-300"
          />
          <div className="text-center z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">MacBook Pro</h2>
            <p className="text-base md:text-lg mt-1 text-[#86868b]">Supercharged by M2 Pro and M2 Max.</p>
            <div className="flex gap-4 justify-center mt-2 text-sm md:text-base text-[#2997ff]">
              <span className="cursor-pointer hover:underline">Learn more &gt;</span>
              <span className="cursor-pointer hover:underline">Buy &gt;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IPad