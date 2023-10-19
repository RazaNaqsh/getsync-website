import du from "../assets/du.png";
import cu from "../assets/cu.png";
import su from "../assets/su.png";
import au from "../assets/au.png";
import aktu from "../assets/aktu.png";

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
