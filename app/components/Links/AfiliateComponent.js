// 'use client';
// import { useState } from 'react';
// import { ExternalLink, Star, Monitor, Headphones, Mouse, Keyboard, Gamepad2, Mic } from 'lucide-react';

// const GamingSetupAffiliate = () => {
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Productos del setup con información para las cards
//   const products = [
//     {
//       id: 'monitor',
//       name: 'ASUS ROG Swift 27" 165Hz',
//       price: '$329.99',
//       originalPrice: '$399.99',
//       rating: 4.8,
//       reviews: 2847,
//       image: '/api/placeholder/200/150',
//       category: 'Monitor',
//       icon: Monitor,
//       amazonUrl: 'https://amazon.com/your-affiliate-link-1',
//       position: { top: '15%', left: '40%' },
//       hotspotSize: 'w-32 h-20'
//     },
//     {
//       id: 'headphones',
//       name: 'SteelSeries Arctis 7P Wireless',
//       price: '$149.99',
//       originalPrice: '$179.99',
//       rating: 4.6,
//       reviews: 1523,
//       image: '/api/placeholder/200/150',
//       category: 'Headphones',
//       icon: Headphones,
//       amazonUrl: 'https://amazon.com/your-affiliate-link-2',
//       position: { top: '25%', left: '15%' },
//       hotspotSize: 'w-24 h-16'
//     },
//     {
//       id: 'mouse',
//       name: 'Logitech G Pro X Superlight',
//       price: '$149.99',
//       rating: 4.7,
//       reviews: 3291,
//       image: '/api/placeholder/200/150',
//       category: 'Gaming Mouse',
//       icon: Mouse,
//       amazonUrl: 'https://amazon.com/your-affiliate-link-3',
//       position: { top: '65%', left: '55%' },
//       hotspotSize: 'w-16 h-12'
//     },
//     {
//       id: 'keyboard',
//       name: 'Corsair K70 RGB MK.2',
//       price: '$169.99',
//       originalPrice: '$199.99',
//       rating: 4.5,
//       reviews: 4156,
//       image: '/api/placeholder/200/150',
//       category: 'Mechanical Keyboard',
//       icon: Keyboard,
//       amazonUrl: 'https://amazon.com/your-affiliate-link-4',
//       position: { top: '75%', left: '25%' },
//       hotspotSize: 'w-40 h-12'
//     },
//     {
//       id: 'controller',
//       name: 'Xbox Wireless Controller',
//       price: '$59.99',
//       rating: 4.4,
//       reviews: 8932,
//       image: '/api/placeholder/200/150',
//       category: 'Controller',
//       icon: Gamepad2,
//       amazonUrl: 'https://amazon.com/your-affiliate-link-5',
//       position: { top: '60%', left: '75%' },
//       hotspotSize: 'w-20 h-16'
//     },
//     {
//       id: 'microphone',
//       name: 'Blue Yeti USB Microphone',
//       price: '$99.99',
//       originalPrice: '$129.99',
//       rating: 4.6,
//       reviews: 15247,
//       image: '/api/placeholder/200/150',
//       category: 'Microphone',
//       icon: Mic,
//       amazonUrl: 'https://amazon.com/your-affiliate-link-6',
//       position: { top: '35%', left: '75%' },
//       hotspotSize: 'w-12 h-24'
//     }
//   ];

//   const handleMouseEnter = (product, event) => {
//     setHoveredProduct(product);
//     setMousePosition({ x: event.clientX, y: event.clientY });
//   };

//   const handleMouseMove = (event) => {
//     if (hoveredProduct) {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     }
//   };

//   const handleMouseLeave = () => {
//     setHoveredProduct(null);
//   };

//   const renderStars = (rating) => {
//     return (
//       <div className="flex items-center space-x-1">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             className={`w-3 h-3 ${i < Math.floor(rating)
//               ? 'text-yellow-400 fill-current'
//               : 'text-gray-300'
//               }`}
//           />
//         ))}
//         <span className="text-xs text-gray-600 ml-1">{rating}</span>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-purple-800 to-gray-900 text-white">
//       {/* Header */}
//       <header className="bg-black/50 backdrop-blur-sm border-b border-purple-500/30">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <Gamepad2 className="w-8 h-8 text-purple-400" />
//               <h1 className="text-2xl font-bold text-white">ProGamer Setup</h1>
//             </div>
//             <div className="text-sm text-gray-300">
//               Los mejores productos gaming seleccionados
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-6 py-12">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Setup Gamer Profesional
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
//             Descubre mi setup gaming personal. Haz hover sobre cada producto para ver detalles y precios exclusivos.
//           </p>
//           <div className="inline-flex items-center px-6 py-3 bg-purple-600/20 rounded-full border border-purple-500/30">
//             <span className="text-purple-300 font-semibold">✨ Precios especiales en Amazon</span>
//           </div>
//         </div>

