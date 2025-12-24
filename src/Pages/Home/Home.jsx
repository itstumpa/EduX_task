import CTASection from "./sections/CTASection";
import FeaturesSection from "./Sections/FeaturesSection";
import HeroSection from "./Sections/HeroSection";
import Testimonials from "./sections/Testimonials";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturesSection />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
