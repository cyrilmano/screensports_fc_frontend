export default function NewsCategories() {
  const categories = [
    { name: 'All News', count: 24, active: true },
    { name: 'Academy Updates', count: 8, active: false },
    { name: 'Player Achievements', count: 6, active: false },
    { name: 'Tournament News', count: 5, active: false },
    { name: 'Training Programs', count: 3, active: false },
    { name: 'Events', count: 2, active: false }
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  category.active
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