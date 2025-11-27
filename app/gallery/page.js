'use client';

import { useState } from 'react';
import GalleryGrid from '../../components/gallery/GalleryGrid';
import GalleryCategories from '../../components/gallery/GalleryCategories';
import galleryData from '../../data/gallery.json';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Calculate counts
  const counts = {
    all: 0,
    training: 0,
    matches: 0,
    facilities: 0,
    events: 0
  };

  galleryData.categories.forEach(cat => {
    const count = cat.images.length;
    counts[cat.id] = count;
    counts.all += count;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary via-gray-900 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our collection of photos showcasing training sessions, matches,
              facilities, and memorable moments from Screensports FC
            </p>
          </div>
        </div>
      </section>

      <GalleryCategories
        activeCategory={activeCategory}
        onCategorySelect={setActiveCategory}
        counts={counts}
      />
      <GalleryGrid
        galleryData={galleryData}
        activeCategory={activeCategory}
      />
    </div>
  );
}