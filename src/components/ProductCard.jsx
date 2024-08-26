import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
import Title from "antd/es/skeleton/Title";
const ProductCard = ({
  ImgSrc,
  ImgTitle,
  className,
  link,
  title,
  ...props
}) => {
  return (
    <div className={className}>
      {/* //опеределенный товар */}
      <Link to={"./products"}>
        <div>
          <img src={ImgSrc} alt={ImgTitle} />
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
        <img src={ImgSrc} alt={ImgTitle} />
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

export default ProductCard;
