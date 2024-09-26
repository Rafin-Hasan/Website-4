import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Subscription Section */}
      <div className="bg-gray-50 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">
            Subscribe to the daily <span className="text-red-500">updates</span>
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center space-x-4 bg-white p-3 rounded-full shadow-md w-96">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 focus:outline-none rounded-full text-gray-700"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded-full focus:outline-none">
              Subscribe now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-red-600 py-8">
        <div className="text-center text-white">
          <h3 className="text-lg font-bold mb-4">EbTan Cosmetics</h3>
          <div className="flex justify-center space-x-6 mb-4">
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
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p>© 2024 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
