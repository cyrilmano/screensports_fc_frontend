export default function RegistrationProcess() {
  const steps = [
    {
      step: 1,
      title: 'Initial Inquiry',
      description: 'Contact us via phone, email, or our online form to express interest in our programs.',
      icon: '📞'
    },
    {
      step: 2,
      title: 'Assessment Trial',
      description: 'Attend a trial session where our coaches evaluate the player\'s current skill level.',
      icon: '⚽'
    },
    {
      step: 3,
      title: 'Program Recommendation',
      description: 'Receive personalized program recommendations based on age, skill level, and goals.',
      icon: '📋'
    },
    {
      step: 4,
      title: 'Registration & Payment',
      description: 'Complete registration forms and secure your spot with payment.',
      icon: '💳'
    },
    {
      step: 5,
      title: 'Welcome Package',
      description: 'Receive training kit, schedule, and all necessary information to get started.',
      icon: '🎁'
    },
    {
      step: 6,
      title: 'Start Training',
      description: 'Begin your journey with Screensport FC and start developing your football skills.',
      icon: '🚀'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Registration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Joining Screensport FC is simple. Follow these steps to begin 
              your football development journey with us.
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">{step.icon}</span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us today to schedule your assessment trial and take the first step 
                towards becoming part of the Screensport FC family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Schedule Trial
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}