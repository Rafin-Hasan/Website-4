import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { IoMdArrowDropdown } from "react-icons/io";
import AddButton from "./AddButton";
import { TbCurrencyTaka } from "react-icons/tb";

const MensDayCream = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Allow animations to trigger multiple times
      mirror: true, // Trigger animations on scroll up
    });
  }, []);

  return (
    <>
      <section className="container mt-[110px] mb-[155px]">
        <div className="flex gap-[120px] justify-center">
          <div data-aos="fade-right">
            {" "}
            {/* AOS Animation */}
            <img src="./img/cream.png" alt="cream" />
          </div>
          <div className="pt-[39px]" data-aos="fade-left">
            {" "}
            {/* AOS Animation */}
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
              <div className="flex gap-1 pt-1 pt text-[30px] text-[#C51605]">
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
        <div className="flex gap-[190px] justify-center">
          <div data-aos="fade-right">
            {" "}
            {/* AOS Animation */}
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
                <div className="flex gap-1 pt-1 pt text-[30px] text-[#C51605]">
                  <span className="pt-2">
                    <TbCurrencyTaka />
                  </span>
                  300
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            {" "}
            {/* AOS Animation */}
            <img src="./img/lb.png" alt="lip balm" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MensDayCream;
