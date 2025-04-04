import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/ck40-1.jpg",
  "/ck40-1.jpg",
  "/ck40-1.jpg",
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {isMobile ? (
        <div className="relative w-full overflow-hidden h-[180px] sm:h-[220px]">
          <button 
            onClick={prevSlide} 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/60 text-white p-1 rounded-full"
          >
            <ChevronLeft size={16} />
          </button>
          
          <Image
            src={images[currentIndex]}
            alt="Casa Prefabricada"
            width={800}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />

          <button 
            onClick={nextSlide} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/60 text-white p-1 rounded-full"
          >
            <ChevronRight size={16} />
          </button>

          {/* Indicadores (puntos) */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-primary" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 ">
          <div className="col-span-2">
            <img
              src={images[0]}
              alt="Casa Prefabricada"
              style={{maxWidth:'800px', width:'100%', height:'100%', maxHeight:'312px', objectFit:'cover', borderRadius:'16px'}}
            />
          </div>
          <div className="flex flex-col space-y-3">
            <img
              src={images[1]}
              alt="Casa Interior"
              style={{ width:'100%', height:'100%', maxHeight:'150px', objectFit:'cover', borderRadius:'16px'}}
            />
            <img
              src={images[2]}
              alt="Habitación Moderna"
              style={{ width:'100%', height:'100%', maxHeight:'150px', objectFit:'cover', borderRadius:'16px'}}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
