import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import 'swiper/css';
import './Carrousel.css';
import portada1 from './../../imagenes/assets/PORTADAS/portada1.jpg';
import portada2 from './../../imagenes/assets/PORTADAS/portada2.jpg';
import portada3 from './../../imagenes/assets/PORTADAS/portada3.jpg';

const Carrousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
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