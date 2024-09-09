/* eslint-disable react/prop-types */
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiArrowRightWideLine } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const InnerLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-6 gap-2 px-3">
      {/* 1st col */}
      <div className="min-h-[100vh] col-span-1 bg-white">
        {/* nav */}
        <div className="bg-[#222222] py-1 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <BsThreeDotsVertical className="text-[#FFC422]" />
            <RiArrowRightWideLine className="text-gray-500 text-xl" />
          </span>
          <span className="flex items-center gap-2">
            <p className="text-[#FFC422] my-0">Sports</p>
            <RiArrowRightWideLine className="text-gray-500" />
          </span>
        </div>
        {/* options */}
        <div className="">
          <div className="flex items-center justify-between border-b border-gray-400 px-2 py-0.5">
            <p className="text-sm">Cricket</p>
            <IoIosArrowDroprightCircle className="text-[#FFC422]" />
          </div>
          <div className="flex items-center justify-between border-b border-gray-400 px-2 py-0.5">
            <p className="text-sm">Soccer</p>
            <IoIosArrowDroprightCircle className="text-[#FFC422]" />
          </div>
          <div className="flex items-center justify-between border-b border-gray-400 px-2 py-0.5">
            <p className="text-sm">Tennis</p>
            <IoIosArrowDroprightCircle className="text-[#FFC422]" />
          </div>
        </div>
      </div>

      {/* 2nd col */}
      <div className="min-h-[100vh] col-span-3">{children}</div>

      {/* 3rd col */}
      <div className="min-h-[100vh] col-span-2 bg-white text-sm">
        <div className="flex items-center justify-between bg-[#284050] text-white p-2">
          <p>Bet Slip</p>
          <p className="border border-white px-1 py-0 my-1 leading-[1] text-sm cursor-pointer">
            -
          </p>
        </div>
      </div>
    </div>
  );
};

export default InnerLayout;
