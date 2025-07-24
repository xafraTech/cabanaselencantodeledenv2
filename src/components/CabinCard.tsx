import React, { useState } from 'react';
import { Eye, Heart, Star } from 'lucide-react';
import ImageGallery from './ImageGallery';
import ScrollAnimatedSection from './ScrollAnimatedSection';

interface CabinCardProps {
  name: string;
  description: string;
  features: string[];
  images: string[];
  price: string;
  rating: number;
}

const CabinCard: React.FC<CabinCardProps> = ({
  name,
  description,
  features,
  images,
  price,
  rating
}) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (index: number = 0) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const handleReserveClick = () => {
    const message = `Hola! Me interesa reservar la ${name}. ¿Podrían darme más información sobre disponibilidad y precios?`;
    const whatsappUrl = `https://wa.me/573209063849?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <ScrollAnimatedSection 
        animationType="fadeUp"
        className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
      >
        <div className="relative overflow-hidden">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <button
              onClick={() => openGallery(0)}
              className="bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Eye size={20} />
              <span>Ver Galería</span>
            </button>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 transform group-hover:scale-110 transition-transform duration-300">
            <Star className="text-yellow-500 fill-current" size={16} />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">{name}</h3>
            <Heart className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer transform hover:scale-110 duration-300" size={24} />
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Incluye:</h4>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-300 transform hover:scale-105"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {images.length > 1 && (
            <div className="mb-4">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {images.slice(1, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${name} ${index + 2}`}
                    className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-all duration-300 flex-shrink-0 transform hover:scale-110"
                    onClick={() => openGallery(index + 1)}
                  />
                ))}
                {images.length > 4 && (
                  <div
                    className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-all duration-300 flex-shrink-0 transform hover:scale-110"
                    onClick={() => openGallery(4)}
                  >
                    <span className="text-xs font-semibold text-gray-600">
                      +{images.length - 4}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold text-green-600">{price}</span>
              <span className="text-gray-500 ml-1">/ noche</span>
            </div>
            <button 
              onClick={handleReserveClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Reservar
            </button>
          </div>
        </div>
      </ScrollAnimatedSection>

      <ImageGallery
        images={images}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialIndex={selectedImageIndex}
      />
    </>
  );
};

export default CabinCard;