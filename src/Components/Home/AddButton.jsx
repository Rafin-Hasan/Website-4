import React from "react";
import { IoCartSharp } from "react-icons/io5";

const AddButton = () => {
  return (
    <button className="py-[13px] px-[35px] bg-[#E52525] rounded-[5px] text-white inter font-medium text-[18px] flex gap-[18px] border-2 border-transparent transition-all duration-200 ease-in-out hover:bg-white hover:text-[#E52525] hover:border-[#E52525]">
      <span className="pt-[3px] text-[22px]">
        <IoCartSharp />
      </span>
      Add to cart
    </button>
  );
};

export default AddButton;
