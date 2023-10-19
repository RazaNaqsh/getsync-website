import Connections from "../../components/Connections";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import JoinSection from "../../components/JoinSection";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div className="bg-[#CBCBCB]">
      <Hero />
      <JoinSection />
      <Services />
      <Connections />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
