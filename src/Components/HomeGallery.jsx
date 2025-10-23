import { useState } from 'react';

const SportsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    {
      src: "https://sporto-theme.myshopify.com/cdn/shop/files/abo03_e151a76e-1252-4cf4-92d7-d556015d7977_470x.jpg?v=1640586944",
      title: "Snowboarding",
      description: "Conquer the mountains with style"
    },
    {
      src: "https://sporto-theme.myshopify.com/cdn/shop/files/abo04_cc6c93e7-39db-4bf8-be59-22dc1979a700_470x.jpg?v=1640586970",
      title: "Cycling",
      description: "Explore new paths on two wheels"
    },
    {
      src: "https://sporto-theme.myshopify.com/cdn/shop/files/abo05_fc3ba460-5514-4d23-ba16-7a8ee912f5b3_470x.jpg?v=1640586994",
      title: "Climbing",
      description: "Reach new heights"
    },
    {
      src: "https://sporto-theme.myshopify.com/cdn/shop/files/abo06_0704692f-aa6e-400c-a248-1e6e18220770_470x.jpg?v=1640587019",
      title: "Archery",
      description: "Precision and focus"
    },
    {
      src: "https://sporto-theme.myshopify.com/cdn/shop/files/abo07_4f8ecfb9-2afa-418f-b40d-ce1654f133f5_470x.jpg?v=1640587045",
      title: "Swimming",
      description: "Dive into adventure"
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#A70500] mb-3">Sports Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of action-packed sports moments that inspire and motivate athletes of all levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {images.map((image, i) => (
              <div
                key={i}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white">
                  <h3 className="font-semibold text-gray-900">{image.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute md:top-2 -top-20 right-2 md:right-20 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-auto md:w-[110vh] h-auto rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
              <p className="text-gray-300 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SportsGallery;