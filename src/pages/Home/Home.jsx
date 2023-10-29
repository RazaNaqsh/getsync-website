import Connections from "../../components/Connections";
import Faq from "../../components/Faq";
import Feedback from "../../components/Feedback";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import JoinSection from "../../components/JoinSection";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div className="bg-[url('assets/bgpage.jpg')] bg-fixed bg-center bg-cover relative">
      <div className="absolute inset-0 bg-white bg-opacity-80 -z-0"></div>
      <div className="relative z-20">
        <Hero />
        <JoinSection />
        <Services />
        <Connections />
        <Faq />
        <Feedback />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
