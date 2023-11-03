import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" flex justify-center items-center h-[450px] w-full ">
      <div className="mt-28  h-[185px] ">
        <div className="h-[120px]">
          <motion.h2
            initial={{ y: -65, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            className=" leading-6 text-[#FFED48] text-center text-[30px] font-helvetica"
          >
            A Community where
          </motion.h2>
          <motion.h1
            className=" font-helvetica text-center text-white font-[600] text-[60px] tracking-[2px]"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 2.5 }}
          >
            Talent meets Opportunity
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
          className=" text-white w-[60%] mx-auto text-center text-[19px]"
        >
          <Typewriter
            words={[
              "",
              "getSync is a community-based platform that empowers students and founders to learn, earn, and network",
            ]}
            typeSpeed={30}
            delaySpeed={1000}
          />
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
