import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const tabs = ["Home", "About", "Events", "Services", "Leadership"];
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav>
      <div className="w-[90%] mx-auto flex px-4 py-6 justify-between items-center">
        <div>
          <img className="object-cover" src={logo} alt="logo" />
        </div>
        <div>
          <ul className="flex text-lg font-sans  gap-10">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  activeTab === tab ? "text-white" : "text-black"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-[#4F0968] border-[1px] border-white  text-white rounded-[5px] font-sans w-[146px] h-[41px] text-[18px] shadow-black shadow-sm">
            HACK 2.0
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
