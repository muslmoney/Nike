
import React, { createContext, useState, useEffect } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Замените URL на ваш локальный API
        const response = await fetch('./data/Products.js');
        const data = await response.json();
        setFilteredProducts(data.products || []); // Обработка данных в формате JSON
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (searchTerm) {
      fetchProducts();
    } else {
      setFilteredProducts([]); // Или установите дефолтный список продуктов
    }
  }, [searchTerm]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, filteredProducts }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
