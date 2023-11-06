import { useState } from "react";
import logo from "../assets/logo.svg";
import burgerIcon from "../assets/burger.svg"; // Add a burger icon

import { motion } from "framer-motion";

const Navbar = () => {
  const tabs = ["Home", "Student", "Startup", "Mentor", "Contact"];
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Track mobile menu state

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.3 }}
        className="w-[90%] mx-auto flex px-4 py-6 justify-between items-center"
      >
        <div>
          <img className="w-full" src={logo} alt="logo" />
        </div>
        {/* Mobile menu burger icon */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={handleMobileMenuToggle}
        >
          <img src={burgerIcon} alt="menu" />
        </div>
        <div className="hidden lg:flex">
          {" "}
          {/* Displayed on desktop */}
          <ul className="flex text-[19px] font-sans gap-12">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  activeTab === tab ? "text-white font-medium" : "text-black"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile menu options (hidden by default) */}
        {mobileMenuOpen && (
          <ul className="bg-white flex flex-col text-[19px] font-sans gap-4 p-4 absolute right-0 top-16">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  activeTab === tab
                    ? "text-[#4F0968] font-medium"
                    : "text-black"
                }`}
                onClick={() => {
                  handleTabClick(tab);
                  handleMobileMenuToggle();
                }}
              >
                {tab}
              </li>
            ))}
          </ul>
        )}
        <div className="hidden lg:block">
          <button className="bg-[#4F0968] border-[1px] border-white text-white rounded-[5px] font-sans w-[146px] h-[41px] text-[18px] shadow-black shadow-sm">
            HACK 2.0
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
