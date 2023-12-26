import React, { useState, useEffect, useMemo } from "react";
import "../Styles/SearchResult.css";
import SearchField from "../components/global/SearchField";
import SideBar from "../components/SearchResult/SideBar";
import ProductsBoard from "../components/SearchResult/ProductsBoard";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [checkBoxPrice, setCheckBoxPrice] = useState<string>("");
  const [checkBoxCategory, setCheckBoxCategory] = useState<string>("");
  const [checkBoxRating, setCheckBoxRating] = useState<string>("");
  const [filterdList, setFilterdList] = useState<IProducts[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    handleGetProducts();
  }, []);

  useEffect(() => {
    if (searchParams.get("q")) {
      setCheckBoxCategory(searchParams.get("q") as string);
    }
  }, [searchParams]);

  const handleGetProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res?.data);
    if (searchParams.get("q")) {
      const data = res?.data.filter(
        (product: IProducts) => product.category === searchParams.get("q")
      );
      setFilterdList(data);
    }else{
      setFilterdList(res?.data);
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleSelectPrice = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const { value, name } = e.target;
    if (type === "price") {
      setCheckBoxPrice(value);
    }
    if (type === "category") {
      setCheckBoxCategory(value);
    }
    if (type === "rate") {
      setCheckBoxRating(value);
    }
  };

  useEffect(() => {
    handleFilterProducts();
  }, [
    searchQuery,
    checkBoxPrice,
    checkBoxCategory,
    checkBoxRating,
    searchParams,
  ]);

  const handleFilterProducts = () => {
    let productsArr = [...products];
    if (searchQuery != "") {
      productsArr = productsArr.filter((product) =>
        searchQuery === "" || null
          ? product
          : product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (checkBoxPrice != "") {
      productsArr = productsArr.filter(
        (product) => product.price < Number(checkBoxPrice)
      );
    }
    if (checkBoxCategory != "") {
      productsArr = productsArr.filter(
        (product) => product.category === checkBoxCategory
      );
    }
    if (checkBoxRating != "") {
      productsArr = productsArr.filter(
        (product) =>
          Math.floor(Number(product.rating.rate)) + 1 ===
          Math.floor(Number(checkBoxRating))
      );
    }

    setFilterdList(productsArr);
  };

  const handleClearFilter = () => {
    setFilterdList(products);
    setSearchQuery("");
    setCheckBoxPrice("");
    setCheckBoxCategory("");
    setCheckBoxRating("");
  };

  return (
    <>
      <div className="result__body">
        <div className="search__container">
          <SearchField
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            handleChangeInput={handleChangeInput}
          />
        </div>

        <div className="result_container">
          <h1 className="heading">Search Result</h1>

          <div className="show_result">
            <SideBar
              checkBoxPrice={checkBoxPrice}
              handleSelectPrice={handleSelectPrice}
              checkBoxCategory={checkBoxCategory}
              checkBoxRating={checkBoxRating}
              handleClearFilter={handleClearFilter}
            />
            <ProductsBoard products={filterdList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
