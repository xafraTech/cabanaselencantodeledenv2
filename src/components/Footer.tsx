import React from 'react';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+573209063849';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:reservascabanaseleden@gmail.com';
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo-cabanas.png" 
                alt="Cabañas el Encanto del Edén" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Cabañas el Encanto del Edén</h3>
                <p className="text-sm opacity-75">3 km desde Sasaíma, Cundinamarca</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Tu refugio perfecto en el corazón de la naturaleza colombiana. 
              Experiencias únicas que perduran en el tiempo.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-green-400" />
                <span className="text-sm">Vereda Santa Ana, Sasaíma, Cundinamarca</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400" />
                <span 
                  className="text-sm cursor-pointer hover:text-green-400 transition-colors"
                  onClick={handlePhoneClick}
                >
                  +57 320 906 3849
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-400" />
                <span 
                  className="text-sm cursor-pointer hover:text-green-400 transition-colors"
                  onClick={handleEmailClick}
                >
                  reservascabanaseleden@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-gray-300 hover:text-green-400 transition-colors">Inicio</a>
              <a href="#cabanas" className="block text-gray-300 hover:text-green-400 transition-colors">Nuestras Cabañas</a>
              <a href="#servicios" className="block text-gray-300 hover:text-green-400 transition-colors">Servicios</a>
              <a href="#ubicacion" className="block text-gray-300 hover:text-green-400 transition-colors">Ubicación</a>
              <a href="#contacto" className="block text-gray-300 hover:text-green-400 transition-colors">Contacto</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Cabañas el Encanto del Edén. Hecho con</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>en Colombia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;