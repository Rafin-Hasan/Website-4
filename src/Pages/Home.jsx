import React from "react";
import HomeComponent from "../Components/Home/HomeComponent";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import MensDayCream from "../Components/Home/MensDayCream";
import MensHandWash from "../Components/Home/MensHandWash";

const Home = () => {
  return (
    <div>
      <HomeComponent />
      <WhyChooseUs />
      <MensHandWash />
      <MensDayCream />
    </div>
  );
};

export default Home;
