import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaSyringe } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const WhyChooseUs = () => {
  return (
    <section className=" py-[121px] container ">
      <div className="container mx-auto text-center">
        <h2 className="pt text-[48px] font-normal mb-4">
          Why <span className="text-red-500">choose</span> us
        </h2>
        <p className="mb-8 w-[526px] m-auto text-gray-700 text-lg">
          SLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>
      <div className="flex justify-between">
        <div className=" w-[380px] h-[275px] pt-8 pl-[26px] bg-[#F0EFEA] rounded-[5px]">
          <div className=" w-[58px] h-[58px] p-[11px]  text-4xl rounded-full shadow-2xl text-[#C51605] bg-[#CDD5CA]">
            <IoIosStar />
          </div>
          <h5 className="inter font-bold text-[22px] pt-5 pb-[11px] ">
            Dermatologist Tested
          </h5>
          <p className="w-[313px] inter font-medium text-[18px] text-[#A0A79A] leading-[145%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
        <div className=" w-[380px] h-[275px] pt-8 pl-[26px] bg-[#F0EFEA] rounded-[5px]">
          <div className=" w-[58px] h-[58px] p-[11px]  text-4xl rounded-full shadow-2xl text-[#C51605] bg-[#CDD5CA]">
            <FaSyringe />
          </div>
          <h5 className="inter font-bold text-[22px] pt-5 pb-[11px] ">
            Allergy tested
          </h5>
          <p className="w-[313px] inter font-medium text-[18px] text-[#A0A79A] leading-[145%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
        <div className=" w-[380px] h-[275px] pt-8 pl-[26px] bg-[#F0EFEA] rounded-[5px]">
          <div className=" w-[58px] h-[58px] p-[11px]  text-4xl rounded-full shadow-2xl text-[#C51605] bg-[#CDD5CA]">
            <TiTick />
          </div>
          <h5 className="inter font-bold text-[22px] pt-5 pb-[11px] ">
            Non-comedogenic
          </h5>
          <p className="w-[313px] inter font-medium text-[18px] text-[#A0A79A] leading-[145%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
