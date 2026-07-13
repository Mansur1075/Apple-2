import React from 'react'
import ttt from "../assets/ttt.png"
import RRR from "../assets/RRR.png"

const Fitness = () => {
  return (
       <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white font-sans">
   
               <div className="h-125 md:h-145 w-full relative overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 px-4">
   
                   <img
                       src={RRR}
                       alt="iPad Background"
                       className="absolute inset-0 w-full h-full object-cover z-0"
                   />
                   <div className="text-center z-10">
                       <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">HomePod</h2>
                       <p className="text-base md:text-lg mt-1 text-black">sound</p>
                       <div className="flex gap-4 justify-center mt-2 text-sm md:text-base text-[#0066cc]">
                           <span className="cursor-pointer hover:underline">Learn more &gt;</span>
                           <span className="cursor-pointer hover:underline">Buy &gt;</span>
                       </div>
                   </div>
               </div>
               <div className="h-125 md:h-145 w-full relative overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 px-4">
                   <img
                       src={ttt}
                       alt="MacBook Background"
                       className="absolute inset-0 w-full h-full object-cover z-0"
                   />
                   <div className="text-center z-10">
                       <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">AirPods Pro</h2>
                       <p className="text-base md:text-lg mt-1 text-black">Up to 2x more Active Noise Cancellation.</p>
                       <div className="flex gap-4 justify-center mt-2 text-sm md:text-base text-blue-400">
                           <span className="cursor-pointer hover:underline">Learn more &gt;</span>
                           <span className="cursor-pointer hover:underline">Buy &gt;</span>
                       </div>
                                           
                   </div>
               </div>
           </div>
  )
}

export default Fitness