import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`../data/Products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  
  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <div className="product-gallery">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart">Add to Cart</button>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
