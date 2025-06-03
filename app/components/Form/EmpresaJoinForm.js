"use client";

import { useRegisterEmpresa } from "../../../hooks/useRegisterEmpresa";
import { useState, useEffect } from "react";
import Input from '../Input/Input';
import { Building2, Phone, Check, AlertCircle, Loader2, Send, ChevronRight } from 'lucide-react';

export default function EmpresaJoinForm() {
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { registerEmpresa, loading, mensaje } = useRegisterEmpresa();

  // Efecto para mostrar animación después del envío exitoso
  useEffect(() => {
    if (formSubmitted && mensaje && mensaje.includes("éxito")) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted, mensaje]);

  const validateForm = () => {
    const newErrors = {};
    if (!nombreEmpresa.trim()) {
      newErrors.nombreEmpresa = "El nombre de la empresa es requerido.";
    } else if (nombreEmpresa.trim().length < 3) {
      newErrors.nombreEmpresa = "El nombre debe tener al menos 3 caracteres.";
    }
    
    if (!telefono.trim()) {
      newErrors.telefono = "El número de celular es requerido.";
    } else if (!/^\d{10}$/.test(telefono)) {
      newErrors.telefono = "Ingresa un número de 10 dígitos válido.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar formulario
    if (!validateForm()) {
      // Animación sutil de error
      const form = e.target;
      form.classList.add('animate-shake');
      setTimeout(() => form.classList.remove('animate-shake'), 500);
      return;
    }

    // Enviar datos
    await registerEmpresa({ nombreEmpresa, telefono });
    setFormSubmitted(true);
    setNombreEmpresa("");
    setTelefono("");
    setErrors({});
    // Resetear formulario en caso de éxito
    if (!loading && mensaje && mensaje.includes("éxito")) {
      setNombreEmpresa("");
      setTelefono("");
      setErrors({});
    }
  };

  const messageType = mensaje
    ? mensaje.includes("éxito")
      ? "success"
      : mensaje.includes("error")
        ? "error"
        : "info"
    : null;

  const messageClasses = {
    success: "bg-green-100 text-green-800 border border-green-200",
    error: "bg-red-100 text-red-800 border border-red-200",
    info: "bg-blue-100 text-blue-800 border border-blue-200",
  };

  // Iconos mejorados con Lucide
  const CompanyIcon = <Building2 className="h-5 w-5" />;
  const PhoneIcon = <Phone className="h-5 w-5" />;

  return (
    <div className="w-full py-8">
      <div className="max-w-3xl mx-auto">
        {/* Encabezado del formulario - Opcional, ya que podría estar en la página padre */}
        {!formSubmitted && (
          <div className="text-center mb-10 transition-all duration-500">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-primary mb-4">
              <span className="text-sm font-medium flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Registro Sencillo
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 transition-all">
              Únete a nuestra red de constructores
            </h2>
            
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Amplía tu alcance y conecta con clientes interesados en casas modulares certificadas.
            </p>
          </div>
        )}

        {/* Mensaje de éxito cuando el formulario se envía correctamente */}
        {formSubmitted && mensaje && mensaje.includes("éxito") ? (
          <div className="flex flex-col items-center justify-center py-10 px-6 text-center transition-all duration-500 transform animate-fade-in-up">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">¡Solicitud Enviada!</h3>
            <p className="text-gray text-lg mb-6">
              Gracias por tu interés. Nos pondremos en contacto contigo pronto.
            </p>
            <button 
              onClick={() => setFormSubmitted(false)}
              className="text-primary font-medium flex items-center hover:underline transition-all"
            >
              Enviar otra solicitud
              <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit} 
            className={`space-y-8 bg-white p-2 md:p-10  ${
              focused ? '' : ''
            }`}
          >
            <div className="space-y-6">
              {/* Campo de Nombre de Empresa */}
              <div className={`transition-all duration-300 ${
                focused === 'nombreEmpresa' ? '' : ''
              }`}>
                <Input
                  label="Nombre de la empresa"
                  id="nombreEmpresa"
                  name="nombreEmpresa"
                  type="text"
                  placeholder="Ej: Construcciones Modulares S.A.S."
                  value={nombreEmpresa}
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                  onFocus={() => setFocused('nombreEmpresa')}
                  onBlur={() => setFocused(null)}
                  required
                  error={errors.nombreEmpresa}
                  icon={CompanyIcon}
                />
                {errors.nombreEmpresa && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-fade-in">
                    <AlertCircle className="h-4 w-4" />
                    {errors.nombreEmpresa}
                  </p>
                )}
              </div>

              {/* Campo de Teléfono */}
              <div className={`transition-all duration-300 ${
                focused === 'telefono' ? '' : ''
              }`}>
                <Input
                  label="Número de celular"
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="Ej: 3001234567"
                  value={telefono}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setTelefono(value);
                  }}
                  onFocus={() => setFocused('telefono')}
                  onBlur={() => setFocused(null)}
                  required
                  error={errors.telefono}
                  icon={PhoneIcon}
                />
                {errors.telefono && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-fade-in">
                    <AlertCircle className="h-4 w-4" />
                    {errors.telefono}
                  </p>
                )}
              </div>
            </div>

            {/* Política de privacidad y términos */}
            <div className="text-sm text-gray">
              <p>
                Al enviar este formulario, aceptas nuestra{" "}
                <a href="#" className="text-primary hover:text-terciary underline underline-offset-2">
                  política de privacidad
                </a>{" "}
                y{" "}
                <a href="#" className="text-primary hover:text-terciary underline underline-offset-2">
                  términos de servicio
                </a>.
              </p>
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-4 rounded-xl transition-all duration-300 flex items-center justify-center font-medium text-white shadow-md ${
                loading
                  ? 'bg-primary/70 cursor-not-allowed'
                  : 'bg-primary hover:bg-terciary hover:shadow-lg transform-gpu hover:-translate-y-1'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar solicitud
                </>
              )}
            </button>

            {/* Mensaje de respuesta del servidor */}
            {mensaje && !mensaje.includes("éxito") && (
              <div className={`p-4 rounded-lg text-sm flex items-center gap-2 animate-fade-in ${messageClasses[messageType] || messageClasses.info}`}>
                {messageType === 'error' && <AlertCircle className="h-5 w-5" />}
                {messageType === 'info' && <AlertCircle className="h-5 w-5" />}
                {mensaje}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}