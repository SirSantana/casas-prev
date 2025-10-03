"use client";
import React, { useState, useRef, useEffect } from "react";

export default function InteractiveRoomViewer() {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastTouchDistance, setLastTouchDistance] = useState(0);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Puntos de interés con sus posiciones (en porcentaje)
  // Para imágenes panorámicas, distribuye los hotspots a lo largo de todo el ancho (0-100%)
  const hotspots = [
    // Lado izquierdo de la imagen
    {
      id: 1,
      x: 15,
      y: 25,
      label: "Wall Plants",
      icon: "🌿",
      description: "Decorative hanging plants",
    },
    {
      id: 2,
      x: 25,
      y: 20,
      label: "Nanoleaf Panels",
      icon: "🔷",
      description: "Custom LED wall decoration",
    },
    // Centro de la imagen (visible al inicio)
    {
      id: 3,
      x: 45,
      y: 50,
      label: "Gaming Monitors",
      icon: "🖥️",
      description: "Triple monitor setup",
    },
    {
      id: 4,
      x: 50,
      y: 35,
      label: "Desk Setup",
      icon: "⌨️",
      description: "Mechanical keyboard and mouse",
    },
    // Centro-derecha
    {
      id: 5,
      x: 65,
      y: 45,
      label: "Gaming PC",
      icon: "💻",
      description: "Custom water-cooled build",
    },
    {
      id: 6,
      x: 75,
      y: 60,
      label: "Gaming Chair",
      icon: "🪑",
      description: "Ergonomic gaming chair",
    },
    // Lado derecho de la imagen (requiere scroll)
    {
      id: 7,
      x: 85,
      y: 40,
      label: "Speakers",
      icon: "🔊",
      description: "High-quality audio system",
    },
    {
      id: 8,
      x: 92,
      y: 30,
      label: "Shelf Decor",
      icon: "📚",
      description: "Books and collectibles",
    },
  ];

  // Cargar dimensiones de la imagen
  useEffect(() => {
    const img = imageRef.current;
    if (img) {
      const handleLoad = () => {
        setImageDimensions({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };

      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener('load', handleLoad);
        return () => img.removeEventListener('load', handleLoad);
      }
    }
  }, []);

  const constrainTransform = (x, y, scale) => {
    if (!containerRef.current || !imageDimensions.width) return { x, y };

    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Calcular el tamaño de la imagen - SIEMPRE llenar el alto
    const imageAspect = imageDimensions.width / imageDimensions.height;
    
    // La imagen siempre ocupa el 100% del alto
    const displayHeight = containerHeight;
    const displayWidth = containerHeight * imageAspect;
    
    // Aplicar escala
    const scaledWidth = displayWidth * scale;
    const scaledHeight = displayHeight * scale;

    // Calcular límites
    const maxX = Math.max(0, (scaledWidth - containerWidth) / 2);
    const maxY = Math.max(0, (scaledHeight - containerHeight) / 2);

    // Restringir el movimiento
    const constrainedX = Math.min(Math.max(x, -maxX), maxX);
    const constrainedY = Math.min(Math.max(y, -maxY), maxY);

    return { x: constrainedX, y: constrainedY };
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - transform.x,
      y: e.clientY - transform.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      const constrained = constrainTransform(newX, newY, transform.scale);
      
      setTransform({
        ...transform,
        x: constrained.x,
        y: constrained.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events para mobile
  const getTouchDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - transform.x,
        y: e.touches[0].clientY - transform.y,
      });
    } else if (e.touches.length === 2) {
      setLastTouchDistance(getTouchDistance(e.touches));
    }
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    
    if (e.touches.length === 1 && isDragging) {
      const newX = e.touches[0].clientX - dragStart.x;
      const newY = e.touches[0].clientY - dragStart.y;
      const constrained = constrainTransform(newX, newY, transform.scale);
      
      setTransform({
        ...transform,
        x: constrained.x,
        y: constrained.y,
      });
    } else if (e.touches.length === 2) {
      const distance = getTouchDistance(e.touches);
      if (lastTouchDistance > 0) {
        const delta = distance / lastTouchDistance;
        const newScale = Math.min(Math.max(transform.scale * delta, 1), 3);
        
        const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = centerX - rect.left;
        const mouseY = centerY - rect.top;
        
        const scaleRatio = newScale / transform.scale;
        const newX = mouseX - (mouseX - transform.x) * scaleRatio;
        const newY = mouseY - (mouseY - transform.y) * scaleRatio;
        
        const constrained = constrainTransform(newX, newY, newScale);
        setTransform({ x: constrained.x, y: constrained.y, scale: newScale });
      }
      setLastTouchDistance(distance);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setLastTouchDistance(0);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.95 : 1.05;
    const newScale = Math.min(Math.max(transform.scale * delta, 1), 3);
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const scaleRatio = newScale / transform.scale;
    const newX = mouseX - (mouseX - transform.x) * scaleRatio;
    const newY = mouseY - (mouseY - transform.y) * scaleRatio;
    
    const constrained = constrainTransform(newX, newY, newScale);
    setTransform({ x: constrained.x, y: constrained.y, scale: newScale });
  };

  const handleZoomIn = () => {
    const newScale = Math.min(transform.scale * 1.3, 3);
    const constrained = constrainTransform(transform.x, transform.y, newScale);
    setTransform({ x: constrained.x, y: constrained.y, scale: newScale });
  };

  const handleZoomOut = () => {
    const newScale = Math.max(transform.scale * 0.7, 1);
    const constrained = constrainTransform(transform.x, transform.y, newScale);
    setTransform({ x: constrained.x, y: constrained.y, scale: newScale });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [transform, imageDimensions]);

  const resetView = () => {
    setTransform({ x: 0, y: 0, scale: 1 });
  };

  return (
    <div className="w-full h-screen bg-primary overflow-hidden relative">
      {/* Controles */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          disabled={transform.scale >= 3}
          className="bg-secondary hover:bg-accent text-primary w-12 h-12 rounded-xl shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed font-bold text-xl flex items-center justify-center active:scale-95"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          disabled={transform.scale <= 1}
          className="bg-secondary hover:bg-accent text-primary w-12 h-12 rounded-xl shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed font-bold text-xl flex items-center justify-center active:scale-95"
        >
          −
        </button>
        <button
          onClick={resetView}
          className="bg-terciary hover:bg-primary text-secondary px-3 py-2 rounded-xl shadow-lg transition-all text-xs font-semibold active:scale-95"
        >
          Reset
        </button>
      </div>

      {/* Instrucciones - Desktop */}
      <div className="absolute top-4 left-4 z-20 bg-primary/90 text-secondary px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm hidden sm:block">
        <p className="text-sm font-medium">Arrastra • Scroll para zoom</p>
      </div>

      {/* Instrucciones mobile */}
      <div className="absolute top-4 left-4 z-20 bg-primary/90 text-secondary px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm sm:hidden">
        <p className="text-xs font-medium">Arrastra • Pinch para zoom</p>
      </div>

      {/* Contenedor de la imagen */}
      <div
        ref={containerRef}
        className={`w-full h-full relative touch-none flex items-center justify-center ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            transformOrigin: "center center",
            transition: isDragging ? "none" : "transform 0.1s ease-out",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Imagen de fondo */}
          <img
            ref={imageRef}
            src="/setup1.jpg"
            alt="Gaming Setup"
            className="max-w-none h-full select-none"
            draggable={false}
          />

          {/* Hotspots - Solo visibles si la imagen está cargada */}
          {imageDimensions.width > 0 && hotspots.map((point) => (
            <div
              key={point.id}
              className="absolute z-10"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => !('ontouchstart' in window) && setHoveredPoint(point.id)}
              onMouseLeave={() => !('ontouchstart' in window) && setHoveredPoint(null)}
              onClick={(e) => {
                e.stopPropagation();
                if ('ontouchstart' in window) {
                  setHoveredPoint(hoveredPoint === point.id ? null : point.id);
                }
              }}
            >
              {/* Punto pulsante */}
              <div className="relative">
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent border-2 border-secondary flex items-center justify-center cursor-pointer transition-all shadow-lg ${
                    hoveredPoint === point.id ? "scale-125 bg-secondary border-accent" : ""
                  }`}
                  style={{ pointerEvents: "auto" }}
                >
                  <span className="text-xl sm:text-2xl">{point.icon}</span>
                </div>

                {/* Animación de pulso */}
                <div className="absolute inset-0 rounded-full bg-accent/40 animate-ping"></div>

                {/* Tooltip */}
                {hoveredPoint === point.id && (
                  <div 
                    className="absolute bottom-full mb-3 left-1/2 w-60 sm:w-64"
                    style={{
                      transform: `translate(-50%, 0) scale(${1 / transform.scale})`,
                      transformOrigin: "bottom center",
                    }}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl p-4 border-2 border-accent">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-terciary rounded-xl flex items-center justify-center shadow-md">
                          <span className="text-2xl">{point.icon}</span>
                        </div>
                        <h3 className="font-bold text-primary text-base sm:text-lg">
                          {point.label}
                        </h3>
                      </div>
                      <p className="text-sm text-gray leading-relaxed">
                        {point.description}
                      </p>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                        <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-transparent border-t-accent"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de zoom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary/90 text-secondary px-5 py-2 rounded-xl shadow-lg backdrop-blur-sm border border-terciary">
        <p className="text-sm font-bold">
          {Math.round(transform.scale * 100)}%
        </p>
      </div>
    </div>
  );
}