import React from "react";
import HomeComponent from "../Components/Home/HomeComponent";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import MensDayCream from "../Components/Home/MensDayCream";
import MensHandWash from "../Components/Home/MensHandWash";
import Reviews from "../Components/Home/Reviews";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <div>
      <HomeComponent />
      <WhyChooseUs />
      <MensHandWash />
      <MensDayCream />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
