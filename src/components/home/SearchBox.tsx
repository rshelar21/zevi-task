import React from "react";
import "../../Styles/SearchBox.css";
import LatestProductCard from "./LatestProductCard";
import { Link } from "react-router-dom";
import { linksList } from "../../constants/links";

interface IProps {
  productsData: IProducts[];
}

const SearchBox = ({ productsData }: IProps) => {
  return (
    <>
      <div className="box__body">
        <h3 className="title">Latest Trends</h3>
        <div className="box__container">
          {productsData
            ?.map((product) => <LatestProductCard product={product} />)
            .slice(0, 4)}
        </div>

        <div className="pop_container">
          <h3 className="title">Popular Suggestions</h3>
          <div className="suggestion_lists">
            <ul>
              {linksList.map((link) => (
                <li>
                  <Link
                    to={{
                      pathname: "/search",
                      search: `?q=${link?.title}`,
                    }}
                    className="searchLinks"
                  >
                    {link?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
