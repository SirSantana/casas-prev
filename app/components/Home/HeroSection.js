"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [activeFeature, setActiveFeature] = useState(0);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buscar?query=${query}`);
    }
  };

  const features = [
    {
      icon: "🏡",
      title: "Diseño Personalizado",
      description: "Adaptamos la casa a tus necesidades"
    },
    {
      icon: "⚡",
      title: "Rápida Construcción",
      description: "60% más rápido que construcción tradicional"
    },
    {
      icon: "🌿",
      title: "Materiales Ecológicos",
      description: "Sostenibilidad desde el primer día"
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-accent mix-blend-multiply filter blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-secondary mix-blend-multiply filter blur-[100px] animate-float"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        {/* Contenido izquierdo */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary mb-6 animate-bounce-slow">
            <span className="text-sm font-medium text-primary">✨ Nuevo • Casas modulares 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Construye tu <span className="relative">
              <span className="relative z-10">hogar soñado</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent z-0 opacity-40 animate-underline"></span>
            </span> 🏡
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray max-w-2xl">
            Te conectamos con las <span className="font-semibold text-terciary">mejores empresas certificadas</span> de Colombia para hacer realidad tu proyecto. 
          </p>
          <div className="w-full max-w-2xl mt-8">
          {/* Buscador con más personalidad */}
          <form onSubmit={handleSearch} className="w-full">
        <div className="relative flex flex-col sm:flex-row items-center bg-white rounded-lg md:rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-secondary hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 group">
          {/* Efecto gradiente (solo desktop) */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-secondary rounded-lg md:rounded-xl blur opacity-20 group-hover:opacity-30 transition hidden sm:block"></div>
          
          {/* Parte del input */}
          <div className="flex items-center w-full sm:w-auto sm:flex-1">
            <input
              type="text"
              placeholder="Buscar casa..."
              className="flex-1 px-2 py-3 sm:px-3 sm:py-[0.875rem] text-sm md:text-base text-primary outline-none bg-transparent placeholder-gray z-10 w-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Buscar casas prefabricadas"
            />
          </div>
          
          {/* Botón de búsqueda */}
          <button
            type="submit"
            className="w-full sm:w-auto m-0 sm:m-1 px-4 py-2 sm:px-5 sm:py-3 bg-primary hover:bg-terciary text-white font-medium rounded-b-lg sm:rounded-lg whitespace-nowrap transition-all duration-300 flex items-center justify-center z-10 text-sm md:text-base"
          >
            <span className="mr-1 sm:mr-2">Buscar</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 sm:h-5 sm:w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </button>
        </div>
        
        {/* Texto de ayuda */}
        <p className="mt-2 text-xs sm:text-sm text-gray pl-1 flex items-center">
          <span className="mr-1">📌</span> Ej: "Casa campestre en Bogotá" o "Cabaña 80m²"
        </p>
      </form>
      </div>

          {/* Características con iconos */}
          {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg transition-all cursor-pointer ${activeFeature === index ? 'bg-secondary border border-accent' : 'bg-white border border-secondary/30'}`}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="font-medium text-primary">{feature.title}</h3>
                <p className="text-sm text-gray mt-1">{feature.description}</p>
              </div>
            ))}
          </div> */}
        </div>

        {/* Sección de imagen interactiva */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-full max-w-xl">
            {/* Marco decorativo animado */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl border-2 border-accent z-0 animate-pulse-slow"></div>
            
            {/* Contenedor de imagen interactiva */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 group">
              <Image
                src="/ck40-1.jpg"
                alt="Casa prefabricada moderna con diseño premium"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Overlay interactivo */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="w-full">
                  <button className="w-full bg-white text-primary font-medium py-3 px-4 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                    <span className="mr-2">👀 Ver tour 360°</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Selector de modelos */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[1, 2, 3].map((item) => (
                  <button 
                    key={item}
                    className={`w-3 h-3 rounded-full ${activeFeature === item - 1 ? 'bg-accent' : 'bg-white/60'} transition-colors`}
                    onClick={() => setActiveFeature(item - 1)}
                  />
                ))}
              </div>
              
              {/* Badge superpuesto animado */}
              <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full shadow-md flex items-center animate-wiggle">
                <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
                <span className="font-medium text-sm text-primary">⭐ 4.9/5</span>
              </div>
            </div>
            
            {/* Nota flotante */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-primary px-4 py-2 rounded-lg shadow-lg z-20 flex items-center transform rotate-3">
              <span className="mr-2">💡</span>
              <span className="text-sm font-medium">¡Personaliza cada detalle!</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animación de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="flex flex-col items-center text-gray">
          <span className="mb-1">👇</span>
          <span className="text-xs">Desplázate</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

