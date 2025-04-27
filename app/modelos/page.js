import CardCasa from "../components/cardCasa";
import {construcciones} from './construcciones'

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