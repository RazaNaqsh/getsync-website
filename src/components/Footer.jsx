import logo from "../assets/logo.svg";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import yt from "../assets/yt.svg";
import tw from "../assets/tw.svg";

const Footer = () => {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative  bg-[#232323] flex items-center w-full gap-24 py-[64px] px-[108px] text-white">
      <div className="h-[540px] w-[400px] bg-[#000000] rounded-[16px] p-[30px]">
        <h3 className="text-[#FFED48] text-[10px] font-helvetica font-light">
          FEEDBACK
        </h3>
        <h1 className="font-helvetica text-[28px] leading-7 my-6">
          Have any Feedback or Query?
        </h1>
        <form onSubmit={submit} className="space-y-5">
          <input
            type="text"
            className="bg-transparent border-[1px] text-[12px] w-[340px] h-[56px] py-[8px] px-[12px] rounded-[12px]"
            placeholder="FULL NAME"
          />
          <input
            type="email"
            className="bg-transparent border-[1px] text-[12px] w-[340px] h-[56px] py-[8px] px-[12px] rounded-[12px]"
            placeholder="FULL NAME"
          />
          <input
            type="text"
            className="bg-transparent border-[1px] text-[12px] w-[340px] h-[97px] py-[8px] px-[12px] rounded-[12px]"
            placeholder="MESSAGE"
          />
          <button className="border-[1px] border-b-[3px] border-r-[2px] border-white rounded-[50px] py-[10px] px-[30px]  text-[14px] bg-[#7B209B] text-white">
            Send
          </button>
        </form>
        <p className="text-[10px] opacity-40 font-helvetica mt-5 ml-2">
          Privacy
        </p>
      </div>
      <div className="w-[70%]  h-[460px] p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 px-6">
              <div className="w-[200px] h-[125px]">
                <h3 className="text-[#FFED48] text-[16px] font-helvetica font-medium mb-2">
                  COMPANY LINKS
                </h3>
                <ul className="font-helvetica space-y-1 text-[14px]">
                  <li>About us</li>
                  <li>Privacy</li>
                  <li>Terms of use</li>
                  <li>Verify Certificate</li>
                </ul>
              </div>
              <div className="w-[240px] h-[125px]">
                <h3 className="text-[#FFED48] text-[16px] font-helvetica font-medium mb-2">
                  QUICK LINKS
                </h3>
                <ul className="font-helvetica space-y-1 text-[14px]">
                  <li>Student Internships</li>
                  <li>College Competitions</li>
                  <li>Startup Founded / Recruiter</li>
                </ul>
              </div>
              <div className="w-[240px] h-[125px] mt-4">
                <h3 className="text-[#FFED48] text-[16px] font-helvetica font-medium mb-2">
                  CONTACT US
                </h3>
                <ul className="font-helvetica space-y-1 text-[14px]">
                  <li> +91 9315 845277</li>
                  <li>contact.getsync@gmail.com</li>
                  <li>Noida</li>
                </ul>
              </div>
            </div>
            <div className="w-[230px] h-[50px] ml-6 flex gap-4">
              <img src={fb} alt="" />
              <img src={ig} alt="" />
              <img src={yt} alt="" />
              <img src={tw} alt="" />
            </div>
          </div>
          <img src={logo} alt="" className="" />
        </div>
        <p className="text-center text-[10px] font-light opacity-40 mt-20 text-[#ffffff]">
          © 2023 — Copyright
        </p>
      </div>
    </div>
  );
};

export default Footer;
