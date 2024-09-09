import { useState } from "react";
import InnerLayout from "../components/Layout/InnerLayout";
import Layout from "../components/Layout/Layout";

import Inplay from "../components/Inplay";
import TodayMatch from "../components/TodayMatch";
import TomorrowMatches from "../components/TomorrowMatches";

const InPlay = () => {
  const [currentTab, setCurrentTab] = useState("in-play");
  return (
    <Layout>
      <InnerLayout>
        {/* tab start*/}
        <div className="mt-5">
          <div className="bg-white inline-flex items-center border border-slate-700 rounded overflow-hidden">
            <div
              onClick={() => setCurrentTab("in-play")}
              className={`${
                currentTab == "in-play" && "bg-[#3B5160] text-white"
              } px-5  font-bold cursor-pointer border-r border-[#3B5160]`}
            >
              In-Play
            </div>
            <div
              onClick={() => setCurrentTab("today")}
              className={`${
                currentTab == "today" && "bg-[#3B5160] text-white"
              } px-5  font-bold cursor-pointer border-r border-[#3B5160]`}
            >
              Today
            </div>
            <div
              onClick={() => setCurrentTab("tomorrow")}
              className={`${
                currentTab == "tomorrow" && "bg-[#3B5160] text-white"
              } px-5  font-bold cursor-pointer`}
            >
              Tomorrow
            </div>
          </div>
        </div>
        {/* /tab end */}

        {currentTab === "in-play" ? (
          <Inplay />
        ) : currentTab === "today" ? (
          <TodayMatch />
        ) : currentTab === "tomorrow" ? (
          <TomorrowMatches />
        ) : null}
      </InnerLayout>
    </Layout>
  );
};

export default InPlay;
