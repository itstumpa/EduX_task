import CTASection from "./sections/CTASection";
import FeaturesSection from "./Sections/FeaturesSection";
import HeroSection from "./Sections/HeroSection";
import Testimonials from "./sections/Testimonials";
import TopCategories from "./Sections/TopCategories";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <TopCategories/>
      <FeaturesSection />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
