'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-secondary via-gray-900 to-red-900 text-white py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary bg-opacity-5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-white bg-opacity-5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp">
            Develop Your <span className="text-primary gradient-text">Football</span> Potential
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Join Screensport FC Academy and train with professional coaches using
            state-of-the-art facilities. From youth development to elite training programs,
            we help players of all ages reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/academy"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover-lift animate-pulseGlow"
            >
              Explore Programs
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover-lift"
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
            {/* Stat 1 */}
            <div className="group bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-black/50 transition-all duration-300 hover:-translate-y-2 animate-bounceIn" style={{ animationDelay: '0.8s' }}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">500+</div>
              <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Players Trained</div>
            </div>

            {/* Stat 2 */}
            <div className="group bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-black/50 transition-all duration-300 hover:-translate-y-2 animate-bounceIn" style={{ animationDelay: '1.0s' }}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">15+</div>
              <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Professional Coaches</div>
            </div>

            {/* Stat 3 */}
            <div className="group bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-black/50 transition-all duration-300 hover:-translate-y-2 animate-bounceIn" style={{ animationDelay: '1.2s' }}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">95%</div>
              <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Player Improvement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}