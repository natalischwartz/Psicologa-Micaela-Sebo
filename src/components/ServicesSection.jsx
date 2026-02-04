import React from 'react';
import { Brain, Heart, Users, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Psicoanálisis Individual',
    description: 'Un espacio de escucha profunda donde exploraremos tu inconsciente, tus sueños y patrones de comportamiento para lograr un mayor autoconocimiento.',
  },
  {
    icon: Heart,
    title: 'Terapia de Duelo',
    description: 'Acompañamiento en procesos de pérdida y duelo, brindándote herramientas para transitar el dolor y encontrar nuevos significados.',
  },
  {
    icon: Users,
    title: 'Terapia de Pareja',
    description: 'Trabajo conjunto para mejorar la comunicación, resolver conflictos y fortalecer el vínculo afectivo entre ustedes.',
  },
  {
    icon: Sparkles,
    title: 'Manejo de Ansiedad',
    description: 'Técnicas y estrategias para comprender y manejar la ansiedad, permitiéndote recuperar la calma y el bienestar en tu vida diaria.',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-4">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrezco diferentes modalidades de atención adaptadas a tus necesidades específicas, 
            tanto de manera presencial como online.
          </p>
        </div>

        {/* Cuadrícula de Servicios */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Contenedor del Icono */}
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;