import CardCasa from "../components/cardCasa";


export const construcciones = [
  {
    id: 1,
    nombre: "Casa Pequeña Moderna",
    descripcion: "Casa compacta con diseño moderno y eficiente, ideal para parejas o pequeñas familias.",
    tamaño: 36,
    habitaciones: 2,
    baños: 1,
    materiales: ["Concreto prefabricado", "Madera tratada"],
    precioBase: 16000000, // USD
    tiempoConstruccion: "4 semanas",
    opcionesAdicionales: ["Paneles solares", "Terraza pequeña", "Sistema de aislamiento térmico"],
    imagenes: ["https://res.cloudinary.com/db3veuotr/image/upload/v1737376551/casa36mimg1_tvun2y.webp", "https://res.cloudinary.com/db3veuotr/image/upload/v1737376677/casa36mimg2_tw2ucg.webp", "https://res.cloudinary.com/db3veuotr/image/upload/v1737376743/casa36mimg3_rzgqph.webp","https://res.cloudinary.com/db3veuotr/image/upload/v1737376825/casa36mimg4_oeuplg.webp"]
  },
  {
    id: 2,
    nombre: "Casa Mediana Familiar",
    descripcion: "Una casa familiar funcional con acabados personalizables y espacios amplios.",
    tamaño: 100,
    habitaciones: 3,
    baños: 2,
    materiales: ["Acero estructural", "Paneles aislantes"],
    precioBase: 35000000, // USD
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
    precioBase: 70000000, // USD
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
    precioBase: 25000000, // USD
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
    precioBase: 19000000, // USD
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
    precioBase: 14000000, // USD
    tiempoConstruccion: "3 semanas",
    opcionesAdicionales: ["Techo expandible", "Paneles solares básicos"],
    imagenes: ["planoprueba.jpg", "casa-compacta-2.jpg"]
  }
];
export default function Modelos() {
  return (
    <div style={{backgroundColor:'#E8E4E2', height:'60vh'}} className="bg-gray-100  p-8">
      <div className="mb-12 mt-8">
        <h1 className="font-bold text-blue-950 text-4xl text-center">Casas Prefabricadas</h1>
        <p className="text-gray-600 text-center mt-4">
          Descubre nuestras opciones de construcción prefabricada para todos los estilos y necesidades.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl m-auto">
        {construcciones.map((casa) => (
          <CardCasa casa={casa} key={casa.id} />
        ))}
      </div>
    </div>
  )
}