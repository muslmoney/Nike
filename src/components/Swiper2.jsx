import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './components.css';
import ProductsData from '../data/api.json';
import ProductCardClass from './ProductCard'

const Swiper2 = () => {
  const { id } = useParams();
  const products = ProductsData.sneakers;

  const requiredIds = [7, 8, 9, 10, 11];


  const filteredProducts = products.filter((product) =>
    requiredIds.includes(parseInt(product.id))
  );


  return (
    <div className="Classic-swiper">
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3.13}
        spaceBetween={10}
        className="Swiper"
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
