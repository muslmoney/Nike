import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsData from '../data/api.json';

const Product = () => {
  const { id } = useParams();
  const product = ProductsData.sneakers.find((product) => product.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="Product">
      <div className="Product__carousel">
        <aside>
          {product.images.map((image, index) => {
            const isGif = image.url.endsWith('.gif');
            return (
              <div
                key={index}
                className={`Product__carousel-img-container ${
                  isGif ? 'video' : ''
                }`}
              >
                <img
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
          <img src={mainImage.url} alt="main" className="Product__main-img" />
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
                  alt={`Product-${index}`}
                  onClick={() => setMainImage(color)}
                  className="Product__colors-imgs"
                />
              ))}
          </div>
          <div className="Product__sizes">
            <h3>Select size</h3>
            <div className="Product__sizes">
              {/* Подставьте ваши размеры */}
              <button>37</button>
              <button>38</button>
              <button>39</button>
              <button>40</button>
              <button>41</button>
              <button>42</button>
              <button>43</button>
              <button>44</button>
            </div>
          </div>
        </div>
        <div className="Product-payment">
          <a href="">
            <button className="Product-payment-btn1">
              <p>add to bag</p>
            </button>
          </a>
          <a href="">
            <button className="Product_payment-btn2">
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
