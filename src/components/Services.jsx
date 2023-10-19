import React from "react";

const Services = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-center font-sedan text-[48px] mb-4">SERVICES</h1>
        <div className="text-[20px] font-helvetica text-center leading-7 font-medium">
          <p>“at getSync, your success is our priority”</p>
          <p>
            Over 50% of our services are completely FREE for students and
            startups.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-12 p-4 tracking-wide ">
        <div className="bg-[#7B209B] border-2 border-black border-r-4 border-b-4 w-[595px] h-[500px] rounded-[20px] px-[30px] py-[20px]">
          <h1 className="text-[#FFED48] font-semibold text-[40px] text-center mb-2">
            STARTUPS
          </h1>
          <ul className="text-white text-[22px] space-y-2 list-disc px-12">
            <li>Hire talented Interns</li>
            <li>Connects with other entrepreneurs</li>
            <li>Exclusive Resources(Podcasts, Blogs etc)</li>
            <li>Connect & Collaborate with students from all across India</li>
            <li>Mentorship session with experts</li>
            <li>Regular Meetups</li>
          </ul>
          <button className="mt-12 font-bold w-[190px] text-[20px] bg-[#FFED48] border-2 border-black border-b-[3px] border-r-[3px] block mx-auto rounded-[5px] py-2 ">
            KNOW MORE
          </button>
        </div>
        <div className="bg-[#7B209B] border-2 border-black border-r-4 border-b-4 w-[595px] h-[500px] rounded-[20px]  px-[30px] py-[20px]">
          <h1 className="text-[#FFED48] text-[40px] font-semibold text-center mb-2">
            STUDENTS
          </h1>
          <ul className="text-white  text-[22px] space-y-2 px-12 list-disc">
            <li> Regular Internship Updates</li>
            <li>Competitions, Events & Hackathons Updates</li>
            <li>Community of Students Across India</li>
            <li>Guaranteed Internships</li>
            <li>Engaging Meet-ups </li>
            <li>1:1 Mentorship Sessions</li>
          </ul>
          <button className="mt-12 font-bold w-[190px] text-[20px] bg-[#FFED48] border-2 border-black border-b-[3px] border-r-[3px] block mx-auto rounded-[5px] py-2 ">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
