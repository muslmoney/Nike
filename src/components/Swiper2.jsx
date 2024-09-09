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

  const requiredIds = [7, 8, 9, 10, 11, ];


  const filteredProducts = products.filter((product) =>
    requiredIds.includes(parseInt(product.id))
  );


  return (
    <div className="Classic-swiper">
      <Swiper
        slidesPerView={3.9}
        spaceBetween={20}
        className="Swiper" 
        centeredSlides = {true}
        loop={true}                // Зацикливание слайдов
        initialSlide={3}           // Начинаем с третьего слайда
        modules={[Navigation]}     // Подключаем модуль навигации
      >
        {filteredProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCardClass
              link={`/product/${item.id}`}
              key={item.id}
              title={item.name}
              className={''}
              ImgSrc={item.grid_picture_url}
              onClick={() => handleProductClick(item.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Swiper2;
