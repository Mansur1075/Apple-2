import React from 'react'
import figure from "../assets/figure.png"

const Iphone2000 = () => {
    return (
        <div
            className="relative w-full h-187 bg-black text-white flex flex-col hover:scale-100 items-center justify-start pt-16 text-center bg-contain bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${figure})` }}
        >
            <div className="relative z-10 flex flex-col items-center pt-20">
                <div className="flex items-center gap-4 mt-3">
                    <button className="bg-[#0071e3] text-white text-[12px] font-medium px-3.5 py-1 rounded-full hover:bg-blue-600 transition duration-200">
                        Buy
                    </button>

                    <a href="#" className="text-[#2997ff] hover:underline text-[12px] font-medium">
                        Learn more &gt;
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Iphone2000