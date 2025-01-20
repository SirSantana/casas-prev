import SelectTipo from "@/app/components/modelo/selectTipo";
import { construcciones } from "../page";
import ButtonFooterFixed from "@/app/components/modelo/ButtonFooterFixed";
import CaracteristicasPrincipales from "@/app/components/modelo/CaracteristicasPrincipales";
import SliderImages from "@/app/components/modelo/SliderImages";

export default async function Modelos({ params }) {
  const { id } = await params;
  const tipo = construcciones.find((construccion) => construccion.id == id);
  const {
    nombre,
    descripcion,
    tamaño,
    habitaciones,
    baños,
    materiales,
    precioBase,
    tiempoConstruccion,
    opcionesAdicionales,
    imagenes
  } = tipo
  return (
    <div  className="min-h-screen max-w-4xl mx-auto bg-gray-50">
      {/* Header con imagen destacada */}
      <div className="relative w-full h-64 lg:h-96">
        <img
          src={`/${imagenes[0]}`}
          alt={nombre}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-3xl lg:text-5xl font-bold drop-shadow-lg">
          {tamaño}m²
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto p-6 lg:p-12">
        {/* Sección de detalles */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Información principal */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{nombre}</h2>
            <p className="mt-4 text-gray-600">{descripcion}</p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Detalles:</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <strong>Tamaño:</strong> {tamaño}
                </li>
                <li>
                  <strong>Habitaciones:</strong> {habitaciones}
                </li>
                <li>
                  <strong>Baños:</strong> {baños}
                </li>
                <li>
                  <strong>Materiales:</strong> {materiales.join(", ")}
                </li>
                <li>
                  <strong>Tiempo de construcción:</strong> {tiempoConstruccion}
                </li>
              </ul>
            </div>
          </div>

          {/* Imagenes y precio */}
          <div>
            {/* <div className="grid grid-cols-2 gap-4">
              {imagenes.map((imagen, index) => (
                <img
                  key={index}
                  src={imagen}
                  alt={`${nombre} ${index + 1}`}
                  className="object-cover rounded-lg shadow-lg"
                />
              ))}
            </div> */}
            <div className="mt-6 bg-[#F9F5F3] p-4 rounded-lg border-[#AD7C53] border-2 text-[#AD7C53]">
              <h3 className="text-xl font-medium ">Precio Base:</h3>
              <p className="text-2xl font-bold">${precioBase.toLocaleString('es-CO')} </p>
            </div>
          </div>
        </div>

        {/* Opciones adicionales */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800">Opciones Adicionales:</h3>
          {/* <ul className="mt-4 space-y-2 text-gray-600">
            {opcionesAdicionales.map((opcion, index) => (
              <li key={index} className="flex items-center">
                <span className="bg-green-200 text-green-800 text-xs font-bold rounded-full px-3 py-1 mr-2">
                  Opción
                </span>
                {opcion}
              </li>
            ))}
          </ul> */}
        </div>
        <SliderImages imagenes={imagenes}/>
        <CaracteristicasPrincipales habitaciones={habitaciones} baños={baños} tamaño={tamaño}/>
        <SelectTipo/>

      <ButtonFooterFixed/>
      </div>
    </div>
  )
}