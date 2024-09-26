import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import AddButton from "./AddButton";
import { TbCurrencyTaka } from "react-icons/tb";

const MensDayCream = () => {
  return (
    <>
      <section className="container mt-[110px] mb-[155px]">
        <div className="flex gap-[120px] ">
          <div>
            <img src="./img/cream.png" alt="cream" />
          </div>
          <div className="pt-[39px]">
            <p className="pt font-normal text-[20px] text-[#F2994A]">
              All skins types
            </p>
            <h5 className="w-[215px] pt-[30px] pb-[44px] pt font-normal text-[48px] text-[#333333] leading-[120%]">
              Men’s day cream
            </h5>
            <p className="flex gap-[10px] inter text-[22px] font-semibold">
              <span className="pt-1">
                <IoMdArrowDropdown />
              </span>
              How to use
            </p>
            <p className="flex gap-[10px] inter text-[22px] font-semibold">
              <span className="pt-1">
                <IoMdArrowDropdown />
              </span>
              Ingredients
            </p>
            <p className="flex gap-[10px] inter text-[22px] font-semibold">
              <span className="pt-1">
                <IoMdArrowDropdown />
              </span>
              Benefits
            </p>
            <div className="flex gap-5 pt-[50px]">
              <div>
                <AddButton />
              </div>
              <div className="flex gap-1 pt-1 pt text-[30px] text-[#C51605] ">
                <span className="pt-2">
                  <TbCurrencyTaka />
                </span>
                500
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mb-[142px]">
        <div className="flex gap-[190px]">
          <div>
            <div className="pt-[39px]">
              <p className="pt font-normal text-[20px] text-[#F2994A]">
                Only skins types
              </p>
              <h5 className="w-[479px] pt-[30px] pb-[44px] pt font-normal text-[48px] text-[#333333] leading-[120%]">
                Men's lip balm lasting (25 gr)
              </h5>
              <p className="flex gap-[10px] inter text-[22px] font-semibold">
                <span className="pt-1">
                  <IoMdArrowDropdown />
                </span>
                How to use
              </p>
              <p className="flex gap-[10px] inter text-[22px] font-semibold">
                <span className="pt-1">
                  <IoMdArrowDropdown />
                </span>
                Ingredients
              </p>
              <p className="flex gap-[10px] inter text-[22px] font-semibold">
                <span className="pt-1">
                  <IoMdArrowDropdown />
                </span>
                Benefits
              </p>
              <div className="flex gap-5 pt-[50px]">
                <div>
                  <AddButton />
                </div>
                <div className="flex gap-1 pt-1 pt text-[30px] text-[#C51605] ">
                  <span className="pt-2">
                    <TbCurrencyTaka />
                  </span>
                  300
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="./img/lb.png" alt="Logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MensDayCream;
