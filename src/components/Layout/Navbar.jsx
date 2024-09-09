import { CiStreamOn } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-4 font-sans bg-[#FFC422]">
      {/* left side-navs */}
      <div className="flex items-center font-bold text-sm">
        {navItems?.map((nav) => (
          <div
            onClick={() => navigate(`${nav?.link}`)}
            style={{
              boxShadow:
                location.pathname == nav.link &&
                " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
            key={nav.id}
            className={`${
              location.pathname == nav.link && "bg-[#FFDC7A]"
            } px-2 py-1 relative cursor-pointer`}
          >
            {nav.title}

            {nav.stream && (
              <div className="absolute -top-0.5 -translate-y-1/2 bg-white flex items-center gap-1 rounded">
                <CiStreamOn className="text-red-700 font-bold pl-0.5 text-base" />
                <p className="bg-red-600 text-white px-1 text-xs rounded-tr rounded-br">
                  {nav.stream}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* right side */}
      <div className="flex items-center gap-3 text-sm">
        <div className="flex items-center gap-1">
          <p className="text-gray-700">Time Zone:</p>
          <p className="font-bold">GMT+5.30</p>
        </div>
        <div className="flex items-center gap-1 bg-black px-2 py-1">
          <label className="custom-checkbox">
            <input type="checkbox" className="hidden-checkbox" />
            <span className="custom-checkbox-box"></span>
          </label>
          <p className="text-[#FFC422]">One Click Bet</p>
        </div>
        <div className="flex items-center gap-1">
          <p>Setting</p>
          <IoIosSettings />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const navItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "In-Play",
    link: "/in-play",
  },
  {
    id: 3,
    title: "Multi Market",
    link: "/multi-market",
  },
  {
    id: 4,
    title: "Circket",
    link: "/cricket",
    stream: 3,
  },
  {
    id: 5,
    title: "Soccer",
    link: "/soccer",
    stream: 4,
  },
  {
    id: 6,
    title: "Tennis",
    link: "/tennis",
    stream: 2,
  },
];
