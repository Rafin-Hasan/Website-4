import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Subscription Section */}
      <div className="bg-gray-50 py-12 flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          Subscribe to the daily <span className="text-red-500">updates</span>
        </h2>
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md p-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow p-2 focus:outline-none text-gray-700 placeholder-gray-400 rounded-l-full"
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300">
            Subscribe now
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-red-600 py-8">
        <div className="text-center text-white">
          <h3 className="text-lg font-bold mb-4">EbTan Cosmetics</h3>
          <nav className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About us
            </a>
            <a href="#" className="hover:underline">
              Product
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm">© 2024 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
