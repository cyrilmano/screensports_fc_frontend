export default function FacilitiesSection() {
  const facilities = [
    {
      title: "Training Pitches",
      description: "3 full-size FIFA-standard grass pitches and 2 artificial turf fields for year-round training",
      icon: "⚽"
    },
    {
      title: "Fitness Center",
      description: "State-of-the-art gym with specialized equipment for football-specific strength and conditioning",
      icon: "💪"
    },
    {
      title: "Video Analysis Room",
      description: "Advanced video analysis technology for tactical review and performance improvement",
      icon: "📹"
    },
    {
      title: "Medical Center",
      description: "On-site medical facilities with physiotherapy and sports injury rehabilitation services",
      icon: "🏥"
    },
    {
      title: "Accommodation",
      description: "Modern residential facilities for academy players with full board and supervision",
      icon: "🏠"
    },
    {
      title: "Education Center",
      description: "Dedicated learning spaces ensuring academic excellence alongside football development",
      icon: "📚"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art facilities provide the perfect environment 
              for developing elite football talent.
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}