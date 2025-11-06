"use client";
import { useState, useEffect } from "react";
import {
  MapPin,
  Star,
  Phone,
  Calculator,
  Filter,
  X,
  ChevronDown,
  Building,
  Users,
  Award,
  ArrowRight,
  Search,
  Sparkles,
  CheckCircle,
  Heart,
  Eye,
} from "lucide-react";

export const empresasData = [
  {
    id: 1,
    nombre: "Clayton Homes",
    ubicacion: "Nationwide",
    tipo: "Manufactured & Modular",
    experiencia: "65 years",
    servicios: [
      "Custom floor plans",
      "Financing assistance",
      "Delivery & Setup",
    ],
    imagen: "/images/clayton-home.jpg",
    rating: 4.7,
    reseñas: 2300,
    precio: 120000,
    proyectos: 150000,
    destacado: true,
    sitio_web: "https://www.claytonhomes.com",
    telefono: "1-800-822-0633",
  },
  {
    id: 2,
    nombre: "Champion Homes",
    ubicacion: "Nationwide",
    tipo: "Modular",
    experiencia: "60 years",
    servicios: [
      "Energy-efficient builds",
      "Customization",
      "Factory-built modules",
    ],
    imagen: "/images/champion-home.jpg",
    rating: 4.6,
    reseñas: 1800,
    precio: 135000,
    proyectos: 120000,
    sitio_web: "https://www.championhomes.com",
  },
  {
    id: 3,
    nombre: "Method Homes",
    ubicacion: "Seattle, Washington",
    tipo: "Modern Sustainable",
    experiencia: "15 years",
    servicios: ["Architectural design", "Luxury modular construction"],
    imagen: "/images/method-home.jpg",
    rating: 4.9,
    reseñas: 260,
    precio: 220000,
    proyectos: 950,
    destacado: true,
    sitio_web: "https://www.methodhomes.net",
  },
  {
    id: 4,
    nombre: "Plant Prefab",
    ubicacion: "California",
    tipo: "Sustainable High-End",
    experiencia: "9 years",
    servicios: ["Custom prefab architecture", "LEED-certified construction"],
    imagen: "/images/plant-prefab.jpg",
    rating: 4.8,
    reseñas: 160,
    precio: 250000,
    proyectos: 650,
    sitio_web: "https://www.plantprefab.com",
  },
  {
    id: 5,
    nombre: "Blu Homes",
    ubicacion: "California",
    tipo: "Modern Modular",
    experiencia: "12 years",
    servicios: ["Smart home integration", "Luxury prefab architecture"],
    imagen: "/images/blu-homes.jpg",
    rating: 4.5,
    reseñas: 130,
    precio: 300000,
    proyectos: 480,
    sitio_web: "https://www.bluhomes.com",
  },
  {
    id: 6,
    nombre: "Boxabl",
    ubicacion: "Nevada",
    tipo: "Foldable Modular",
    experiencia: "4 years",
    servicios: ["Ultra-fast setup", "Small footprint homes"],
    imagen: "/images/boxabl.jpg",
    rating: 4.4,
    reseñas: 19000,
    precio: 54000,
    proyectos: 30000,
    destacado: true,
    sitio_web: "https://www.boxabl.com",
  },
];