//         {/* Gaming Setup Interactive Image */}
//         <div className="relative max-w-6xl mx-auto">
//           <div
//             className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700"
//             onMouseMove={handleMouseMove}
//           >
//             {/* Setup Background - Tu imagen real */}
//             <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-gray-600">
//               {/* Aquí va tu imagen del setup */}
//               <img
//                 src="/setup1.jpg"
//                 alt="Mi Setup Gamer"
//                 className="w-full h-full object-cover"
//               />
//               {/* Overlay sutil para mejorar contraste de hotspots */}
//               <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>

//               {/* Product Hotspots */}
//               {products.map((product) => {
//                 const IconComponent = product.icon;
//                 return (
//                   <div
//                     key={product.id}
//                     className={`absolute ${product.hotspotSize} cursor-pointer`}
//                     style={{
//                       top: product.position.top,
//                       left: product.position.left,
//                       transform: 'translate(-50%, -50%)'
//                     }}
//                     onMouseEnter={(e) => handleMouseEnter(product, e)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     {/* Hotspot indicator */}
//                     <div className="relative w-full h-full">
//                       <div className="absolute inset-0 bg-purple-500/30 rounded-lg border-2 border-purple-400 animate-pulse hover:bg-purple-500/50 transition-all duration-300">
//                         <div className="flex items-center justify-center h-full">
//                           <IconComponent className="w-6 h-6 text-purple-100" />
//                         </div>
//                       </div>
//                       {/* Pulsing ring effect */}
//                       <div className="absolute inset-0 border-2 border-purple-400 rounded-lg animate-ping opacity-20"></div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Instruction text */}
//             <div className="text-center mt-8">
//               <p className="text-gray-400 text-lg">
//                 🖱️ Pasa el cursor sobre los productos para ver detalles
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Product Cards Portal */}
//         {hoveredProduct && (
//   <div
//     className="fixed z-50 pointer-events-none"
//     style={{
//       left: mousePosition.x + 20,
//       top: mousePosition.y - 120,
//     }}
//   >
//     <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-5 w-80 transform animate-in slide-in-from-bottom-2 duration-200">
//       {/* Product Info */}
//       <div className="space-y-4">
//         {/* Título y categoría */}
//         <div>
//           <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
//             {hoveredProduct.category}
//           </p>
//           <h3 className="font-semibold text-gray-900 text-lg leading-tight">
//             {hoveredProduct.name}
//           </h3>
//         </div>

//         {/* Rating y precio en una línea */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-1">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={`w-3.5 h-3.5 ${
//                   i < Math.floor(hoveredProduct.rating) 
//                     ? 'text-yellow-400 fill-current' 
//                     : 'text-gray-200 fill-current'
//                 }`}
//               />
//             ))}
//             <span className="text-sm text-gray-600 ml-1">
//               {hoveredProduct.rating}
//             </span>
//           </div>
//           <div className="text-right">
//             <div className="text-xl font-bold text-gray-900">
//               {hoveredProduct.price}
//             </div>
//             {hoveredProduct.originalPrice && (
//               <div className="text-sm text-gray-400 line-through">
//                 {hoveredProduct.originalPrice}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* CTA Button */}
//         <button
//           onClick={() => window.open(hoveredProduct.amazonUrl, '_blank')}
//           className="w-full bg-black text-white font-medium py-3 px-4 rounded-xl hover:bg-gray-800 transition-all duration-200 flex items-center justify-center space-x-2 pointer-events-auto"
//         >
//           <span>Ver en Amazon</span>
//           <ExternalLink className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   </div>
// )}

