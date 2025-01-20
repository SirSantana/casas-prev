'use client'
import { styles } from "./SliderImages";
import { useState } from "react";

export default function TiposPlanos({ planos }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const openModal = (imagen) => {
    setSelectedImage(imagen);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };
  return (
    <div className="space-y-4 w-[90%] m-auto">
      <h2 style={{ color: '#1F2937', fontSize: '20px' }} className="font-medium">Tipos de Planos</h2>
      <div className="flex gap-4">
        {planos.map((el, index) => (
          <img
            key={index}
            src={el}
            alt={`Slide ${index}`}
            style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
            onClick={() => openModal(el)}
          />
        ))}
      </div>
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
    </div>
  )
}