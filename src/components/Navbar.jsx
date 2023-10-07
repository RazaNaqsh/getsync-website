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
      <div className="w-[85%] mx-auto flex px-4 py-6 justify-between items-end">
        <div>
          <img src={logo} alt="logo" />
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
          <img src={logo} alt="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
