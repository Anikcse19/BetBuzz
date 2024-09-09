import Layout from "../components/Layout/Layout";
import InnerLayout from "../components/Layout/InnerLayout";
import { BsFillPinFill } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { ImStatsBars } from "react-icons/im";
import { LuAlarmClock } from "react-icons/lu";

const SingleMatchPage = () => {
  return (
    <Layout>
      <InnerLayout>
        <div className="bg-white ">
          <div className="flex items-center justify-center">
            <div className="bg-[#3B5160] h-8  rounded-bl-xl rounded-br-xl flex items-center justify-around">
              <div className="px-12 border-r border-white">
                <BsFillPinFill className="text-white " />
              </div>
              <div className="px-12">
                <IoMdRefresh className="text-white" />
              </div>
            </div>
          </div>

          {/* headingss */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="bg-[#C5D0D7] text-[#243A48] text-sm font-bold px-2 py-2 rounded-tr-3xl">
                Match Odds
              </span>
              <span className="flex items-center gap-2">
                <LuAlarmClock className="bg-[#5FA80F] text-white p-0.5 rounded" />
                <p className="text-[#5FA80F]">In Play</p>
              </span>
            </div>
            <div className="bg-[#BED5D8] flex items-center rounded px-1 justify-between gap-2 text-sm">
              <p>Min1</p>
              <p>Max500</p>
            </div>
            <div className="pr-4">
              <p className="text-sm">
                Matched <p className="font-bold inline">PUB</p> 12123131
              </p>
            </div>
          </div>
        </div>
        {/* table heads */}
        <div className="flex items-center mt-3 text-sm">
          <div className="w-[40%] text-gray-500 pb-1">3 Selections</div>
          <div className="w-[60%] flex items-center justify-between">
            <div className="">
              <p className="pb-1">101.2%</p>
            </div>
            <div className="flex items-center">
              <span className="bg-blue-400 px-2">Back all</span>
              <span className="bg-red-400 px-2">Lay all</span>
            </div>
            <div className="">
              <p className="pb-1">97.7%</p>
            </div>
          </div>
        </div>

        {/* 1st table start*/}
        <div className="flex flex-col">
          {/* 1st row */}
          <div className="flex items-center text-sm bg-white border-t-2 border-slate-600">
            <div className="w-[40%] flex items-center gap-2 px-2">
              <ImStatsBars />
              <p>England</p>
            </div>
            <div className="w-[60%] flex items-center justify-between">
              <div className="w-full bg-red-500 flex items-center">
                <span className="w-full h-10 bg-blue-200 flex flex-col items-center">
                  {/* <p className="font-bold">510</p>
                <p>12</p> */}
                </span>
                <span className="w-full h-10 bg-red-300 flex flex-col items-center">
                  <p className="font-bold">510</p>
                  <p>12</p>
                </span>
              </div>
              <div className="w-full flex items-center">
                <span className="w-full h-10 bg-blue-200 flex flex-col items-center">
                  {/* <p>510</p>
                <p>12</p> */}
                </span>
                <span className="w-full h-10 bg-red-300 flex flex-col items-center">
                  <p className="font-bold">510</p>
                  <p>12</p>
                </span>
              </div>
              <div className="w-full flex items-center">
                <span className="w-full h-10 bg-blue-200 flex flex-col items-center">
                  <p className="font-bold">510</p>
                  <p>12</p>
                </span>
                <span className="w-full h-10 bg-red-300 flex flex-col items-center">
                  <p className="font-bold">510</p>
                  <p>12</p>
                </span>
              </div>
            </div>
          </div>
          {/* 2nd row */}
          <div className="flex items-center text-sm bg-white border-t border-slate-600">
            <div className="w-[40%] flex items-center gap-2 px-2">
              <ImStatsBars />
              <p>Ireland</p>
            </div>
            <div className="w-[60%] flex items-center justify-between">
              <div className="w-full bg-red-500 flex items-center">
                <span className="w-full h-10 bg-blue-200 flex flex-col items-center">
                  <p className="font-bold">510</p>
                  <p>12</p>
                </span>
                <span className="w-full h-10 bg-red-300 flex flex-col items-center">
                  {/* <p className="font-bold">510</p>
                  <p>12</p> */}
                </span>
              </div>
              <div className="w-full flex items-center">
                <span className="w-full h-10 bg-blue-200 flex flex-col items-center">
                  <p>510</p>
                  <p>12</p>
                </span>
                <span className="w-full h-10 bg-red-300 flex flex-col items-center">
                  {/* <p className="font-bold">510</p>
                  <p>12</p> */}
                </span>
              </div>
              <div className="w-full flex items-center">
                <span className="w-full h-10 bg-blue-200 flex flex-col items-center">
                  <p className="font-bold">510</p>
                  <p>12</p>
                </span>
                <span className="w-full h-10 bg-red-300 flex flex-col items-center">
                  <p className="font-bold">510</p>
                  <p>12</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 1st table close */}

        {/* Bookamrk table start */}
        <div className="mt-10">
          <div>
            {/* table heading */}
            <div className="bg-[#243A48] text-white text-sm px-2 py-1 flex items-center justify-between">
              <div className="flex items-center gap-2 ">
                <BsFillPinFill className="text-gray-400" />
                <p className="font-bold">Bookmark Market</p>
                <p className="text-xs text-gray-400">|</p>
                <p className="text-gray-400">Zero Commission</p>
              </div>
              <div className="flex items-center justify-between gap-x-3">
                <div className="flex items-center gap-0.5">
                  <span className="bg-[#BED5D8] px-5 text-xs text-black leading-[1.2] rounded-sm">
                    Min
                  </span>
                  <p>1</p>
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="bg-[#BED5D8] px-5 text-xs text-black leading-[1.2] rounded-sm">
                    Max
                  </span>
                  <p>1000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bookamrk table close */}
      </InnerLayout>
    </Layout>
  );
};

export default SingleMatchPage;
