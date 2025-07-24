import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveClick = () => {
    const message = "Hola! Me gustaría hacer una reserva en Cabañas el Encanto del Edén. ¿Podrían darme más información?";
    const whatsappUrl = `https://wa.me/573209063849?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: `url('/Imagen de WhatsApp 2025-06-05 a las 11.27.26_3aba17fd.jpg')`,
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/logo-cabanas.png" 
            alt="Cabañas el Encanto del Edén" 
            className="h-32 w-32 mx-auto mb-6 drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide animate-slide-up">
          Cabañas el Encanto del Edén
        </h1>
        
        <h2 className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          3 km desde Sasaíma, Cundinamarca
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Descubre un paraíso natural en el corazón de Cundinamarca. 
          Vive experiencias únicas en nuestras cabañas temáticas rodeadas de naturaleza exuberante.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => scrollToSection('cabanas')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Explorar Cabañas
          </button>
          <button 
            onClick={handleReserveClick}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Reservar Ahora
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button 
          onClick={() => scrollToSection('cabanas')}
          className="text-white hover:text-green-300 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;