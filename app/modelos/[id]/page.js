import SelectTipo from "@/app/components/modelo/selectTipo";
import { construcciones } from "../page";
import ButtonFooterFixed from "@/app/components/modelo/ButtonFooterFixed";
import CaracteristicasPrincipales from "@/app/components/modelo/CaracteristicasPrincipales";
import SliderImages from "@/app/components/modelo/SliderImages";
import TiposPlanos from "@/app/components/modelo/Planos";

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
    imagenes,
    planos
  } = tipo
  return (
    <div className="min-h-screen max-w-4xl mx-auto bg-gray-50 flex flex-col gap-8 mb-40">
      <SliderImages imagenes={imagenes} />
      <section style={{display:'flex', flexDirection:'column',  width:'90%', margin:'0 auto', lineHeight:'28px'}}> <p style={{ fontWeight: '500', fontSize: '14px', color: '#2563eb ' }}>Casa</p>
        <h1 style={{ color: '#1F2937', fontSize: '32px', fontWeight: '600',}}>{tamaño}m²</h1>
      </section>
      <CaracteristicasPrincipales habitaciones={habitaciones} baños={baños} tamaño={tamaño} />
      <TiposPlanos planos={planos} />
      <SelectTipo />

      <ButtonFooterFixed />
    </div>
  )
}