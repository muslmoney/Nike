import React from 'react'
import { Link } from 'react-router-dom'
import './components.css'

const ProductCard = ({ImgSrc, ImgTitle, className, link , title, ...props} ) => {
    return (
    <div   className = {className}>
        {/* //опеределенный товар */}
        <Link to={'./products'}>     
         <div>
         <img src={ImgSrc} alt={ImgTitle}/>
            <a href={link}>
                <button>
                    {title}
                </button>
            </a>
            
         </div>


        </Link>
      
    </div>
  )
}

export default ProductCard