'use client'
import { useState, useRef, useEffect } from 'react';
import { X, Copy, Check, ExternalLink, Grid3x3, List } from 'lucide-react';

export default function ReferralLinksPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copiedId, setCopiedId] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'list'

const products = [
  {
    id: 1,
    name: "AMD Ryzen 7 7700X",
    description: "Monitor gaming 144Hz con panel IPS",
    link: "https://amzn.to/3W0VFPx",
    commission: "30% recurrente",
    price:264.00,
    image: "https://m.media-amazon.com/images/I/51lXCYo7GkL._AC_SX679_.jpg",
    accent: "bg-orange-500"
  },
  {
    id: 2,
    name: "ASUS TUF GAMING B650-PLUS",
    description: "Último modelo con titanio y cámara de 48MP",
    link: "https://amzn.to/43fVJii",
    commission: "5% por venta",
    image: "https://m.media-amazon.com/images/I/81ogi-krqkL._AC_SX679_.jpg",
    price:169.99,

    accent: "bg-blue-500"
  },
  {
    id: 3,
    name: "Crucial Kit de RAM DDR5 Pro de 32 GB",
    description: "Smartphone con IA y cámara de 200MP",
    link: "https://amzn.to/4ocxdqi",
    commission: "7% por venta",
    image: "https://m.media-amazon.com/images/I/51Niqgy0cHL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    price:129.99,

    accent: "bg-purple-500"
  },
  {
    id: 4,
    name: "Crucial P3 Plus 1TB",
    description: "Laptop ultradelgada con chip M3",
    link: "https://amzn.to/4nMltva",
    commission: "3% por venta",
    image: "https://m.media-amazon.com/images/I/51pMg25AthL._AC_SX679_.jpg",
    price:62.64,

    accent: "bg-neutral-500"
  },
  {
    id: 5,
    name: "Thermalright Peerless Assassin 120 SE V2",
    description: "Auriculares con cancelación de ruido líder",
    link: "https://amzn.to/473KzOO",
    commission: "10% por venta",
    image: "https://m.media-amazon.com/images/I/71qSaiAR6yL._AC_SX679_.jpg",
    price:37.90,
    accent: "bg-black"
  },
  {
    id: 6,
    name: "MSI RTX 3060 12 GB",
    description: "Tablet profesional con chip M2",
    link: "https://amzn.to/471GGtB",
    commission: "4% por venta",
    image: "https://m.media-amazon.com/images/I/71tduSp8ooL._AC_SX466_.jpg",
    price:279.97,
    accent: "bg-neutral-700"
  },
  {
    id: 7,
    name: "Corsair CX750W 80+ Bronze",
    description: "Mouse ergonómico para productividad",
    link: "https://amzn.to/4n1omqH",
    commission: "15% por venta",
     image: "https://m.media-amazon.com/images/I/71NcQsKlIvL._AC_SX679_.jpg",
    price:84.99,

    accent: "bg-blue-600"
  },

];

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = currentTouch - touchStart;
    setDragOffset(diff);
    setTouchEnd(currentTouch);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const copyToClipboard = (link, id) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentProduct = products[currentSlide];

  return (
    <div className="min-h-screen bg-neutral-50 flex  justify-center p-6">
      <div className="w-full max-w-xs">
        {/* Header */}
        {/* <div className="flex items-center justify-between mb-8">
          <button className="p-2 hover:bg-neutral-200 rounded-full transition-colors">
            <X className="w-6 h-6 text-neutral-700" />
          </button>
          <h1 className="text-xl font-semibold text-neutral-900">Mis productos</h1>
          <div className="w-10"></div>
        </div> */}

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-1 shadow-sm flex gap-1">
            <button
              onClick={() => setViewMode('cards')}
              className={`p-2.5 rounded-full transition-all ${
                viewMode === 'cards' 
                  ? 'bg-neutral-900 text-white' 
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-full transition-all ${
                viewMode === 'list' 
                  ? 'bg-neutral-900 text-white' 
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards View */}
        {viewMode === 'cards' && (
          <>
            {/* Card Stack Container */}
            <div 
              className="relative mb-8 select-none touch-pan-y" 
              style={{ height: '65vh' }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {products.map((product, index) => {
                const offset = index - currentSlide;
                const isVisible = Math.abs(offset) <= 2;
                const dragInfluence = isDragging ? dragOffset * 0.5 : 0;
                
                return (
                  <div
                    key={product.id}
                    className={`absolute inset-0 transition-all ease-out ${
                      isDragging ? 'duration-0' : 'duration-700'
                    } ${
                      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{
                      transform: `
                        translateX(${offset * 15 + dragInfluence}px)
                        translateY(${Math.abs(offset) * 10}px)
                        scale(${1 - Math.abs(offset) * 0.08})
                        rotateZ(${offset * 2 + (isDragging && offset === 0 ? dragInfluence * 0.015 : 0)}deg)
                      `,
                      zIndex: 10 - Math.abs(offset),
                      filter: offset !== 0 ? 'brightness(0.7) blur(1px)' : 'none'
                    }}
                  >
                    {/* Card */}
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-200/50">
                      {/* Image Background */}
                      <div className="absolute inset-0 p-6 flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain "
                        />
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                      
                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-end p-6">
                        <div className="space-y-2">
                          <h2 className="text-3xl font-bold leading-tight text-white drop-shadow-lg">
                            {product.name}
                          </h2>
                          <div className="flex items-center gap-2 pt-1">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                              ${product.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Swipe Indicator */}
            <div className="flex justify-center mb-4">
              <div className="flex gap-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all ${
                      index === currentSlide 
                        ? 'w-8 h-2 bg-neutral-900 rounded-full' 
                        : 'w-2 h-2 bg-neutral-300 rounded-full hover:bg-neutral-400'
                    }`}
                    aria-label={`Ir a slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Link Section */}
            <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wide">Link Amazon</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentProduct.link}
                readOnly
                className="flex-1 px-4 py-3 bg-neutral-50 rounded-xl text-sm font-mono text-neutral-700 border border-neutral-200"
              />
              <button
                onClick={() => copyToClipboard(currentProduct.link, currentProduct.id)}
                className="px-6 py-3 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors flex items-center gap-2"
              >
                {copiedId === currentProduct.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-3  w-full">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 mb-1 truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mb-2 line-clamp-2">
                      ${product.price}
                    </p>
                    
                    {/* Link and Copy Button */}
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={product.link}
                        readOnly
                        className="flex-1 w-[70%] px-3 py-2 bg-neutral-50 rounded-lg text-xs font-mono text-neutral-600 border border-neutral-200"
                      />
                      <button
                        onClick={() => copyToClipboard(product.link, product.id)}
                        className="px-3 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-1"
                      >
                        {copiedId === product.id ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}