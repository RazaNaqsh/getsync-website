import du from "../assets/du.svg";
import cu from "../assets/cu.svg";
import su from "../assets/su.svg";
import au from "../assets/au.svg";
import aktu from "../assets/aktu.svg";

const Connections = () => {
  return (
    <div className="py-10">
      <h1 className="font-sedan text-[48px] text-center">OUR CONNECTIONS</h1>
      <div className="flex justify-around w-[90%] mx-auto my-12">
        <img src={du} alt="" />
        <img src={cu} alt="" />
        <img src={su} alt="" />
        <img src={au} alt="" />
        <img src={aktu} alt="" />
      </div>
    </div>
  );
};

export default Connections;
