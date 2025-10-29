import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Category = 'all' | 'walk-in-closets' | 'reach-in-closets' | 'office-room' | 'hobby-room' | 'mud-room' | 'laundry-room' | 'kitchen-pantry' | 'garages';

interface GalleryImage {
  url: string;
  title: string;
  category: Category;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'walk-in-closets', label: 'Walk-in Closets' },
    { id: 'reach-in-closets', label: 'Reach-in Closets' },
    { id: 'office-room', label: 'Office Room' },
    { id: 'hobby-room', label: 'Hobby Room' },
    { id: 'mud-room', label: 'Mud Room' },
    { id: 'laundry-room', label: 'Laundry Room' },
    { id: 'kitchen-pantry', label: 'Kitchen Pantry' },
    { id: 'garages', label: 'Garages' },
  ];

  const allImages: GalleryImage[] = [
    // Walk-in Closets (8 images)
    { url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Luxury Walk-In Closet', category: 'walk-in-closets' },
    { url: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Modern Walk-In Design', category: 'walk-in-closets' },
    { url: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Classic Elegance Suite', category: 'walk-in-closets' },
    { url: 'https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Master Bedroom Closet', category: 'walk-in-closets' },
    { url: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Contemporary Walk-In', category: 'walk-in-closets' },
    { url: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Boutique Style Closet', category: 'walk-in-closets' },
    { url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Spacious Walk-In Storage', category: 'walk-in-closets' },
    { url: 'https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Premium Walk-In Design', category: 'walk-in-closets' },
    
    // Reach-in Closets (6 images)
    { url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Reach-In Organization', category: 'reach-in-closets' },
    { url: 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Compact Reach-In Design', category: 'reach-in-closets' },
    { url: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Efficient Space Solution', category: 'reach-in-closets' },
    { url: 'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Bedroom Reach-In', category: 'reach-in-closets' },
    { url: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Organized Reach-In System', category: 'reach-in-closets' },
    { url: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Smart Closet Solution', category: 'reach-in-closets' },
    
    // Office Room (6 images)
    { url: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Home Office Storage', category: 'office-room' },
    { url: 'https://images.pexels.com/photos/7034682/pexels-photo-7034682.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Professional Office Setup', category: 'office-room' },
    { url: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Custom Office Shelving', category: 'office-room' },
    { url: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Modern Office Storage', category: 'office-room' },
    { url: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Executive Office Design', category: 'office-room' },
    { url: 'https://images.pexels.com/photos/3771790/pexels-photo-3771790.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Built-In Office Cabinets', category: 'office-room' },
    
    // Hobby Room (5 images)
    { url: 'https://images.pexels.com/photos/6957906/pexels-photo-6957906.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Hobby Room Storage', category: 'hobby-room' },
    { url: 'https://images.pexels.com/photos/4846096/pexels-photo-4846096.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Craft Room Organization', category: 'hobby-room' },
    { url: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Art Studio Storage', category: 'hobby-room' },
    { url: 'https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Creative Space Solution', category: 'hobby-room' },
    { url: 'https://images.pexels.com/photos/7869083/pexels-photo-7869083.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Sewing Room Design', category: 'hobby-room' },
    
    // Mud Room (5 images)
    { url: 'https://images.pexels.com/photos/6283961/pexels-photo-6283961.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Mud Room Entry', category: 'mud-room' },
    { url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Entryway Storage', category: 'mud-room' },
    { url: 'https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Family Mudroom', category: 'mud-room' },
    { url: 'https://images.pexels.com/photos/7045902/pexels-photo-7045902.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Organized Entry Space', category: 'mud-room' },
    { url: 'https://images.pexels.com/photos/6969852/pexels-photo-6969852.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Mudroom Bench & Storage', category: 'mud-room' },
    
    // Laundry Room (5 images)
    { url: 'https://images.pexels.com/photos/5824508/pexels-photo-5824508.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Laundry Room Design', category: 'laundry-room' },
    { url: 'https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Laundry Organization System', category: 'laundry-room' },
    { url: 'https://images.pexels.com/photos/5824544/pexels-photo-5824544.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Modern Laundry Setup', category: 'laundry-room' },
    { url: 'https://images.pexels.com/photos/4107267/pexels-photo-4107267.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Efficient Laundry Space', category: 'laundry-room' },
    { url: 'https://images.pexels.com/photos/5824520/pexels-photo-5824520.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Custom Laundry Cabinets', category: 'laundry-room' },
    
    // Kitchen Pantry (6 images)
    { url: 'https://images.pexels.com/photos/6489119/pexels-photo-6489119.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Kitchen Pantry System', category: 'kitchen-pantry' },
    { url: 'https://images.pexels.com/photos/4099351/pexels-photo-4099351.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Custom Pantry Shelving', category: 'kitchen-pantry' },
    { url: 'https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Walk-In Pantry', category: 'kitchen-pantry' },
    { url: 'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Organized Pantry Design', category: 'kitchen-pantry' },
    { url: 'https://images.pexels.com/photos/4686818/pexels-photo-4686818.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Modern Pantry Storage', category: 'kitchen-pantry' },
    { url: 'https://images.pexels.com/photos/4686970/pexels-photo-4686970.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Butler Pantry Design', category: 'kitchen-pantry' },
    
    // Garages (6 images)
    { url: 'https://images.pexels.com/photos/7034682/pexels-photo-7034682.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Garage Organization', category: 'garages' },
    { url: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Garage Storage Solutions', category: 'garages' },
    { url: 'https://images.pexels.com/photos/1706551/pexels-photo-1706551.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Complete Garage System', category: 'garages' },
    { url: 'https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Workshop Storage', category: 'garages' },
    { url: 'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Organized Garage Space', category: 'garages' },
    { url: 'https://images.pexels.com/photos/1405772/pexels-photo-1405772.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Garage Wall Systems', category: 'garages' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">CUSTOM CLOSET CATALOG</h1>
          <p className="text-xl md:text-2xl font-light">
            Explore our portfolio organized by room type
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" data-reveal data-reveal-dir="up">
        <div className="container-custom mx-auto">
          {/* Category Filter Tabs */}
          <div className="mb-12">
            <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id as Category);
                    setSelectedImage(null);
                  }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gold text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-dark-text hover:bg-gray-200'
                  }`}
                  data-reveal
                  data-reveal-dir="up"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Images Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-bold text-gold">{filteredImages.length}</span> project{filteredImages.length !== 1 ? 's' : ''}
              {activeCategory !== 'all' && (
                <span> in <span className="font-bold text-dark-text">{categories.find(c => c.id === activeCategory)?.label}</span></span>
              )}
            </p>
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-80 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                  data-reveal
                  data-reveal-dir={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="text-center px-4">
                      <span className="text-white font-semibold text-lg block">{image.title}</span>
                      <span className="text-gold text-sm">
                        {categories.find(c => c.id === image.category)?.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-xl">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && filteredImages[selectedImage] && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-10"
          >
            <X size={36} />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-6 text-white hover:text-gold transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 text-white hover:text-gold transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6">
              <p className="text-white text-xl font-semibold mb-2">
                {filteredImages[selectedImage].title}
              </p>
              <p className="text-gold text-sm">
                {categories.find(c => c.id === filteredImages[selectedImage].category)?.label}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
