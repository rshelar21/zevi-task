import React from "react";

interface IProps {
  handleSelectPrice: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  type: string;
  label: string;
  id: string;
  checkBox: any | string;
}
const ChechBox = ({ handleSelectPrice, type, label, id, checkBox }: IProps) => {
  return (
    <>
      <div className="filter_option">
        <input
          type="radio"
          className="label"
          id={id}
          name={type}
          value={id}
          onChange={(e) => handleSelectPrice(e, type)}
          checked={checkBox === id}
        />
        <label htmlFor={id} className="label">
          {label}
        </label>
      </div>
    </>
  );
};

export default ChechBox;
