

const construcciones = [
  {
    id: 1,
    nombre: "Casa Pequeña Moderna",
    descripcion: "Casa compacta con diseño moderno y eficiente, ideal para parejas o pequeñas familias.",
    tamaño: 50,
    habitaciones: 2,
    baños: 1,
    materiales: ["Concreto prefabricado", "Madera tratada"],
    precioBase: 20000, // USD
    tiempoConstruccion: "4 semanas",
    opcionesAdicionales: ["Paneles solares", "Terraza pequeña", "Sistema de aislamiento térmico"],
    imagenes: ["planoprueba.jpg", "casa-pequena-moderna-2.jpg"]
  },
  {
    id: 2,
    nombre: "Casa Mediana Familiar",
    descripcion: "Una casa familiar funcional con acabados personalizables y espacios amplios.",
    tamaño: 100,
    habitaciones: 3,
    baños: 2,
    materiales: ["Acero estructural", "Paneles aislantes"],
    precioBase: 45000, // USD
    tiempoConstruccion: "8 semanas",
    opcionesAdicionales: ["Garaje", "Ampliación futura", "Domótica básica"],
    imagenes: ["planoprueba.jpg", "casa-mediana-familiar-2.jpg"]
  },
  {
    id: 3,
    nombre: "Casa Grande de Lujo",
    descripcion: "Casa espaciosa con acabados premium y tecnología inteligente, ideal para familias grandes.",
    tamaño: 200,
    habitaciones: 5,
    baños: 4,
    materiales: ["Vidrio templado", "Acero reforzado", "Madera de alta calidad"],
    precioBase: 100000, // USD
    tiempoConstruccion: "12 semanas",
    opcionesAdicionales: ["Piscina", "Jardín amplio", "Sistema de energía renovable"],
    imagenes: ["planoprueba.jpg", "casa-grande-lujo-2.jpg"]
  },
  {
    id: 4,
    nombre: "Casa Ecológica Sostenible",
    descripcion: "Construcción sostenible diseñada para reducir el impacto ambiental y maximizar la eficiencia energética.",
    tamaño: 80,
    habitaciones: 3,
    baños: 2,
    materiales: ["Madera reciclada", "Paneles de cáñamo", "Aislante natural"],
    precioBase: 35000, // USD
    tiempoConstruccion: "6 semanas",
    opcionesAdicionales: ["Recolección de agua de lluvia", "Energía solar", "Huerto integrado"],
    imagenes: ["planoprueba.jpg", "casa-ecologica-2.jpg"]
  },
  {
    id: 5,
    nombre: "Casa Prefabricada Minimalista",
    descripcion: "Diseño minimalista con espacios abiertos y líneas limpias, perfecta para los amantes de la simplicidad.",
    tamaño: 60,
    habitaciones: 2,
    baños: 1,
    materiales: ["Concreto prefabricado", "Metal laminado"],
    precioBase: 25000, // USD
    tiempoConstruccion: "5 semanas",
    opcionesAdicionales: ["Techo verde", "Ventanas panorámicas", "Piso radiante"],
    imagenes: ["planoprueba.jpg", "casa-minimalista-2.jpg"]
  },
  {
    id: 6,
    nombre: "Casa Compacta para Terrenos Reducidos",
    descripcion: "Ideal para terrenos pequeños, maximiza el espacio disponible con un diseño inteligente.",
    tamaño: "40",
    habitaciones: 1,
    baños: 1,
    materiales: ["Concreto reforzado", "Madera tratada"],
    precioBase: 15000, // USD
    tiempoConstruccion: "3 semanas",
    opcionesAdicionales: ["Techo expandible", "Paneles solares básicos"],
    imagenes: ["planoprueba.jpg", "casa-compacta-2.jpg"]
  }
];
export default function Modelos() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="mb-8">
        <h1 className="font-bold text-blue-950 text-4xl text-center">Casas Prefabricadas</h1>
        <p className="text-gray-600 text-center mt-4">
          Descubre nuestras opciones de construcción prefabricada para todos los estilos y necesidades.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl m-auto">
        {construcciones.map((casa) => (
          <div
            key={casa.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
           
            <div className="p-6 ">
              <h2 style={{ color: '#AD7C53' }} className="text-6xl font-bold ">{casa.tamaño}m²</h2>
              <div className="mt-8 mb-8" style={{ color: '#393D46', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent:'space-between', alignItems:'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p className="text-sm">Habitaciones</p>
                  <p className="font-bold text-2xl">{casa.habitaciones}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p className="text-sm">Baños</p>
                  <p className="font-bold text-2xl">{casa.baños}</p>
                </div><div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p className="text-sm">Precio m²</p>
                  <p className="font-bold text-2xl">${Math.round(casa.precioBase/casa.tamaño)}</p>
                </div>
              </div>
              <img
              src={casa.imagenes[0]}
              alt={casa.nombre}
              className="min-w-10 h-48 object-cover mx-auto"
            />
            <p style={{color:'#AD7C53'}} className="mt-4 text-right font-medium" >Ver detalle <span><i className="fa-solid fa-arrow-right-long"></i></span></p>
            </div>

           
            {/* <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">{casa.nombre}</h2>
              <p className="text-gray-600 mt-2">{casa.descripcion}</p>
              <div className="mt-4">
                <p className="text-gray-800">
                  <span className="font-bold">Tamaño:</span> {casa.tamaño}
                </p>
                <p className="text-gray-800">
                  <span className="font-bold">Habitaciones:</span> {casa.habitaciones}
                </p>
                <p className="text-gray-800">
                  <span className="font-bold">Baños:</span> {casa.baños}
                </p>
                <p className="text-gray-800">
                  <span className="font-bold">Precio Base:</span> ${casa.precioBase.toLocaleString()}m² USD
                </p>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}