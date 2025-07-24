import React from 'react';
import { Wifi, Car, Coffee, Heart, Utensils, Shield } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const Services = () => {
  const services = [
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "Experiencias Románticas",
      description: "Decoraciones especiales, cenas privadas y momentos únicos para parejas."
    },
    {
      icon: <Utensils className="text-green-500" size={32} />,
      title: "Desayuno Gourmet",
      description: "Desayuno completo con productos frescos y locales incluido en tu estadía."
    },
    {
      icon: <Wifi className="text-blue-500" size={32} />,
      title: "WiFi Gratuito",
      description: "Conexión a internet de alta velocidad en todas nuestras instalaciones."
    },
    {
      icon: <Car className="text-purple-500" size={32} />,
      title: "Parqueadero Privado",
      description: "Espacio seguro y gratuito para tu vehículo durante toda tu estadía."
    },
    {
      icon: <Coffee className="text-amber-500" size={32} />,
      title: "Zona de Relajación",
      description: "Espacios diseñados para el descanso y la contemplación de la naturaleza."
    },
    {
      icon: <Shield className="text-gray-500" size={32} />,
      title: "Seguridad 24/7",
      description: "Vigilancia y seguridad las 24 horas para tu tranquilidad total."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimatedSection animationType="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Disfruta de una experiencia completa con todos los servicios incluidos 
            para hacer de tu estadía un momento perfecto.
          </p>
        </ScrollAnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimatedSection
              key={index}
              animationType="fadeUp"
              delay={index * 100}
              className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </ScrollAnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;