import HeroText from "./HeroText";
import Navbar from "./Navbar";
import Gradient from "../assets/Gradient.png";
import cup from "../assets/cup.png";
import tie from "../assets/tie.png";
import line from "../assets/line.png";
import share from "../assets/share.png";

const Header = () => {
  return (
    <div className="relative">
      <div className="relative h-[730px] overflow-hidden">
        <div className="absolute -z-10 w-full">
          <img src={Gradient} className="w-full h-[790px]" alt="" />
        </div>
        <Navbar />
        <HeroText />
        <img src={cup} className="absolute left-0 top-28" alt="" />
        <img
          src={line}
          className="absolute translate-x-[285px] -translate-y-[340px] w-[69%]"
          alt=""
        />
        <img src={tie} className="absolute right-0 top-52" alt="" />
      </div>
      <button className="-mt-8 mx-auto -bottom-7 py-3  w-[350px] rounded-full  bg-white border-2 border-t-[3px] border-black border-r-4 border-b-[6px] font-bold text-lg flex justify-center gap-8 items-center">
        <p>JOIN NOW</p>
        <img src={share} alt="" />
      </button>
    </div>
  );
};

export default Header;
