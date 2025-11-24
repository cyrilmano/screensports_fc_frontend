'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewsGrid({ news, activeCategory }) {
  const [visibleCount, setVisibleCount] = useState(6);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const filteredNews = news.filter(article =>
    activeCategory === 'All News' || article.category === activeCategory
  );

  const visibleNews = filteredNews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredNews.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Latest Updates
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleNews.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="bg-gradient-to-br from-secondary/10 to-red-50 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📰</div>
                    <p className="text-gray-600 text-sm">News Image</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-50 text-primary px-2 py-1 rounded text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.content.substring(0, 120)}...
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-xs">
                          {article.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {article.author}
                      </span>
                    </div>
                    <Link
                      href={`/news/${article.id}`}
                      className="text-primary hover:text-red-700 font-medium text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}