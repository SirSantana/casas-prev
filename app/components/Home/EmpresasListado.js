'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import Button, { ButtonVariant } from "../Button/Button";
import renderStars from "../../utils/renderStars";
import CotizarModal from '@/components/Modal/CotizacionModal';

const empresasData = [
  {
    id: 1,
    nombre: "Casa Prefab Colombia",
    ubicacion: "Bogotá",
    tipo: "Modular",
    experiencia: "10 años",
    servicios: ["Diseño", "Fabricación", "Entrega"],
    imagen: "/ck40-1.jpg",
    rating: 4.8,
    precio: 3800,
    proyectos: 125
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
  },{
    id: 4,
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
  // ... otros datos de empresas
];

const FiltroEmpresas = () => {
  const [filtroUbicacion, setFiltroUbicacion] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [precioRange, setPrecioRange] = useState([0, 5000]);
  const [isMobile, setIsMobile] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const empresasFiltradas = empresasData.filter((empresa) =>
    (filtroUbicacion ? empresa.ubicacion === filtroUbicacion : true) &&
    (filtroTipo ? empresa.tipo === filtroTipo : true) &&
    (empresa.precio >= precioRange[0] && empresa.precio <= precioRange[1])
  );

  return (
    <>
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6">
      {/* Filtros - Adaptados para mobile */}
      <div className={`bg-white p-5 rounded-xl shadow-sm border border-secondary/20 ${isMobile ? 'w-full sticky top-0 z-10' : 'w-64 h-fit sticky top-24'}`}>
        <button 
          className={`md:hidden w-full flex justify-between items-center text-primary font-bold mb-4`}
          onClick={() => document.getElementById('filters').classList.toggle('hidden')}
        >
          <span>Filtrar Empresas</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
        </button>
        
        <div id="filters" className={`${isMobile ? 'hidden' : 'block'}`}>
          {/* Filtro Ubicación */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-terciary mb-2">Ubicación</label>
            <select
              className="w-full px-3 py-2 text-terciary bg-white border border-secondary/30 rounded-lg focus:ring-2 focus:ring-accent"
              value={filtroUbicacion}
              onChange={(e) => setFiltroUbicacion(e.target.value)}
            >
              <option value="">Todas las ciudades</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Medellín">Medellín</option>
              <option value="Cali">Cali</option>
            </select>
          </div>

          {/* Filtro Tipo */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-terciary mb-2">Tipo de Casa</label>
            <select
              className="w-full px-3 py-2 text-terciary bg-white border border-secondary/30 rounded-lg focus:ring-2 focus:ring-accent"
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value)}
            >
              <option value="">Todos los tipos</option>
              <option value="Modular">Modular</option>
              <option value="Sostenible">Sostenible</option>
              <option value="Minimalista">Minimalista</option>
            </select>
          </div>

          {/* Filtro Precio */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-terciary mb-2">Precio por m²</label>
            <div className="flex items-center justify-between text-xs text-gray mb-2">
              <span>${precioRange[0]}</span>
              <span>${precioRange[1]}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={precioRange[1]}
              onChange={(e) => setPrecioRange([precioRange[0], parseInt(e.target.value)])}
              className="range-slider w-full h-2 rounded-lg cursor-pointer appearance-none"
            />
          </div>

          <button 
            onClick={() => {
              setFiltroUbicacion("");
              setFiltroTipo("");
              setPrecioRange([0, 5000]);
            }}
            className="text-sm text-primary font-medium hover:text-accent transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      </div>

      {/* Lista de Empresas */}
      <div className="flex-1">
        {/* Resultados encontrados */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-primary">
            {empresasFiltradas.length} {empresasFiltradas.length === 1 ? 'empresa encontrada' : 'empresas encontradas'}
          </h2>
          {isMobile && (
            <button 
              onClick={() => document.getElementById('filters').classList.toggle('hidden')}
              className="text-sm text-accent font-medium flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              Filtros
            </button>
          )}
        </div>

        {/* Grid de empresas */}
        {empresasFiltradas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {empresasFiltradas.map((empresa) => (
              <div
                key={empresa.id}
                className="border border-secondary/20 rounded-xl p-5 bg-white flex flex-col gap-4 transition-all hover:shadow-md"
              >
                {/* Imagen */}
                <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={empresa.imagen}
                    alt={empresa.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-primary">
                      {empresa.nombre}
                    </h3>
                    <span className="bg-secondary/20 text-primary text-xs px-2 py-1 rounded">
                      {empresa.tipo}
                    </span>
                  </div>

                  <div className="mt-2 text-sm text-gray flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {empresa.ubicacion}
                  </div>

                  <div className="mt-3 flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      {renderStars(empresa.rating)} {empresa.rating.toFixed(1)}
                    </div>
                    <div className="text-primary font-medium">
                      ${empresa.precio.toLocaleString()}/m²
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {empresa.servicios.map((servicio, index) => (
                      <span key={index} className="bg-secondary/20 text-primary text-xs px-2 py-1 rounded">
                        {servicio}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botones */}
                <div  className="flex flex-col gap-2 w-full">
                  <Button 
                    fullWidth 
                    variant={ButtonVariant.terciary}
                  >
                    Ver Teléfono
                  </Button>
                  <Button 
                    variant={ButtonVariant.primary} 
                    fullWidth
                    onClick={(e) => {
                      setOpenModal(true);
                      e.preventDefault(); // Evita la navegación del Link
                      e.stopPropagation(); // Detiene el burbujeo del evento
                    }}
                  >
                    Solicitar Cotización
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-primary">No hay resultados</h3>
            <p className="mt-1 text-gray">Prueba ajustando los filtros de búsqueda</p>
            <button 
              onClick={() => {
                setFiltroUbicacion("");
                setFiltroTipo("");
                setPrecioRange([0, 5000]);
              }}
              className="mt-4 text-sm text-accent font-medium hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
     
    </div>
     {
      openModal && <CotizarModal openModal={openModal} setOpenModal={setOpenModal} />
    }
    </>
  );
};

export default FiltroEmpresas;