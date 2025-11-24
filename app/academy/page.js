import ProgramsOverview from '../../components/academy/ProgramsOverview';
import TrainingSchedule from '../../components/academy/TrainingSchedule';
import RegistrationProcess from '../../components/academy/RegistrationProcess';
import Testimonials from '../../components/academy/Testimonials';
import academyData from '../../data/academy.json';

export default function Academy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary via-gray-900 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Academy Programs
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Comprehensive training programs designed to develop complete footballers
              through expert coaching and state-of-the-art facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Programs
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProgramsOverview programs={academyData.programs} />
      <TrainingSchedule />
      <RegistrationProcess />
      <Testimonials />
    </div>
  );
}