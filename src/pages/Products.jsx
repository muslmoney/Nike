import React from 'react';
import { Button, Dropdown, Space, Cascader } from 'antd';
import { useNavigate } from 'react-router-dom';
import ProductsData from '../data/Products';
import { ProductCard2 } from '../components/ProductCard';

const options = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
            disableCheckbox: true,
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];

const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Featured
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Newest
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Price High-Low
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Price Low-High
      </a>
    ),
  },
];

const Products = () => {
  const navigate = useNavigate();
  
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="Products">
      <div className="container">
        <header className="Products__header">
          <div className="Products__header-inner">
            <h1>new trainers & gear</h1>
            <div className="aside-categoties">
              <a href="/product">
                <p>Shoes</p>
              </a>
              <a href="/product">
                <p>Shoes</p>
              </a>
              <a href="/product">
                <p>Shoes</p>
              </a>
              <a href="/product">
                <p>Shoes</p>
              </a>
              <a href="/product">
                <p>Shoes</p>
              </a>
            </div>
            <marquee behavior="scroll" direction="right" scrollamount="10">
              ssale sdale sal
            </marquee>
            <div className="Products__header-btns">
              <div>
                <button className="filters">
                  hide filters{' '}
                  <svg
                    aria-hidden="true"
                    className="icon-filter-ds"
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
                      d="M21 8.25H10m-5.25 0H3"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M3 15.75h10.75m5 0H21"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <button className="sortBy">
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown menu={{ items }} placement="bottomLeft">
                      <Button>sort by</Button>
                    </Dropdown>
                  </Space>
                </Space>
              </button>
            </div>
          </div>
        </header>

        <div className="content">
          <aside className="aside">
            <div className="aside-categoties">
              <a href="/product">
                <p>Shoes</p>
              </a>
              <a href="/product">
                <p>Shoes</p>
              </a>
              <a href="/product">
                <p>Shoes</p>
              </a>
              <a href="/product">
                <p>Shoes</p>
              </a>
              <a href="/product">
                <p>Shoes</p>
              </a>
            </div>

            <Cascader
              className="Cascader"
              style={{ width: '100%' }}
              options={options}
              multiple
              maxTagCount="responsive"
              placeholder={'Gender'}
            />
            <Cascader
              className="Cascader"
              style={{ width: '100%' }}
              options={options}
              multiple
              maxTagCount="responsive"
              placeholder={'Category'}
            />
            {/* Добавьте дополнительные Cascader по необходимости */}
          </aside>
          <main>
            {ProductsData.map((item) => (
              <ProductCard2
                key={item.id}
                title={item.name}
                category={item.category.name}
                price={item.price}
                brand={item.brand}
                gender={item.gender}
                link={`/product/${item.id}`} // Используйте правильный путь
                ImgSrc={item.imageUrl}
                onClick={() => handleProductClick(item.id)}
              />
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default Products;
