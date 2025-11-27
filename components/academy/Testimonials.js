export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Academy Player",
      content: "Screensports FC has transformed my son's football skills and confidence. The coaches are exceptional and truly care about each player's development.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Former Academy Player",
      content: "The training I received at Screensports FC was instrumental in my development. The facilities and coaching quality are world-class.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Academy Parent",
      content: "My daughter has been with the academy for 2 years and the improvement in her skills and game understanding has been remarkable.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Families Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from parents and players about their experience with Screensports FC
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="flex justify-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed text-center">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-4 text-center">
                  <h4 className="font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Growing Community
              </h3>
              <p className="text-gray-600 mb-6">
                Over 500+ families have trusted Screensports FC with their children's football development.
                Be part of our success story.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Active Players</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}