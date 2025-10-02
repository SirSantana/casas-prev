'use client'
import { useState, useEffect } from "react";
import { MapPin, Star, Phone, Calculator, Filter, X, ChevronDown, Building, Users, Award, ArrowRight, Search, Sparkles, CheckCircle, Heart, Eye } from 'lucide-react';

const empresasData = [
  {
    id: 1,
    nombre: "Prefabricadas Neb",
    ubicacion: "Bogotá",
    tipo: "Modular",
    experiencia: "10 años",
    servicios: ["Diseño", "Fabricación", "Entrega"],
    imagen: "/ck40-1.jpg",
    rating: 4.9,
    reseñas:53,
    precio: 3800,
    proyectos: 125,
    destacado: true,
    direccion:'Ave Cra 30 #75 61 oficina 407, Bogotá',
    telefono:'3156507669'
  },
  {
    id: 2,
    nombre: "EcoPrefabricadas",
    ubicacion: "Medellín",
    tipo: "Sostenible",
    experiencia: "8 años",
    servicios: ["Energía solar", "Materiales reciclados"],
    imagen: "/ck40-1.jpg",
    rating: 4.6,
    precio: 4200,
    proyectos: 89
  },
  {
    id: 3,
    nombre: "PrefaHomes",
    ubicacion: "Cali",
    tipo: "Minimalista",
    experiencia: "6 años",
    servicios: ["Casas a medida", "Rápida instalación"],
    imagen: "/ck40-1.jpg",
    rating: 4.9,
    precio: 3950,
    proyectos: 67
  },
  {
    id: 4,
    nombre: "Modular Innovations",
    ubicacion: "Medellín",
    tipo: "Sostenible",
    experiencia: "8 años",
    servicios: ["Energía solar", "Materiales reciclados"],
    imagen: "/ck40-1.jpg",
    rating: 4.6,
    precio: 4200,
    proyectos: 89
  }
];

