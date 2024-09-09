import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './pages.css'
import Swiper1 from '../components/Swiper1'
import Swiper2 from '../components/Swiper2'
import Swiper3 from '../components/Swiper3'
import ProductsData from '../data/api.json';

const Home = () => {
    const { id } = useParams();
~    const product = ProductsData.sneakers.find((product) => product.id == id);
  
  
  return (
    <div className='Home'>
      <div className="Hero">
      </div>
      <div className='Shop' >
        <p>Shop All New Arrivals</p>
        <a href="/products">
          <p>Shop</p>
        </a>
      </div>
      <div className='Home__hero'>
        <h1>
          Just do it
        </h1>
        <p>
          That do it again
        </p>
        <Link to={'/products'}>
          <button>
            Shop
          </button>
        </Link>
      </div> 
      <section className='Latest' >

        <div className="container">
          <div className='Swiper__cont'>
            <h2>Latest & Greatest</h2>
            <Swiper1 /> 
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
