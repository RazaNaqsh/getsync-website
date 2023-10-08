import join_main from "../assets/join_main.png";
import join_1 from "../assets/join_1.png";
import join_2 from "../assets/join_2.png";
import join_3 from "../assets/join_3.png";

const JoinSection = () => {
  return (
    <section className="mb-10">
      <div className="py-10 w-[85%] mx-auto">
        <img src={join_main} className="w-full mt-20 mb-8" alt="" />
        <p className="text-center text-[20px] font-semibold tracking-wide">
          "Join our dynamic community to connect, learn, and grow. Students find
          internships, mentors share expertise, and founders discover top
          talent. Together, we shape a brighter future."
        </p>
      </div>

      <div>
        <h1 className="mt-8 my-20 text-[60px] font-bold text-center font-serifDisplay">
          WHO CAN JOIN ?
        </h1>

        <div className="space-y-20">
          <div className="flex w-[85%] mx-auto  justify-around">
            <div>
              <img src={join_1} alt="" />
            </div>
            <div className="w-[760px] bg-[#FFE6B0] border-[1px] border-r-[2px] border-b-[3px] border-black rounded-[10px] py-[15px] px-[30px] ">
              <div>
                <h2 className="text-[30px] font-semibold font-sans">
                  Students
                </h2>
                <p className="text-[20px] text-[#634300]">
                  Whether you're searching for the perfect internship, seeking
                  valuable insights, or looking to develop essential skills,
                  we've got you covered. Access a treasure trove of growth
                  resources, webinars, and mentorship options, all while forging
                  lasting connections with peers and experts. Join us in shaping
                  a brighter future together.
                </p>
              </div>
              <button className="bg-[#A244C3] text-white py-[10px] px-[16px] rounded-[5px] border-[1px] border-black block mx-auto mt-4">
                JOIN NOW
              </button>
            </div>
          </div>

          <div className="flex w-[85%] mx-auto  justify-around">
            <div className="w-[760px] bg-[#FFE6B0] border-[1px] border-r-[2px] border-b-[3px] border-black rounded-[10px] py-[15px] px-[30px]">
              <div>
                <h2 className="text-[30px] font-semibold font-sans">
                  Startups
                </h2>
                <p className="text-[20px] text-[#634300]">
                  Connect with our platform to tap into a pool of motivated,
                  internship-seeking talent. Identify potential future hires,
                  foster relationships with emerging talent, and offer
                  mentorship opportunities to students. <br />
                  Showcase your organization's distinct culture, values, and
                  programs to attract top talent. Elevate your recruitment game
                  with us.
                </p>
              </div>
              <button className="bg-[#A244C3] text-white py-[10px] px-[16px] rounded-[5px] border-[1px] border-black block mx-auto mt-4">
                JOIN NOW
              </button>
            </div>
            <div>
              <img src={join_2} alt="" />
            </div>
          </div>

          <div className="flex w-[85%] mx-auto  justify-around">
            <div>
              <img src={join_3} alt="" />
            </div>
            <div className="w-[760px] bg-[#FFE6B0] border-[1px] border-r-[2px] border-b-[3px] border-black rounded-[10px] py-[15px] px-[30px]">
              <div>
                <h2 className="text-[30px] font-semibold font-sans">Mentors</h2>
                <p className="text-[20px] text-[#634300]">
                  Join our community and become an invaluable resource for both
                  students and founders. <br /> Share your expertise with the
                  next generation and gain exposure for your services. Connect
                  with motivated students seeking guidance and collaborate with
                  innovative founders. It's a win-win opportunity to make a
                  meaningful impact while advancing your own career. Join us
                  today!
                </p>
              </div>
              <button className="bg-[#A244C3] text-white py-[10px] px-[16px] rounded-[5px] border-[1px] border-black block mx-auto mt-4">
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
