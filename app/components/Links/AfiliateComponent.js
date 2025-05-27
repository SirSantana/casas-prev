'use client';
import { useState, useEffect } from 'react';
import { ExternalLink, Star, Monitor, Headphones, Mouse, Keyboard, Gamepad2, Mic, ChevronRight, Info, ArrowLeft, ArrowRight } from 'lucide-react';

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

  // Productos del setup con posiciones para desktop y mobile
  const products = [
    {
      id: 'monitor',
      name: 'ASUS ROG Swift 27" 165Hz',
      price: '$329.99',
      originalPrice: '$399.99',
      rating: 4.8,
      reviews: 2847,
      image: '/api/placeholder/200/150',
      category: 'Monitor',
      icon: Monitor,
      amazonUrl: 'https://amazon.com/your-affiliate-link-1',
      position: { 
        desktop: { top: '15%', left: '40%' },
        mobile: { top: '20%', left: '60%' }
      },
      hotspotSize: 'w-32 h-20',
      description: 'Monitor gaming de alta frecuencia con tecnología G-SYNC',
      zone: 0 // Centro-derecha
    },
    {
      id: 'headphones',
      name: 'SteelSeries Arctis 7P Wireless',
      price: '$149.99',
      originalPrice: '$179.99',
      rating: 4.6,
      reviews: 1523,
      image: '/api/placeholder/200/150',
      category: 'Headphones',
      icon: Headphones,
      amazonUrl: 'https://amazon.com/your-affiliate-link-2',
      position: { 
        desktop: { top: '25%', left: '15%' },
        mobile: { top: '15%', left: '25%' }
      },
      hotspotSize: 'w-24 h-16',
      description: 'Auriculares inalámbricos con sonido surround 7.1',
      zone: 0 // Izquierda
    },
    {
      id: 'mouse',
      name: 'Logitech G Pro X Superlight',
      price: '$149.99',
      rating: 4.7,
      reviews: 3291,
      image: '/api/placeholder/200/150',
      category: 'Gaming Mouse',
      icon: Mouse,
      amazonUrl: 'https://amazon.com/your-affiliate-link-3',
      position: { 
        desktop: { top: '65%', left: '55%' },
        mobile: { top: '60%', left: '70%' }
      },
      hotspotSize: 'w-16 h-12',
      description: 'Ratón ultra-ligero para gaming competitivo',
      zone: 1 // Centro-derecha
    },
    {
      id: 'keyboard',
      name: 'Corsair K70 RGB MK.2',
      price: '$169.99',
      originalPrice: '$199.99',
      rating: 4.5,
      reviews: 4156,
      image: '/api/placeholder/200/150',
      category: 'Mechanical Keyboard',
      icon: Keyboard,
      amazonUrl: 'https://amazon.com/your-affiliate-link-4',
      position: { 
        desktop: { top: '75%', left: '25%' },
        mobile: { top: '75%', left: '40%' }
      },
      hotspotSize: 'w-40 h-12',
      description: 'Teclado mecánico con switches Cherry MX y RGB',
      zone: 1 // Centro
    },
    {
      id: 'controller',
      name: 'Xbox Wireless Controller',
      price: '$59.99',
      rating: 4.4,
      reviews: 8932,
      image: '/api/placeholder/200/150',
      category: 'Controller',
      icon: Gamepad2,
      amazonUrl: 'https://amazon.com/your-affiliate-link-5',
      position: { 
        desktop: { top: '60%', left: '75%' },
        mobile: { top: '50%', left: '85%' }
      },
      hotspotSize: 'w-20 h-16',
      description: 'Control inalámbrico con tecnología de baja latencia',
      zone: 2 // Derecha
    },
    {
      id: 'microphone',
      name: 'Blue Yeti USB Microphone',
      price: '$99.99',
      originalPrice: '$129.99',
      rating: 4.6,
      reviews: 15247,
      image: '/api/placeholder/200/150',
      category: 'Microphone',
      icon: Mic,
      amazonUrl: 'https://amazon.com/your-affiliate-link-6',
      position: { 
        desktop: { top: '35%', left: '75%' },
        mobile: { top: '25%', left: '80%' }
      },
      hotspotSize: 'w-12 h-24',
      description: 'Micrófono profesional USB con calidad de estudio',
      zone: 2 // Derecha
    }
  ];

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
            <div
              className="relative bg-gray-50 overflow-hidden shadow-xl"
              onMouseMove={handleMouseMove}
            >
              {/* Setup Image Container */}
              <div className={`relative w-full ${
                isMobile 
                  ? 'h-[93vh] overflow-x-auto scrollbar-hide' 
                  : 'h-[70vh] lg:h-screen'
              }`}>
                
                {/* Image wrapper for horizontal scroll */}
                <div className={`relative ${
                  isMobile 
                    ? 'w-[200vw] h-full' // Imagen más ancha en mobile para scroll horizontal
                    : 'w-full h-full'
                }`}>
                  {/* Tu imagen del setup */}
                  <img
                    src="/setup1.jpg"
                    alt="Mi Setup Gamer"
                    className="w-full h-full object-cover"
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
                          className="absolute cursor-pointer group touch-manipulation"
                          style={{
                            top: position.top,
                            left: position.left,
                            transform: 'translate(-50%, -50%)',
                            width: isMobile ? '50px' : '80px',
                            height: isMobile ? '35px' : '60px',
                          }}
                          onMouseEnter={(e) => !isMobile && handleMouseEnter(product, e)}
                          onMouseLeave={() => !isMobile && handleMouseLeave()}
                          onClick={(e) => isMobile && handleMobileProductClick(product, e)}
                        >
                          <div className="relative w-full h-full">
                            {/* Hotspot traslúcido */}
                            <div className="absolute inset-0 bg-white/25 backdrop-blur-[3px] rounded-lg border-2 border-white/50 group-hover:border-white/90 group-hover:bg-white/35 group-active:scale-95 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                              <div className="flex items-center justify-center h-full">
                                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                            
                            {/* Efecto de pulso */}
                            <div className="absolute inset-0 border-2 border-white/60 rounded-lg opacity-0 group-hover:opacity-70 animate-pulse transition-opacity duration-300"></div>
                            
                            {/* Número del producto */}
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-900/90 backdrop-blur-sm text-white text-xs rounded-full flex items-center justify-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                              {products.indexOf(product) + 1}
                            </div>

                            {/* Nombre del producto en mobile */}
                            {isMobile && (
                              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                  {product.category}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Scroll indicators for mobile */}
                {isMobile && (
                  <>
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full animate-pulse">
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full animate-pulse">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </>
                )}
              </div>

              {/* Instruction text */}
              <div className="text-center py-4 lg:py-6 bg-gradient-to-r from-gray-50/50 via-white/80 to-gray-50/50 border-t border-gray-200">
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
            className={`fixed z-50 pointer-events-none ${
              isMobile ? 'inset-0 flex items-center justify-center bg-black/50 pointer-events-auto' : ''
            }`}
            style={!isMobile ? {
              left: mousePosition.x + 20,
              top: mousePosition.y - 140,
            } : {}}
            onClick={isMobile ? () => setHoveredProduct(null) : undefined}
          >
            <div className={`bg-white rounded-xl shadow-2xl border border-gray-200 p-4 sm:p-6 transform animate-in slide-in-from-bottom-2 duration-200 ${
              isMobile ? 'w-[90vw] max-w-sm mx-4 pointer-events-auto' : 'w-80'
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

                {/* {isMobile && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(hoveredProduct.amazonUrl, '_blank');
                    }}
                    className="w-full bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Ver en Amazon</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                )} */}
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

                      {/* <button
                        onClick={() => window.open(product.amazonUrl, '_blank')}
                        className="w-full bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 active:bg-gray-950 transition-colors duration-200 flex items-center justify-center space-x-2 group touch-manipulation"
                      >
                        <span>Ver en Amazon</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button> */}
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
      `}</style>
    </div>
  );
};

export default GamingSetupAffiliate;