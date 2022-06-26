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
        <img className='imgCarrousel' src='home1.jpg'/>
      </SwiperSlide>
      <SwiperSlide><img className='imgCarrousel' src='home1.jpg'/></SwiperSlide>
    </Swiper>
  )
}

export default Carrousel