import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './components.css';
import ProductsData from '../data/api.json';
import ProductCard from './ProductCard';
import { ProductCardClass } from './ProductCard';
import { Navigation } from 'swiper/modules';

const Swiper2 = () => {
  const { id } = useParams();
  const products = ProductsData.sneakers;

  const requiredIds = [7, 8, 9, 10, 11, 12 ];


  const filteredProducts = products.filter((product) =>
    requiredIds.includes(parseInt(product.id))
  );


  return (
    <div className="Classic-swiper">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        className="Swiper" 
        centeredSlides = {true}
        loop={true}             
        observer
        lazy={true} 
        initialSlide={0}           
        modules={[Navigation]}   
        breakpoints={{
          640: { slidesPerView: 2 }, 
          768: { slidesPerView: 3 }, 
          1024: { slidesPerView: 4 } 
        }} 
        effect={window.innerWidth > 640 ? 'coverflow' : 'slide'} 
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {filteredProducts.map((item) => (
         <SwiperSlide key={item.id}>
         <ProductCardClass
           link={`/product/${item.id}`}
           key={item.id}
           title={item.brand_name}
           className={'ProductCardClass'}
           ImgSrc={
             item.grid_picture_url.startsWith('http')
               ? item.grid_picture_url
               : item.grid_picture_url
           }
           onClick={() => handleProductClick(item.id)}
         />
       </SwiperSlide>
       
        ))}
      </Swiper>
    </div>
  );
};


export default Swiper2;
