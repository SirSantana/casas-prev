'use client';
import { useState, useEffect } from 'react';
import { ExternalLink, Star, Monitor, Headphones, Mouse, Keyboard, Gamepad2, Mic, ChevronRight, Info, ArrowLeft, ArrowRight, Camera, Cpu, PcCase } from 'lucide-react';
export  const products = [
    {
      id: 'monitor',
      name: 'ASUS ROG Swift OLED PG27AQDM',
      price: '$747.87',
      rating: 4.9,
      reviews: 215,
      image: '/api/placeholder/200/150',
      category: 'Monitor',
      icon: Monitor,
      amazonUrl: 'https://amzn.to/44ZPDV5',
      position: {
      desktop: { top: '55%', left: '45%' },
      mobile: { top: '55%', left: '40%' }
    },
      hotspotSize: 'w-32 h-20',
      description: 'Monitor OLED de 27" con 240Hz y tiempo de respuesta ultra rápido',
      zone: 0
    },
    {
    id: 'cpu',
    name: 'AMD Ryzen 9 7950X3D',
    price: '$693.99',
    rating: 4.9,
    reviews: 3271,
    image: '/api/placeholder/200/150',
    category: 'Processor',
    icon: Cpu,
    amazonUrl: 'https://amzn.to/3HhSZJc',
    position: {
      desktop: { top: '40%', left: '70%' },
      mobile: { top: '35%', left: '70%' }
    },
    hotspotSize: 'w-16 h-16',
    description: 'Procesador de 24 núcleos para tareas exigentes como streaming y gaming AAA',
    zone: 1
  },
  {
    id: 'case',
    name: 'Corsair Obsidian 1000D Super-Tower',
    price: '$199.99',
    rating: 4.8,
    reviews: 1249,
    image: '/api/placeholder/200/150',
    category: 'PC Case',
    icon: PcCase,
    amazonUrl: 'https://amzn.to/45xMJXQ',
     position: {
      desktop: { top: '25%', left: '60%' },
      mobile: { top: '20%', left: '65%' }
    },
    hotspotSize: 'w-20 h-16',
    description: 'Caja con diseño panorámico ideal para setups vistosos y ventilación eficiente',
    zone: 1
  },
    {
      id: 'gpu',
      name: 'ASUS ROG Strix GeForce RTX 4090 OC',
      price: '$730.99',
      rating: 4.8,
      reviews: 412,
      image: '/api/placeholder/200/150',
      category: 'Graphics Card',
      icon: Cpu,
      amazonUrl: 'https://amzn.to/45vPQQ1',
      position: {
      desktop: { top: '55%', left: '70%' },
      mobile: { top: '50%', left: '70%' }
    },
      hotspotSize: 'w-20 h-12',
      description: 'Tarjeta gráfica de alto rendimiento ideal para gaming y streaming en 4K',
      zone: 1
    },
    {
      id: 'mouse',
      name: 'Logitech G PRO',
      price: '$60.99',
      rating: 4.7,
      reviews: 3291,
      image: '/api/placeholder/200/150',
      category: 'Gaming Mouse',
      icon: Mouse,
      amazonUrl: 'https://amzn.to/4mys4ZX',
      amazonUrl2: 'https://amzn.to/4mxjHO5',
      position: {
      desktop: { top: '90%', left: '40%' },
      mobile: { top: '85%', left: '35%' }
    },
      hotspotSize: 'w-12 h-8',
      description: 'Ratón inalámbrico profesional con precisión milimétrica',
      zone: 1
    },
    {
      id: 'keyboard',
      name: 'Logitech G915 LIGHTSPEED TKL',
      price: '$229.99',
      rating: 4.6,
      reviews: 1985,
      image: '/api/placeholder/200/150',
      category: 'Mechanical Keyboard',
      icon: Keyboard,
      amazonUrl: 'https://amzn.to/43AmDRz',
      position: {
      desktop: { top: '90%', left: '25%' },
      mobile: { top: '85%', left: '20%' }
    },
      hotspotSize: 'w-32 h-12',
      description: 'Teclado mecánico inalámbrico de perfil bajo y gran rendimiento',
      zone: 1
    },
    {
      id: 'camera',
      name: 'Sony Alpha 6600',
      price: '$1,198.00',
      rating: 4.7,
      reviews: 978,
      image: '/api/placeholder/200/150',
      category: 'Camera',
      icon: Camera,
      amazonUrl: 'https://amzn.to/4kLt633',
       position: {
      desktop: { top: '35%', left: '40%' },
      mobile: { top: '35%', left: '40%' }
    },
      hotspotSize: 'w-16 h-12',
      description: 'Cámara mirrorless compacta para contenido profesional',
      zone: 2
    }
  ]
