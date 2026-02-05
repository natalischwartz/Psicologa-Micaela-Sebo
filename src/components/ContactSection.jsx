import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('¡Mensaje enviado!', {
      description: 'Me pondré en contacto contigo a la brevedad.',
    });
    
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-[#F2F1E9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-[#4A463F] font-semibold uppercase tracking-widest text-sm mb-4">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A463F] mb-6">
            Agenda tu Primera Consulta
          </h2>
          <p className="text-lg text-[#7D776D] max-w-2xl mx-auto">
            Da el primer paso hacia tu bienestar. Completa el formulario y me pondré 
            en contacto contigo para agendar una cita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Información de Contacto */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E5E2D5] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#5E8D76]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Teléfono</h3>
                <p className="text-slate-600">+52 55 1234 5678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E5E2D5] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#5E8D76]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-600">contacto@dramariaruiz.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E5E2D5] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#5E8D76]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Consultorio</h3>
                <p className="text-slate-600">Av. Reforma 123, Col. Juárez<br />Ciudad de México, CDMX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E5E2D5] rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#5E8D76]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Horarios</h3>
                <p className="text-slate-600">Lunes a Viernes: 9:00 - 19:00<br />Sábados: 9:00 - 14:00</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form 
            onSubmit={handleSubmit} 
            className="bg-[#F2F1E9] p-8 rounded-2xl shadow-xl border border-slate-100"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F2F1E9] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F2F1E9] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-slate-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F2F1E9] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="+52 55 1234 5678"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#F2F1E9] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Cuéntame brevemente el motivo de tu consulta..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#5E8D76] hover:bg-[#3A5A4A] text-white font-bold py-4 rounded-lg shadow-lg transition-all transform active:scale-[0.98]"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;