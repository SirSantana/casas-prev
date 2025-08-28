"use client";

import React from "react";
import {
  QrCode,
  Home,
  MessageCircle,
  Smartphone,
  Users,
  TrendingUp,
  Zap
} from "lucide-react";

const QRPropertyInvitation = () => {
  const contactWhatsApp = () => {
    const phoneNumber = "573143551942"; // Número de Colombia con código de país
    const message = encodeURIComponent(
      "Hola, estoy interesado en crear un QR para mi propiedad. ¿Podrías darme más información sobre cómo funciona?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const benefits = [
    {
      icon: Smartphone,
      title: "Acceso Instantáneo",
      description: "Los interesados pueden ver tu propiedad con solo escanear el QR"
    },
    {
      icon: Users,
      title: "Más Visitantes",
      description: "Facilita que más personas conozcan tu inmueble"
    },
    {
      icon: TrendingUp,
      title: "Arrienda Más Rápido",
      description: "Reduce el tiempo para encontrar el inquilino perfecto"
    },
    {
      icon: Zap,
      title: "Proceso Simple",
      description: "Configuración rápida y fácil para tu propiedad"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Hero Section */}
        <section className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center bg-indigo-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8">
            <QrCode size={32} className="text-white sm:w-10 sm:h-10" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight px-4">
            ¿Tienes una Propiedad<br className="hidden sm:block" /> para Arrendar?
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Crea tu QR personalizado y haz que arrendar tu inmueble sea más fácil y efectivo
          </p>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg max-w-md sm:max-w-lg mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Home size={20} className="text-indigo-600 mr-2 sm:w-6 sm:h-6" />
              <span className="text-base sm:text-lg font-semibold text-slate-900">
                Tu Propiedad + Código QR = Éxito
              </span>
            </div>
            
            <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
              Los interesados podrán ver fotos, detalles, ubicación y contactarte directamente escaneando tu QR
            </p>

            <button
              onClick={contactWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-all duration-200 transform hover:scale-105 text-base sm:text-lg"
            >
              <MessageCircle size={20} />
              Crear Mi QR Gratis
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-8 sm:mb-12 px-4">
            ¿Por qué usar un QR para tu propiedad?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl text-center transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="inline-flex items-center justify-center bg-blue-50 rounded-full w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                  <benefit.icon size={24} className="text-indigo-600 sm:w-7 sm:h-7" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white">
          <QrCode size={48} className="mx-auto mb-6 sm:mb-8 opacity-90 sm:w-14 sm:h-14" />
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            ¡Comienza Hoy Mismo!
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed px-4">
            Únete a los propietarios que ya están arrendando más fácil con su QR personalizado
          </p>

          <button
            onClick={contactWhatsApp}
            className="bg-white text-indigo-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg inline-flex items-center gap-3 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-base sm:text-lg"
          >
            <MessageCircle size={20} />
            Contactar por WhatsApp
          </button>
        </section>
      </div>
    </div>
  );
};

export default QRPropertyInvitation;