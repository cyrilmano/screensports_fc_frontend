import GalleryGrid from '../../components/gallery/GalleryGrid';
import GalleryCategories from '../../components/gallery/GalleryCategories';
import galleryData from '../../data/gallery.json';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Explore our collection of photos showcasing training sessions, matches, 
              facilities, and memorable moments from Screensport FC
            </p>
          </div>
        </div>
      </section>

      <GalleryCategories />
      <GalleryGrid galleryData={galleryData} />
    </div>
  );
}