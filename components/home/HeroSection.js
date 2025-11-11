'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-white bg-opacity-5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-white bg-opacity-5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp">
            Develop Your <span className="text-yellow-300 gradient-text">Football</span> Potential
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            Join Screensport FC Academy and train with professional coaches using 
            state-of-the-art facilities. From youth development to elite training programs, 
            we help players of all ages reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <Link
              href="/academy"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover-lift animate-pulseGlow"
            >
              Explore Programs
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/register"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-green-700 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover-lift"
            >
              Register Now
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="container mx-auto px-4 mt-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 animate-bounceIn hover-lift" style={{animationDelay: '0.8s'}}>
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-blue-100">Players Trained</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 animate-bounceIn hover-lift" style={{animationDelay: '1.0s'}}>
              <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="text-blue-100">Professional Coaches</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 animate-bounceIn hover-lift" style={{animationDelay: '1.2s'}}>
              <div className="text-3xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-blue-100">Player Improvement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}