const FiltroEmpresasMejorado = () => {
  const [filtroUbicacion, setFiltroUbicacion] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [precioRange, setPrecioRange] = useState([0, 5000]);
  const [isMobile, setIsMobile] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Animation trigger
    setIsInView(true);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const empresasFiltradas = empresasData.filter((empresa) =>
    (filtroUbicacion ? empresa.ubicacion === filtroUbicacion : true) &&
    (filtroTipo ? empresa.tipo === filtroTipo : true) &&
    (empresa.precio >= precioRange[0] && empresa.precio <= precioRange[1])
  );

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-accent text-accent' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <>
      {/* Hero Section con búsqueda */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary/80">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 rounded-full bg-accent mix-blend-multiply filter blur-[100px] animate-pulse duration-7000"></div>
          <div className="absolute bottom-1/2 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-primary mix-blend-multiply filter blur-[120px] animate-pulse duration-5000 delay-1000"></div>
          <div className="absolute top-2/3 left-1/3 w-48 md:w-72 h-48 md:h-72 rounded-full bg-terciary mix-blend-multiply filter blur-[90px] animate-pulse duration-6000 delay-500"></div>
          <div className="absolute -bottom-10 right-1/4 w-40 md:w-60 h-40 md:h-60 rounded-full bg-primary/40 mix-blend-multiply filter blur-[80px] animate-pulse duration-8000"></div>
        </div>

        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/pattern.svg')] bg-repeat"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="relative inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/95 text-primary mb-6 md:mb-8 shadow-lg backdrop-blur-sm border border-primary/10 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <Sparkles className="w-4 h-4 text-accent mr-2" />
              <span className="text-xs sm:text-sm font-medium">
                <span className="text-terciary font-semibold">Constructores Certificados</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4 md:mb-6">
              <span className="block opacity-90">Encuentra tu</span>
              <span className="relative inline-block">
                <span className="relative z-10 text-terciary">Constructor Ideal</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-accent z-0 opacity-40 rounded-md"></span>
              </span>{' '}
              <span className="block mt-1">Para Tu Hogar</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
              Conecta con los mejores constructores de
              <span className="font-semibold text-primary"> casas prefabricadas </span>
              en toda Colombia.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-8 mb-6 md:mb-10 justify-center">
              <div className="flex items-center justify-center sm:justify-start">
                <div className="mr-2 sm:mr-3 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white shadow-md">
                  <Building className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-primary">{empresasFiltradas.length}+</p>
                  <p className="text-xs sm:text-sm text-gray">Constructores</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="mr-2 sm:mr-3 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white shadow-md">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-primary">500+</p>
                  <p className="text-xs sm:text-sm text-gray">Proyectos</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start col-span-2 sm:col-span-1">
                <div className="mr-2 sm:mr-3 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white shadow-md">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-primary">4.8</p>
                  <p className="text-xs sm:text-sm text-gray">Rating Promedio</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 sm:h-12 text-white fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,126.07,111.31,185.33,94.95,207.1,91.39,328.58,77.13,348.33,74.5Z" />
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar de Filtros Mejorado */}
        <div className={`bg-white rounded-2xl shadow-xl border border-secondary/30 overflow-hidden transition-all duration-300 ${isMobile ? 'w-full' : 'w-80 h-fit sticky top-8'}`}>
          {/* Header del filtro */}
          <div className="bg-gradient-to-r from-primary to-terciary p-6 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Filter className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Filtros</h3>
                  <p className="text-secondary/80 text-sm">Encuentra tu constructor ideal</p>
                </div>
              </div>
              {isMobile && (
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  {showFilters ? <X className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
          
          <div className={`p-6 space-y-6 ${isMobile && !showFilters ? 'hidden' : 'block'}`}>
            {/* Filtro Ubicación */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-terciary">
                <MapPin className="w-4 h-4 text-primary" />
                Ubicación
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 bg-secondary/20 border-2 border-secondary rounded-xl focus:border-accent focus:bg-white transition-all duration-200 appearance-none cursor-pointer text-primary"
                  value={filtroUbicacion}
                  onChange={(e) => setFiltroUbicacion(e.target.value)}
                >
                  <option value="">Todas las ciudades</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Cali">Cali</option>
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray pointer-events-none" />
              </div>
            </div>

            {/* Filtro Tipo */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-terciary">
                <Building className="w-4 h-4 text-primary" />
                Tipo de Casa
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 bg-secondary/20 border-2 border-secondary rounded-xl focus:border-accent focus:bg-white transition-all duration-200 appearance-none cursor-pointer text-primary"
                  value={filtroTipo}
                  onChange={(e) => setFiltroTipo(e.target.value)}
                >
                  <option value="">Todos los tipos</option>
                  <option value="Modular">Modular</option>
                  <option value="Sostenible">Sostenible</option>
                  <option value="Minimalista">Minimalista</option>
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray pointer-events-none" />
              </div>
            </div>

            {/* Filtro Precio */}
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-sm font-semibold text-terciary">
                <Calculator className="w-4 h-4 text-primary" />
                Precio por m²
              </label>
              <div className="bg-secondary/20 p-4 rounded-xl">
                <div className="flex items-center justify-between text-sm font-medium text-gray mb-3">
                  <span className="bg-white px-2 py-1 rounded text-primary">${precioRange[0].toLocaleString()}</span>
                  <span className="bg-white px-2 py-1 rounded text-primary">${precioRange[1].toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={precioRange[1]}
                  onChange={(e) => setPrecioRange([precioRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>

            {/* Botón limpiar */}
            <button 
              onClick={() => {
                setFiltroUbicacion("");
                setFiltroTipo("");
                setPrecioRange([0, 5000]);
              }}
              className="w-full py-3 text-primary font-semibold hover:bg-secondary transition-colors duration-200 rounded-xl border-2 border-accent hover:border-primary"
            >
              Limpiar filtros
            </button>
          </div>
        </div>

        {/* Lista de Empresas */}
        <div className="flex-1">
          {/* Header con resultados y controles */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  {empresasFiltradas.length === 1 ? '1 Constructor Encontrado' : `${empresasFiltradas.length} Constructores Encontrados`}
                </h2>
                <p className="text-gray">Encuentra el constructor perfecto para tu proyecto</p>
              </div>
              
              {/* Controles de vista */}
              <div className="flex items-center gap-2">
                <div className="bg-secondary p-1 rounded-lg flex">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
                  >
                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                      <div className={`${viewMode === 'grid' ? 'bg-primary' : 'bg-gray'} rounded-sm`}></div>
                      <div className={`${viewMode === 'grid' ? 'bg-primary' : 'bg-gray'} rounded-sm`}></div>
                      <div className={`${viewMode === 'grid' ? 'bg-primary' : 'bg-gray'} rounded-sm`}></div>
                      <div className={`${viewMode === 'grid' ? 'bg-primary' : 'bg-gray'} rounded-sm`}></div>
                    </div>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-all ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
                  >
                    <div className="w-4 h-4 flex flex-col gap-0.5">
                      <div className={`h-0.5 ${viewMode === 'list' ? 'bg-primary' : 'bg-gray'} rounded`}></div>
                      <div className={`h-0.5 ${viewMode === 'list' ? 'bg-primary' : 'bg-gray'} rounded`}></div>
                      <div className={`h-0.5 ${viewMode === 'list' ? 'bg-primary' : 'bg-gray'} rounded`}></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {isMobile && (
              <button 
                onClick={() => setShowFilters(true)}
                className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-terciary transition-colors mb-6"
              >
                <Filter className="w-5 h-5" />
                Mostrar Filtros
              </button>
            )}
          </div>

          {/* Grid/Lista de empresas */}
          {empresasFiltradas.length > 0 ? (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-6'}>
              {empresasFiltradas.map((empresa) => (
                <div
                  key={empresa.id}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-secondary/30 hover:border-accent transform hover:-translate-y-1 ${viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''}`}
                >
                  {/* Badge destacado */}
                  {empresa.destacado && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-accent to-primary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        Destacado
                      </div>
                    </div>
                  )}

                  {/* Botón favorito */}
                  <button
                    onClick={() => toggleFavorite(empresa.id)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
                  >
                    <Heart className={`w-5 h-5 ${favorites.has(empresa.id) ? 'fill-red-500 text-red-500' : 'text-gray'}`} />
                  </button>

                  {/* Imagen */}
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-full sm:w-80 h-48' : 'w-full h-48'}`}>
                    <img
                      src={empresa.imagen}
                      alt={empresa.nombre}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent"></div>
                    
                    {/* Quick view button */}
                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110">
                      <Eye className="w-4 h-4 text-primary" />
                    </button>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-terciary transition-colors">
                          {empresa.nombre}
                        </h3>
                        <div className="flex items-center text-gray mb-2">
                          <MapPin className="w-4 h-4 mr-1 text-primary" />
                          <span className="text-sm">{empresa.ubicacion}</span>
                        </div>
                      </div>
                      <div className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {empresa.tipo}
                      </div>
                    </div>

                    {/* Rating y precio */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {renderStars(empresa.rating)}
                        <span className="font-semibold text-primary">{empresa.rating}</span>
                        <span className="text-gray text-sm">({empresa.proyectos} proyectos)</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          ${empresa.precio.toLocaleString()}
                        </div>
                        <div className="text-gray text-xs">por m²</div>
                      </div>
                    </div>

                    {/* Servicios */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {empresa.servicios.map((servicio, index) => (
                          <span key={index} className="bg-secondary text-primary text-xs px-3 py-1 rounded-full hover:bg-accent transition-colors">
                            {servicio}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats rápidas */}
                    <div className="flex items-center justify-between text-sm text-gray mb-6 bg-secondary/30 p-3 rounded-lg">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{empresa.experiencia}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{empresa.proyectos} proyectos</span>
                      </div>
                    </div>

                    {/* Botones */}
                    <div className="flex gap-3 mt-auto">
                      <button className="flex-1 bg-secondary text-primary font-semibold py-3 px-4 rounded-xl hover:bg-accent transition-colors duration-200 flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        Ver Teléfono
                      </button>
                      <button 
                        onClick={() => setOpenModal(true)}
                        className="flex-1 bg-gradient-to-r from-primary to-terciary text-white font-semibold py-3 px-4 rounded-xl hover:from-terciary hover:to-primary transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105"
                      >
                        <Calculator className="w-4 h-4" />
                        Cotizar
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-secondary/30">
              <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">No encontramos resultados</h3>
              <p className="text-gray mb-8 max-w-md mx-auto">
                Prueba ajustando los filtros de búsqueda para encontrar más constructores
              </p>
              <button 
                onClick={() => {
                  setFiltroUbicacion("");
                  setFiltroTipo("");
                  setPrecioRange([0, 5000]);
                }}
                className="bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-terciary transition-colors duration-200 flex items-center gap-2 mx-auto"
              >
                <X className="w-5 h-5" />
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal de cotización */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform animate-in border border-secondary/30">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-primary">Solicitar Cotización</h3>
                <button 
                  onClick={() => setOpenModal(false)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray" />
                </button>
              </div>
              <p className="text-gray mb-6">Te conectaremos con el constructor seleccionado</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setOpenModal(false)}
                  className="flex-1 bg-secondary text-primary py-3 rounded-xl font-semibold hover:bg-accent transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  onClick={() => setOpenModal(false)}
                  className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-terciary transition-colors"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #261B37, #3F274F);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(38, 27, 55, 0.4);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #261B37, #3F274F);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(38, 27, 55, 0.4);
        }
        .animate-in {
          animation: slideInFromBottom 0.5s ease-out;
        }
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

      `}</style>
    </>
  );
};

export default FiltroEmpresasMejorado;