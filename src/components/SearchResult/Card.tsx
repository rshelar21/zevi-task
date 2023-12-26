import React, { useState } from "react";
import "../../Styles/Card.css";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

interface IProps {
  product: IProducts;
}

const Card = ({ product }: IProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <div className="card_body">
        <div className="heart-icon" onClick={() => setIsLiked(!isLiked)}>
          {!isLiked ? (
            <HeartOutline className="" />
          ) : (
            <HeartIcon className="heart-red" />
          )}
        </div>
        <img src={product?.image} alt="" className="" />
        <div className="card_details">
          <h3 className="card_title">{product?.title}</h3>
          <h3 className="card_price">${product?.price}</h3>
          <div className="card_ratings">
            {[...Array(Math.floor(product.rating.rate) + 1)].map((star) => (
              <StarIcon className="star_icon" />
            ))}
            <span className="rating_count">({product.rating.count})</span>
          </div>
        </div>

        <div className="card_view">View Product</div>
      </div>
    </>
  );
};

export default Card;
