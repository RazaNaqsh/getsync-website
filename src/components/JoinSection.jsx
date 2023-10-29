import join_main from "../assets/join_main.svg";
import join_1 from "../assets/join_1.svg";
import join_2 from "../assets/join_2.svg";
import join_3 from "../assets/join_3.svg";

const JoinSection = () => {
  return (
    <section className="pb-20">
      <div className="py-10 w-[85%] mx-auto">
        <img src={join_main} className="w-full mt-20 mb-8" alt="" />
        <p className="text-center text-[20px] font-noto font-[500] ">
          Welcome to our vibrant community, where connection, learning, and
          growth take centre stage. Our platform bridges the gap between
          students seeking valuable internships, mentors eager to share their
          expertise, and founders in search of top-tier talent. <br /> <br />
          By coming together, we pave the way for a brighter and more promising
          future, empowering individuals to thrive and succeed.
        </p>
      </div>

      <div>
        <h1 className=" mt-24 mb-10 text-[60px] font-normal text-center font-sedan">
          WHO CAN JOIN ?
        </h1>

        <div className="space-y-20">
          <div className="flex w-[85%] mx-auto  justify-around">
            <div>
              <img src={join_1} alt="" />
            </div>
            <div className="w-[760px] h-[291px] bg-white border-[1px] border-r-[2px] border-b-[4px] border-black rounded-[10px] py-[12px] px-[30px] ">
              <div>
                <h2 className="text-[28px] font-semibold font-sans">
                  Students
                </h2>
                <p className="text-[20px] ">
                  Whether you're searching for the perfect internship, seeking
                  valuable insights, or looking to develop essential skills,
                  we've got you covered. Access a treasure trove of growth
                  resources, webinars, and mentorship options, all while forging
                  lasting connections with peers and experts. Join us in shaping
                  a brighter future together.
                </p>
              </div>
              <button className="bg-[#A244C3] font-semibold text-white py-[10px] px-[16px] rounded-[5px] border-[1px] border-black border-r-[3px] border-b-[4px] block mx-auto mt-4">
                JOIN NOW
              </button>
            </div>
          </div>

          <div className="flex w-[85%]  mx-auto  justify-around">
            <div className="w-[760px] h-[300px] bg-white border-[1px] border-r-[2px] border-b-[4px] border-black rounded-[10px] py-[12px] px-[30px]">
              <div>
                <h2 className="text-[30px] font-semibold font-sans">
                  Startups
                </h2>
                <p className="text-[19px] ">
                  Connect with our platform to tap into a pool of motivated,
                  internship-seeking talent. Identify potential future hires,
                  foster relationships with emerging talent, and offer
                  mentorship opportunities to students. <br />
                  Showcase your organization's distinct culture, values, and
                  programs to attract top talent. Elevate your recruitment game
                  with us.
                </p>
              </div>
              <button className="bg-[#A244C3] font-semibold text-white py-[10px] px-[16px] rounded-[5px] border-[1px] border-black border-r-[3px] border-b-[4px] block  mx-auto mt-8">
                JOIN NOW
              </button>
            </div>
            <div>
              <img src={join_2} alt="" />
            </div>
          </div>

          <div className="flex w-[85%]  mx-auto  justify-around">
            <div>
              <img src={join_3} alt="" />
            </div>
            <div className="w-[760px] h-[300px] bg-white border-[1px] border-r-[3px] border-b-[4px] border-black rounded-[10px] py-[12px] px-[30px]">
              <div>
                <h2 className="text-[28px] font-semibold font-sans">Mentors</h2>
                <p className="text-[19px] ">
                  Join our community and become an invaluable resource for both
                  students and founders. <br />
                  Share your expertise with the next generation and gain
                  exposure for your services. Connect with motivated students
                  seeking guidance and collaborate with innovative founders.
                  It's a win-win opportunity to make a meaningful impact while
                  advancing your own career. Join us today!
                </p>
              </div>
              <button className="bg-[#A244C3] font-semibold text-white py-[10px] px-[16px] rounded-[5px] border-[1px] border-black border-r-[3px] border-b-[4px] block mx-auto mt-2">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
