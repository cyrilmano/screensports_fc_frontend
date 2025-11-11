import HeroSection from '../components/home/HeroSection';
import ProgramsSection from '../components/home/ProgramsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import NewsSection from '../components/home/NewsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProgramsSection />
      <FeaturesSection />
      <NewsSection />
    </div>
  );
}
