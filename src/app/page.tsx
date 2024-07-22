import BentoGrid from "./components/BentoGrid";
import CallToAction from "./components/CallToAction";
import HeroSection from "./components/HeroSection";
import Slider from "./components/Slider";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <BentoGrid />
      <Slider />
      <CallToAction />
    </div>
  );
};

export default Home;
