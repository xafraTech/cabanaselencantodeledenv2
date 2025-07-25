import React from 'react';
import CabinCard from './CabinCard';

const Cabins = () => {
  const cabins = [
    {
      name: "Cabaña Colibrí",
      description: "Una experiencia mágica rodeada de naturaleza exuberante. Perfecta para parejas que buscan romance y tranquilidad en un ambiente único.",
      features: ["Jacuzzi", "Catamaran Net", "Breakfast Included", "Wi-Fi", "Movie Projector", "Music", "Grill"],
      images: [
        "/Colibri 3.jpg",
        "/colibri 1.jpg",
        "/Colibri 5.jpg",
        "/Colobri 4.jpg",
        "/azulejo 5.jpg"
      ],
      price: "$450.000",
      rating: 4.9
    },
    {
      name: "Cabaña Azulejo",
      description: "Sumérgete en un oasis de color y vida. Esta cabaña ofrece una experiencia romántica incomparable con todas las comodidades modernas.",
      features: ["Jacuzzi", "Catamaran Net", "Breakfast Included", "Wi-Fi", "Movie Projector", "Music", "Grill"],
      images: [
        "/azulejo 5.jpg",
        "/azulejo 1.jpg",
        "/azulejo 2.jpg",
        "/azulejo 7.jpg",
        "/azulejo 9.jpg",
        "/Colibri 3.jpg"
      ],
      price: "$450.000",
      rating: 4.8
    }
  ];

  return (
    <section id="cabanas" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nuestras Cabañas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada cabaña es un mundo único diseñado para ofrecerte experiencias inolvidables. 
            Descubre la perfecta combinación entre naturaleza, comodidad y romance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cabins.map((cabin, index) => (
            <CabinCard key={index} {...cabin} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Necesitas más información sobre nuestras cabañas?
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Contactar Asesor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cabins;