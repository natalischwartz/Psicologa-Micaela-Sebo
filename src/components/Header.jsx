import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Eliminado el tipado ": string" de TS
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Cierra el menú móvil al hacer clic
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F2F1E9] backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl font-bold text-[#4A463F]">
            Psicóloga Micaela Yael Sebo
          </a>

          {/* Menú para Escritorio */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-[#7D776D] hover:text-[#4A463F] transition-colors font-medium"
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className="text-[#7D776D] hover:text-[#4A463F] transition-colors font-medium"
              >
                Sobre Mí
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-[#7D776D] hover:text-[#4A463F] transition-colors font-medium"
              >
                Servicios
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('enfoque')}
                className="text-[#7D776D] hover:text-[#4A463F] transition-colors font-medium"
              >
                Enfoque
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-[#7D776D] hover:text-[#4A463F] transition-colors font-medium"
              >
                Contacto
              </button>
            </li>
          </ul>

          {/* Botón Menú Móvil */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú Desplegable Móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-[#F2F1E9]">
            <ul className="flex flex-col gap-4">
              {['inicio', 'sobre-mi', 'servicios', 'enfoque', 'contacto'].map((section) => (
                <li key={section}>
                  <button 
                    onClick={() => scrollToSection(section)}
                    className="text-[#7D776D] hover:text-[#4A463F] transition-colors w-full text-left px-2 py-1 capitalize"
                  >
                    {section.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;