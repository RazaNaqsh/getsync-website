import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="relative h-[355px] bg-[#7B209B] w-full py-4 text-white">
      <img src={logo} alt="" className="mx-auto mb-12" />

      <div className="flex justify-center gap-10 my-10 text-[18px]">
        <p>Home</p>
        <p>Student</p>
        <p>Student</p>
        <p>Mentor</p>
        <p>Contact</p>
      </div>

      <p className=" text-center">All Copyrights are reserved @getSync</p>
    </div>
  );
};

export default Footer;
