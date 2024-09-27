import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaTelegram, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation will only happen once when the element comes into view
      mirror: false, // Disable animation when scrolling back up
    });
  }, []);

  return (
    <div>
      {/* Subscription Section */}
      <div className="bg-[#ECEBE6]" data-aos="fade-down">
        {" "}
        {/* Add AOS fade-up */}
        <div className="container flex justify-center m-auto items-center py-[80px]">
          <div>
            <h2 className="text-[48px] w-[356px] leading-[125%] pt font-normal text-[#333333]">
              Subscribe to the daily{" "}
              <span className="text-[#C51605]">updates</span>
            </h2>
          </div>
          <div className="flex items-center bg-white border border-gray-300 rounded-full ml-[111px] shadow-md p-2 w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow inter text-[18px] font-medium py-[33px] pl-6 pr-[223px] focus:outline-none text-gray-700 placeholder-gray-400 rounded-l-full"
            />
            <button className="bg-[#E52525] inter font-medium text-[18px] leading-[145%] text-white px-[35px] py-[13px] mr-[20px] rounded-full hover:bg-red-600 transition-colors duration-300">
              Subscribe now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#C51605]" data-aos="fade-up">
        {" "}
        {/* Add AOS fade-up */}
        <div className="container pt-16">
          <div className="text-center text-white">
            <h3 className="text-[34px] inter font-black leading-[125%] pb-[45px]">
              EbTan Cosmetics
            </h3>
            <nav className="flex justify-center gap-[33px] pb-[50px] text-[18px] inter font-medium leading-[125%]">
              <Link to="#" className="hover:underline">
                Home
              </Link>
              <Link to="#" className="hover:underline">
                About us
              </Link>
              <Link to="#" className="hover:underline">
                Product
              </Link>
              <Link to="#" className="hover:underline">
                Contact
              </Link>
            </nav>
            <div className="flex text-3xl justify-center space-x-6 mb-4">
              <Link to="#" className="hover:text-gray-300">
                <RiInstagramFill />
              </Link>
              <Link to="#" className="hover:text-gray-300">
                <FaTelegram />
              </Link>
              <Link to="#" className="hover:text-gray-300">
                <FaFacebook />
              </Link>
            </div>
            <p className="text-[18px] inter font-medium leading-[145%] pb-[66px]">
              © 2024 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
