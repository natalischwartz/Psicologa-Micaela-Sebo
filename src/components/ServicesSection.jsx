import React from 'react';
import { Brain, Heart, Users, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Psicoanálisis Individual',
    description: 'Desde una orientación psicoanalítica, ofrezco un espacio de escucha profunda orientado a la exploración del inconsciente, los sueños y los patrones de comportamiento, favoreciendo un mayor autoconocimiento.',
  },
  {
    icon: Heart,
    title: 'Terapia de Duelo',
    description: 'Acompañamiento en procesos de pérdida y duelo, ofreciendo un espacio de sostén y elaboración que permita transitar estas experiencias y construir nuevos sentidos.',
  },
  // {
  //   icon: Users,
  //   title: 'Terapia de Pareja',
  //   description: 'Trabajo conjunto para mejorar la comunicación, resolver conflictos y fortalecer el vínculo afectivo entre ustedes.',
  // },
  {
    icon: Sparkles,
    title: 'Manejo de Ansiedad',
    description: 'Trabajaremos en la comprensión de las manifestaciones de la ansiedad, explorando sus causas singulares y favoreciendo la elaboración psíquica para lograr una relación más habitable con el malestar en la vida cotidiana.',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-[#F2F1E9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-center mb-16">
          <p className="text-[#4A463F] font-semibold uppercase tracking-widest text-sm mb-4">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A463F] mb-6">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-lg text-[#7D776D] max-w-2xl mx-auto">
            Ofrezco diferentes modalidades de atención adaptadas a tus necesidades específicas, 
            tanto de manera presencial como online.
          </p>
        </div>

        {/* Cuadrícula de Servicios */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-[#F2F1E9] rounded-2xl border border- [#E5E2D5] hover:bg-[#F2F1E9] hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Contenedor del Icono */}
              <div className="w-14 h-14 bg-[#E5E2D5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5E8D76] transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#5E8D76] group-hover:text-[#F2F1E9] transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-[#7D776D] leading-relaxed">
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