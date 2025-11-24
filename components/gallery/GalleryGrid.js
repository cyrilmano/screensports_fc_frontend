'use client';

import { useState } from 'react';

export default function GalleryGrid({ galleryData, activeCategory }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Combine all gallery images into one array
  const allImages = galleryData.categories.flatMap(category =>
    category.images.map(img => ({
      ...img,
      category: category.id
    }))
  ).filter(img => activeCategory === 'all' || img.category === activeCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-gray-600 text-sm">{image.title}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-2xl mb-1">🔍</div>
                      <p className="text-sm">Click to view</p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-xs">
                      {image.category} • {image.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors z-10"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-gray-600 font-medium">{selectedImage.title}</p>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedImage.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {selectedImage.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>📅 {selectedImage.date}</span>
                <span>🏷️ {selectedImage.category}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}