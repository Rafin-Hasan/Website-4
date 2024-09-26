import React from "react";
import { IoCartSharp } from "react-icons/io5";

const AddButton = () => {
  return (
    <button className="py-[13px] px-[35px] bg-[#E52525] rounded-[5px] text-white inter font-medium text-[18px] flex gap-[18px]">
      <span className="pt-[3px] text-[22px] ">
        <IoCartSharp />
      </span>
      Add to cart
    </button>
  );
};

export default AddButton;
