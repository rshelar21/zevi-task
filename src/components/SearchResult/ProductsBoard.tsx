import React from "react";
import "../../Styles/ProductsBoard.css";
import Card from "./Card";

interface IProps {
  products: IProducts[];
}

const ProductsBoard = ({products} : IProps) => {
  return (
    <>
      <div className="board__body">
        {
          products?.map((product, index) => (
            <Card key={index} product={product} />
          ))
        }
      </div>
    </>
  );
};

export default ProductsBoard;
