import HeroText from "./HeroText";
import Navbar from "./Navbar";
import scroll from "../assets/scroll.svg";
import CountUp from "react-countup";

import { motion } from "framer-motion";
import frame from "../assets/Frame.json";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const animationDelay = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);
    return () => {
      clearTimeout(animationDelay);
    };
  }, []);
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="z-30 relative h-[925px] lg:h-[900px] overflow-hidden bg-slate-700 bg-[url('assets/GradientCompressed.png')] bg-center bg-cover"
      >
        <Navbar />
        <HeroText />

        {/* For mobile */}
        <motion.div
          className="z-50 font-helvetica flex flex-wrap justify-around items-center md:hidden text-white border-[1px] rounded-[6px] py-[10px] px-[30px] w-[210px] h-[110px] gap-[15px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 11, duration: 1 }}
        >
          <p className="text-[20px] font-bold  leading-[13px]">
            <CountUp
              start={0}
              end={1500}
              duration={1.3}
              enableScrollSpy
              scrollSpyOnce
              delay={11}
            />
            + <br /> <span className="text-[10px] font-normal">Students</span>
          </p>
          <p className="text-[20px] font-bold leading-[13px]">
            <CountUp
              start={0}
              end={50}
              duration={1.3}
              enableScrollSpy
              scrollSpyOnce
              delay={11}
            />
            + <br /> <span className="text-[10px] font-normal">Startups</span>
          </p>
          <p className="text-[20px] font-bold leading-[13px]">
            <CountUp
              start={0}
              end={1200}
              duration={1.3}
              enableScrollSpy
              scrollSpyOnce
              delay={11}
            />
            + <br />{" "}
            <span className="text-[10px] font-normal">Internships</span>
          </p>
          <p className="text-[20px] font-bold leading-[13px]">
            <CountUp
              start={0}
              end={450}
              duration={1.3}
              enableScrollSpy
              scrollSpyOnce
              delay={11}
            />
            + <br /> <span className="text-[10px] font-normal">Events</span>
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 9, duration: 1 }}
          src={scroll}
          className="relative top-28 md:top-20 block mx-auto custom-bounce animate-duration-500"
          alt=""
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute w-full top-40 hidden md:block"
        >
          {startAnimation && <Lottie animationData={frame} loop={false} />}
        </motion.div>
      </motion.div>

      <div className="hidden md:flex px-10 relative z-50 pt-10 pb-4 w-[85%] -mt-16 rounded-[20px] mx-auto bg-white font-helvetica  border-[2px] border-black justify-around items-center">
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
