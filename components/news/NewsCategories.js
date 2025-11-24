export default function NewsCategories({ activeCategory, onCategorySelect, categories, counts }) {
  // Use passed categories or fallback if not provided (though they should be)
  const displayCategories = categories || [
    'All News', 'Academy Updates', 'Player Achievements', 'Tournament News', 'Training Programs', 'Events'
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {displayCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => onCategorySelect(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-primary'
                  }`}
              >
                {category}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${activeCategory === category
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-200 text-gray-600'
                  }`}>
                  {counts ? counts[category] || 0 : 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}