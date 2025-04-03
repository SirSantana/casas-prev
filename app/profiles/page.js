import Image from 'next/image';
import dynamic from 'next/dynamic';

// Usamos dynamic import para Leaflet para evitar errores durante la renderización en el servidor

const Taller = () => {
  return (
    
    <div
      style={{
        padding: '20px',
        fontFamily: "'Poppins', sans-serif",
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center',
        height:'100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: '10px',
        gap: '20px',
      }}
    >
        
        <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -10,
        height: '100%',
        width: '100%',
        background: 'radial-gradient(125% 125% at 50% 10%, #fff 40%, #407BFF 100%)',
        backgroundColor: '#ffffff', // Fondo blanco como base
      }}
    ></div>
       {/* <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -10,
        height: '100%',
        width: '100%',
        background: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
        backgroundSize: '16px 16px',
        backgroundColor: '#ffffff', // Asegura el fondo blanco
      }}
    ></div> */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src="https://azurequarks.blob.core.windows.net/negocios/tarjetacorsamotors.jpg" // Cambia a la ruta correcta de tu logo
            alt="Logo del taller"
            width={100}
            height={100}
            style={{ borderRadius: '50px', border: '2px solid #e0e0e0', objectFit: 'cover', width: '100px', height: '100px' }}
          />
        </div>
        <h2 style={{ fontSize: '14px', color: '#007BFF', marginTop: '10px' }}>
          Centro Diagnóstico Automotriz
        </h2>
      </div>
      <h1
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '10px',
        }}
      >
        Pelaez Hermanos 7 de Agosto
      </h1>
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
        Taller enfocado en la calidad de nuestro servicio, con garantía, confiabilidad y empeño
      </p>
      <p style={{ fontSize: '14px', color: '#007BFF', marginBottom: '20px' }}>
        📍 <span>Bogotá, Colombia</span>
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '20px',
        }}
      >
        <span style={{ color: '#FFC107' }}>⭐⭐⭐⭐⭐</span>
        <span style={{ fontSize: '12px', color: '#666' }}>(210 reviews)</span>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '20px',
        }}
      >
        <a href="#">
          <Image src="/icons/linkedin.svg" alt="LinkedIn" width={30} height={30} />
        </a>
        <a href="#">
          <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={30} height={30} />
        </a>
        <a href="#">
          <Image src="/icons/instagram.svg" alt="Instagram" width={30} height={30} />
        </a>
        <a href="#">
          <Image src="/icons/email.svg" alt="Email" width={30} height={30} />
        </a>
      </div>
     
    </div>
  );
};

export default Taller;