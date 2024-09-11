import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
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

const SwiperFooter = () => {
  const { id } = useParams();
  const products = ProductsData.sneakers;
  const product = products.find((product) => product.id == id);

  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Добавляем useEffect для прокрутки страницы наверх при изменении роута
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return null;
  }

  const shuffledProducts = shuffleArray(products);
  const displayedProducts = shuffledProducts.slice(0, 10);

  return (
    <div className="Footer__swiper">
      <h1>You also will like</h1>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3.13}
        spaceBetween={10}
        className="Swiper"
      >
        {displayedProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard
              link={`/product/${item.id}`}
              key={item.id}
              className={'Product__card-class'}
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

export default SwiperFooter;
