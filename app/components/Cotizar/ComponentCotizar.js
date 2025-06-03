'use client';

import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { Send, MapPin, Mail, User, Phone, ArrowRight, Check, ChevronRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';


export default function CotizacionForm() {
  const [formState, setFormState] = useState({
    nombre: '',
    telefono: '',
    departamento: '',
    mensaje: ''
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    // Validación básica
    if (!formState.nombre || !formState.telefono || !formState.departamento) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }
    setStep(2);
  };

  const handleSubmit = async () => {
 setLoading(true);
 setSuccess(false);
 
 try {
   const { nombre, telefono, departamento, mensaje } = formState;

   const { error } = await supabase.from('cotizaciones').insert([
     {
       nombre,
       telefono,
       departamento,
       mensaje,
     }
   ]);
   
   setLoading(false);
   if (error) throw error;
   
   setSuccess(true);
   setFormState({ nombre: '', telefono: '', departamento: '', mensaje: '' });
   
   // Reset después de 3 segundos
   setTimeout(() => {
     setSuccess(false);
     setStep(1);
     setFormSubmitted(false);
   }, 3000);
   
 } catch (err) {
   console.error('Error al guardar en Supabase:', err.message);
   setLoading(false);
   alert('Hubo un error al enviar tu cotización. Intenta nuevamente.');
 }
};

  const resetForm = () => {
    setStep(1);
    setFormSubmitted(false);
    setSuccess(false);
    setFormState({
      nombre: '',
      telefono: '',
      departamento: '',
      mensaje: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Elemento decorativo */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-secondary opacity-60 blur-xl"></div>

        {success ? (
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            {/* Icono de éxito (verde) */}
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 shadow-md">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-primary mb-2">
              ¡Envío Exitoso!
            </h3>

            {/* Mensaje de confirmación */}
            <p className="text-gray mb-6">
              Hemos recibido tu solicitud de cotización. Te contactaremos muy pronto.
            </p>

            <button
              onClick={resetForm}
              className="bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-terciary transition-colors duration-300"
            >
              Nueva Cotización
            </button>
          </div>
        ) : formSubmitted ? (
          /* Vista de confirmación */
          <div className="relative z-10 flex flex-col items-center py-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Send className="w-7 h-7 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-primary text-center mb-2">
              ¡Solicitud Enviada!
            </h3>

            <p className="text-gray text-center mb-6">
              Hemos recibido tu solicitud de cotización. Nos pondremos en contacto contigo muy pronto.
            </p>

            <button
              onClick={resetForm}
              className="bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-terciary transition-colors duration-300"
            >
              Entendido
            </button>
          </div>
        ) : (
          /* Formulario */
          <div className="relative z-10">
            <div className="flex items-center mb-1">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-medium mr-3">
                {step === 1 ? '1' : '2'}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                {step === 1 ? 'Solicita tu cotización' : 'Detalles adicionales'}
              </h3>
            </div>

            <p className="text-gray mt-4 mb-6">
              {step === 1
                ? 'Completa tu información personal para recibir una cotización personalizada'
                : 'Cuéntanos más sobre tu proyecto para ajustar nuestra oferta'
              }
            </p>

            {step === 1 ? (
              <div className="space-y-4">
                <Input
                  label="Nombre completo"
                  name="nombre"
                  value={formState.nombre}
                  onChange={handleChange}
                  icon={<User className="w-5 h-5 text-gray-400" />}
                  placeholder="Tu nombre"
                  required
                />

                <Input
                  label="Teléfono"
                  name="telefono"
                  type="tel"
                  value={formState.telefono}
                  onChange={handleChange}
                  icon={<Phone className="w-5 h-5 text-gray-400" />}
                  placeholder="3XX XXX XXXX"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Departamento
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MapPin className="w-5 h-5 text-gray" />
                    </div>
                    <select
                      name="departamento"
                      value={formState.departamento}
                      onChange={handleChange}
                      required
                      className="w-full border border-secondary/50 rounded-lg pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-gray appearance-none bg-white transition-all"
                    >
                      <option value="">Seleccionar departamento</option>
                      <option value="Antioquia">Antioquia</option>
                      <option value="Cundinamarca">Cundinamarca</option>
                      <option value="Valle del Cauca">Valle del Cauca</option>
                      <option value="Santander">Santander</option>
                      <option value="Atlántico">Atlántico</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleNextStep}
                  className="w-full mt-2 bg-primary text-white py-3 rounded-lg hover:bg-terciary transition-colors group flex items-center justify-center"
                >
                  <span>Continuar</span>
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <textarea
                    name="mensaje"
                    value={formState.mensaje}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe brevemente lo que estás buscando construir..."
                    className="w-full border border-secondary/50 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-gray transition-all"
                  ></textarea>
                </div>

                <div className="flex items-center pt-2">
                  <input
                    id="privacy-check"
                    type="checkbox"
                    required
                    className="w-4 h-4 text-primary border-gray focus:ring-primary rounded"
                  />
                  <label htmlFor="privacy-check" className="ml-2 text-xs text-gray">
                    Acepto la política de privacidad y el tratamiento de mis datos
                  </label>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 border border-gray/20 text-gray font-medium rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    Atrás
                  </button>
                  <Button
                    variant='primary'
                    fullWidth
                    disabled={loading}
                    style={{ margin: 0 }}
                  >
                    <div onClick={handleSubmit}>
                      {loading ? 'Enviando...' : 'Enviar cotización'}
                    </div>
                  </Button>
                </div>
              </div>
            )}
            
            {/* Indicador de pasos */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <div className={`w-2.5 h-2.5 rounded-full ${step === 1 ? 'bg-primary' : 'bg-gray/30'}`}></div>
              <div className={`w-2.5 h-2.5 rounded-full ${step === 2 ? 'bg-primary' : 'bg-gray/30'}`}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}