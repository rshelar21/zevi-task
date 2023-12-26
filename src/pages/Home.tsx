import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import SearchField from "../components/global/SearchField";
import axios from "axios";
import SearchBox from "../components/home/SearchBox";

const Home = () => {
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [productsData, setProductsData] = useState<IProducts[]>([]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res?.data);
  };

  // console.log("productsData", productsData);

  return (
    <>
      <div className="home_body">
        <div
          className="home__container"
          onClick={() => setShowSearchBox(!showSearchBox)}
        >
          <SearchField />
        </div>

        <div>
          {showSearchBox && productsData && (
            <SearchBox productsData={productsData} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
