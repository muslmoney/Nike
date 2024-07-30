import React from "react";
import { Button, Dropdown, Space } from "antd";
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
            <div className="Products__header-btns">
             <div>
             <button>
                hide filters
              </button>
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
             </div>
              <button>
                <Space direction="vertical" >
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



        <aside>

        </aside>
        <main>
        
        </main>
      </div>
    </section>
  );
};

export default Products;
