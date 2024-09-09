import { useState } from "react";
import { TbPinnedFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Inplay = () => {
  const [crickTableMin, setCrickTableMin] = useState(false);
  const [soccTableMin, setSoccTableMin] = useState(false);
  const [tennisTableMin, setTennisTableMin] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      {/* cricket table */}
      <div className="mt-10">
        <div className="bg-[#243A48] text-white flex items-center justify-between px-2">
          <p className="text-sm">Cricket</p>
          <p
            onClick={() => setCrickTableMin(!crickTableMin)}
            className="border border-white px-1  my-[6px] leading-[1.2] text-xs cursor-pointer"
          >
            {crickTableMin ? "+" : "-"}
          </p>
        </div>
        {/* all games */}
        <div
          className={`${
            crickTableMin
              ? "h-[0px]"
              : "h-fit transition-all duration-300 ease-in"
          } flex flex-col gap-0.5  overflow-hidden `}
        >
          <div className="flex items-start bg-white hover:bg-gray-200 transition-all duration-200 ease-in cursor-pointer px-2 py-1 text-sm">
            {/* game name */}
            <div className="w-[50%] flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              <div
                onClick={() => {
                  navigate("/singleMatch");
                }}
                className="text-blue-500 font-bold text-xs"
              >
                Gambia Vs Tunsia
              </div>
              <div className="text-green-600 font-bold text-xs">In-Play</div>
            </div>

            {/* game points */}
            <div className="w-[50%] flex items-center justify-end gap-1">
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4"> -- </p>
              </div>
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">--</p>
              </div>{" "}
              <div className="flex items-center gap-0.5">
                <p className="bg-blue-400 px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">2</p>
              </div>
              <div className="border border-gray-500 rounded-full ">
                <TbPinnedFilled className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex items-start bg-white hover:bg-gray-200 transition-all duration-200 ease-in cursor-pointer px-2 py-1 text-sm">
            {/* game name */}
            <div className="w-[50%] flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              <div
                onClick={() => {
                  navigate("/singleMatch");
                }}
                className="text-blue-500 font-bold text-xs"
              >
                Gambia Vs Tunsia
              </div>
              <div className="text-green-600 font-bold text-xs">In-Play</div>
            </div>

            {/* game points */}
            <div className="w-[50%] flex items-center justify-end gap-1">
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4"> -- </p>
              </div>
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">--</p>
              </div>{" "}
              <div className="flex items-center gap-0.5">
                <p className="bg-blue-400 px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">2</p>
              </div>
              <div className="border border-gray-500 rounded-full ">
                <TbPinnedFilled className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* football table */}
      <div className="mt-5">
        <div className="bg-[#243A48] text-white flex items-center justify-between px-2">
          <p className="text-sm">Soccer</p>
          <p
            onClick={() => setSoccTableMin(!soccTableMin)}
            className="border border-white px-1 py-0 my-1 leading-[1] text-sm cursor-pointer"
          >
            {soccTableMin ? "+" : "-"}
          </p>
        </div>
        {/* all games */}
        <div
          className={`${
            soccTableMin
              ? "h-[0px]"
              : "h-fit transition-all duration-300 ease-in"
          } flex flex-col gap-0.5  overflow-hidden `}
        >
          <div className="flex items-start bg-white hover:bg-gray-200 transition-all duration-200 ease-in cursor-pointer px-2 py-1 text-sm">
            {/* game name */}
            <div className="w-[50%] flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              <div
                onClick={() => {
                  navigate("/singleMatch");
                }}
                className="text-blue-500 font-bold text-xs"
              >
                Gambia Vs Tunsia
              </div>
              <div className="text-green-600 font-bold text-xs">In-Play</div>
            </div>

            {/* game points */}
            <div className="w-[50%] flex items-center justify-end gap-1">
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4"> -- </p>
              </div>
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">--</p>
              </div>{" "}
              <div className="flex items-center gap-0.5">
                <p className="bg-blue-400 px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">2</p>
              </div>
              <div className="border border-gray-500 rounded-full ">
                <TbPinnedFilled className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex items-start bg-white hover:bg-gray-200 transition-all duration-200 ease-in cursor-pointer px-2 py-1 text-sm">
            {/* game name */}
            <div className="w-[50%] flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              <div
                onClick={() => {
                  navigate("/singleMatch");
                }}
                className="text-blue-500 font-bold text-xs"
              >
                Gambia Vs Tunsia
              </div>
              <div className="text-green-600 font-bold text-xs">In-Play</div>
            </div>

            {/* game points */}
            <div className="w-[50%] flex items-center justify-end gap-1">
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4"> -- </p>
              </div>
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">--</p>
              </div>{" "}
              <div className="flex items-center gap-0.5">
                <p className="bg-blue-400 px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">2</p>
              </div>
              <div className="border border-gray-500 rounded-full ">
                <TbPinnedFilled className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* teniis table */}
      <div className="mt-5">
        <div className="bg-[#243A48] text-white flex items-center justify-between px-2">
          <p className="text-sm">Tennis</p>
          <p
            onClick={() => setTennisTableMin(!tennisTableMin)}
            className="border border-white px-1 py-0 my-1 leading-[1] text-sm cursor-pointer"
          >
            {tennisTableMin ? "+" : "-"}
          </p>
        </div>
        {/* all games */}
        <div
          className={`${
            tennisTableMin
              ? "h-[0px]"
              : "h-fit transition-all duration-300 ease-in"
          } flex flex-col gap-0.5  overflow-hidden `}
        >
          <div className="flex items-start bg-white hover:bg-gray-200 transition-all duration-200 ease-in cursor-pointer px-2 py-1 text-sm">
            {/* game name */}
            <div className="w-[50%] flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              <div className="text-blue-500 font-bold text-xs">
                Gambia Vs Tunsia
              </div>
              <div className="text-green-600 font-bold text-xs">In-Play</div>
            </div>

            {/* game points */}
            <div className="w-[50%] flex items-center justify-end gap-1">
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4"> -- </p>
              </div>
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">--</p>
              </div>{" "}
              <div className="flex items-center gap-0.5">
                <p className="bg-blue-400 px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">2</p>
              </div>
              <div className="border border-gray-500 rounded-full ">
                <TbPinnedFilled className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex items-start bg-white hover:bg-gray-200 transition-all duration-200 ease-in cursor-pointer px-2 py-1 text-sm">
            {/* game name */}
            <div className="w-[50%] flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              <div className="text-blue-500 font-bold text-xs">
                Gambia Vs Tunsia
              </div>
              <div className="text-green-600 font-bold text-xs">In-Play</div>
            </div>

            {/* game points */}
            <div className="w-[50%] flex items-center justify-end gap-1">
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4"> -- </p>
              </div>
              <div className="flex items-center gap-0.5">
                <p className="bg-[#80C2F1] px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">--</p>
              </div>{" "}
              <div className="flex items-center gap-0.5">
                <p className="bg-blue-400 px-4">5</p>
                <p className="bg-[#FBB7C6] px-4">2</p>
              </div>
              <div className="border border-gray-500 rounded-full ">
                <TbPinnedFilled className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inplay;
