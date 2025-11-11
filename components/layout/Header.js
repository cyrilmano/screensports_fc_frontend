'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academy', href: '/academy' },
    { name: 'News', href: '/news' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-green-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-green-800">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Screensport FC</h1>
                <p className="text-sm text-green-600 font-medium">Football Academy</p>
              </div>
            </Link>
          </div>
          
          <div className="ml-10 hidden space-x-8 lg:block">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-green-600 transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
          
          <div className="ml-10 space-x-4 hidden lg:block">
            <Link
              href="/register"
              className="inline-block rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
            >
              Register Now
            </Link>
          </div>
          
          <div className="ml-6 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/register"
              className="block rounded-md px-3 py-2 text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}