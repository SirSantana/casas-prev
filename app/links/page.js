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
    name: "Xiaomi Monitor 27\"",
    description: "Monitor gaming 144Hz con panel IPS",
    link: "https://example.com/ref/xiaomi-monitor",
    commission: "30% recurrente",
    image: "/img1.png",
    accent: "bg-orange-500"
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    description: "Último modelo con titanio y cámara de 48MP",
    link: "https://example.com/ref/iphone-15",
    commission: "5% por venta",
    image: "/img2.png",
    accent: "bg-blue-500"
  },
  {
    id: 3,
    name: "Samsung Galaxy S24",
    description: "Smartphone con IA y cámara de 200MP",
    link: "https://example.com/ref/samsung-s24",
    commission: "7% por venta",
    image: "/img3.png",
    accent: "bg-purple-500"
  },
  {
    id: 4,
    name: "MacBook Air M3",
    description: "Laptop ultradelgada con chip M3",
    link: "https://example.com/ref/macbook-air",
    commission: "3% por venta",
    image: "/img4.png",
    accent: "bg-neutral-500"
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    description: "Auriculares con cancelación de ruido líder",
    link: "https://example.com/ref/sony-headphones",
    commission: "10% por venta",
    image: "/img3.png",
    accent: "bg-black"
  },
  {
    id: 6,
    name: "iPad Pro 12.9\"",
    description: "Tablet profesional con chip M2",
    link: "https://example.com/ref/ipad-pro",
    commission: "4% por venta",
    image: "/img1.png",
    accent: "bg-neutral-700"
  },
  {
    id: 7,
    name: "Logitech MX Master 3S",
    description: "Mouse ergonómico para productividad",
    link: "https://example.com/ref/logitech-mouse",
    commission: "15% por venta",
     image: "/img2.png",
    accent: "bg-blue-600"
  },
  {
    id: 8,
    name: "Apple Watch Series 9",
    description: "Smartwatch con pantalla siempre activa",
    link: "https://example.com/ref/apple-watch",
    commission: "5% por venta",
    image: "https://i.imgur.com/YourImageID8.png",
    accent: "bg-red-500"
  }
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
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
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
              style={{ height: '70vh' }}
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
                      isDragging ? 'duration-0' : 'duration-500'
                    } ${
                      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{
                      transform: `
                        translateX(${offset * 20 + dragInfluence}px)
                        translateY(${Math.abs(offset) * 8}px)
                        scale(${1 - Math.abs(offset) * 0.05})
                        rotateY(${offset * -5 + (dragInfluence * 0.05)}deg)
                        rotateZ(${isDragging && offset === 0 ? dragInfluence * 0.02 : 0}deg)
                      `,
                      zIndex: 10 - Math.abs(offset),
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Card */}
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl bg-white">
                      {/* Image Background */}
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-end p-8 text-black">
                        <div>
                          <h2 className="text-4xl font-mono font-bold leading-tight drop-shadow-2xl" >
                            {product.name}
                          </h2>
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
                      {product.description}
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