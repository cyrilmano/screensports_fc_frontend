export default function NewsGrid({ news }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Latest Updates
            </h2>
            <div className="w-16 h-1 bg-green-600"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📰</div>
                    <p className="text-gray-600 text-sm">News Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {article.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.content.substring(0, 120)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-xs">
                          {article.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {article.author}
                      </span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}