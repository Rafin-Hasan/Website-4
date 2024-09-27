import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaStar, FaShoppingBag, FaSmile } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import AddButton from "./AddButton";

const MensHandWash = () => {
  // States for the animated counters
  const [rating, setRating] = useState(0);
  const [productsSold, setProductsSold] = useState(0);
  const [reviews, setReviews] = useState(0);

  // Function to animate counters
  const animateCounter = (target, setState, duration) => {
    let start = 0;
    const increment = target / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setState(parseFloat(start.toFixed(1)));
    }, 10);
  };

  useEffect(() => {
    animateCounter(48, setRating, 2000);
    animateCounter(200, setProductsSold, 2000);
    animateCounter(99, setReviews, 2000);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation will only happen once when the element comes into view
    });
  }, []);

  return (
    <>
      <section className="bg-[#ECEBE6]">
        <div
          className="container flex justify-between pt-[110px]"
          data-aos="fade-up"
        >
          <div className="pt-[96px]" data-aos="fade-right">
            <p className="text-[#F2994A] pt font-normal text-[20px] pb-[25.5px]">
              All skins types
            </p>
            {/* ================== counter part starts ==================== */}
            <div className="flex gap-[49px] text-center text-gray-700">
              <div className="flex flex-col items-center">
                <span className="text-orange-500 text-xl font-semibold flex items-center">
                  <FaStar className="h-6 w-6 mr-1" />
                  <span className="text-black">{rating}</span>
                </span>
                <span className="text-sm text-gray-500">Products</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-orange-500 text-xl font-semibold flex items-center">
                  <FaShoppingBag className="h-6 w-6 mr-1" />
                  <span className="text-black">
                    {Math.floor(productsSold)}+
                  </span>
                </span>
                <span className="text-sm text-gray-500">Product sold</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-orange-500 text-xl font-semibold flex items-center">
                  <FaSmile className="h-6 w-6 mr-1" />
                  <span className="text-black">{Math.floor(reviews)}+</span>
                </span>
                <span className="text-sm text-gray-500">Reviews</span>
              </div>
            </div>
            {/* ================== counter part ends ==================== */}
            <div className="pt-[40px]">
              <h5 className="pt font-normal text-[36px] text-[#C51605] leading-[130%]">
                Men’s Hand wash lorem
              </h5>
              <div className="flex gap-5 pt-[50px]">
                <div>
                  <AddButton />
                </div>
                <div className="flex pt gap-1 pt-1 text-[30px] text-[#C51605] ">
                  <span className="pt-2">
                    <TbCurrencyTaka />
                  </span>
                  700
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <img src="./img/wash.png" alt="HandWash" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MensHandWash;
