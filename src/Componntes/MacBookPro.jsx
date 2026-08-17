import React from 'react'
import ipad1 from "../assets/ipad1.png"

const IPadSection = () => {
  return (
    <div 
      className="relative w-full h-100.25 sm:h-112.5 md:h-125 lg:h-100.25 bg-black text-white flex flex-col items-center justify-start pt-6 sm:pt-8 text-center bg-contain sm:bg-cover lg:bg-contain bg-bottom sm:bg-center bg-no-repeat overflow-hidden my-3"
      style={{ backgroundImage: `url(${ipad1})` }}
    >
      <div className="relative z-10 flex flex-col items-center px-4">
        <span className="text-[#f56300] text-[10px] sm:text-[12px] font-semibold tracking-wide mb-0.5">
          New
        </span>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight leading-tight">
          MacBook Pro
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal mt-0.5 sm:mt-1">
          Mover. Maker. Boundary breaker.
        </p>

        <p className="text-[11px] sm:text-[12px] text-gray-400 mt-1 sm:mt-2">
          From $1999
        </p>

        <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-3">
          <button className="bg-[#0071e3] text-white text-[11px] sm:text-[12px] font-medium px-3 sm:px-3.5 py-1 rounded-full hover:bg-blue-600 transition duration-200">
            Buy
          </button>
          
          <a href="#" className="text-[#2997ff] hover:underline text-[11px] sm:text-[12px] font-medium">
            Learn more &gt;
          </a>
        </div>
      </div>
    </div>
  )
}

export default IPadSection