import React from "react";
import "../../Styles/ProductCard.css";
import { Link } from "react-router-dom";

interface IProps {
  product: IProducts;
}

const LatestProductCard = ({ product }: IProps) => {
  return (
    <>
      <Link to="/search" className="product_link">
        <div className="product_card">
          <img src={product?.image} alt="cloth-img" />
          <p className="product_title">{product?.title}</p>
        </div>
      </Link>
    </>
  );
};

export default LatestProductCard;
