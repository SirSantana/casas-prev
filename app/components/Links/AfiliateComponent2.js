'use client';
import { useState } from 'react';
import { ExternalLink, Star, Monitor, Headphones, Mouse, Keyboard, Gamepad2, Mic, ChevronRight, Info } from 'lucide-react';
import { products } from './AfiliateComponent';

const GamingSetupAffiliate2 = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);


  const handleMouseEnter = (product, event) => {
    // if (window.innerWidth > 768) {
    setHoveredProduct(product);
    setMousePosition({ x: event.clientX, y: event.clientY });
    // }
  };

  const handleMouseMove = (event) => {
    if (hoveredProduct && window.innerWidth > 768) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
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
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-900 rounded-lg">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold ">ProGamer</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Setup Collection</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
              <Info className="w-4 h-4" />
              <span>Productos seleccionados</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Setup Gaming
              <span className="block text-gray-600">Profesional</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Descubre cada componente de mi setup gaming personal.
              <span className="hidden sm:inline"> Haz hover sobre los productos para ver detalles.</span>
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700 border border-gray-200">
              ✨ Precios especiales disponibles
            </div>
          </div>
        </section>

        {/* Gaming Setup Interactive Image */}
        <section className="mb-20">
          <div className="relative max-w-6xl mx-auto">
            <div
              className="relative bg-gray-50 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-gray-200"
              onMouseMove={handleMouseMove}
            >
              {/* Setup Image Container */}
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
                {/* Tu imagen del setup */}
                <img
                  src="/setupxokas1.png"
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

                {/* Product Hotspots - Visible en todas las pantallas */}
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
          {/* Hotspot traslúcido */}
          {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-[8px] rounded-lg group-hover:bg-black/60 group-active:scale-95 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
            <div className="flex items-center justify-center h-full">
              <IconComponent className="w-5 h-5 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div> */}
          
          <div 
            className="absolute inset-0 backdrop-blur-[2px] rounded-lg border-2 group-active:border-white/80 transition-all duration-300 shadow-lg group-active:shadow-xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderColor: 'rgba(255, 255, 255, 0.4)',
              animation: 'hotspotBlink 3s ease-in-out infinite'
            }}
          >
            <div className="flex items-center justify-center h-full">
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          {/* <div 
            className="absolute inset-0 backdrop-blur-[2px] rounded-lg transition-all duration-300 shadow-lg group-active:shadow-xl"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              animation: 'hotspotBlinkDark 3s ease-in-out infinite'
            }}
          >
            <div className="flex items-center justify-center h-full">
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div> */}
          
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
        
        <style jsx>{`
          @keyframes hotspotBlink {
            0% { 
              background-color: rgba(255, 255, 255, 0.2);
              border-color: rgba(255, 255, 255, 0.4);
            }
            50% { 
              background-color: rgba(255, 255, 255, 0.45);
              border-color: rgba(255, 255, 255, 0.7);
            }
            100% { 
              background-color: rgba(255, 255, 255, 0.2);
              border-color: rgba(255, 255, 255, 0.4);
            }
          }
            @keyframes hotspotBlinkDark {
            0% { 
              background-color: rgba(0, 0, 0, 0.3);
            }
            50% { 
              background-color: rgba(0, 0, 0, 0.5);
            }
            100% { 
              background-color: rgba(0, 0, 0, 0.3);
            }
          }
        `}</style>
      </div>
    );
  })
}
              </div>

              {/* Instruction text mejorado */}
              <div className="text-center py-6 bg-gradient-to-r from-gray-50/50 via-white/80 to-gray-50/50 border-t border-gray-200">
                <p className="text-gray-600 text-sm font-medium flex items-center justify-center space-x-2">
                  <span className="hidden sm:inline">🖱️ Pasa el cursor sobre los productos</span>
                  <span className="sm:hidden">👆 Toca los productos</span>
                  <span className="hidden sm:inline">para ver detalles y precios</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Hover Card for Desktop */}
        {hoveredProduct && (
          <div
            className="fixed z-50 pointer-events-none "
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 140,
            }}
          >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-80 transform animate-in slide-in-from-bottom-2 duration-200">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                    {hoveredProduct.category}
                  </p>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                    {hoveredProduct.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {hoveredProduct.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  {renderStars(hoveredProduct.rating)}
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">
                      {hoveredProduct.price}
                    </div>
                    {hoveredProduct.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">
                        {hoveredProduct.originalPrice}
                      </div>
                    )}
                  </div>
                </div>

                {/* 
                <button
                  onClick={() => window.open(hoveredProduct.amazonUrl, '_blank')}
                  className="w-full bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2 pointer-events-auto"
                >
                  <span>Ver en Amazon</span>
                  <ExternalLink className="w-4 h-4" />
                </button> */}
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <section>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Productos del Setup
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada producto ha sido cuidadosamente seleccionado para ofrecer el mejor rendimiento y calidad.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                        {product.category}
                      </p>
                      <h4 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      {renderStars(product.rating)}
                      <span className="text-xs text-gray-500">
                        ({product.reviews.toLocaleString()} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">{product.price}</span>
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
                      className="w-full bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2 group"
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
        <section className="py-16 my-20 bg-gray-50 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">¿Por qué confiar en mi selección?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
                <p className="text-gray-600">Años de experiencia gaming</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <p className="text-gray-600">Productos probados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.7★</div>
                <p className="text-gray-600">Rating promedio productos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 text-center">
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-6 border border-gray-200">
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <p className="text-gray-600 max-w-md mx-auto">
              Los mejores productos gaming, cuidadosamente seleccionados para maximizar tu rendimiento.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GamingSetupAffiliate2;