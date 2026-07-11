import React from 'react'
import Container from './Container'

const Navbar = () => {
  return (
    <div>
  <Container>
    <div className="flex flex-col md:flex-row justify-center text-center gap-4 md:gap-12 items-center p-2 md:p-0">
      <h3 className='font-helvetica text-sm md:text-base text-[10px]'>
        Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.1
      </h3>
      <h4 className='text-[#0066CC] font-helvetica p-0 whitespace-nowrap cursor-pointer hover:underline text-sm md:text-base'>
        Shop iPhone
      </h4>
    </div>
  </Container>
</div>
  )
}

export default Navbar