import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsData from '.././data/Products';

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  return (
    <>
      {ProductsData.filter((product) => product.id == id).map((product) => {
        return (
          <div className='Product'>
            <div>
              <aside>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </aside>
              <main>
                <div>
                  <img src="" alt="" />
                </div>
              </main>
            </div>
            <div className="Product__about-card">
              <h2>{product.name}</h2>
              <p>{product.gender}</p>
              <b>${product.price}</b>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <div>
                <h3>Select size</h3>
                <div>
                  <button>37</button>
                  <button>38</button>
                  <button>39</button>
                  <button>40</button>
                  <button>41</button>
                  <button>42</button>
                  <button>43</button>
                  <button>44</button>
                </div>
                <div className="Product-payment">
                  <a href="">
                    <button className="Product-payment-btn1">
                      <p>Pay</p>
                    </button>
                  </a>
                  <a href="">
                    <button style={{display:'flex', alignItems:'center' , gap:'5px'}}> 
                      <p>Add to favouritesw</p>
                    <span><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path><title>non-filled</title></svg></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
