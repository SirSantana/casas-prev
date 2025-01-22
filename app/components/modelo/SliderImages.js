'use client'
import { useEffect, useState } from "react";

export default function SliderImages({ imagenes }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [imagenes.length]);

  const openModal = (imagen) => {
    setSelectedImage(imagen);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      {/* Slider */}
      <div style={styles.sliderContainer}>
        <div
          style={{
            ...styles.slider,
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {imagenes.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              alt={`Slide ${index}`}
              style={styles.image}
              onClick={() => openModal(imagen)}
            />
          ))}
        </div>
        <div style={styles.indicators}>
          {imagenes.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.indicator,
                backgroundColor: currentIndex === index ? "white" : "#D9D9D9",
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Imagen ampliada" style={styles.modalImage} />
            <button style={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export const styles = {
  sliderContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    overflow: "hidden",
    margin: "0 auto",
  },
  slider: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    cursor: "pointer",
  },
  indicators: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
  },
  indicator: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalContent: {
    position: "relative",
    width: "90%",
    maxWidth: "800px",
    borderRadius: "8px",
    overflow: "hidden",
  },
  modalImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  closeButton: {
    position: "absolute",
    top: "1px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "32px",
    color: "white",
    cursor: "pointer",
  },
};