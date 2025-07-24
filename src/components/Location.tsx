import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const Location = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+573209063849';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:reservascabanaseleden@gmail.com';
  };

  return (
    <section id="ubicacion" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimatedSection animationType="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nuestra Ubicación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ubicados estratégicamente en Sasaíma, Cundinamarca, 
            rodeados de naturaleza y con fácil acceso desde Bogotá.
          </p>
        </ScrollAnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimatedSection animationType="slideLeft" className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                <MapPin className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dirección</h3>
                <p className="text-gray-600">
                  Vereda Santa Ana, Sasaíma, Cundinamarca<br />
                  A solo 1 hora desde Bogotá
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                <Clock className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Horarios</h3>
                <p className="text-gray-600">
                  Check-in: 3:00 PM<br />
                  Check-out: 11:00 AM<br />
                  Atención: 24 horas
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                <Phone className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Contacto</h3>
                <p className="text-gray-600">
                  WhatsApp: <span 
                    className="cursor-pointer hover:text-purple-600 transition-colors"
                    onClick={handlePhoneClick}
                  >
                    +57 320 906 3849
                  </span><br />
                  Email: <span 
                    className="cursor-pointer hover:text-purple-600 transition-colors"
                    onClick={handleEmailClick}
                  >
                    reservascabanaseleden@gmail.com
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cómo llegar</h3>
              <p className="text-gray-600 leading-relaxed">
                Desde Bogotá, toma la vía hacia La Mesa y continúa hasta Sasaíma. 
                Nuestras cabañas están ubicadas en la Vereda Santa Ana, 
                siguiendo las señalizaciones desde el centro del municipio.
              </p>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animationType="slideRight" className="bg-white p-4 rounded-2xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8234567890123!2d-74.4321098!3d4.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTknMTUuNiJOIDc0wrAyNScxOS42Ilc!5e0!3m2!1ses!2sco!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Location;