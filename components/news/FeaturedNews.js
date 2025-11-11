export default function FeaturedNews({ news }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Featured Story
            </h2>
            <div className="w-16 h-1 bg-green-600"></div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {news.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {news.date}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {news.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {news.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium">
                      {news.author}
                    </span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Read Full Story
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-64 md:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📰</div>
                    <p className="text-gray-600 font-medium">News Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}