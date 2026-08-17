import React, { useContext, useState } from 'react'
import { ApiData } from './ContextApi'

const Which100 = () => {
  const data = useContext(ApiData)
  const [activeTab, setActiveTab] = useState('laptop')

  const handleLaptopClick = () => {
    setActiveTab('laptop')
  }

  const handleDesktopClick = () => {
    setActiveTab('desktop')
  }

  const productsList = Array.isArray(data) ? data : data?.products || []

  const laptopProducts = productsList.slice(0, 4)
  const desktopProducts = productsList.slice(4, 8)

  const currentProducts = activeTab === 'laptop' ? laptopProducts : desktopProducts

  return (
    <div className="w-full bg-[#fafafa] text-gray-900 py-16 px-4 font-helvetica">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6 tracking-tight">
        Which Mac is right for you?
      </h2>

      <div className="flex justify-center mb-16">
        <div className="inline-flex border-b border-gray-300 gap-10 text-xs font-medium">
          <button 
            onClick={handleLaptopClick}
            className={`pb-2 transition ${
              activeTab === 'laptop' 
                ? 'border-b-2 border-black text-black font-semibold' 
                : 'text-gray-400 hover:text-black'
            }`}
          >
            Laptop
          </button>
          <button 
            onClick={handleDesktopClick}
            className={`pb-2 transition ${
              activeTab === 'desktop' 
                ? 'border-b-2 border-black text-black font-semibold' 
                : 'text-gray-400 hover:text-black'
            }`}
          >
            Desktop
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentProducts.map((item, index) => {
          const imageUrl = item.thumbnail || (item.images && item.images[0]) || item.img || item.image

          return (
            <div key={item.id || index} className="flex flex-col items-center text-center">
              
              <div className="h-40 flex items-center justify-center mb-3">
                <img 
                  src={imageUrl} 
                  alt={item.title || item.name} 
                  className="max-h-36 object-contain" 
                />
              </div>

              <div className="flex gap-1.5 mb-4 h-3 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b2b5b8]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#e3d0bf]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#7d7e80]" />
              </div>

              <h3 className="text-xl font-semibold">{item.title || item.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{item.brand || item.category || 'M1 chip'}</p>
              <p className="text-xs text-gray-600 mt-3">${item.price}</p>

              <div className="flex flex-col gap-2 my-4 border-b border-gray-200 pb-8 w-full">
                <button className="bg-[#0071e3] text-white text-xs px-3.5 py-1 rounded-full hover:bg-blue-600 transition w-fit mx-auto">
                  Buy
                </button>
                <a href="#" className="text-[#2997ff] text-xs hover:underline mt-1">
                  Learn more
                </a>
              </div>

              <div className="flex flex-col gap-8 text-xs text-gray-800 w-full pt-4">
                <div>
                  <p className="text-lg font-semibold">{activeTab === 'laptop' ? '13.3"' : '-'}</p>
                  <p className="text-[11px] text-gray-500">
                    {activeTab === 'laptop' ? 'Retina display¹' : 'Connect to a display'}
                  </p>
                </div>
                <div>
                  <div className="w-7 h-7 bg-black text-white rounded-md mx-auto mb-1.5 flex items-center justify-center font-bold text-[9px]">
                    M1
                  </div>
                  <p className="text-[11px] text-gray-500">Apple Chip</p>
                </div>
                <div>
                  <p className="text-base font-semibold">8-core</p>
                  <p className="text-[11px] text-gray-500">CPU</p>
                </div>
                <div>
                  <p className="text-base font-semibold">7-core</p>
                  <p className="text-[11px] text-gray-500">GPU</p>
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Which100