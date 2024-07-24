import React from 'react'
import { Link } from 'react-router-dom'
import './components.css'


const ProductCard = ({ ImgSrc, ImgTitle, className, link, title, ...props }) => {
    return (
        <div className={className}>
            {/* //опеределенный товар */}
            <Link to={'./products'}>
                <div>
                    <img src={ImgSrc} alt={ImgTitle} />
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

export const ProductCard2 = ({ imgSrc, imgTitle, className, link, title, price, gender, discount, ...props }) => {
    className = { className }
    return (
        <div>
            <a href="">
                <a href="" >
                    <img src={imgSrc} alt={imgTitle} />
                </a>
                <div>
                    <div>
                        <p>
                            {title}
                        </p>
                    </div>
                    <div>
                        <p>
                            {price}{discount}
                        </p>
                    </div>
                    <div>
                        <p>
                            {gender}
                        </p>
                    </div>

                </div>
            </a>


        </div>



    )

}


export default ProductCard