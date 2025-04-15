import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Navigation from "./navigation";
const Arrow = IoIosArrowRoundForward as React.FC<{ size?: number,  }>;
const Banner = () => {
  return (
    <div
      className="flex text-white justify-between w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url("/images/banner.png")` }}
    >
      <div
        className="w-full bg-cover !px-0"
        style={{ backgroundImage: `url("/images/banner-wrapper.png")` }}
      >
        <Navigation />
        <div className="lg:px-[120px] px-10">
          <div className="grid pt-[125px]">
            <span className="text-[#FAB107] font-bold lg:text-[64px] text-[30px]">CONTRUCTION <br /> INVESTMENT</span>
            <span>Smater solution for your home</span>
            <span>
                <button className="btn bg-[#FAB107] w-[250px] py-2 mt-[150px] mb-14 flex justify-center items-center" type="button">See our service <Arrow size={20}/></button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
