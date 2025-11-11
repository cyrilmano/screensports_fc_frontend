export default function MissionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To provide world-class football training and development opportunities 
                for young athletes, fostering both technical excellence and personal growth. 
                We believe in nurturing not just skilled players, but well-rounded individuals 
                who embody sportsmanship, discipline, and leadership.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive training programs combine technical skill development, 
                tactical understanding, physical conditioning, and mental preparation 
                to create complete footballers ready for the challenges of modern football.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To be recognized as the premier football academy in the region, 
                known for developing exceptional talent and producing players who 
                excel at the highest levels of the sport while maintaining strong 
                character and academic achievement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where our graduates represent their countries, 
                compete in top leagues worldwide, and become role models for the 
                next generation of footballers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}