import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";

const Footer = () => {
  return (
    <div className="relative h-[355px] bg-[#232323] w-full py-4 text-white">
      <img src={logo} alt="" className="mx-auto mb-12" />

      <div className="flex justify-center gap-8 mt-10 text-[18px]">
        <p>Home</p>
        <p>Student</p>
        <p>Student</p>
        <p>Mentor</p>
        <p>Contact</p>
      </div>

      <div className="flex justify-center items-center mb-12 mt-12 gap-12">
        <p className="text-[20px]">Subscribe</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Email"
            className="p-6 w-[277px] h-[56px] rounded-l-[24px]"
          />
          <button className=" w-[100px] h-[56px] border-2 rounded-r-[24px]">
            <img
              src={arrow}
              alt=""
              className="mx-auto w-[32px] h-[32px] object-contain"
            />
          </button>
        </div>
      </div>

      <p className=" text-center">All Copyrights are reserved @getSync</p>
    </div>
  );
};

export default Footer;
