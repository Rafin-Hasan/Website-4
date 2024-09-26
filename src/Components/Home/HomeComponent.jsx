import React from "react";
import Counter from "./Counter";
import AddButton from "./AddButton";
const HomeComponent = () => {
  return (
    <>
      <section className="container pt-[98px] flex gap-[72px]">
        <div className="pl-[60px]">
          <img src="./img/banner_img.png" alt="banner" />
        </div>
        <div>
          <div>
            <p className="pt font-normal text-[20px] text-[#F2994A]">
              Normal to oily skin
            </p>
            <h1 className="pt w-[540px] font-normal text-[72px] py-[20px] text-[#333333] leading-[110%]">
              Men’s Sunscreen hand & body
            </h1>
            <p className="inter w-[526px] font-normal text-[18px] text-[#A0A79A] pb-16 leading-[145%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
          <div>
            <AddButton />
          </div>
          <div className="pt-[42px]">
            <Counter />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
