import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  isOpen, 
  onClose, 
  initialIndex = 0 
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
      >
        <X size={32} />
      </button>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
      >
        <ChevronLeft size={48} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
      >
        <ChevronRight size={48} />
      </button>

      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center">
        <span className="text-sm opacity-75">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;