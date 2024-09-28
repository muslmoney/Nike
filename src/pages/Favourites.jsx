import React from 'react';
import { useCart } from '../context/CartContext';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useCart();

  return (
    <div className="Favourites">
      <h2>Your Favorites</h2>
      <div className="container">
        {favorites.length === 0 ? (
          <p>No favorite products added yet.</p>
        ) : (
          <ul className="favorites-list">
            {favorites.map((product) => (
              <li key={product.id} className="favorites-item">
                {product.grid_picture_url ? (
                  <img src={product.grid_picture_url} alt={product.name} />
                ) : (
                  <p>No image available</p>
                )}
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  {/* Стилизованная кнопка для удаления */}
                  <button onClick={() => removeFromFavorites(product.id)}>
                    Remove from Favorites
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favorites;
  