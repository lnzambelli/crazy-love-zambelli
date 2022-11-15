import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Carrousel.css';

const Carrousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img className='imgCarrousel' src='assets/portadas/portada1.jpg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img className='imgCarrousel' src='assets/portadas/portada2.jpg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img className='imgCarrousel' src='assets/portadas/portada3.jpg'/>
      </SwiperSlide>
    </Swiper>
  )
}

export default Carrousel