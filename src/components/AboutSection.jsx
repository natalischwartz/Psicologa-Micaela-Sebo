import React from 'react';
// Asegúrate de que la ruta de la imagen sea correcta o usa una URL de prueba
import portraitImage from '/foto-about.jpg'; 

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-[#F2F1E9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna de Imagen */}
          <div className="relative">
            {/* Contenedor de la foto con relación de aspecto 3:4 */}
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src={portraitImage}
                alt="Micaela Yael Sebo - Psicóloga y Psicoanalista"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Círculos decorativos de fondo */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E5E2D5] rounded-full z-0" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#E5E2D5] rounded-full z-0" />
          </div>

          {/* Columna de Contenido */}
          <div>
            <p className="text-[#4A463F] font-semibold uppercase tracking-widest text-sm mb-4">
              Sobre Mí
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A463F] mb-6">
              Psicóloga Micaela Yael Sebo 
            </h2>
            
            <div className="space-y-4 text-[#7D776D] leading-relaxed">
              <p>
                Soy psicóloga clínica y psicoanalista con más de 15 años de experiencia 
                acompañando a personas en su proceso de crecimiento personal y bienestar emocional.
              </p>
              <p>
                Mi formación incluye una Licenciatura en Psicología, una Maestría en Psicoanálisis 
                y múltiples especializaciones en trauma, duelo y terapia de pareja.
              </p>
              <p className="font-medium text-[#4A463F] italic">
                "Creo firmemente en que cada persona tiene dentro de sí los recursos necesarios 
                para superar sus dificultades. Mi rol es acompañarte a descubrirlos y potenciarlos."
              </p>
            </div>
            
            {/* Credenciales / Estadísticas */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-5">
                <p className="text-lg text-[#5E8D76] mb-1">15+</p>
                <p className="text-base text-[#7D776D] font-normal tracking-tight">
                  Años de experiencia
                </p>
              </div>
              <div className="p-5 ">
                <p className="text-lg text-[#5E8D76] mb-1">1000+</p>
                <p className="text-base text-[#7D776D] font-normal tracking-tight">
                  Pacientes atendidos
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;