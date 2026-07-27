import React, { useContext } from 'react'
import vs from "../assets/vs.png"
import { ApiData } from './ContextApi'
import ipad2 from '../assets/ipad2.png'

const Help = () => {
    let data = useContext(ApiData)
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Help <span className="text-slate-900">is here.</span> <span className="text-slate-500 font-normal">Whenever and however you need it.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-8 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden min-h-120">
                    <div>
                        <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">APPLE SPECIALIST</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 max-w-sm">
                            Shop one on one with a Specialist. Online or in a store.
                        </h3>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <img
                            src={data[11]?.thumbnail || ipad2}
                            alt="Apple Specialist"
                            className="object-contain max-h-75"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-60 relative overflow-hidden group">
                        <h3 className="text-[10px] md:text-2xl font-bold text-slate-900 max-w-90 leading-snug relative z-10">
                            Get to know your new device with a free Personal Session.
                        </h3>
                        <img
                            src={vs}
                            alt="App icons"
                            className="absolute bottom-0 left-0 w-full object-cover object-bottom z-0 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="bg-[linear-gradient(135deg,#E8F1FF_0%,#F8F0FE_50%,#FFF0F5_100%)] rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md lg:mt-[38px] transition-shadow flex items-center justify-between h-[240px]">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 max-w-xs leading-snug">
                            Get expert service and support at the Genius Bar.
                        </h3>
                        <div className="text-[#0066CC] p-4">
                            <svg className="w-16 h-16 stroke-current fill-none stroke-[1.5] animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="3" />
                                <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(0 12 12)" />
                                <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
                                <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Help