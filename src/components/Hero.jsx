import HeroText from "./HeroText";
import Navbar from "./Navbar";
import cup from "../assets/cup.png";
import tie from "../assets/tie.png";
import line from "../assets/line.svg";
import scroll from "../assets/scroll.svg";
import CountUp from "react-countup";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="z-30 relative h-[900px] overflow-hidden bg-slate-700 bg-[url('assets/GradientCompressed.png')] bg-center bg-cover"
      >
        <Navbar />
        <HeroText />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6, duration: 1 }}
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
      </motion.div>

      <div className="px-10 relative z-50 pt-10 pb-4 w-[85%] -mt-16 rounded-[20px] mx-auto bg-white font-helvetica flex border-[2px] border-black justify-around items-center">
        <p className="text-6xl font-bold leading-7 ">
          <CountUp
            start={0}
            end={1500}
            duration={1.3}
            enableScrollSpy
            scrollSpyOnce
          />
          + <br /> <span className="text-2xl font-medium pl-2">Students</span>
        </p>
        <p className="text-6xl font-bold leading-7">
          <CountUp
            start={0}
            end={50}
            duration={1.3}
            enableScrollSpy
            scrollSpyOnce
          />
          + <br /> <span className="text-2xl font-medium">Startups</span>
        </p>
        <p className="text-6xl font-bold leading-7">
          <CountUp
            start={0}
            end={1200}
            duration={1.3}
            enableScrollSpy
            scrollSpyOnce
          />
          + <br />{" "}
          <span className="text-2xl font-medium pl-2">Internships</span>
        </p>
        <p className="text-6xl font-bold leading-7">
          <CountUp
            start={0}
            end={450}
            duration={1.3}
            enableScrollSpy
            scrollSpyOnce
          />
          + <br /> <span className="text-2xl font-medium">Events</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
