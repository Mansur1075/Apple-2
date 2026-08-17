import React from 'react'

const Introducing = () => {
    return (
        <div className="bg-black text-white flex flex-col items-center justify-center min-h-100 w-full px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-helvetica tracking-tight leading-tight max-w-4xl">
                Introducing the new <br className="hidden sm:inline" />
                MacBook Pro and Mac mini.
            </h1>

            <a
                href="#"
                className="mt-6 inline-block bg-white text-black text-sm md:text-base font-helvetica font-medium px-5 py-2.5 rounded-full hover:bg-neutral-200 transition duration-200"
            >
                Watch the announcement
            </a>
        </div>

        
    )
}

export default Introducing