const GamingSetupAffiliate = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [currentZone, setCurrentZone] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



  // Zonas para navegación móvil
  const zones = [
    { name: 'Zona Central', products: products.filter(p => p.zone === 0) },
    { name: 'Zona Inferior', products: products.filter(p => p.zone === 1) },
    { name: 'Zona Derecha', products: products.filter(p => p.zone === 2) }
  ];

  const handleMouseEnter = (product, event) => {
    setHoveredProduct(product);
    if (!isMobile) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseMove = (event) => {
    if (hoveredProduct && !isMobile) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleMobileProductClick = (product, event) => {
    if (isMobile) {
      setHoveredProduct(product);
      setTimeout(() => setHoveredProduct(null), 4000);
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating)
              ? 'text-amber-400 fill-current'
              : 'text-gray-300'
              }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-2 font-medium">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-zinc-600">
      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        {/* <section className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Setup Gaming
              <span className="block text-gray-600">Profesional</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
              Descubre cada componente de mi setup gaming personal. 
              <span className="hidden sm:inline"> Haz hover sobre los productos para ver detalles.</span>
              <span className="sm:hidden"> Desliza horizontalmente y toca los productos.</span>
            </p>
            <div className="inline-flex items-center px-3 py-2 lg:px-4 bg-gray-50 rounded-full text-sm text-gray-700 border border-gray-200">
              ✨ Precios especiales disponibles
            </div>
          </div>
        </section> */}

        {/* Gaming Setup Interactive Image */}
        <section className="mb-8 lg:mb-20">
          <div className="relative w-full">
            {/* Zone Navigation for Mobile */}
            <div className="relative bg-gray-50 overflow-hidden shadow-xl" onMouseMove={handleMouseMove}>
      {/* Setup Image Container */}
      <div className={`relative ${isMobile ? 'h-[90vh] overflow-x-auto' : 'h-[70vh] lg:h-screen'}`}>
  {/* Este div es el que crecerá según el ancho natural de la imagen */}
  <div className="relative h-full w-max">
    <img
      src="/setupxokas1.png"
      alt="Mi Setup Gamer"
      className={`${isMobile ? 'w-auto h-full' : 'w-auto h-auto '}`}
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }}
    />
                  {/* Fallback placeholder */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Monitor className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">Setup Gaming</p>
                      <p className="text-sm">Imagen del setup aquí</p>
                    </div>
                  </div>

                  {/* Overlay sutil para mejor contraste */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10"></div>

                  {/* Product Hotspots */}
                 {products
  .map((product) => {
    const IconComponent = product.icon;
    const position = isMobile ? product.position.mobile : product.position.desktop;

    return (
      <div
        key={product.id}
        className={`absolute  ${product.hotspotSize} cursor-pointer group`}
        style={{
          top: position.top,
          left: position.left,
          transform: 'translate(-50%, -50%)',
          //  width: isMobile ? '70px' : '80px',
          //  height: isMobile ? '50px' : '60px',
        }}
        onMouseEnter={(e) => !isMobile && handleMouseEnter(product, e)}
        onMouseLeave={() => !isMobile && handleMouseLeave()}
        onClick={(e) => isMobile && handleMobileProductClick(product, e)}
      >
        <div className="relative w-full h-full">
          {/* Hotspot traslúcido versión oscura */}
          <div 
            className="absolute inset-0 backdrop-blur-[2px] rounded-lg transition-all duration-300 shadow-lg group-hover:shadow-xl"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              animation: 'hotspotBlinkDark 3s ease-in-out infinite'
            }}
          >
            <div className="flex items-center justify-center h-full">
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Efecto de pulso */}

          {/* Número del producto */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-900/90 backdrop-blur-sm text-white text-xs rounded-full flex items-center justify-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
            {products.indexOf(product) + 1}
          </div>

          {/* Nombre del producto en mobile */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2  transition-opacity duration-300">
            <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {product.category}
            </div>
          </div>
        </div>
      </div>
    );
  })
}
                </div>

                {/* Scroll indicators for mobile */}
                {/* {isMobile && (
                  <>
                    <div className="fixed left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full animate-pulse">
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                    <div className="fixed right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full animate-pulse">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </>
                )} */}
              </div>

              {/* Instruction text */}
              <div className="text-center py-4 lg:py-6 bg-gradient-to-r from-gray-50/50 via-white/80 to-gray-50/50 border-t border-gray-200 sm:fixed top-0 left-0 right-0 z-10">
                <p className="text-gray-600 text-sm font-medium flex items-center justify-center space-x-2">
                  {isMobile ? (
                    <span>👆 Toca los productos • ⬅️➡️ Desliza para explorar</span>
                  ) : (
                    <span>🖱️ Pasa el cursor sobre los productos para ver detalles y precios</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Hover/Touch Card */}
        {hoveredProduct && (
          <div
            className={`fixed z-50 pointer-events-none ${isMobile ? 'inset-0 flex items-center justify-center bg-black/50 pointer-events-auto' : ''
              }`}
            style={!isMobile ? {
              left: mousePosition.x + 20,
              top: mousePosition.y - 140,
            } : {}}
            onClick={isMobile ? () => setHoveredProduct(null) : undefined}
          >
            <div className={`bg-white rounded-xl shadow-2xl border border-gray-200 p-4 sm:p-6 transform animate-in slide-in-from-bottom-2 duration-200 ${isMobile ? 'w-[90vw] max-w-sm mx-4 pointer-events-auto' : 'w-80'
              }`}>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                    {hoveredProduct.category}
                  </p>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-tight mb-2">
                    {hoveredProduct.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {hoveredProduct.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  {renderStars(hoveredProduct.rating)}
                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-bold text-gray-900">
                      {hoveredProduct.price}
                    </div>
                    {hoveredProduct.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">
                        {hoveredProduct.originalPrice}
                      </div>
                    )}
                  </div>
                </div>

                {isMobile && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(hoveredProduct.amazonUrl, '_blank');
                    }}
                    style={{backgroundColor: '#373737'}}
                    className="w-full  text-white  py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Ver en Amazon</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          </div>
        )}

        <div className="px-4 sm:px-6 lg:px-8">
          {/* Products Grid */}
          <section>
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Productos del Setup
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Cada producto ha sido cuidadosamente seleccionado para ofrecer el mejor rendimiento y calidad.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => {
                const IconComponent = product.icon;
                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                      <div className="p-2 sm:p-3 bg-gray-50 rounded-lg group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                          {product.category}
                        </p>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-tight mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        {renderStars(product.rating)}
                        <span className="text-xs text-gray-500">
                          ({product.reviews.toLocaleString()})
                        </span>
                      </div>

                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div>
                          <span className="text-xl sm:text-2xl font-bold text-gray-900">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through ml-2">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        {product.originalPrice && (
                          <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                            Oferta
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => window.open(product.amazonUrl, '_blank')}
                        className="w-full bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 active:bg-gray-950 transition-colors duration-200 flex items-center justify-center space-x-2 group touch-manipulation"
                      >
                        <span>Ver en Amazon</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 lg:py-16 my-12 lg:my-20 bg-gray-50 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">¿Por qué confiar en mi selección?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">5+</div>
                  <p className="text-gray-600 text-sm sm:text-base">Años de experiencia gaming</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">100+</div>
                  <p className="text-gray-600 text-sm sm:text-base">Productos probados</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">4.7★</div>
                  <p className="text-gray-600 text-sm sm:text-base">Rating promedio productos</p>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="py-8 lg:py-12 text-center">
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Transparencia:</strong> Como asociado de Amazon,
                recibimos una comisión por las compras que califiquen, sin costo adicional para ti.
                Los precios y disponibilidad pueden cambiar.
                <span className="block mt-2 text-xs">
                  Última actualización: {new Date().toLocaleDateString('es-ES')}
                </span>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 bg-gray-900 rounded-lg">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">ProGamer</div>
                <div className="text-sm text-gray-600">Setup Collection</div>
              </div>
            </div>
            <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
              Los mejores productos gaming, cuidadosamente seleccionados para maximizar tu rendimiento.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
           @keyframes hotspotBlinkDark {
            0% { 
              background-color: rgba(0, 0, 0, 0.3);
            }
            50% { 
              background-color: rgba(0, 0, 0, 0.8);
            }
            100% { 
              background-color: rgba(0, 0, 0, 0.3);
            }
          }
      `}</style>
    </div>
  );
};

export default GamingSetupAffiliate;

