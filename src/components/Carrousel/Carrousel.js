import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Carrousel.css';
import portada1 from './../../imagenes/assets/PORTADAS/portada1.jpg';
import portada2 from './../../imagenes/assets/PORTADAS/portada1.jpg';
import portada3 from './../../imagenes/assets/PORTADAS/portada1.jpg';

const Carrousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img className='imgCarrousel' src={portada1}/>
      </SwiperSlide>
      <SwiperSlide>
        <img className='imgCarrousel' src={portada2}/>
      </SwiperSlide>
      <SwiperSlide>
        <img className='imgCarrousel' src={portada3}/>
      </SwiperSlide>
    </Swiper>
  )
}

export default Carrousel