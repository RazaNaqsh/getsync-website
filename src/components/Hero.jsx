import HeroText from "./HeroText";
import Navbar from "./Navbar";
import cup from "../assets/cup.png";
import tie from "../assets/tie.png";
import line from "../assets/line.svg";
import scroll from "../assets/scroll.svg";

const Header = () => {
  return (
    <div className="relative">
      <div className="z-10 relative h-[900px] overflow-hidden bg-slate-700 bg-[url('assets/Gradient.png')] bg-center bg-cover">
        <Navbar />
        <HeroText />

        <img
          src={scroll}
          className="relative top-20 block mx-auto custom-bounce animate-duration-500"
          alt=""
        />

        <img src={cup} className="absolute left-0 top-40" alt="" />
        <img
          src={line}
          className="absolute translate-x-[240px] -translate-y-[459px]  w-[71%]"
          alt=""
        />
        <img src={tie} className="absolute right-0 top-48" alt="" />
      </div>

      <div className="px-10 relative z-30 pt-10 pb-4 w-[85%] -mt-16 rounded-[20px] mx-auto bg-white font-helvetica flex border-[2px] border-black justify-around items-center">
        <p className="text-6xl font-bold leading-7 ">
          1500+ <br /> <span className="text-2xl font-medium">Students</span>
        </p>
        <p className="text-6xl font-bold leading-7">
          120+ <br /> <span className="text-2xl font-medium">Startups</span>
        </p>
        <p className="text-6xl font-bold leading-7">
          1000+ <br /> <span className="text-2xl font-medium">Internships</span>
        </p>
        <p className="text-6xl font-bold leading-7">
          450+ <br /> <span className="text-2xl font-medium">Events</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
