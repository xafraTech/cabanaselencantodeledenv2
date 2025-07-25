import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimatedSection animationType="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ponte en contacto con nosotros para reservar tu cabaña y vivir momentos únicos 
            en el paraíso natural de Sasaíma.
          </p>
        </ScrollAnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone size={32} />,
                title: "Teléfono",
                info: "+57 300 123 4567",
                bgColor: "bg-green-600",
                hoverColor: "hover:bg-green-700"
              },
              {
                icon: <Mail size={32} />,
                title: "Email",
                info: "reservascabanaseleden@gmail.com",
                bgColor: "bg-blue-600",
                hoverColor: "hover:bg-blue-700"
              },
              {
                icon: <MessageCircle size={32} />,
                title: "WhatsApp",
                info: "+57 300 123 4567",
                bgColor: "bg-green-500",
                hoverColor: "hover:bg-green-600"
              }
            ].map((contact, index) => (
              <ScrollAnimatedSection
                key={index}
                animationType="fadeUp"
                delay={index * 150}
                className="text-center group"
              >
                <div className={`${contact.bgColor} ${contact.hoverColor} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110`}>
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <p className="text-gray-300">{contact.info}</p>
              </ScrollAnimatedSection>
            ))}
          </div>

          <ScrollAnimatedSection 
            animationType="scale" 
            delay={500}
            className="bg-gray-800 p-8 rounded-2xl mt-12 text-center hover:bg-gray-750 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold mb-6">Horarios de Atención</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <p className="font-semibold text-white">Lunes - Domingo</p>
                <p>24 horas</p>
              </div>
              <div>
                <p className="font-semibold text-white">Check-in</p>
                <p>3:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Check-out</p>
                <p>11:00 AM</p>
              </div>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animationType="fadeUp" delay={700} className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              ¿Listo para vivir una experiencia inolvidable?
            </p>
            <a 
              href="https://wa.me/573001234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 hover:shadow-2xl"
            >
              <MessageCircle size={20} />
              <span>Reservar por WhatsApp</span>
            </a>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;