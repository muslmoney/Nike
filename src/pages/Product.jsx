import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProductsData from '../data/api.json';
import NotFound from './NotFound';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { id } = useParams();
  const { addToCart, addToFavorites } = useCart();
  const product = ProductsData.sneakers.find((product) => product.id == id);
  const carouselRef = useRef(null);

  if (!product) {
    return <NotFound />;
  }

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupHiding, setPopupHiding] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);

  const handleAddToCart = () => {
    if (isButtonDisabled) return;

    if (!selectedSize) {
      setSizeError(true);
      return;
    }

    setButtonDisabled(true);
    const selectedColor = mainImage ? mainImage : product.images[0];

    addToCart({
      ...product,
      selectedSize,
      selectedColor,
    });
    setAddedProduct({ ...product, selectedSize, selectedColor });
    setPopupVisible(true);
    setPopupHiding(false);

    setTimeout(() => {
      setPopupHiding(true);
      setTimeout(() => {
        setPopupVisible(false);
        setPopupHiding(false);
        setButtonDisabled(false);
      }, 500);
    }, 1500);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      addToFavorites({
        ...product,
        selectedSize,
        selectedColor: { url: product.grid_picture_url },
        grid_picture_url: product.grid_picture_url,
      });
    }
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
  
    const { scrollLeft, scrollWidth, clientWidth } = carousel;
  
    
  
    setShowLeftShadow(scrollLeft > 0);
    setShowRightShadow(scrollLeft + clientWidth < scrollWidth);
  };
  

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      handleScroll(); // Проверяем при монтировании
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="Product">
        <div className="Product__carousel">
          {/* Добавляем классы для теней */}
          <aside
            ref={carouselRef}
            className={`Product__carousel-aside ${
              showLeftShadow ? 'show-left-shadow' : ''
            } ${showRightShadow ? 'show-right-shadow' : ''}`}
          >
            {product.images.map((image, index) => {
              const isGif = image.url.endsWith('.gif');
              return (
                <div
                  key={index}
                  className={`Product__carousel-img-container ${isGif ? 'video' : ''}`}
                >
                  <img
                    loading="lazy"
                    src={image.url}
                    alt={`Product-${index}`}
                    onMouseEnter={() => setMainImage(image)}
                    className="Product__carousel-img"
                  />
                </div>
              );
            })}
          </aside>
          <main className="Product__main">
            {mainImage && (
              <img loading="lazy" src={mainImage.url} alt="main" className="Product__main-img" />
            )}
          </main>
        </div>
        <div className="Product__about">
          <div className="Product__about-card">
            <h2>{product.name}</h2>
            <p>{product.gender}</p>
            <p>${product.price}</p>
            <div className="Product__colors">
              {product.colors &&
                product.colors.map((color, index) => (
                  <img
                    key={index}
                    src={color.url}
                    alt={`Color-${index}`}
                    onClick={() => {
                      setMainImage(color);
                    }}
                    className="Product__colors-imgs"
                  />
                ))}
            </div>
            <div className="Product__sizes">
              <h3>Select size</h3>
              <div className="Product__sizes">
                {product.size_range &&
                  product.size_range.map((size, index) => (
                    <div key={index}>
                      <button
                        className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedSize(size);
                          setSizeError(false);
                        }}
                      >
                        {size}
                      </button>
                    </div>
                  ))}
              </div>
              {sizeError && <p className="error-message">Please select a size</p>}
            </div>
          </div>
          <div className="Product-payment">
            <button
              className="Product-payment-btn1"
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
            >
              <p>Add to bag</p>
            </button>
            <button 
              className={`Product_payment-btn2 ${isLiked ? 'liked' : ''}`}
              onClick={handleLike}
            >
              <p>Add to favourites</p>
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                  ></path>
                  <title>non-filled</title>
                </svg>
              </span>
            </button>
          </div>
        </div>
        {isPopupVisible && addedProduct && (
          <div className={`Popup ${isPopupHiding ? 'Popup-hide' : 'Popup-show'}`}>
            <div className='Popup__status'>
              <svg fill="#128A09" width="20px" height="20px" className="mr2-sm" viewBox="0 0 24 24">
                <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm-.96 16.64l-3.68-3.68 1.84-1.92 1.84 1.92 5.6-5.6 1.92 1.84-7.52 7.44z"></path>
              </svg>
              <p>Added to Bag</p>
            </div>
            <div className="Popup__info">
              {addedProduct.selectedColor ? (
                <img src={addedProduct.selectedColor.url} alt={addedProduct.name} className="Popup__img" />
              ) : (
                <p>No image available</p>
              )}
              <div>
                <h3>{addedProduct.name}</h3>
                <p>Size: {addedProduct.selectedSize}</p>
                <h4>${addedProduct.price}</h4>
              </div>
            </div>
            <div className='Popup__btn'>
              <button onClick={() => window.location.href = '/bag'}>View Bag</button>
              <button onClick={() => setPopupVisible(false)}>Remove</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
