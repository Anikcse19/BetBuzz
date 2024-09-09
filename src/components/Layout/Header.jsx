import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoRefreshOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="px-6 py-5 bg-[#282828]">
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-5">
          <img src="/logo.png" alt="logo" className="w-[200px] h-[30px]" />
          <div className="relative">
            <input
              type="text"
              placeholder="Search events"
              className="px-8 rounded-md outline-none"
            />
            <HiMiniMagnifyingGlass className="absolute top-1/2 -translate-y-1/2 left-3 " />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-between gap-10">
          {/* main balance */}
          <div
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
            className="flex items-center gap-2 bg-[#404040]  rounded-md text-[#FFAD2E] text-base "
          >
            <div className="flex items-center gap-1 pl-2">
              <p>Main Balance</p>
              <p className="font-bold">PUB 100,112.21</p>
            </div>
            <div className="flex items-center gap-1">
              <p>Exposer</p>
              <p className="font-bold">0.00</p>
            </div>
            <div className="bg-black p-1 rounded-tr-md rounded-br-md cursor-pointer">
              <IoRefreshOutline className="rotate-[360deg]" />
            </div>
          </div>
          {/* accounts */}
          <div className="flex items-center gap-1 text-[#FFAD2E] bg-[#393939] rounded-md px-1">
            <FaUser />
            <p>My Account</p>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
