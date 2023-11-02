import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className=" flex justify-center items-center h-[450px] w-full">
      <div className="mt-28">
        <h2 className="leading-6 text-[#FFED48] text-center text-[30px] font-helvetica">
          A Community where
        </h2>
        <h1 className="font-helvetica text-center text-white font-[600] text-[60px] tracking-[2px]">
          Talent meets Opportunity
        </h1>
        <p className="text-white w-[60%] mx-auto text-center text-[19px]">
          <Typewriter
            words={[
              "getSync is a community-based platform that empowers students and founders to learn, earn, and network",
            ]}
            typeSpeed={20}
          />
        </p>
      </div>
    </div>
  );
};

export default Hero;
