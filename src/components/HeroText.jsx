import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import TypeWriterText from "./TypeWriterText";

const Hero = () => {
  return (
    <div className=" flex justify-center mt-28 lg:mt-0 lg:items-center h-[330px] md:h-[450px] w-full">
      <div className="lg:mt-28 h-[185px] ">
        <div className="h-[120px]  mx-6 md:mx-0">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 3.3,
              duration: 1,
            }}
            className=" leading-6 text-[#FFED48] text-center py-[2px] px-[15px]  w-fit lg:w-full rounded-[12px] bg-black md:bg-transparent text-[16px] lg:text-[30px] font-helvetica"
          >
            A Community Where
          </motion.h2>
          <motion.h1
            className=" font-helvetica mt-3 md:mt-0 md:text-center text-white font-[600] text-[45px] md:text-[60px] tracking-[2px] leading-[45px] md:leading-none"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 4 }}
          >
            Talent meets Opportunity
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5 }}
          className="mt-6 md:mt-0 w-[300px] md:w-[540px] text-white mx-6 md:mx-auto md:text-center text-[17px] md:text-[19px] leading-[22px] md:leading-0"
        >
          <Typewriter
            words={[
              "",
              "getSync is a community-based platform that empowers students and founders to learn, earn, and network",
            ]}
            typeSpeed={32}
            delaySpeed={4000}
          />
          {/* <TypeWriterText /> */}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
