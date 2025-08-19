"use client";

import styles from "/styles/apto.module.css";
import React, { useState } from "react";
import {
  MapPin,
  Bed,
  Bath,
  Car,
  Phone,
  MessageCircle,
  Calendar,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Shield,
  AirVent,
  Utensils,
  Menu,
  Heart,
  LucideXSquare,
  ShieldCheck,
  Home,
  Sofa,
  ChefHat,
  Shirt,
  Zap,
  Bus,
  PenTool,
} from "lucide-react";
import { useRouter } from "next/navigation";


const ApartmentRental = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const images = [
    "apto/img-apto-3.jpg",
    "apto/img-apto-1.jpg",
    "apto/img-apto-4.jpg",
    "apto/img-apto-5.jpg",
    "apto/img-apto-6.jpg",
    "apto/img-apto-7.jpg",
    "apto/img-apto-8.jpg",
    "apto/img-apto-9.jpg",
    "apto/img-apto-10.jpg",
    "apto/img-apto-11.jpg",
    "apto/img-apto-12.jpg",
    "apto/img-apto-13.jpg",
    "apto/img-apto-14.jpg",
    "apto/img-apto-15.jpg",
    "apto/img-apto-16.jpg",
    "apto/img-apto-17.jpg",
    "apto/img-apto-18.jpg",
    "apto/img-apto-2.jpg",
    "apto/plano-apto.jpg",
  ];
  const galleryItems = [
    { type: "image", src: images[0] },
    { type: "image", src: images[1] },
    { type: "image", src: images[2] },
    { type: "image", src: images[3] },
    { type: "video", src: "https://youtube.com/shorts/2o6XQBk3Ll8" },
    { type: "image", src: images[4] },
    { type: "image", src: images[5] },
    { type: "image", src: images[6] },
    { type: "image", src: images[7] },
    { type: "image", src: images[8] },
    { type: "image", src: images[9] },
    { type: "image", src: images[10] },
    { type: "image", src: images[11] },
    { type: "image", src: images[12] },
    { type: "image", src: images[13] },
    { type: "image", src: images[14] },
    { type: "image", src: images[15] },
    { type: "image", src: images[16] },
    { type: "image", src: images[17] },
    { type: "image", src: images[18] },
  ];
  const amenities = [
    { icon: Home, label: "2 habitaciones" },
    { icon: Bath, label: "1 baño" },
    { icon: Sofa, label: "Sala comedor amplia" },
    { icon: ChefHat, label: "Cocina funcional" },
    { icon: Shirt, label: "Zona de lavado independiente" },
    {
      icon: Zap,
      label: "Servicios públicos independientes (se pagan según consumo)",
    },
    { icon: Bus, label: "A 3 minutos de estaciones de TransMilenio" },
    { icon: PenTool, label: "1-6 años de construido" },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = () => {
  //   if (!formData.name || !formData.email || !formData.phone) {
  //     alert("Por favor completa todos los campos obligatorios.");
  //     return;
  //   }
  //   console.log("Form submitted:", formData);
  //   alert("¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.");
  //   setFormData({ name: "", email: "", phone: "", message: "" });
  // };
  const contactWhatsApp = () => {
    const phoneNumber = "573138562763"; // Número de Colombia con código de país
    const message = encodeURIComponent(
      "Hola, estoy interesado en el inmueble. ¿Podrías darme más información? " 
       + "https://www.prefabcasas.com/apto-rionegro"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  // Función para llamar
  const makeCall = () => {
    const phoneNumber = "tel:+573138562763";
    window.location.href = phoneNumber;
  };
  return (
    <>
      
      <div className={styles.app}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.headerContent}>
              <section className={styles.mobileSection}>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6B7280",
                    fontWeight: "500",
                  }}
                >
                  Apartamento En Arriendo Rionegro
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#4f46e5",
                    fontWeight: "600",
                  }}
                >
                  $1.300.000
                  <span> / mes</span>
                </p>
              </section>
              <nav style={{ flex: 1 }} className={styles.desktopNav}>
                <button
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  onClick={makeCall}
                >
                  Llamar
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className={styles.container}>
          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryMain}>
                {galleryItems[currentImage].type === "video" ? (
                  <div
                    className={styles.videoSection}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <a
                      href={galleryItems[currentImage].src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.videoContent}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      <Play size={64} style={{ marginBottom: "1rem" }} />
                      <p
                        style={{
                          margin: 0,
                          fontWeight: "700",
                          fontSize: "1.5rem",
                        }}
                      >
                        Video Tour 360°
                      </p>
                      <p
                        style={{
                          margin: "0.5rem 0 0 0",
                          fontSize: "1rem",
                          opacity: 0.9,
                        }}
                      >
                        Haz clic para ver el recorrido completo
                      </p>
                    </a>
                  </div>
                ) : (
                  <div
                    onClick={() => setShowImageModal(true)}
                    style={{ cursor: "pointer", height: "100%" }}
                  >
                    <img
                      src={galleryItems[currentImage].src}
                      alt="Apartamento moderno en Zona Rosa"
                      className={styles.galleryImage}
                    />
                  </div>
                )}

                <div className={styles.imageCounter}>
                  {currentImage + 1} / {galleryItems.length}
                </div>

                <button
                  className={`${styles.navButton} ${styles.navButtonLeft}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className={`${styles.navButton} ${styles.navButtonRight}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className={styles.gallerySidebar}>
                <div className={styles.videoSection}>
                  <a
                    href="https://youtube.com/shorts/2o6XQBk3Ll8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.videoContent}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Play size={48} style={{ marginBottom: "0.5rem" }} />
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "600",
                        fontSize: "1.1rem",
                      }}
                    >
                      Video Tour 360°
                    </p>
                    <p
                      style={{
                        margin: "0.25rem 0 0 0",
                        fontSize: "0.9rem",
                        opacity: 0.9,
                      }}
                    >
                      Recorre cada espacio
                    </p>
                  </a>
                </div>

                <div
                  className={styles.galleryThumb}
                  style={{
                    backgroundImage: `url(${images[currentImage + 1]})`,
                  }}
                  onClick={() => setShowImageModal(true)}
                />
              </div>
            </div>
          </section>

          {/* Property Details */}
          <section className={styles.mainGrid}>
            <div>
              {/* Property Header */}
              <div className={styles.propertyHeader}>
                <h1 className={styles.propertyTitle}>
                  Apartamento En Arriendo Rionegro
                </h1>

                <div className={styles.propertyLocation}>
                  <MapPin size={20} />
                  <span>Rionegro • Bogotá D.C. • Estrato 3</span>
                </div>

                <div className={styles.propertyPrice}>
                  $1.300.000
                  <span className={styles.priceUnit}> / mes</span>
                </div>
              </div>

              {/* Features */}
              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}>
                  <Bed size={32} className={styles.featureIcon} />
                  <div className={styles.featureValue}>2</div>
                  <div className={styles.featureLabel}>Habitaciones</div>
                </div>

                <div className={styles.featureItem}>
                  <Bath size={32} className={styles.featureIcon} />
                  <div className={styles.featureValue}>1</div>
                  <div className={styles.featureLabel}>Baños</div>
                </div>

                <div className={styles.featureItem}>
                  <Home size={32} className={styles.featureIcon} />
                  <div className={styles.featureValue}>40</div>
                  <div className={styles.featureLabel}>Metros²</div>
                </div>
                <div className={styles.featureItem}>
                  <ShieldCheck size={32} className={styles.featureIcon} />
                  <div className={styles.featureValue}>3</div>
                  <div className={styles.featureLabel}>Estrato</div>
                </div>

                {/* <div className={styles.featureItem}>
                  <Car size={32} className={styles.featureIcon} />
                  <div className={styles.featureValue}>1</div>
                  <div className={styles.featureLabel}>Parqueadero</div>
                </div> */}
              </div>

              {/* Description */}
              <div>
                <h2 className={styles.sectionTitle}>Sobre este apartamento</h2>
                <p className={styles.description}>
                  ¡Apartamento en arriendo en Barrios Unidos, Rionegro! Se
                  arrienda cómodo apartamento en el segundo piso de una casa que
                  cuenta con tres apartamentos independientes.
                  <br />
                  <br />2 habitaciones amplias y bien iluminadas 1 baño Espacio
                  de sala comedor Cocina funcional Zona de lavado Los servicios
                  públicos se cobran según el consumo individual de cada
                  apartamento.
                  <br />
                  <br />
                  📍 Ubicado en Barrios Unidos, Rionegro, estrato 3.
                  <br />
                  <br />
                  💰 Canon de arrendamiento: $1.300.000
                  <br />
                  <br />
                  🚫 No cuenta con parqueadero para motos ni carros.
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className={styles.sectionTitle}>Caracteristicas</h2>
                <div className={styles.amenitiesGrid}>
                  {amenities.map((amenity, index) => (
                    <div key={index} className={styles.amenityItem}>
                      <amenity.icon
                        size={24}
                        style={{
                          color: "#979ba3",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <span className={styles.amenityLabel}>
                        {amenity.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "48px" }}>
                <h2 className={styles.sectionTitle}>Plano</h2>
                <img
                  src={images[images.length - 1]}
                  alt="Plano Apartamento"
                  className={styles.galleryImage}
                />
              </div>

              {/* Map */}
              <div>
                <h2 className={styles.sectionTitle}>Ubicación Estratégica</h2>
                    <div
                      style={{
                        width: "100%",
                        height: "400px",
                      }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4098876389776!2d-74.08947008562436!3d4.676899943534748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b0e0e0e0e0e%3A0x0e0e0e0e0e0e0e0e!2sCarrera%2057%20%2394-25%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1692123456789!5m2!1ses!2sco"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: "8px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación del inmueble - Carrera 57 #94-25, Bogotá"
                      ></iframe>
                    </div>
              </div>
            </div>

            {/* Contact Sidebar */}
            <div>
              <div className={styles.contactSidebar}>
                <h3 className={styles.contactTitle}>
                  ¿Te interesa este apartamento?
                </h3>

                {/* Quick Contact Buttons */}
                <div className={styles.contactButtons}>
                  <button
                    className={`${styles.btn} ${styles.btnWhatsapp}`}
                    onClick={contactWhatsApp}
                  >
                    <MessageCircle size={20} />
                    Contactar por WhatsApp
                  </button>

                  <button
                    className={`${styles.btn} ${styles.btnPhone}`}
                    onClick={makeCall}
                  >
                    <Phone size={20} />
                    Llamar Ahora
                  </button>
                </div>

                {/* Contact Form
                <div>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+57 xxx xxx xxxx"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    />

                    <textarea
                      name="message"
                      placeholder="Cuéntanos sobre tus preferencias o preguntas..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={styles.formTextarea}
                    />

                    <button
                      onClick={handleSubmit}
                      className={`${styles.btn} ${styles.btnPrimary}`}
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </main>

        {/* Image Modal */}
        {showImageModal && (
          <div
            className={styles.modal}
            onClick={() => setShowImageModal(false)}
          >
            <button
              className={styles.modalClose}
              onClick={() => setShowImageModal(false)}
            >
              <X size={24} />
            </button>

            <img
              src={images[currentImage]}
              alt="Vista del apartamento"
              className={styles.modalImage}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className={`${styles.modalNav} ${styles.modalNavLeft}`}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className={`${styles.modalNav} ${styles.modalNavRight}`}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ApartmentRental;
