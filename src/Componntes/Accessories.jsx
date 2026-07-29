import React, { useContext } from 'react'
import { ApiData } from './ContextApi'

const Accessories = () => {

    let data = useContext(ApiData)
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Accessories. <span className="text-slate-500 font-normal">Essentials that pair perfectly with your favorite devices.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-3xl p-8 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-120 group">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-900">
              In with the new.
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Discover fresh new colors for your favorite accessories.
            </p>
          </div>
          <img 
           src={data[17]?.thumbnail || ipad2}
            alt="Accessories Showcase" 
            className="absolute bottom-0 left-0 w-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-120 group">
          <div className="flex-1 flex items-center justify-center p-4">
            <img 
              src={data[28]?.thumbnail || ipad2}
              alt="iPhone Case" 
              className="object-contain max-h-60 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-blue-200 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-purple-300 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-stone-300 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-200 inline-block"></span>
              <span className="text-xs text-slate-400 font-medium">+</span>
            </div>
            <span className="text-xs font-semibold text-orange-600">New</span>
            <h3 className="text-base font-semibold text-slate-900 mt-1 leading-snug line-clamp-2">
              iPhone 14 Silicone Case with MagSafe - Canary Yellow
            </h3>
            <p className="text-sm text-slate-700 mt-4">$49.00</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-120 group">
          <div className="flex-1 flex items-center justify-center p-4">
            <img 
              src={data[21]?.thumbnail || ipad2}
              alt="Leather Case" 
              className="object-contain max-h-60 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-3 h-3 rounded-full bg-amber-900 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-slate-700 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-slate-900 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
            </div>
            <h3 className="text-base font-semibold text-slate-900 mt-1 leading-snug line-clamp-2">
              iPhone 14 Pro Leather Case with MagSafe - Ink
            </h3>
            <p className="text-sm text-slate-700 mt-4">$59.00</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-120 group">
          <div className="flex-1 flex items-center justify-center p-4">
            <img 
              src={data[19]?.thumbnail || ipad2}
              alt="Watch Band" 
              className="object-contain max-h-60 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-3 h-3 rounded-full bg-slate-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-800 inline-block"></span>
            </div>
            <span className="text-xs font-semibold text-orange-600">New</span>
            <h3 className="text-base font-semibold text-slate-900 mt-1 leading-snug line-clamp-2">
              45mm Bright Crimson Sport Band - M/L
            </h3>
            <p className="text-sm text-slate-700 mt-4">$49.00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accessories