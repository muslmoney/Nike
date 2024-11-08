import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';
import ProductsData from '../data/api.json';
import ProductCard from './ProductCard';

const shuffleArray = (array) => {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Swiper3 = () => {
  const { id } = useParams();
  const products = ProductsData.sneakers;
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredProducts = products.filter(product =>
    [1, 2, 3, 4, 5, 6, 14, 15, 16, 17].includes(product.id)
  );

  const shuffledProducts = shuffleArray(filteredProducts);

  return (
    <div>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3.5}
        spaceBetween={10}
        className="Swiper"
      >
        {shuffledProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard
              link={`/product/${item.id}`}
              key={item.id}
              title={item.name}
              ImgSrc={item.grid_picture_url}
              onClick={() => handleProductClick(item.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiper3;
