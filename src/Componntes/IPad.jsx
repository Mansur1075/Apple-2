import React from 'react'
import ipad2 from "../assets/ipad2.png"
import ipad1 from "../assets/ipad1.png"

const IPad = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white font-sans">
        
        {/* iPad Section */}
        <div className="bg-[#FFFFFF] text-black flex flex-col items-center pt-12 pb-6 px-4 justify-between min-h-[500px]">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">iPad</h2>
            <p className="text-base md:text-lg mt-1 text-[#1d1d1f]">Lovable. Drawable. Magical.</p>
            <div className="flex gap-4 justify-center mt-2 text-sm md:text-base text-[#0066cc]">
              <span className="cursor-pointer hover:underline">Learn more &gt;</span>
              <span className="cursor-pointer hover:underline">Buy &gt;</span>
            </div>
          </div>
          <div className="w-full max-w-[340px] mt-6">
            <img src={ipad2} alt="" className="w-full h-auto object-contain mx-auto" />
          </div>
        </div>


        <div className="bg-[#000000] text-white flex flex-col items-center pt-12 pb-6 px-4 justify-between min-h-[500px]">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">MacBook Pro</h2>
            <p className="text-base md:text-lg mt-1 text-[#86868b]">Supercharged by M2 Pro and M2 Max.</p>
            <div className="flex gap-4 justify-center mt-2 text-sm md:text-base text-[#2997ff]">
              <span className="cursor-pointer hover:underline">Learn more &gt;</span>
              <span className="cursor-pointer hover:underline">Buy &gt;</span>
            </div>
          </div>
          <div className="w-full max-w-[420px] mt-6">
            <img src={ipad1} alt="" className="w-full h-auto object-contain mx-auto" />
          </div>
        </div>

      </div>
    </>
  )
}

export default IPad