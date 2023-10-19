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
      <Footer />
    </div>
  );
};

export default Home;
