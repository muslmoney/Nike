import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './pages.css'
import Swiper1 from '../components/Swiper1'
import Swiper2 from '../components/Swiper2'
import Swiper3 from '../components/Swiper3'
import ProductsData from '../data/api.json';

const Home = () => {
  const { id } = useParams();
  const product = ProductsData.sneakers.find((product) => product.id == id);


  return (
    <div className='Home'>
      <div className="Home__hero-1">
        <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1423,c_limit/7f6c6390-fa88-41d0-9198-38f6c1ada4e6/nike-just-do-it.jpg" alt="" />
        <div className='Hero__title'>
          <p>
            Nike Pegasus 41 'Prequel'
          </p>
          <h1>
            DON’T WASTE YOUR ENERGY
          </h1>
          <p>
            A responsive, lightweight daily trainer designed for every runner.
          </p>
          <Link to={'/products'}>
            <button>
              Shop
            </button>
          </Link>
        </div>
      </div>
      <section className='Latest' >

        <div className="container">
          <div className='Swiper__cont'>
            <h2>Latest & Greatest</h2>
            <Swiper1 />
          </div>
        </div>
      </section>

      <div className='Home__hero-2'>
        <h1>
          Just do it
        </h1>
        <p>
          That do it again
        </p>

      </div>
      <div className='Shop' >
        <p>Shop All New Arrivals</p>
        <a href="/products">
          <p>Shop</p>
        </a>
      </div>
      <section className='chetirefotki'>
        <div className='chetirefotki-grid'>
          <div className='chetirefotki__card'>
            <img className='img1' src="https://static.nike.com/a/images/f_auto/dpr_0.3,cs_srgb/w_2092,c_limit/f06d460a-91b3-40ba-848c-3bc2be5213bb/nike-just-do-it.jpg" alt="" />
            <div>
              <p>just in</p>
              <h3>fall favourites</h3>
              <button>shop</button>
            </div>
          </div>
          <div className='chetirefotki__card'>
            <img className='img2' src="https://static.nike.com/a/images/f_auto/dpr_0.3,cs_srgb/w_2092,c_limit/866e7614-162d-4647-9eb8-752739d4315f/nike-just-do-it.jpg" alt="" />
            <div>
              <p>for all walks</p>
              <h3>nike motiva</h3>
              <button>shop</button>
            </div>
          </div>
          <div className='chetirefotki__card'>
            <img className='img3' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1373,c_limit/ff898853-a5a8-4fdd-bb4d-014ac934d9ad/nike-just-do-it.jpg" alt="" />
            <div>
              <p>jordans's latest</p>
              <h3>brooklyn fleece</h3>
              <button>shop</button>
            </div>
          </div>
          <div className='chetirefotki__card'>
            <img className='img4' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1373,c_limit/59176597-0a35-48a2-96b8-f39824239e74/nike-just-do-it.jpg" alt="" />
            <div>
              <p>new in basketball</p>
              <h3>giannis freak 6 'naija'</h3>
              <button>shop</button>
            </div>
          </div>
        </div>
      </section>
      <section className='OurIcons' >

        <div className="container">
          <div className='Swiper__cont ShopByClassic'>
            <h2>Shop By Classics</h2>
            <Swiper2 />
          </div>
        </div>
      </section>

      <section className='Latest' >

        <div className="container">
          <div className='Swiper__cont'>
            <h2>Shop by sport</h2>
            <Swiper1 />
          </div>
        </div>
      </section>

      <section className='OurIcons' >

        <div className="container">
          <div className='Swiper__cont'>
            <h2>Shop our icons</h2>
            <Swiper3 />
          </div>
        </div>
      </section>




    </div>
  )
}

export default Home
