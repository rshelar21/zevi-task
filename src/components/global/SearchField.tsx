import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import "../../Styles/SearchField.css";

interface IProps {
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  searchQuery?: string;
  handleChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField = ({
  setSearchQuery,
  searchQuery,
  handleChangeInput,
}: IProps) => {
  return (
    <>
      <div className="search__body">
        <input
          type="text"
          className="input"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => handleChangeInput && handleChangeInput(e)}
        />
        <MagnifyingGlassIcon className="icon" />
      </div>
    </>
  );
};

export default SearchField;
