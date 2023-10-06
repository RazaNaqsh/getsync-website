import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="h-[500px] bg-gradient-to-b from-[#BF82C9] to-[#9F52ED]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
