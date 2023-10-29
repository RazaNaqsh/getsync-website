import logo from "../assets/logo.svg";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import yt from "../assets/yt.svg";
import tw from "../assets/tw.svg";

const Footer = () => {
  return (
    <div className="relative  bg-[#232323] flex items-center w-full gap-24 py-[64px] px-[108px] text-white">
      <div className="h-[540px] w-[400px] bg-[#000000] rounded-[16px] p-[30px]"></div>
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
