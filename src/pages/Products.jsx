import React from "react";
import { Button, Dropdown, Space } from "antd";
import { Cascader } from "antd";
import { ProductCard2 } from "../components/ProductCard";
import axios, { isChancel, AxiosError } from 'axios'
  
  
const APIUrl = `https://jsonplaceholder.typicode.com`

const RequesGet = async (path = "") =>{
    path = APIUrl + path 
    return await fetch(path)
   .then(response => response.json())
}


const RequestPost =  async (path, data) =>{
    path = APIUrl + path
    return await fetch(path, {
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response.json())
}

const RequesDelete = async (path = '') =>{
    path = APIUrl + path 
    return await fetch(path,{
        method:'DELETE',
        headers: {
                "Content-type": "application/json"}

    }).then(response => response.json())
}


const RequesPatch = async (path, data) =>{
    return await fetch (path,{
        method:'PATCH',
        body: JSON.stringify(data),
    })
}

window.addEventListener("DOMContentLoaded",() =>{
    const getBtn = document.querySelector('#getbtn')
    const resultTable = document.querySelector("#result tbody")
    getBtn.addEventListener('click', () =>{
        resultTable.innerHTML = "Loading . . . ";

        RequesGet('/posts').then(data =>{
            if(data){
                resultTable.innerHTML = ""
                data.forEach(element =>{
                    resultTable.insertAdjacentHTML("beforeend",`
                    <tr>
                <td>${element.userId}</td>
                <td>${element.title}</td>
                <td>${element.body}</td>
                <td>
                    <button type="button">&times;</button>
                </td>
            </tr>
            `)
                    
                })
            }
        })
    })
})

const options = [
  {
    label: "Light",
    value: "light",
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: "Bamboo",
    value: "bamboo",
    children: [
      {
        label: "Little",
        value: "little",
        children: [
          {
            label: "Toy Fish",
            value: "fish",
            disableCheckbox: true,
          },
          {
            label: "Toy Cards",
            value: "cards",
          },
          {
            label: "Toy Bird",
            value: "bird",
          },
        ],
      },
    ],
  },
];
const items = [
  {
    key: "1",
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
    key: "2",
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
    key: "3",
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
    key: "4",
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
            <marquee behavior="scroll" direction="right" scrollamount='10' >  ssale sdale sal </marquee>
            <div className="Products__header-btns">
              <div>
                <button className="filters">
                  hide filters{" "}
                  <svg
                    aria-hidden="true"
                    class="icon-filter-ds"
                    focusable="false"
                    viewBox="0 0 24 24"
                    role="img"
                    width="24px"
                    height="24px"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M21 8.25H10m-5.25 0H3"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M3 15.75h10.75m5 0H21"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <button className="sortBy">
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottomLeft"
                    >
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
              style={{
                width: "100%",
              }}
              options={options}
              multiple
              maxTagCount="responsive"
              placeholder={"Gendar"}
            />
            <Cascader
              className="Cascader"
              style={{
                width: "100%",
              }}
              options={options}
              multiple
              maxTagCount="responsive"
              placeholder={"Gendar"}
            />
            <Cascader
              className="Cascader"
              style={{
                width: "100%",
              }}
              options={options}
              multiple
              maxTagCount="responsive"
              placeholder={"Gendar"}
            />
            <Cascader
              className="Cascader"
              style={{
                width: "100%",
              }}
              options={options}
              multiple
              maxTagCount="responsive"
              placeholder={"Gendar"}
            />
            <Cascader
              className="Cascader"
              style={{
                width: "100%",
              }}
              options={options}
              multiple
              maxTagCount="responsive"
              placeholder={"Gendar"}
            />
          </aside>
          <main>
            <ProductCard2
              title={"Nike air max pro 15dddddddd"}
              category={"mans"}
              color={"green"}
              price={200}
              link={'./product'}
              ImgSrc={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6edece2-a3d6-4ad9-821c-9b87cf65f91e/AIR+MAX+90+DRIFT.png"
              }
            />
            <ProductCard2
              title={"pon"}
              category={"mans"}
              color={"green"}
              price={200}
              ImgSrc={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6edece2-a3d6-4ad9-821c-9b87cf65f91e/AIR+MAX+90+DRIFT.png"
              }
            />
            <ProductCard2
              title={"pon"}
              category={"mans"}
              color={"green"}
              price={200}
              ImgSrc={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6edece2-a3d6-4ad9-821c-9b87cf65f91e/AIR+MAX+90+DRIFT.png"
              }
            />
            <ProductCard2
              title={"pon"}
              category={"mans"}
              color={"green"}
              price={200}
              ImgSrc={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6edece2-a3d6-4ad9-821c-9b87cf65f91e/AIR+MAX+90+DRIFT.png"
              }
            />
            <ProductCard2
              title={"pon"}
              category={"mans"}
              color={"green"}
              price={200}
              ImgSrc={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6edece2-a3d6-4ad9-821c-9b87cf65f91e/AIR+MAX+90+DRIFT.png"
              }
            />
            <ProductCard2
              title={"pon"}
              category={"mans"}
              color={"green"}
              price={200}
              ImgSrc={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6edece2-a3d6-4ad9-821c-9b87cf65f91e/AIR+MAX+90+DRIFT.png"
              }
            />
            <ProductCard2
              title={"pon"}
              category={"mans"}
              color={"green"}
              price={200}
              ImgSrc={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6edece2-a3d6-4ad9-821c-9b87cf65f91e/AIR+MAX+90+DRIFT.png"
              }
            />
            <ProductCard2
              title={"pon"}
              category={"mans"}
              color={"green"}
              price={200}
              ImgSrc={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6edece2-a3d6-4ad9-821c-9b87cf65f91e/AIR+MAX+90+DRIFT.png"
              }
            />
            <ProductCard2
              title={"pon"}
              category={"mans"}
              color={"green"}
              price={200}
              ImgSrc={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6edece2-a3d6-4ad9-821c-9b87cf65f91e/AIR+MAX+90+DRIFT.png"
              }
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default Products;
