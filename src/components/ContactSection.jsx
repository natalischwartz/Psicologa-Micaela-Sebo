import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { useForm, ValidationError } from '@formspree/react';

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

    // Reemplaza este ID con el que te dio Formspree
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvnkgab";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('¡Mensaje enviado!', {
          description: 'Me estaré contactando con vos a la brevedad.',
        });
        // Limpiar el formulario
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      } else {
        toast.error('Error al enviar', {
          description: 'Hubo un problema con el servidor. Intenta más tarde.',
        });
      }
    } catch (error) {
      toast.error('Error de conexión', {
        description: 'Asegúrate de tener internet e intenta de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
            Te invito a dar el primer paso. Completá el formulario y me estaré contactando con vos para coordinar tu primera entrevista.
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
                <p className="text-slate-600">+54 9 11 5639 5588</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E5E2D5] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#5E8D76]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-600">micaelasebo27@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E5E2D5] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#5E8D76]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Consultorio</h3>
                <p className="text-slate-600">Flores, C.A.B.A</p>
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
            action="https://formspree.io/f/mwvnkgab"
            method="POST"
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
                  placeholder="+54 9 112 345 6789"
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
                  placeholder="Contame brevemente el motivo de tu consulta..."
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