//         {/* Products Grid */}
//         <div className="mt-20">
//           <h3 className="text-3xl font-bold text-white text-center mb-12">
//             Todos los Productos del Setup
//           </h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((product) => {
//               const IconComponent = product.icon;
//               return (
//                 <div
//                   key={product.id}
//                   className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
//                 >
//                   <div className="flex items-center space-x-3 mb-4">
//                     <div className="p-2 bg-purple-500/20 rounded-lg">
//                       <IconComponent className="w-6 h-6 text-purple-400" />
//                     </div>
//                     <div>
//                       <p className="text-purple-400 text-sm font-semibold">{product.category}</p>
//                       <h4 className="text-white font-bold">{product.name}</h4>
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     {renderStars(product.rating)}

//                     <div className="flex items-center justify-between">
//                       <span className="text-2xl font-bold text-green-400">{product.price}</span>
//                       {product.originalPrice && (
//                         <span className="text-gray-500 line-through">{product.originalPrice}</span>
//                       )}
//                     </div>

//                     <button
//                       onClick={() => window.open(product.amazonUrl, '_blank')}
//                       className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 flex items-center justify-center space-x-2"
//                     >
//                       <span>Ver en Amazon</span>
//                       <ExternalLink className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Disclaimer */}
//         <div className="mt-16 text-center">
//           <div className="inline-block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
//             <p className="text-gray-400 text-sm max-w-2xl">
//               <strong>Disclaimer:</strong> Como asociado de Amazon, ganamos con las compras que califiquen.
//               Los precios y disponibilidad pueden cambiar. Última actualización: {new Date().toLocaleDateString('es-ES')}.
//             </p>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-700 mt-20">
//         <div className="container mx-auto px-6 py-8">
//           <div className="text-center">
//             <div className="flex items-center justify-center space-x-2 mb-4">
//               <Gamepad2 className="w-6 h-6 text-purple-400" />
//               <span className="text-white font-semibold">ProGamer Setup</span>
//             </div>
//             <p className="text-gray-400 text-sm">
//               Los mejores productos gaming, cuidadosamente seleccionados para maximizar tu rendimiento.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default GamingSetupAffiliate;

'use client';
import { useState } from 'react';
import { ExternalLink, Star, Monitor, Headphones, Mouse, Keyboard, Gamepad2, Mic, ChevronRight, Info } from 'lucide-react';

const GamingSetupAffiliate = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Productos del setup con información para las cards
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
      position: { top: '15%', left: '40%' },
      hotspotSize: 'w-32 h-20',
      description: 'Monitor gaming de alta frecuencia con tecnología G-SYNC'
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
      position: { top: '25%', left: '15%' },
      hotspotSize: 'w-24 h-16',
      description: 'Auriculares inalámbricos con sonido surround 7.1'
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
      position: { top: '65%', left: '55%' },
      hotspotSize: 'w-16 h-12',
      description: 'Ratón ultra-ligero para gaming competitivo'
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
      position: { top: '75%', left: '25%' },
      hotspotSize: 'w-40 h-12',
      description: 'Teclado mecánico con switches Cherry MX y RGB'
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
      position: { top: '60%', left: '75%' },
      hotspotSize: 'w-20 h-16',
      description: 'Control inalámbrico con tecnología de baja latencia'
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
      position: { top: '35%', left: '75%' },
      hotspotSize: 'w-12 h-24',
      description: 'Micrófono profesional USB con calidad de estudio'
    }
  ];

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

                {/* Product Hotspots - Visible en todas las pantallas */}
                {products.map((product) => {
                  const IconComponent = product.icon;
                  return (
                    <div
                      key={product.id}
                      className={`absolute ${product.hotspotSize} cursor-pointer group`}
                      style={{
                        top: product.position.top,
                        left: product.position.left,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onMouseEnter={(e) => handleMouseEnter(product, e)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="relative w-full h-full">
                        {/* Hotspot traslúcido */}
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] rounded-lg border-2 border-white/40 group-hover:border-white/80 group-hover:bg-white/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                          <div className="flex items-center justify-center h-full">
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        
                        {/* Efecto de pulso sutil */}
                        <div className="absolute inset-0 border-2 border-white/50 rounded-lg opacity-0 group-hover:opacity-60 animate-pulse transition-opacity duration-300"></div>
                        
                        {/* Número del producto */}
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-gray-900/80 backdrop-blur-sm text-white text-xs rounded-full flex items-center justify-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                          {products.indexOf(product) + 1}
                        </div>
                      </div>
                    </div>
                  );
                })}
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

export default GamingSetupAffiliate;