import { TbPinnedFilled } from "react-icons/tb";
import InnerLayout from "../components/Layout/InnerLayout";
import Layout from "../components/Layout/Layout";

const Soccer = () => {
  return (
    <Layout>
      <InnerLayout>
        <div className=" w-full">
          <img className="w-full" src="/footballBanner.jpg" alt="" />
        </div>

        {/* highlights table */}
        <div className="mt-10">
          <div className="bg-[#FFB80C]  flex items-center justify-between px-2">
            <p className="text-sm font-bold py-1">Highlights</p>
          </div>
          {/* all games */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-start bg-white hover:bg-gray-200 transition-all duration-200 ease-in cursor-pointer px-2 py-1 text-sm">
              {/* game name */}
              <div className="w-[50%] flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-600" />
                <div className="text-blue-500 font-bold text-xs cursor-pointer hover:underline">
                  Gambia Vs Tunsia
                </div>
                <div className="text-green-600 font-bold text-xs">In-Play</div>
              </div>

              {/* game points */}
              <div className="w-[50%] flex items-center justify-end gap-1">
                <div className="bg-[#0A92A5] text-white text-xs py-0.5 px-1 rounded-sm">
                  <p className="leading-[1]">Fancy</p>
                </div>
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
      </InnerLayout>
    </Layout>
  );
};

export default Soccer;
