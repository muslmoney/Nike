import React, { useRef, useState } from "react";
// import { Pagination, Navigation } from 'swiper/modules';
import './components.css'

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../assets/Latest/image1.jpg'
import img2 from '../assets/Latest/image2.png'
import img3 from '../assets/Latest/image3.jpg'
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';


import "swiper/css";
import ProductCard from "./ProductCard";



export default function App() {
  return (
    <div>

      <Swiper
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}

        // , Pagination, Navigation
        modules={[Scrollbar]}
        watchSlidesP rogress={true}
        slidesPerView={3.13}
        className="Swiper"
        spaceBetween={10}>





        <SwiperSlide><ProductCard className='Product22' ImgSrc={img1} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product22' ImgSrc={img3} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product22' ImgSrc={img2} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product22' ImgSrc={img1} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product22' ImgSrc={img3} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product22' ImgSrc={img2} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product22' ImgSrc={img1} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product22' ImgSrc={img3} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product22' ImgSrc={img2} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product22' ImgSrc={img1} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product22' ImgSrc={img3} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product22' ImgSrc={img2} title={'Nu kakoyto product'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
      </Swiper>
    </div>
  );
}