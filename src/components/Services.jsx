import bullet from "../assets/bullet.svg";

const Services = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-center font-sedan text-[32px] md:text-[48px] mb-4">
          SERVICES
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12 p-4 tracking-wide ">
        <div className="bg-[#7B209B] border-2 border-black border-r-4 border-b-5 md:w-[595px] md:h-[500px] rounded-[20px] px-[30px] py-[20px]">
          <h1 className="text-[#FFED48] font-semibold text-[16px] md:text-[40px] text-center mb-2">
            STARTUPS
          </h1>
          <ul className="text-white text-[12px] md:text-[22px] space-y-2 list-disc md:px-4 md:pr-8">
            <li className="flex gap-4">
              <img src={bullet} alt="" />
              Hire talented Interns
            </li>
            <li className="flex gap-4">
              <img src={bullet} alt="" />
              Connects with other entrepreneurs
            </li>
            <li className="flex gap-4">
              <img src={bullet} alt="" />
              Exclusive Resources(Podcasts, Blogs etc)
            </li>
            <li className="flex gap-4 items-baseline">
              <img src={bullet} alt="" />
              Connect & Collaborate with students from all across India
            </li>
            <li className="flex gap-4">
              <img src={bullet} alt="" />
              Mentorship session with experts
            </li>
            <li className="flex gap-4">
              <img src={bullet} alt="" />
              Regular Meetups
            </li>
          </ul>
          <button className="mt-4 md:mt-12 font-bold md:w-[190px] text-[12px] md:text-[20px] bg-[#FFED48] border-2 border-black border-b-[3px] border-r-[3px] block mx-auto rounded-[5px] px-2 py-2 shadow-sm shadow-black">
            KNOW MORE
          </button>
        </div>
        <div className="bg-[#7B209B] border-2 border-black border-r-4 border-b-5 md:w-[595px] md:h-[500px] rounded-[20px] px-[30px] py-[20px]">
          <h1 className="text-[#FFED48] font-semibold text-[16px] md:text-[40px] text-center mb-2">
            STUDENTS
          </h1>
          <ul className="text-white text-[12px] md:text-[22px] space-y-2 list-disc md:px-4 md:pr-8">
            <li className="flex gap-4">
              <img src={bullet} alt="" />
              Regular Internship Updates
            </li>
            <li className="flex gap-4 items-baseline">
              <img src={bullet} alt="" />
              Competitions, Events & Hackathons Updates
            </li>
            <li className="flex gap-4">
              <img src={bullet} alt="" />
              Community of Students Across India
            </li>
            <li className="flex gap-4">
              <img src={bullet} alt="" />
              Guaranteed Internships
            </li>
            <li className="flex gap-4">
              <img src={bullet} alt="" />
              Engaging Meet-ups{" "}
            </li>
            <li className="flex gap-4">
              <img src={bullet} alt="" />
              1:1 Mentorship Sessions
            </li>
          </ul>
          <button className="mt-4 md:mt-12 font-bold md:w-[190px] text-[12px] md:text-[20px] bg-[#FFED48] border-2 border-black border-b-[3px] border-r-[3px] block mx-auto rounded-[5px] px-2 py-2 shadow-sm shadow-black">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
