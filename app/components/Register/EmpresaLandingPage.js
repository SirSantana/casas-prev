// app/empresas/registro/page.js o pages/empresas/registro.js
"use client";

import React, { useEffect, useState } from 'react';
import EmpresaJoinForm from '../../components/Form/EmpresaJoinForm';
import {  BuildingIcon, Users, Target, ChevronRight,ArrowDown, Building,  BarChart, CheckCircle  } from 'lucide-react';

export default function EmpresaLanding() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Animate elements when page loads
    setIsInView(true);
    
    // Optional: Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('formulario');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
<div className="flex flex-col min-h-screen bg-white">
      {/* === Hero Section Mejorado (Mobile Responsive) === */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary/80">
        {/* Elementos decorativos con animaciones mejoradas */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 rounded-full bg-accent mix-blend-multiply filter blur-[80px] md:blur-[120px] animate-pulse duration-7000"></div>
          <div className="absolute bottom-1/2 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-primary mix-blend-multiply filter blur-[80px] md:blur-[100px] animate-pulse duration-5000 delay-1000"></div>
          <div className="absolute top-2/3 left-1/3 w-48 md:w-72 h-48 md:h-72 rounded-full bg-terciary mix-blend-multiply filter blur-[60px] md:blur-[90px] animate-pulse duration-6000 delay-500"></div>
          <div className="absolute -bottom-10 right-1/4 w-40 md:w-60 h-40 md:h-60 rounded-full bg-primary/40 mix-blend-multiply filter blur-[60px] md:blur-[80px] animate-pulse duration-8000"></div>
        </div>

        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/pattern.svg')] bg-repeat"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Columna de Texto - Full width en mobile, 7/12 en desktop */}
            <div className={`lg:col-span-7 z-10 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Badge con diseño mejorado con efecto de brillo - adaptado para mobile */}
              <div className="relative inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/95 text-primary mb-6 md:mb-8 shadow-lg backdrop-blur-sm border border-primary/10 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
                <span className="text-xs sm:text-sm font-medium flex items-center gap-2">
                  <span className="inline-flex w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-terciary font-semibold">Exclusivo para Constructores</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4 md:mb-6">
                <span className="block opacity-90">Conecta con</span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-terciary">Clientes Calificados</span>
                  <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-accent z-0 opacity-40 rounded-md"></span>
                </span>{' '}
                <span className="block mt-1">Para Tu Constructora</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray mb-6 md:mb-8 max-w-xl leading-relaxed">
                Expande tu alcance nacional y conecta directamente con personas buscando 
                <span className="font-semibold text-primary"> construir su hogar ideal </span>
                en el mercado de casas prefabricadas.
              </p>

              {/* Stats highlight - responsive grid para mobile */}
              <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-8 mb-6 md:mb-10">
                <div className="flex items-center">
                  <div className="mr-2 sm:mr-3 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white shadow-md">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-primary">+500</p>
                    <p className="text-xs sm:text-sm text-gray">Clientes conectados</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 sm:mr-3 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white shadow-md">
                    <BarChart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-primary">35%</p>
                    <p className="text-xs sm:text-sm text-gray">Aumento en ventas</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons - Stack en mobile, lado a lado en tablet+ */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={scrollToForm}
                  className="group relative inline-flex items-center justify-center bg-primary text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-terciary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center">
                    Unir Mi Empresa
                    <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                <button
                  className="inline-flex items-center justify-center bg-white text-primary font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <span>Ver Beneficios</span>
                </button>
              </div>
            </div>

            {/* Columna de Imagen - Hidden en mobile small, Visible en medium+, 5/12 en desktop */}
            <div className={`mt-12 sm:mt-16 lg:mt-0 lg:col-span-5 z-10 relative transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {/* Marco decorativo con efecto de pulso */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 rounded-2xl border-2 border-dashed border-terciary/30 z-0 animate-pulse duration-4000"></div>
              
              {/* Contenedor principal de imagen con efectos */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl bg-white p-1.5 sm:p-2">
                <img
                  src="/ck40-1.jpg"
                  alt="Crecimiento de negocio para constructores"
                  className="w-full h-60 sm:h-auto rounded-lg sm:rounded-xl object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Overlay con gradiente refinado */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent opacity-60 rounded-lg sm:rounded-xl"></div>
                
                {/* Etiqueta sobre la imagen - adaptada para mobile */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm text-primary px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg">
                  <p className="text-xs sm:text-sm font-medium text-gray">Únete a nuestra red de</p>
                  <p className="text-base sm:text-lg font-bold text-primary">Constructores Premium</p>
                </div>
              </div>

              {/* Elementos flotantes - solo visibles en tablet+ */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-white text-primary px-3 sm:px-5 py-2 sm:py-3 rounded-lg shadow-xl z-20 items-center transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-secondary p-1.5 sm:p-2 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm sm:text-base">Leads Calificados</p>
                    <p className="text-xs text-gray hidden sm:block">Contactos de alta calidad</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex absolute top-4 -left-4 bg-white text-primary px-3 sm:px-5 py-2 sm:py-3 rounded-lg shadow-xl z-20 items-center transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-secondary p-1.5 sm:p-2 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm sm:text-base">100% Garantizado</p>
                    <p className="text-xs text-gray hidden sm:block">Clientes verificados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator mejorado - adaptado para mobile */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToForm}
            className="group flex flex-col items-center gap-1 sm:gap-2 transition-all duration-300 hover:opacity-80"
          >
            <span className="text-xs sm:text-sm font-medium text-primary/80">Descubre más</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:bg-white">
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-bounce" />
            </div>
          </button>
        </div>
        
        {/* Curved shape divider - adaptado para mobile */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className="relative block w-full h-8 sm:h-12 text-white fill-current"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,126.07,111.31,185.33,94.95,207.1,91.39,328.58,77.13,348.33,74.5Z" />
          </svg>
        </div>
      </section>
      

      {/* === Beneficios Section (Nuevo) === */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Beneficios Para Constructores
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Únete a nuestra red de constructores de confianza y expande tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beneficio 1 */}
            <div className="bg-secondary rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Clientes Calificados</h3>
              <p className="text-gray">
                Conecta con personas realmente interesadas en construir su hogar modular.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="bg-secondary rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Alcance Nacional</h3>
              <p className="text-gray">
                Expande tu presencia en toda Colombia con nuestro servicio de matchmaking.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="bg-secondary rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BuildingIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Crecimiento Sostenible</h3>
              <p className="text-gray">
                Aumenta tus ventas y construye una reputación sólida en el sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Formulario Section === */}
      <section id="formulario" className="w-full py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          {/* Formulario con fondo y sombra sutil */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <EmpresaJoinForm />
          </div>
        </div>
      </section>
    </div>
  );
}