const FiltroEmpresasMejoradoEn = () => {
  const [filtroUbicacion, setFiltroUbicacion] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [precioRange, setPrecioRange] = useState([0, 5000]);
  const [isMobile, setIsMobile] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    setIsInView(true);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const empresasFiltradas = empresasData.filter(
    (empresa) => (filtroTipo ? empresa.tipo === filtroTipo : true)
  );

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < Math.floor(rating)
                ? "fill-accent text-accent"
                : "text-gray-300"
            }`}
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-24 md:pt-24 md:pb-32 bg-gradient-to-b from-secondary/30 via-white to-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-accent blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary text-white mb-8 text-sm font-medium shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Verified Premium Builders
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-tight mb-6 tracking-tight">
              Find the Perfect Builder
              <br />
              <span className="text-terciary">for Your Modular Home</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
              Connect with top-rated prefab and modular home builders across the
              United States
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary">
                  <Building className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-semibold text-primary">
                    {empresasFiltradas.length}+
                  </p>
                  <p className="text-sm text-gray">Builders</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-semibold text-primary">500K+</p>
                  <p className="text-sm text-gray">Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-semibold text-primary">4.8</p>
                  <p className="text-sm text-gray">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar Filters - Desktop */}
          <div
            className={`${
              isMobile ? "hidden" : "w-72 flex-shrink-0"
            } sticky top-8 h-fit`}
          >
            <div className="bg-white border border-secondary rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-6">
                Filters
              </h3>

              <div className="space-y-6">
                {/* Location Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-terciary" />
                    Location
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-2.5 bg-white border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent appearance-none cursor-pointer text-sm text-primary transition-all"
                      value={filtroUbicacion}
                      onChange={(e) => setFiltroUbicacion(e.target.value)}
                    >
                      <option value="">All States</option>
                      <option value="California">California</option>
                      <option value="Texas">Texas</option>
                      <option value="Florida">Florida</option>
                      <option value="Nevada">Nevada</option>
                      <option value="Tennessee">Tennessee</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray pointer-events-none" />
                  </div>
                </div>

                {/* Type Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary flex items-center gap-2">
                    <Building className="w-4 h-4 text-terciary" />
                    Home Style
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-2.5 bg-white border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent appearance-none cursor-pointer text-sm text-primary transition-all"
                      value={filtroTipo}
                      onChange={(e) => setFiltroTipo(e.target.value)}
                    >
                      <option value="">All Styles</option>
                      <option value="Modular">Modular Homes</option>
                      <option value="Sustainable">Eco-Friendly</option>
                      <option value="Modern">Modern</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray pointer-events-none" />
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-primary flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-terciary" />
                    Price Range
                  </label>
                  <div className="bg-secondary/50 p-4 rounded-xl">
                    <div className="flex items-center justify-between text-sm font-medium text-primary mb-3">
                      <span>${precioRange[0].toLocaleString()}</span>
                      <span>${precioRange[1].toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="100"
                      value={precioRange[1]}
                      onChange={(e) =>
                        setPrecioRange([precioRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-1 bg-accent/30 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setFiltroUbicacion("");
                    setFiltroTipo("");
                    setPrecioRange([0, 5000]);
                  }}
                  className="w-full py-2.5 text-sm font-medium text-primary hover:bg-secondary/50 transition-colors rounded-xl border border-secondary"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          {isMobile && (
            <button
              onClick={() => setShowFilters(true)}
              className="fixed bottom-6 right-6 z-40 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-terciary transition-colors flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
            </button>
          )}

          {/* Mobile Filter Modal */}
          {isMobile && showFilters && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center">
              <div className="bg-white w-full sm:max-w-md sm:mx-4 rounded-t-3xl sm:rounded-3xl shadow-2xl transform transition-all max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-secondary px-6 py-4 flex justify-between items-center rounded-t-3xl">
                  <h3 className="text-lg font-semibold text-primary">
                    Filters
                  </h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-secondary/50 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Location Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-terciary" />
                      Location
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-2.5 bg-white border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer text-sm"
                        value={filtroUbicacion}
                        onChange={(e) => setFiltroUbicacion(e.target.value)}
                      >
                        <option value="">All States</option>
                        <option value="California">California</option>
                        <option value="Texas">Texas</option>
                        <option value="Florida">Florida</option>
                        <option value="Nevada">Nevada</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray pointer-events-none" />
                    </div>
                  </div>

                  {/* Type Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary flex items-center gap-2">
                      <Building className="w-4 h-4 text-terciary" />
                      Home Style
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-2.5 bg-white border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer text-sm"
                        value={filtroTipo}
                        onChange={(e) => setFiltroTipo(e.target.value)}
                      >
                        <option value="">All Styles</option>
                        <option value="Modular">Modular Homes</option>
                        <option value="Sustainable">Eco-Friendly</option>
                        <option value="Modern">Modern</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray pointer-events-none" />
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-primary flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-terciary" />
                      Price Range
                    </label>
                    <div className="bg-secondary/50 p-4 rounded-xl">
                      <div className="flex items-center justify-between text-sm font-medium text-primary mb-3">
                        <span>${precioRange[0].toLocaleString()}</span>
                        <span>${precioRange[1].toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={precioRange[1]}
                        onChange={(e) =>
                          setPrecioRange([precioRange[0], parseInt(e.target.value)])
                        }
                        className="w-full h-1 bg-accent/30 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => {
                        setFiltroUbicacion("");
                        setFiltroTipo("");
                        setPrecioRange([0, 5000]);
                      }}
                      className="flex-1 py-2.5 text-sm font-medium text-primary hover:bg-secondary/50 transition-colors rounded-xl border border-secondary"
                    >
                      Clear
                    </button>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="flex-1 py-2.5 text-sm font-medium text-white bg-primary hover:bg-terciary transition-colors rounded-xl"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-1">
                    {empresasFiltradas.length}{" "}
                    {empresasFiltradas.length === 1 ? "Builder" : "Builders"}
                  </h2>
                  <p className="text-sm text-gray">
                    Find your perfect home builder
                  </p>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === "grid"
                        ? "bg-white shadow-sm"
                        : "hover:bg-white/50"
                    }`}
                  >
                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-sm ${
                            viewMode === "grid" ? "bg-primary" : "bg-gray"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === "list"
                        ? "bg-white shadow-sm"
                        : "hover:bg-white/50"
                    }`}
                  >
                    <div className="w-4 h-4 flex flex-col gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-0.5 rounded ${
                            viewMode === "list" ? "bg-primary" : "bg-gray"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Grid */}
            {empresasFiltradas.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-6"
                }
              >
                {empresasFiltradas.map((empresa) => (
                  <div
                    key={empresa.id}
                    className="group relative bg-white rounded-2xl border border-secondary hover:border-accent hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Featured Badge */}
                    {empresa.destacado && (
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm">
                          <Award className="w-3 h-3" />
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(empresa.id)}
                      className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:scale-110 transition-transform"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          favorites.has(empresa.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray"
                        }`}
                      />
                    </button>

                    {/* Image */}
                    <div className="relative overflow-hidden h-48 bg-secondary/30">
                      <img
                        src={empresa.imagen}
                        alt={empresa.nombre}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-primary mb-1 group-hover:text-terciary transition-colors">
                            {empresa.nombre}
                          </h3>
                          <div className="flex items-center text-gray text-sm">
                            <MapPin className="w-3.5 h-3.5 mr-1" />
                            {empresa.ubicacion}
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        {renderStars(empresa.rating)}
                        <span className="text-sm font-medium text-primary">
                          {empresa.rating}
                        </span>
                        <span className="text-sm text-gray">
                          ({empresa.proyectos.toLocaleString()})
                        </span>
                      </div>

                      {/* Type Badge */}
                      <div className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                        {empresa.tipo}
                      </div>

                      {/* Services */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {empresa.servicios.slice(0, 2).map((servicio, index) => (
                          <span
                            key={index}
                            className="text-xs text-gray bg-secondary/50 px-2 py-1 rounded-md"
                          >
                            {servicio}
                          </span>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="mb-4 pb-4 border-b border-secondary">
                        <div className="text-2xl font-semibold text-primary">
                          ${empresa.precio.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray">Starting from</div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2">
                        <button className="flex-1 bg-secondary/50 text-primary font-medium py-2.5 px-4 rounded-xl hover:bg-secondary transition-colors text-sm flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4" />
                          Contact
                        </button>
                        <button
                          onClick={() => setOpenModal(true)}
                          className="flex-1 bg-primary text-white font-medium py-2.5 px-4 rounded-xl hover:bg-terciary transition-colors text-sm flex items-center justify-center gap-2"
                        >
                          Quote
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-secondary p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  No results found
                </h3>
                <p className="text-gray mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={() => {
                    setFiltroUbicacion("");
                    setFiltroTipo("");
                    setPrecioRange([0, 5000]);
                  }}
                  className="bg-primary text-white font-medium px-6 py-2.5 rounded-xl hover:bg-terciary transition-colors text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border border-secondary">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-primary">
                  Request Quote
                </h3>
                <button
                  onClick={() => setOpenModal(false)}
                  className="p-2 hover:bg-secondary/50 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray" />
                </button>
              </div>
              <p className="text-gray mb-6">
                We'll connect you with the selected builder
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setOpenModal(false)}
                  className="flex-1 bg-secondary/50 text-primary py-3 rounded-xl font-medium hover:bg-secondary transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setOpenModal(false)}
                  className="flex-1 bg-primary text-white py-3 rounded-xl font-medium hover:bg-terciary transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #261B37, #3F274F);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(38, 27, 55, 0.3);
          transition: all 0.2s ease;
        }
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 3px 8px rgba(38, 27, 55, 0.4);
        }
        .slider::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #261B37, #3F274F);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(38, 27, 55, 0.3);
          transition: all 0.2s ease;
        }
        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 3px 8px rgba(38, 27, 55, 0.4);
        }
      `}</style>
    </div>
  );
};

export default FiltroEmpresasMejoradoEn