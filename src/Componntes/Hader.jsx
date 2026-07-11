import React, { useState } from 'react'
import Container from './Container'
import { FaApple } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";






const Hader = () => {

    let [Manu , setManu] = useState(false)

    return (

        <>
            <section className='bg-[#161617CC]'>
                <Container>
                    <div className="">
                        <div className="">
                            <ul className=' lg:flex items-center justify-center gap-10 text-white'>
                                <li className=' text-2xl'><FaApple /></li>
                                <li>Store</li>
                                <li>Mac</li>
                                <li>ipade</li>
                                <li>iphone</li>
                                <li>Watch</li>
                                <li>AirPods</li>
                                <li>TV & Home</li>
                                <li>Entertainment</li>
                                <li>Accessories</li>
                                <li>Support</li>
                                <li className=' text-2xl'><IoIosSearch /></li>
                                <li className=' text-2xl'><FaShopify /></li>
                            </ul>
                        </div>
                        <div className=" lg:hidden mt-5" onClick={()=>setManu(!Manu)} >
                            {Manu ? <FaBars />:<RxCross1 />}                               
                        </div>

                    </div>
                </Container>
            </section>
        </>

    )

}



export default Hader