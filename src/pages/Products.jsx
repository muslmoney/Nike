import React, { useState } from 'react';
import { Button, Dropdown, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import ProductsData from '../data/api.json';
import { ProductCard2 } from '../components/ProductCard';

// Опции для фильтров
const genderOptions = [
  { label: "Men's", value: "men's" },
  { label: "Women", value: "women" },
];

const categoryOptions = [
  { label: 'Basketball', value: 'basketball' },
  { label: 'Running', value: 'running' },
];

const colorOptions = [
  { label: 'Black', value: 'black' },
  { label: 'Red', value: 'red' },
];

const brandOptions = [
  { label: 'Air Jordan', value: 'Air Jordan' },
  { label: 'Nike', value: 'Nike' },
];

// Элементы для сортировки
const items = [
  { key: '1', label: 'Featured' },
  { key: '2', label: 'Newest' },
  { key: '3', label: 'Price High-Low' },
  { key: '4', label: 'Price Low-High' },
];

const Products = () => {
  const navigate = useNavigate();

  // Состояния для фильтров
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  
  // Состояние для управления видимостью фильтров
  const [areFiltersVisible, setFiltersVisible] = useState(true);

  // Функция для фильтрации продуктов
  const filteredProducts = ProductsData.sneakers.filter((product) => {
    const genderArray = Array.isArray(product.gender) ? product.gender : [];
    const categoryArray = Array.isArray(product.category) ? product.category : [];
    const color = typeof product.color === 'string' ? product.color.toLowerCase() : '';
    const brand = typeof product.brand_name === 'string' ? product.brand_name.toLowerCase() : '';

    // Фильтруем продукты на основе выбранных фильтров
    return (
      (!selectedGender || genderArray.includes(selectedGender)) &&
      (!selectedCategory || categoryArray.includes(selectedCategory)) &&
      (!selectedColor || color.includes(selectedColor)) &&
      (!selectedBrand || brand === selectedBrand.toLowerCase())
    );
  });

  // Обработчики для фильтров
  const handleGenderChange = (value) => setSelectedGender(value);
  const handleCategoryChange = (value) => setSelectedCategory(value);
  const handleColorChange = (value) => setSelectedColor(value);
  const handleBrandChange = (value) => setSelectedBrand(value);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Функция для удаления фильтра и сброса значения Select
  const removeFilter = (filterType) => {
    switch (filterType) {
      case 'gender':
        setSelectedGender(null);
        break;
      case 'category':
        setSelectedCategory(null);
        break;
      case 'color':
        setSelectedColor(null);
        break;
      case 'brand':
        setSelectedBrand(null);
        break;
      default:
        break;
    }
  };

  // Обработчик для кнопки фильтров
  const toggleFilters = () => {
    setFiltersVisible(!areFiltersVisible);
  };

  return (
    <section className="Products">
      <div className="container">
        <header className="Products__header">
          <div className="Products__header-inner">
            <h1>New Trainers & Gear</h1>
            <div className="Products__header-btns">
              <Button className="filters" onClick={toggleFilters}>
                {areFiltersVisible ? 'Hide Filters' : 'Show Filters'}
              </Button>
              <Dropdown menu={{ items }} placement="bottomLeft">
                <Button>Sort by</Button>
              </Dropdown>
            </div>
          </div>
        </header>

        <div className="content">
          <aside className={`aside ${!areFiltersVisible ? 'hide' : ''}`}>
            {/* Отображение выбранных фильтров */}
            <div className="selected-filters">
              {selectedGender && (
                <div className="filter-chip">
                  Gender: {selectedGender}
                  <button onClick={() => removeFilter('gender')}>X</button>
                </div>
              )}
              {selectedCategory && (
                <div className="filter-chip">
                  Category: {selectedCategory}
                  <button onClick={() => removeFilter('category')}>X</button>
                </div>
              )}
              {selectedColor && (
                <div className="filter-chip">
                  Color: {selectedColor}
                  <button onClick={() => removeFilter('color')}>X</button>
                </div>
              )}
              {selectedBrand && (
                <div className="filter-chip">
                  Brand: {selectedBrand}
                  <button onClick={() => removeFilter('brand')}>X</button>
                </div>
              )}
            </div>

            {/* Фильтры */}
            <Select
              style={{ width: '100%' }}
              placeholder="Gender"
              options={genderOptions}
              onChange={handleGenderChange}
              value={selectedGender}
            />
            <Select
              style={{ width: '100%' }}
              placeholder="Category"
              options={categoryOptions}
              onChange={handleCategoryChange}
              value={selectedCategory}
            />
            <Select
              style={{ width: '100%' }}
              placeholder="Color"
              options={colorOptions}
              onChange={handleColorChange}
              value={selectedColor}
            />
            <Select
              style={{ width: '100%' }}
              placeholder="Brand"
              options={brandOptions}
              onChange={handleBrandChange}
              value={selectedBrand}
            />
          </aside>
          <main>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <ProductCard2
                  key={item.id}
                  title={item.name}
                  category={item.category.join(", ")} // Объединяем категории в строку
                  price={item.price}
                  brand={item.brand_name}
                  gender={item.gender.join(", ")} // Объединяем пол в строку
                  link={`/product/${item.id}`}
                  ImgSrc={item.grid_picture_url}
                  onClick={() => handleProductClick(item.id)}
                />
              ))
            ) : (
              <p>No products found</p>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default Products;
