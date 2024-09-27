import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { IoMdStar } from "react-icons/io";

const Reviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // If you want the animation to happen every time when in view
      mirror: true, // Trigger animations on scroll up
    });
  }, []);

  const reviews = [
    {
      name: "Ebrahim Ahmed",
      role: "Actor",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      stars: 5,
    },
    {
      name: "Tanvir Shantoh",
      role: "Actor",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      stars: 5,
    },
  ];

  return (
    <div className="bg-white py-12 container">
      <div className="text-center mb-10" data-aos="fade-up">
        {" "}
        {/* Apply AOS animation */}
        <h2 className="text-[48px] pt font-normal text-[#C51605] mb-[21px]">
          Review
        </h2>
        <p className="text-[#A0A79A] leading-[145%] w-[526px] font-medium text-[18px] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>
      <div className="flex justify-center space-x-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="flex justify-center text-yellow-500 mb-4">
              {Array(review.stars)
                .fill()
                .map((_, i) => (
                  <IoMdStar key={i} className="text-2xl" />
                ))}
            </div>
            <p className="text-[#C51605] w-[441px] pt font-normal text-[20px] leading-[130%] mb-4">
              {review.review}
            </p>
            <h3 className="font-normal pt text-[#333333] text-[36px]">
              {review.name}
            </h3>
            <p className="text-[20px] font-normal pt text-[#F2994A]">
              {review.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
