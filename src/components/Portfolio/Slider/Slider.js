import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';
import "./styles.css";
import Covid from '../../../images/covid.png'
import Abstract from '../../../images/abstract.png'
import Comfy from '../../../images/comfy_colors.png'
import First from '../../../images/first_design.png'
import Furniture from '../../../images/furniture.png'
import Some from '../../../images/some.png'

SwiperCore.use([EffectCoverflow,Pagination]);


export default function App() { 

  return (
    <>
    <h2 className='ui-title'>
      UI Designs
    </h2>
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 0,
  "stretch": 0,
  "depth": 130,
  "modifier": 5,
  "slideShadows": true,
  "loop":true,
}}>
  
  <SwiperSlide><img src={Comfy} alt='Comfy Colors'/></SwiperSlide>
  <SwiperSlide><img src={Abstract} alt='Abstract Design'/></SwiperSlide>
  <SwiperSlide><img src={Covid} alt='Platform Campaign Design'/></SwiperSlide>
  <SwiperSlide><img src={Furniture} alt='Product Theme Design'/></SwiperSlide>
  <SwiperSlide><img src={First} alt='First Design'/></SwiperSlide>
  <SwiperSlide><img src={Some} alt='Some by Mi'/></SwiperSlide>
  </Swiper>
    </>
  )
}
