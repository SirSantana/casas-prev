// app/blog/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import RootLayout from '../layout';
export const metadata = {
  title: 'Blog Casa Prefabricas en Colombia',
  description: 'Encuentra los mejores artículos sobre casas prefabricadas en Colombia',
  keywords: ['blog', 'casas prefabricadas', 'artículos', 'Colombia'],
  openGraph: {
    images: '/ck40-1.jpg',
  },
};
export default function BlogPage() {
  // En un proyecto real, estos datos vendrían de una API o CMS
  const articulos = [
    {
      id: 1,
      titulo: "Cuanto cuesta una casa prefabricada en Colombia?",
      extracto: "Descubre por qué las casas prefabricadas son una excelente opción para construir tu hogar en Colombia: eficiencia, costos y sostenibilidad.",
      autor: "María Rodríguez",
      fecha: "18 de abril, 2025",
      tiempoLectura: "5 min",
      categoria: "Construcción",
      imagen: "/ck40-1.jpg",
      destacado: true,
      link: "cuanto-cuesta-casa-prefabricada"
    },
    {
      id: 2,
      titulo: "Casas Prefabricadas vs. Casas Tradicionales en Colombia",
      extracto: "Descubre las diferencias clave entre las casas prefabricadas y las tradicionales en Colombia: tiempo de construcción, costos, materiales, flexibilidad, durabilidad, y más.",
      autor: "María Rodríguez",
      fecha: "18 de abril, 2025",
      tiempoLectura: "5 min",
      categoria: "Construcción",
      imagen: "/ck40-1.jpg",
      destacado: false,
      link: "casas-prefabricadas-vs-casas-tradicionales"
    },
    {
      id: 3,
      titulo: "¿Qué Materiales se Usan para Construir una Casa Prefabricada en Colombia?",
      extracto: "Descubre los materiales que se utilizan para construir casas prefabricadas en Colombia: materiales de construcción, materiales de interiores, materiales de ventilación, y más.",
      autor: "María Rodríguez",
      fecha: "18 de abril, 2025",
      tiempoLectura: "5 min",
      categoria: "Construcción",
      imagen: "/ck40-1.jpg",
      destacado: false,
      link: "material-casas-prefabricadas"
    
    }

  ];

  return (
    <RootLayout>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado de blog */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Blog de Casas Prefabricadas</h1>
            <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto">Descubre todo sobre el mundo de las casas prefabricadas en Colombia: innovación, sostenibilidad y diseño.</p>
          </div>

          {/* Filtros y búsqueda */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex flex-wrap gap-2 md:gap-4">
              <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-terciary transition-all duration-300">Todos</button>
              <button className="bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-accent transition-all duration-300">Construcción</button>
              <button className="bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-accent transition-all duration-300">Diseño</button>
              <button className="bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-accent transition-all duration-300">Materiales</button>
              <button className="bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-accent transition-all duration-300">Sostenibilidad</button>
            </div>

            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Buscar artículos"
                className="w-full bg-secondary text-primary rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Artículo destacado */}
          {articulos.filter(articulo => articulo.destacado).map(articulo => (
            <div key={articulo.id} className="bg-secondary rounded-2xl overflow-hidden shadow-xl mb-16 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-80 relative bg-gray-300">
                  {/* Imagen optimizada con next/image */}
                  <Image
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-60"></div>
                  <div className="absolute top-0 left-0 bg-accent text-primary px-4 py-2 m-6 rounded-full text-sm font-bold flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span>Destacado</span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 md:p-12">
                  <div className="flex items-center mb-4">
                    <span className="bg-accent text-primary rounded-full px-3 py-1 text-sm font-medium inline-block">{articulo.categoria}</span>
                    <span className="text-gray text-sm ml-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {articulo.tiempoLectura} de lectura
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{articulo.titulo}</h2>
                  <p className="text-gray text-lg mb-6">{articulo.extracto}</p>

                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-terciary mr-4 flex items-center justify-center text-white font-bold text-lg">
                      {articulo.autor.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-primary">{articulo.autor}</p>
                      <p className="text-sm text-gray">{articulo.fecha}</p>
                    </div>
                  </div>

                  <Link href={`/blog/${articulo.link}`} className="inline-flex items-center bg-primary text-white font-medium py-3 px-8 rounded-full hover:bg-terciary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Leer Artículo
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Lista de artículos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articulos.filter(articulo => !articulo.destacado).map(articulo => (
              <div key={articulo.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary group hover:-translate-y-2">
                <div className="h-60 relative bg-gray-300 overflow-hidden">
                  {/* En un proyecto real, aquí iría la imagen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <Image
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={true}
                  />
                  <span className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold">{articulo.categoria}</span>
                  <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray">{articulo.fecha}</span>
                    <span className="flex items-center text-sm text-gray">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {articulo.tiempoLectura}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-terciary transition-colors duration-300">{articulo.titulo}</h3>
                  <p className="text-gray mb-6 line-clamp-3">{articulo.extracto}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-terciary flex items-center justify-center text-white font-bold text-sm">
                        {articulo.autor.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-primary text-sm">{articulo.autor}</p>
                      </div>
                    </div>
                    <Link href={`/blog/${articulo.link}`} className="text-primary font-medium hover:text-terciary transition-colors duration-300 flex items-center">
                      Leer más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carga más artículos */}
          <div className="flex justify-center mt-16">
            <button className="bg-secondary text-primary font-medium flex items-center space-x-2 py-3 px-8 rounded-full hover:bg-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
              <span>Cargar más artículos</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Newsletter */}
          <div className="mt-24 bg-secondary rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-block bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
                Newsletter
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">Mantente al día con las últimas tendencias</h3>
              <p className="text-gray mb-8">Suscríbete a nuestro newsletter y recibe artículos exclusivos sobre casas prefabricadas, consejos de construcción y ofertas especiales.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input type="email" placeholder="Tu correo electrónico" className="flex-grow px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
                <button className="bg-primary text-white font-medium py-3 px-8 rounded-full hover:bg-terciary transition-colors duration-300 shadow-sm">
                  Suscribirme
                </button>
              </div>
              <p className="text-xs text-gray mt-4">Nos comprometemos a respetar tu privacidad. No compartiremos tu información.</p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}