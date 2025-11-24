export default function GalleryCategories({ activeCategory, onCategorySelect, counts }) {
  const categories = [
    { id: 'all', name: 'All Photos', count: counts.all },
    { id: 'training', name: 'Training Sessions', count: counts.training },
    { id: 'matches', name: 'Match Action', count: counts.matches },
    { id: 'facilities', name: 'Facilities', count: counts.facilities },
    { id: 'events', name: 'Events & Awards', count: counts.events }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-primary'
                  }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${activeCategory === category.id
                  ? 'bg-red-700 text-white'
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