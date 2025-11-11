'use client';

import { useState } from 'react';

export default function GalleryCategories() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', count: 24 },
    { id: 'training', name: 'Training Sessions', count: 8 },
    { id: 'matches', name: 'Match Action', count: 6 },
    { id: 'facilities', name: 'Facilities', count: 5 },
    { id: 'events', name: 'Events & Awards', count: 5 }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}