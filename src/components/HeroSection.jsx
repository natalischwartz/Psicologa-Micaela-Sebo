import { Button } from '@/components/ui/button';

import heroImage from '/foto-hero.jpg'; 

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo con Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Un degradado suave para que el texto sea legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <p className="text-[#4A463F] uppercase tracking-[0.2em] text-sm font-semibold mb-4  animate-in fade-in duration-1000">
            Psicóloga · Psicoanalista
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#4A463F] mb-6 leading-tight  animate-in fade-in slide-in-from-bottom-5 duration-1000 animate-delay-[300ms] fill-mode-forwards">
            Un espacio seguro para tu bienestar emocional
          </h1>
          
          <p className="text-lg md:text-xl text-[#7D776D] mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 animate-delay-[700ms] fill-mode-forwards">
            Te acompaño en un proceso de autoconocimiento profundo, donde vas a poder explorar 
            tus emociones, superar conflictos internos y encontrar un mayor equilibrio en tu vida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-1000 animate-delay-[900ms] fill-mode-forwards">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contacto')}
              className="bg-[#5E8D76] hover:bg-[#3A5A4A] text-white rounded-xl px-8 h-12 text-lg transition-all shadow-lg"
            >
              Agendar Consulta
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('sobre-mi')}
              className="border-2 border-[#5E8D76] text-[#5E8D76]  rounded-xl px-8 h-12 text-lg transition-all bg-transparent"
            >
              Conocer Más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;