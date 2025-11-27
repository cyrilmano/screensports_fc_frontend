import MissionSection from '../../components/about/MissionSection';
import CoachesSection from '../../components/about/CoachesSection';
import FacilitiesSection from '../../components/about/FacilitiesSection';
import ContactSection from '../../components/about/ContactSection';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary via-gray-900 to-red-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Screensports FC
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Developing the next generation of football talent through expert coaching,
              state-of-the-art facilities, and a commitment to excellence.
            </p>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="text-2xl">💬</span>
              Chat on WhatsApp
            </a>
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