import React, { useRef, useState } from "react";
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";
import Jordan from '../assets/ProductsImages/Jordan.jpg'
import Dunk from '../assets/ProductsImages/Dunk.jpg'
import AirForce from '../assets/ProductsImages/AirForce.jpg'
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';


// Import Swiper styles
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
        scrollbar={{
          hide: true,
        }}
        // , Pagination, Navigation
        modules={[Scrollbar]}
        watchSlidesProgress={true}
        slidesPerView={3.13}
        className="Swiper"
        spaceBetween={10}>





        <SwiperSlide><ProductCard className='Product__card' ImgSrc={Jordan} title={'Jordan'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product__card' ImgSrc={Dunk} title={'Dunk'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product__card' ImgSrc={AirForce} title={'AirForce'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product__card' ImgSrc={Jordan} title={'AirForce'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product__card' ImgSrc={Dunk} title={'AirForce'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product__card' ImgSrc={AirForce} title={'AirForce'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product__card' ImgSrc={Jordan} title={'AirForce'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product__card' ImgSrc={Dunk} title={'AirForce'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product__card' ImgSrc={AirForce} title={'AirForce'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product__card' ImgSrc={Jordan} title={'AirForce'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product__card' ImgSrc={Dunk} title={'AirForce'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
        <SwiperSlide><ProductCard className='Product__card' ImgSrc={AirForce} title={'AirForce'} link={'./products'} ImgTitle={'product'} /></SwiperSlide>
      </Swiper>
    </div>
  );
}
