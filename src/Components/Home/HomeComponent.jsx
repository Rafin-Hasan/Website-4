import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import Counter from "./Counter";
import AddButton from "./AddButton";

const HomeComponent = () => {
  return (
    <>
      <section className="container pt-[98px] flex gap-[72px]">
        {/* Apply Framer Motion animation */}
        <motion.div
          className="pl-[60px]"
          initial={{ opacity: 0, x: -100 }} // Initial hidden state
          animate={{ opacity: 1, x: 0 }} // Animate to visible state
          transition={{ duration: 1 }} // Animation duration
        >
          <img src="./img/banner_img.png" alt="banner" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      </section>
    </>
  );
};

export default HomeComponent;
