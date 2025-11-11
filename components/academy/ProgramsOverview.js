export default function ProgramsOverview({ programs }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of programs designed to meet 
              the needs of players at every level and age group.
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">⚽</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    {program.ageGroup}
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">{program.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Schedule:</span>
                    <span className="font-semibold text-gray-900">{program.schedule}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-green-600 text-lg">{program.price}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}