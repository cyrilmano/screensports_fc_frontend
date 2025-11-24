'use client';

import { useState } from 'react';
import NewsGrid from '../../components/news/NewsGrid';
import NewsCategories from '../../components/news/NewsCategories';
import FeaturedNews from '../../components/news/FeaturedNews';
import newsData from '../../data/news.json';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All News');

  const featuredNews = newsData.articles[0]; // Get the first news item as featured
  const regularNews = newsData.articles.slice(1); // Get the rest as regular news

  // Calculate counts
  const counts = {
    'All News': newsData.articles.length,
    'Academy Updates': 0,
    'Player Achievements': 0,
    'Tournament News': 0,
    'Training Programs': 0,
    'Events': 0
  };

  newsData.articles.forEach(article => {
    // Map data categories to tab names if they differ, or ensure data matches tabs
    // Assuming data categories match tab names or need mapping.
    // Let's check data categories from previous file view: "Academy News", "Youth Programs", "Specialized Training", "Player Achievements"
    // The tabs in NewsCategories are: 'Academy Updates', 'Player Achievements', 'Tournament News', 'Training Programs', 'Events'
    // There is a mismatch. I should align the tabs with the actual data categories found in news.json.

    // Let's normalize the counting based on actual data categories first.
    if (counts[article.category] !== undefined) {
      counts[article.category]++;
    } else {
      // If the category from data isn't in our initial counts object, we might want to add it or map it.
      // For now, let's just count what we have.
      // Actually, it's better to generate the tabs DYNAMICALLY from the data to avoid mismatches.
    }
  });

  // REVISED STRATEGY: Generate categories dynamically from data
  const allCategories = ['All News', ...new Set(newsData.articles.map(a => a.category))];
  const dynamicCounts = { 'All News': newsData.articles.length };

  newsData.articles.forEach(article => {
    dynamicCounts[article.category] = (dynamicCounts[article.category] || 0) + 1;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary via-gray-900 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Latest News
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay updated with the latest news, events, and achievements from Screensport FC
            </p>
          </div>
        </div>
      </section>

      {activeCategory === 'All News' && <FeaturedNews news={featuredNews} />}
      <NewsCategories
        activeCategory={activeCategory}
        onCategorySelect={setActiveCategory}
        categories={allCategories}
        counts={dynamicCounts}
      />
      <NewsGrid
        news={activeCategory === 'All News' ? regularNews : newsData.articles}
        activeCategory={activeCategory}
      />
    </div>
  );
}