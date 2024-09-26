import React, { useEffect, useState } from "react";
import { FaStar, FaShoppingBag, FaSmile } from "react-icons/fa"; // Importing FontAwesome icons

const MensHandWash = () => {
  // States for the animated counters
  const [rating, setRating] = useState(0);
  const [productsSold, setProductsSold] = useState(0);
  const [reviews, setReviews] = useState(0);

  // Function to animate counters
  const animateCounter = (target, setState, duration) => {
    let start = 0;
    const increment = target / (duration / 10); // Adjust increment speed based on duration

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setState(parseFloat(start.toFixed(1))); // For rating, limiting to 1 decimal point
    }, 10);
  };

  useEffect(() => {
    animateCounter(48, setRating, 2000); // Animating rating to 4.6 in 2 seconds
    animateCounter(200, setProductsSold, 2000); // Animating products sold to 200 in 2 seconds
    animateCounter(99, setReviews, 2000); // Animating reviews to 99 in 2 seconds
  }, []);

  return (
    <>
      <section className="container flex justify-between pt-[110px]">
        {/* ================== counter part ==================== */}
        <div>
          <p className="text-[#F2994A] pt font-normal text-[20px] pb-[25.5px]">
            All skins types
          </p>
          <div className="flex gap-[49px] text-center text-gray-700">
            <div className="flex flex-col items-center">
              <span className="text-orange-500 text-xl font-semibold flex items-center">
                <FaStar className="h-6 w-6 mr-1" />
                <span className="text-black">{rating.toFixed(1)}</span>
              </span>
              <span className="text-sm text-gray-500">Products</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-orange-500 text-xl font-semibold flex items-center">
                <FaShoppingBag className="h-6 w-6 mr-1" />
                <span className="text-black">{Math.floor(productsSold)}+</span>
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
        </div>
      </section>
    </>
  );
};

export default MensHandWash;
