import NewsGrid from '../../components/news/NewsGrid';
import NewsCategories from '../../components/news/NewsCategories';
import FeaturedNews from '../../components/news/FeaturedNews';
import newsData from '../../data/news.json';

export default function News() {
  const featuredNews = newsData.news[0]; // Get the first news item as featured
  const regularNews = newsData.news.slice(1); // Get the rest as regular news

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Latest News
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Stay updated with the latest news, events, and achievements from Screensport FC
            </p>
          </div>
        </div>
      </section>

      <FeaturedNews news={featuredNews} />
      <NewsCategories />
      <NewsGrid news={regularNews} />
    </div>
  );
}