import React, { useContext } from 'react'
import { ApiData } from './ContextApi'
import ipad2 from '../assets/ipad2.png'


const Audio = () => {

    let data = useContext(ApiData)
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Loud and clear. <span className="text-slate-500 font-normal">Unparalleled choices for rich, high-quality sound.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-3xl p-8 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-125 group">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Get 6 months of Apple Music free.
                        </h3>
                        <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                            Included with your HomePod, AirPods, or select Beats product.*
                        </p>
                    </div>
                    <img
                        src={data[5]?.thumbnail || ipad2}
                        alt="Audio Devices Bundle"
                        className="absolute bottom-0 left-0 w-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="bg-white rounded-3xl p-6 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-125 group">
                    <div className="flex-1 flex items-center justify-center p-4">
                        <img
                            src={data[2]?.thumbnail || ipad2}
                            alt="HomePod - Midnight"
                            className="object-contain max-h-65 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-1.5 mb-3">
                            <span className="w-3 h-3 rounded-full bg-slate-900 inline-block"></span>
                            <span className="w-3 h-3 rounded-full bg-slate-200 inline-block"></span>
                        </div>
                        <span className="text-xs font-semibold text-orange-600">New</span>
                        <h3 className="text-base font-semibold text-slate-900 mt-1 leading-snug">
                            HomePod - Midnight
                        </h3>
                        <p className="text-sm text-slate-700 mt-4">$299.00</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-125 group">
                    <div className="flex-1 flex items-center justify-center p-4">
                        <img
                            src={data[3]?.thumbnail || ipad2}
                            alt="AirPods Pro (2nd generation)"
                            className="object-contain max-h-65 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div>
                        <span className="text-xs font-semibold text-orange-600">New</span>
                        <h3 className="text-base font-semibold text-slate-900 mt-1 leading-snug">
                            AirPods Pro (2nd generation)
                        </h3>
                        <p className="text-sm text-slate-700 mt-4">$249.00</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-125 group">
                    <div className="flex-1 flex items-center justify-center p-4">
                        <img
                            src={data[4]?.thumbnail || ipad2}
                            alt="HomePod mini - Yellow"
                            className="object-contain max-h-65 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-1.5 mb-3">
                            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                            <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
                            <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
                            <span className="w-3 h-3 rounded-full bg-slate-800 inline-block"></span>
                            <span className="w-3 h-3 rounded-full bg-slate-200 inline-block"></span>
                        </div>
                        <h3 className="text-base font-semibold text-slate-900 mt-1 leading-snug">
                            HomePod mini - Yellow
                        </h3>
                        <p className="text-sm text-slate-700 mt-4">$99.00</p>
                    </div>
                </div>
            </div>





            
        </section>
    )
}

export default Audio