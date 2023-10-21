import HeroText from "./HeroText";
import Navbar from "./Navbar";
import Gradient from "../assets/Gradient.png";
import cup from "../assets/cup.svg";
import tie from "../assets/tie.svg";
import line from "../assets/line.svg";
import scroll from "../assets/scroll.svg";

const Header = () => {
  return (
    <div className="relative">
      <div className="z-10 relative h-[900px] overflow-hidden">
        <div className="absolute -z-10 w-full">
          <img src={Gradient} className="w-full h-[950px]" alt="" />
        </div>

        <Navbar />
        <HeroText />

        <img src={scroll} className="relative top-20 block mx-auto " alt="" />

        <img src={cup} className="absolute left-0 top-40" alt="" />
        <img
          src={line}
          className="absolute translate-x-[240px] -translate-y-[459px]  w-[71%]"
          alt=""
        />
        <img src={tie} className="absolute right-0 top-48" alt="" />
      </div>

      <div className="px-10 relative z-30 pt-10 pb-4 w-[85%] -mt-14 rounded-[20px] mx-auto bg-white font-helvetica flex border-[2px] border-black justify-around items-center">
        <p className="text-5xl font-bold leading-5 ">
          1500+ <br /> <span className="text-lg font-medium">Students</span>
        </p>
        <p className="text-5xl font-bold leading-5">
          120+ <br /> <span className="text-lg font-medium">Startups</span>
        </p>
        <p className="text-5xl font-bold leading-5">
          500+ <br /> <span className="text-lg font-medium">Mentors</span>
        </p>
        <p className="text-5xl font-bold leading-5">
          1000+ <br /> <span className="text-lg font-medium">Internships</span>
        </p>
        <p className="text-5xl font-bold leading-5">
          450+ <br /> <span className="text-lg font-medium">Events</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
