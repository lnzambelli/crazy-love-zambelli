import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Carrousel.css';

const Carrousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className='imgCarrousel' src='assets/home1.jpeg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img className='imgCarrousel' src='assets/home2.jpeg'/>
        </SwiperSlide>
    </Swiper>
  )
}

export default Carrousel