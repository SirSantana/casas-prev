


export default function CardCasa({casa}) {
  return (
    <div
      key={casa.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
    >

      <div className="p-6 ">
        <h2 style={{ color: '#AD7C53' }} className="text-6xl font-bold ">{casa.tamaño}m²</h2>
        <div className="mt-8 mb-8" style={{ color: '#393D46', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p className="text-sm">Habitaciones</p>
            <p className="font-bold text-2xl">{casa.habitaciones}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p className="text-sm">Baños</p>
            <p className="font-bold text-2xl">{casa.baños}</p>
          </div><div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p className="text-sm">Precio m²</p>
            <p className="font-bold text-2xl">${Math.round(casa.precioBase / casa.tamaño)}</p>
          </div>
        </div>
        <img
          src={casa.imagenes[0]}
          alt={casa.nombre}
          className="min-w-10 h-48 object-cover mx-auto"
        />
        <p style={{ color: '#AD7C53' }} className="mt-4 text-right font-medium" >Ver detalle <span><i className="fa-solid fa-arrow-right-long"></i></span></p>
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
  )
}