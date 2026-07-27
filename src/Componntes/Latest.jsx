import React, { useContext } from 'react'
import { ApiData } from './ContextApi'

const Latest = () => {
    let data = useContext(ApiData)
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                The latest. <span className="text-slate-500 font-normal">Take a look at what’s new, right now.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-125 rounded-3xl bg-slate-100 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
                <div className="z-10">
                    <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">IPHONE 14</span>
                    <h3 className="text-3xl font-bold text-slate-900 mt-2">Wonderfull.</h3>
                    <p className="text-sm font-medium text-slate-600 mt-3">From $799.00 or $33.29/mo. for 24 mo.</p>
                </div>
                <div className="relative w-full h-64 mt-4 flex items-center justify-center">
                    <img
                        src={data[15]?.thumbnail || "https://via.placeholder.com/400x300"}
                        alt="iPad Background"
                        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform ease-in-out duration-700 group-hover:scale-110"
                    />
                </div>
            </div>

            <div className="h-125 rounded-3xl bg-black p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
                <div className="z-10">
                    <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">MACBOOK PRO 14" AND 16"</span>
                    <h3 className="text-3xl font-bold text-white mt-2">Mover. Maker. Boundary breaker.</h3>
                    <p className="text-sm font-medium text-slate-300 mt-3">From $1999 or $166.58/mo. for 12 mo.</p>
                </div>
                <div className="relative w-full h-64 mt-4 flex items-center justify-center">
                    <img
                        src={data[11]?.thumbnail || "https://via.placeholder.com/400x300"}
                        alt="iPad Background"
                        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform ease-in-out duration-700 group-hover:scale-110"
                    />
                </div>
            </div>

            <div className="h-125 rounded-3xl bg-black p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
                <div className="z-10">
                    <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">APPLE WATCH SERIES 8</span>
                    <h3 className="text-3xl font-bold text-white mt-2">A healthy leap ahead.</h3>
                    <p className="text-sm font-medium text-slate-300 mt-3">From $399 or $16.62/mo. for 24 mo.</p>
                </div>
                <div className="relative w-full h-64 mt-4 flex items-center justify-center">
                    <img
                        src={data[22]?.thumbnail || "https://via.placeholder.com/400x300"}
                        alt="iPad Background"
                        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform ease-in-out duration-700 group-hover:scale-110"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Latest