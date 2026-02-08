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
            Trabajo desde una perspectiva psicoanalítica, lo que implica un proceso de exploración de las raíces profundas de los conflictos y malestares. No se trata únicamente de aliviar los síntomas, sino de comprender qué se expresa a través de ellos.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-[#F2F1E9]">
           El psicoanálisis posibilita un acercamiento a aquello que permanece inconsciente y que, muchas veces, incide en nuestra manera de actuar, sentir y vincularnos con los demás.
          </p>
        </div>

        {/* Pilares del enfoque */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 rounded-xl bg-white/5  transition-colors">
            <div className="text-4xl font-black mb-2 text-[#F2F1E9]">01</div>
            <h3 className="text-xl font-semibold mb-2">Escucha Activa</h3>
            <p className="text-[#F2F1E9] text-sm">
              Un espacio donde tu palabra tiene valor y significado propio.
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
              Un espacio terapéutico de aceptación y escucha.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;