import React from 'react';

const CentroDiagnostico = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '10px' }}>iPhone 13 mini -1</h1>
      <h2 style={{ fontSize: '20px', color: '#555', marginBottom: '15px' }}>Centro Diagnostico Automotriz</h2>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>Pelaez Hermanos 7 de</p>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '15px' }}>
        Taller enfocado en la calidad de nuestro servicio, con garantia, confiabilidad y empeho
      </p>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '15px' }}>Bogota, Colombia</p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{ fontSize: '16px', color: '#ff9800', marginRight: '10px' }}>★</span>
        <span style={{ fontSize: '16px', color: '#666' }}>4.8 (210 reviews)</span>
      </div>
      <h3 style={{ fontSize: '18px', color: '#444', marginBottom: '10px' }}>Servicios</h3>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li style={{ fontSize: '16px', color: '#666', marginBottom: '5px' }}>Servicios</li>
      </ul>
    </div>
  );
};

export default CentroDiagnostico;