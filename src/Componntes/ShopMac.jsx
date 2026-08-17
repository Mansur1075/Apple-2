import React from 'react'
import sabbir from '../assets/sabbir.png'

const ShopMac = () => {
  return (
    <div className="w-full space-y-6 md:space-y-8 font-helvetica px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-360 h-75 sm:h-112.5 md:h-150 bg-black mx-auto rounded-2xl md:rounded-3xl overflow-hidden relative flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&w=1600&q=80" 
          alt="Skywalker Sound Studio" 
          className="w-full h-full object-cover opacity-90 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/40" />
      </div>

      <div className="w-full max-w-360 min-h-125 md:h-150 bg-[#f5f5f7] mx-auto rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-10 md:py-12 gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight tracking-tight mb-4">
            Get 3% Daily Cash back with Apple Card.
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 max-w-lg mx-auto md:mx-0">
            And pay for your new Mac over 12 months, interest-free when you choose to check out with Apple Card Monthly Installments.*
          </p>

          <a 
            href="#" 
            className="text-[#0071e3] text-sm sm:text-base hover:underline inline-flex items-center gap-1 font-medium"
          >
            Learn more <span className="text-xs">&gt;</span>
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img 
            src={sabbir} 
            alt="Apple Card and iPhone" 
            className="w-full max-w-[320px] sm:max-w-112.5 md:max-w-137.5 object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default ShopMac