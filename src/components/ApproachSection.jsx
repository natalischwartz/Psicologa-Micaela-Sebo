import React from 'react';
import { Quote } from 'lucide-react';

const ApproachSection = () => {
  return (
    <section id="enfoque" className="py-16 md:py-24 bg-[#5E8D76] text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Icono de comillas decorativo */}
        <Quote className="w-12 h-12 mx-auto mb-8 text-[#F2F1E9] opacity-50" />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Mi Enfoque Terapéutico
        </h2>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-[#F2F1E9]">
            Trabajo desde una perspectiva psicoanalítica, lo que significa que juntos exploraremos 
            las raíces profundas de tus conflictos y malestares. No se trata solo de aliviar los síntomas, 
            sino de comprender qué hay detrás de ellos.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-[#F2F1E9]">
            El psicoanálisis nos permite acceder a aquello que permanece oculto en el inconsciente 
            y que muchas veces determina nuestra forma de actuar, sentir y relacionarnos con los demás.
          </p>
        </div>

        {/* Pilares del enfoque */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 rounded-xl bg-white/5  transition-colors">
            <div className="text-4xl font-black mb-2 text-[#F2F1E9]">01</div>
            <h3 className="text-xl font-semibold mb-2">Escucha Activa</h3>
            <p className="text-[#F2F1E9] text-sm">
              Un espacio donde tu palabra tiene valor y significado.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5  transition-colors">
            <div className="text-4xl font-black mb-2 text-[#F2F1E9]">02</div>
            <h3 className="text-xl font-semibold mb-2">Confidencialidad</h3>
            <p className="text-[#F2F1E9] text-sm">
              Absoluta privacidad en todo lo que compartas conmigo.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5  transition-colors">
            <div className="text-4xl font-black mb-2 text-[#F2F1E9]">03</div>
            <h3 className="text-xl font-semibold mb-2">Sin Juicios</h3>
            <p className="text-[#F2F1E9] text-sm">
              Un ambiente de aceptación y comprensión genuina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;