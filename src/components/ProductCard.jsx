import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
const ProductCard = ({
  ImgSrc,
  ImgTitle,
  className,
  link,
  title,
  onClick,
  ...props
}) => {
  onClick={onClick}
  className={className}
  return (
    <div className={'Product__card'}>
      <Link to={link}>
        <div>
          <img src={ImgSrc} alt={ImgTitle}  loading="lazy" />
          <a href={link}>
            <button>{title}</button>
          </a>
        </div>
      </Link>
    </div>
  );
};

export const ProductCard2 = ({
  ImgSrc,
  ImgTitle,
  className,
  link,
  title,
  category,
  price,
  brand,
  gender,
  ...props
}) => {
  return (
   <a>
    <div className="Product__Card2">
      <a href={link}>
        <img src={ImgSrc} alt={ImgTitle} loading="lazy" />
      </a>
      <div>
        <h3>
          <p>{title}</p>
        </h3>
          <div>
        <p className="opacity">{gender}</p>
          <p className="opacity">{category}</p>
        <p className="opacity">{brand}</p>
</div>
        <b>
          <p>${price}</p>
        </b>
      </div>
    </div>
    </a>
  );
};
export const ProductCardSwiper = ({
  ImgSrc,
  ImgTitle,
  className,
  link,
  title,
  ...props
}) => {
  return (
   <a>
    <div className="ProductCardSwiper">
      <a href={link}>
        <img src={ImgSrc} alt={ImgTitle}  loading="lazy" />
      </a>
      <div>
        <h3>
          <p>{title}</p>
        </h3>
      </div>
    </div>
    </a>
  );
};

export const ProductCardClass = ({
  ImgSrc,
  ImgTitle,
  className,
  link,
  title,
  onClick,
  ...props
}) => {
  onClick={onClick}
  className={className}
  return (
    <div className={'Product__card-class'}>
      {/* //опеределенный товар */}
      <Link to={link}>
        <div>
          <img src={ImgSrc} alt={ImgTitle}   loading="lazy" />
          <p>
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
