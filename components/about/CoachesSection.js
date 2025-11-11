import academyData from '../../data/academy.json';

export default function CoachesSection() {
  const coaches = academyData.coaches;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Coaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our coaching staff brings together decades of professional experience 
              and a passion for developing young talent.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {coach.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {coach.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {coach.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {coach.experience}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    {coach.qualifications.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}