import MissionSection from '../../components/about/MissionSection';
import CoachesSection from '../../components/about/CoachesSection';
import FacilitiesSection from '../../components/about/FacilitiesSection';
import ContactSection from '../../components/about/ContactSection';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-green-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Screensport FC
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Developing the next generation of football talent through expert coaching, 
              state-of-the-art facilities, and a commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <MissionSection />
      <CoachesSection />
      <FacilitiesSection />
      <ContactSection />
    </div>
  );
}