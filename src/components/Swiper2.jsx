import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import './components.css';
import ProductsData from '../data/api.json';
import ProductCard2 from './ProductCard';

const shuffleArray = (array) => {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Swiper2 = () => {
  const { id } = useParams();
  const products = ProductsData.sneakers;
 const product = products.find((product) => product.id == id);

  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const shuffledProducts = shuffleArray(products);
  const displayedProducts = shuffledProducts.slice(0, 10);

  return (
    <div className="Footer__swiper">
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3.13}
        spaceBetween={10}
        className="Swiper"
      >
        {displayedProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard2
              link={`/product/${item.id}`}
              key={item.id}
              title={item.name}
              className={'Product22'}
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
 