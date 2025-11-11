import Link from 'next/link';

const programs = [
  {
    id: 1,
    title: "Youth Development Program",
    description: "Comprehensive training for young players aged 6-12 focusing on fundamental skills, teamwork, and love for the game.",
    ageGroup: "6-12 years",
    duration: "12 weeks",
    price: "$299",
    features: ["Ball control", "Passing techniques", "Team coordination", "Fitness training"],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Elite Academy Program",
    description: "Advanced training for competitive players aged 13-18 preparing for college and professional opportunities.",
    ageGroup: "13-18 years",
    duration: "16 weeks",
    price: "$499",
    features: ["Advanced tactics", "Position-specific training", "College recruitment prep", "Video analysis"],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Goalkeeper Academy",
    description: "Specialized training for goalkeepers focusing on technique, positioning, and mental preparation.",
    ageGroup: "10-18 years",
    duration: "10 weeks",
    price: "$399",
    features: ["Shot stopping", "Positioning", "Distribution", "Communication skills"],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function ProgramsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of football training programs designed to develop 
            players of all ages and skill levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                  </div>
                  <span className="text-2xl font-bold text-green-600">{program.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Age Group:</span>
                    <span className="font-medium text-gray-900">{program.ageGroup}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium text-gray-900">{program.duration}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={`/academy#program-${program.id}`}
                  className="block w-full text-center bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/academy"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-green-700 bg-white border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200"
          >
            View All Programs
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}