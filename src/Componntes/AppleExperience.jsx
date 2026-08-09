import React from 'react';

const AppleExperience = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans bg-white">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
          <span className="font-bold">The Apple experience.</span>{' '}
          <span className="text-gray-500">Do even more with Apple products and services.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer bg-black">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
            alt="Spatial Audio"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-between p-8">
            <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
              APPLE MUSIC
            </span>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white">
              Rihanna's iconic hits now in Spatial Audio.^
            </h3>
          </div>
        </div>

        <div className="h-[450px] bg-[#f5f5f7] rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              APPLE TV+ & SERVICES
            </span>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mt-2">
              Six Apple services. One easy subscription.
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-4 my-auto">
            <div className="bg-red-500 h-16 w-16 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md mx-auto hover:scale-105 transition-transform">
              🎵
            </div>
            <div className="bg-black h-16 w-16 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md mx-auto hover:scale-105 transition-transform">
              📺
            </div>
            <div className="bg-red-600 h-16 w-16 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md mx-auto hover:scale-105 transition-transform">
              🕹️
            </div>
            <div className="bg-red-400 h-16 w-16 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md mx-auto hover:scale-105 transition-transform">
              📰
            </div>
            <div className="bg-lime-500 h-16 w-16 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md mx-auto hover:scale-105 transition-transform">
              🏃
            </div>
            <div className="bg-blue-400 h-16 w-16 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md mx-auto hover:scale-105 transition-transform">
              ☁️
            </div>
          </div>
        </div>

        <div className="h-[450px] bg-[#f5f5f7] rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
          <div>
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              APPLECARE+
            </span>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mt-2">
              We've got you covered.
            </h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              AppleCare+ now comes with unlimited repairs for accidental damage protection.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl mt-4">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
              alt="MacBook AppleCare"
              className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>

















  );
};

export default AppleExperience;