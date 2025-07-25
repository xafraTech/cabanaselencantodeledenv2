import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo-cabanas.png" 
              alt="Cabañas el Encanto del Edén" 
              className="h-12 w-12 object-contain"
            />
            <div className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              <h1 className="text-lg font-bold">Cabañas el Encanto del Edén</h1>
              <p className="text-sm opacity-90">3 km desde Sasaíma, Cundinamarca</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['inicio', 'cabanas', 'servicios', 'ubicacion', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-green-600' 
                    : 'text-white hover:text-green-300'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-3 pt-4">
              {['inicio', 'cabanas', 'servicios', 'ubicacion', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium text-left transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-green-600' 
                      : 'text-white hover:text-green-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;