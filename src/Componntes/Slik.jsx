import React from 'react'
import Container from './Container'
import rto from "../assets/rto.png"
import mansur0 from "../assets/mansur0.png"
import mansur1 from "../assets/mansur1.png"
import mansur2 from "../assets/mansur2.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Slik = () => {
    return (
        <div className="bg-[#000000] py-16 w-full overflow-hidden">
            <div className="w-full mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    loopAdditionalSlides={2}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 1.5,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 1.62,
                            spaceBetween: 32,
                        }
                    }}
                    className="apple-swiper w-full pb-12"
                >
                    <SwiperSlide className="h-auto aspect-video">
                        <img src={rto} alt="Slide 1" className='w-full h-full object-cover rounded-2xl md:rounded-3xl block shadow-2xl' />
                    </SwiperSlide>
                    
                    <SwiperSlide className="h-auto aspect-video">
                        <img src={mansur0} alt="Slide 2" className='w-full h-full object-cover rounded-2xl md:rounded-3xl block shadow-2xl' />
                    </SwiperSlide>
                    
                    <SwiperSlide className="h-auto aspect-video">
                        <img src={mansur1} alt="Slide 3" className='w-full h-full object-cover rounded-2xl md:rounded-3xl block shadow-2xl' />
                    </SwiperSlide>

                    <SwiperSlide className="h-auto aspect-video">
                        <img src={mansur2} alt="Slide 4" className='w-full h-full object-cover rounded-2xl md:rounded-3xl block shadow-2xl' />
                    </SwiperSlide>

                    <SwiperSlide className="h-auto aspect-video">
                        <img src={mansur0} alt="Slide 5" className='w-full h-full object-cover rounded-2xl md:rounded-3xl block shadow-2xl' />
                    </SwiperSlide>

                    <SwiperSlide className="h-auto aspect-video">
                        <img src={mansur2} alt="Slide 6" className='w-full h-full object-cover rounded-2xl md:rounded-3xl block shadow-2xl' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Slik