import React, { useState } from "react";
import "../../Styles/Sidebar.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlined } from "@heroicons/react/24/outline";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ChechBox from "./ChechBox";


interface IProps {
  checkBoxPrice: any | string;
  handleSelectPrice: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  checkBoxCategory: any | string;
  checkBoxRating: any | string;
  handleClearFilter: () => void;
}

const SideBar = ({
  handleSelectPrice,
  checkBoxPrice,
  checkBoxCategory,
  checkBoxRating,
  handleClearFilter,
}: IProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="sidear__body">
        <button className="menu_btn" onClick={() => setOpenMenu(!openMenu)}>
          <Bars3CenterLeftIcon className="bar-icon" />
        </button>
        <div className={`menu_drawer ${openMenu ? "show_menu" : "hide_menu"}`}>
          <button className="cancel_btn" onClick={() => setOpenMenu(!openMenu)}>
            <XMarkIcon className="cancel_icon" />
          </button>
          <div className="filter_body">
            <div className="filter_header">
              <h5 className="filter_title">Category</h5>
              <ChevronDownIcon className="down_arrow" />
            </div>

            <ChechBox
              handleSelectPrice={handleSelectPrice}
              type={"category"}
              label={"men's clothing"}
              id={"men's clothing"}
              checkBox={checkBoxCategory}
            />

            <ChechBox
              handleSelectPrice={handleSelectPrice}
              type={"category"}
              label={"women's clothing"}
              id={"women's clothing"}
              checkBox={checkBoxCategory}
            />

            <ChechBox
              handleSelectPrice={handleSelectPrice}
              type={"category"}
              label={"jewelery"}
              id={"jewelery"}
              checkBox={checkBoxCategory}
            />

            <ChechBox
              handleSelectPrice={handleSelectPrice}
              type={"category"}
              label={"electronics"}
              id={"electronics"}
              checkBox={checkBoxCategory}
            />
          </div>

          <div className="filter_body">
            <div className="filter_header">
              <h5 className="filter_title">Pricing</h5>
              <ChevronDownIcon className="down_arrow" />
            </div>
            <ChechBox
              handleSelectPrice={handleSelectPrice}
              type={"price"}
              label={"Under $100"}
              id={"100"}
              checkBox={checkBoxPrice}
            />
            <ChechBox
              handleSelectPrice={handleSelectPrice}
              type={"price"}
              label={"$0 - $200"}
              id={"200"}
              checkBox={checkBoxPrice}
            />
          </div>

          <div className="filter_body">
            <div className="filter_header">
              <h5 className="filter_title">Ratings</h5>
              <ChevronDownIcon className="down_arrow" />
            </div>

            <div className="filter_option">
              <input
                type="radio"
                className=""
                name="rating"
                id="5"
                checked={checkBoxRating === "5"}
                onChange={(e) => handleSelectPrice(e, "rate")}
                value={"5"}
              />
              <label htmlFor="5" className="">
                <StarIcon className="star_icon" />
                <StarIcon className="star_icon" />
                <StarIcon className="star_icon" />
                <StarIcon className="star_icon" />
                <StarIcon className="star_icon" />
              </label>
            </div>

            <div className="filter_option">
              <input
                type="radio"
                className=""
                name="rating"
                id="4"
                checked={checkBoxRating === "4"}
                onChange={(e) => handleSelectPrice(e, "rate")}
                value={"4"}
              />
              <label htmlFor="4" className="">
                <StarIcon className="star_icon" />
                <StarIcon className="star_icon" />
                <StarIcon className="star_icon" />
                <StarIcon className="star_icon" />
                <StarOutlined className="star-outline" />
              </label>
            </div>

            <div className="filter_option">
              <input
                type="radio"
                className=""
                name="rating"
                id="3"
                checked={checkBoxRating === "3"}
                onChange={(e) => handleSelectPrice(e, "rate")}
                value={"3"}
              />
              <label htmlFor="3" className="">
                <StarIcon className="star_icon" />
                <StarIcon className="star_icon" />
                <StarIcon className="star_icon" />
                <StarOutlined className="star-outline" />
                <StarOutlined className="star-outline" />
              </label>
            </div>

            <div className="filter_option">
              <input
                type="radio"
                className=""
                name="rating"
                id="2"
                checked={checkBoxRating === "2"}
                onChange={(e) => handleSelectPrice(e, "rate")}
                value={"2"}
              />
              <label htmlFor="2" className="">
                <StarIcon className="star_icon" />
                <StarIcon className="star_icon" />
                <StarOutlined className="star-outline" />
                <StarOutlined className="star-outline" />
                <StarOutlined className="star-outline" />
              </label>
            </div>

            <div className="filter_option">
              <input
                type="radio"
                className=""
                name="rating"
                id="1"
                checked={checkBoxRating === "1"}
                onChange={(e) => handleSelectPrice(e, "rate")}
                value={"1"}
              />
              <label htmlFor="1" className="">
                <StarIcon className="star_icon" />
                <StarOutlined className="star-outline" />
                <StarOutlined className="star-outline" />
                <StarOutlined className="star-outline" />
                <StarOutlined className="star-outline" />
              </label>
            </div>
          </div>

          <button className="btn" onClick={handleClearFilter}>
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
