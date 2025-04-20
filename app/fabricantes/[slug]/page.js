"use client";
import { useState } from "react";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  MessageCircle, 
  Star, 
  ChevronRight,
  Home,
  Clock,
  Send,
  CalendarDays,
  ArrowRight,
  BadgeCheck,
  GalleryThumbnails,
  CircleDollarSign,
  CheckCircle2
} from "lucide-react";
import ImageGallery from "@/app/components/Fabricantes/ImageSlider";

const empresa = {
  nombre: "Casas Modernas S.A.S",
  logo: "/logo-morado.svg",
  imagenes: [
    "/ck40-1.jpg",
    "/ck40-1.jpg",
    "/ck40-1.jpg",
    "/ck40-1.jpg"
  ],
  descripcion: "Líderes en construcción de casas prefabricadas con diseños innovadores y calidad certificada. Más de 15 años transformando sueños en hogares reales.",
  ubicacion: "Medellín, Colombia",
  telefono: "3001234567",
  correo: "contacto@casasmodernas.com",
  web: "casasmodernas.com",
  rating: 4.8,
  proyectos: 245,
  certificaciones: ["ISO 9001", "Construcción Sostenible"],
  modelos: [
    {
      nombre: "Modelo Aurora",
      descripcion: "Diseño contemporáneo de 70m² perfecto para familias pequeñas",
      imagen: "/ck40-1.jpg",
      precio: 185000000,
      tiempo: "6 semanas",
      caracteristicas: ["2 Habitaciones", "1 Baño", "Cocina integral", "Porche frontal"],
      detalles: "Estructura antisísmica, acabados premium, iluminación LED"
    },
    {
      nombre: "Modelo Skyline", 
      descripcion: "Moderno diseño urbano de 90m² con terraza panorámica",
      imagen: "/ck40-1.jpg",
      precio: 245000000,
      tiempo: "8 semanas",
      caracteristicas: ["3 Habitaciones", "2 Baños", "Terraza", "Cocina semi-integral"],
      detalles: "Doble altura en sala, ventanales amplios, sistema de domótica básica"
    }
  ],
};

const PerfilEmpresa = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
  });
  const [activeImage, setActiveImage] = useState(0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header minimalista */}
      <header className="py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-secondary/20">
        <div className="flex items-center gap-4">
          <Image 
            src={empresa.logo} 
            alt="Logo" 
            width={56} 
            height={56}
            className="object-contain"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary">{empresa.nombre}</h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(empresa.rating) ? 'fill-accent stroke-accent' : 'stroke-gray-300 fill-transparent'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-terciary">{empresa.rating} ({empresa.proyectos}+ proyectos)</span>
            </div>
          </div>
        </div>
        
        <a 
          href={`https://wa.me/57${empresa.telefono}`}
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2.5 rounded-lg font-medium transition-all shadow-sm"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Contactar por WhatsApp</span>
        </a>
      </header>
                <ImageGallery images={empresa.imagenes} />

      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12">
        {/* Información principal */}
        <div className="lg:col-span-2 space-y-8">
          {/* Descripción */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Sobre la empresa</h2>
            <p className="text-terciary leading-relaxed">{empresa.descripcion}</p>
            
            {empresa.certificaciones && (
              <div className="flex flex-wrap gap-2 mt-4">
                {empresa.certificaciones.map((cert, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 bg-secondary/10 text-primary px-3 py-1.5 rounded-full text-sm">
                    <BadgeCheck className="w-4 h-4 text-accent" />
                    {cert}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* Modelos */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Modelos disponibles</h2>
            
            <div className="grid grid-cols-1 gap-6">
              {empresa.modelos.map((modelo, i) => (
                <article key={i} className="border border-secondary/20 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-64 relative">
                      <Image
                        src={modelo.imagen}
                        alt={modelo.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="md:w-2/3 p-6 space-y-4">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-bold text-primary">{modelo.nombre}</h3>
                        <div className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full">
                          <CircleDollarSign className="w-4 h-4" />
                          <span className="font-medium">${(modelo.precio/1000000).toFixed(1)}M</span>
                        </div>
                      </div>
                      
                      <p className="text-terciary">{modelo.descripcion}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-terciary">
                          <Clock className="w-5 h-5 text-accent" />
                          <span>{modelo.tiempo}</span>
                        </div>
                        <div className="flex items-center gap-2 text-terciary">
                          <Home className="w-5 h-5 text-accent" />
                          <span>{modelo.caracteristicas[0].split(' ')[0]}m²</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {modelo.caracteristicas.map((caract, j) => (
                          <span key={j} className="flex items-center gap-1 bg-secondary/10 text-primary px-3 py-1 rounded-full text-sm">
                            <CheckCircle2 className="w-3 h-3 text-accent" />
                            {caract}
                          </span>
                        ))}
                      </div>
                      
                      <button className="flex items-center gap-1 text-accent hover:text-terciary font-medium mt-4">
                        Ver detalles completos
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Formulario */}
          <div className="bg-white border border-secondary/20 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Solicitar cotización</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-terciary mb-1">Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  className="w-full border border-secondary/20 rounded-lg px-4 py-3 text-terciary focus:ring-2 focus:ring-accent focus:border-transparent transition"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-terciary mb-1">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                  className="w-full border border-secondary/20 rounded-lg px-4 py-3 text-terciary focus:ring-2 focus:ring-accent focus:border-transparent transition"
                  placeholder="300 123 4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-terciary mb-1">Mensaje</label>
                <textarea
                  name="mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  className="w-full border border-secondary/20 rounded-lg px-4 py-3 text-terciary focus:ring-2 focus:ring-accent focus:border-transparent transition"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent hover:bg-terciary text-white py-3.5 rounded-lg font-bold transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar solicitud
              </button>
            </form>
          </div>

          {/* Contacto */}
          <div className="bg-white border border-secondary/20 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Contacto directo</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-terciary">Teléfono</p>
                  <a href={`tel:${empresa.telefono}`} className="text-primary font-medium hover:underline">
                    {empresa.telefono.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-terciary">Correo electrónico</p>
                  <a href={`mailto:${empresa.correo}`} className="text-primary font-medium hover:underline">
                    {empresa.correo}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-terciary">Sitio web</p>
                  <a 
                    href={`https://${empresa.web}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    {empresa.web}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-terciary">Ubicación</p>
                  <p className="text-primary font-medium">{empresa.ubicacion}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Galería pequeña */}
          <div className="bg-white border border-secondary/20 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-primary mb-4">
              <GalleryThumbnails className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-bold">Galería de proyectos</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {empresa.imagenes.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className="aspect-square overflow-hidden rounded-lg bg-gray-100 hover:opacity-90 transition-opacity"
                >
                  <Image
                    src={img}
                    alt={`Proyecto ${i + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilEmpresa;