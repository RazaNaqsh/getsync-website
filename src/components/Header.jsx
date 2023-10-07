import Hero from "./Hero";
import Navbar from "./Navbar";
import bg from "../assets/bg.png";

const Header = () => {
  return (
    <div className="relative">
      <div className="absolute -z-10 w-full">
        <img src={bg} className="w-full h-[600px]" alt="" />
      </div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
