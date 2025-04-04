'use client'
import Link from "next/link";
import { useState } from "react";
import Button, { ButtonVariant } from "../Button/Button";
import renderStars from "@/app/utils/renderStars";

const empresasData = [
  {
    id: 1,
    nombre: "Casa Prefab Colombia",
    ubicacion: "Bogotá",
    tipo: "Modular",
    experiencia: "10 años",
    servicios: ["Diseño", "Fabricación", "Entrega"],
    imagen: "/ck40-1.jpg"
  },
  {
    id: 2,
    nombre: "EcoPrefabricadas",
    ubicacion: "Medellín",
    tipo: "Sostenible",
    experiencia: "8 años",
    servicios: ["Energía solar", "Materiales reciclados"],
    imagen: "/ck40-1.jpg"
  },
  {
    id: 3,
    nombre: "PrefaHomes",
    ubicacion: "Cali",
    tipo: "Minimalista",
    experiencia: "6 años",
    servicios: ["Casas a medida", "Rápida instalación"],
    imagen: "/ck40-1.jpg"
  },
];

const FiltroEmpresas = () => {
  const [filtroUbicacion, setFiltroUbicacion] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  const empresasFiltradas = empresasData.filter((empresa) =>
    (filtroUbicacion ? empresa.ubicacion === filtroUbicacion : true) &&
    (filtroTipo ? empresa.tipo === filtroTipo : true)
  );

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
      {/* Filtros - Sidebar */}
      <aside className="bg-white   h-fit">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtrar Empresas</h3>

        {/* Filtrar por Ciudad */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Ubicación</label>
          <select
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            value={filtroUbicacion}
            onChange={(e) => setFiltroUbicacion(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Cali">Cali</option>
          </select>
        </div>

        {/* Filtrar por Tipo de Casa */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Casa</label>
          <select
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="Modular">Modular</option>
            <option value="Sostenible">Sostenible</option>
            <option value="Minimalista">Minimalista</option>
          </select>
        </div>
      </aside>

      {/* Lista de Empresas */}
      <div className="flex flex-wrap gap-4 justify-start w-full">
        {empresasFiltradas.length > 0 ? (
          empresasFiltradas.map((empresa) => (
            <Link
              key={empresa.id}
              href={`/fabricantes/1`}
              className="border border-[#CFD5E1] rounded-xl p-8 w-[320px] shadow-md bg-white flex flex-col items-center gap-4 transition-transform transform hover:scale-[1.01] duration-300 ease-in-out"
            >
              {/* Imagen en la parte superior */}
              <img
                src={empresa.imagen}
                alt={empresa.nombre}
                className="w-24 h-24 rounded-full object-cover"
              />

              {/* Contenido centrado */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900" style={{ fontWeight: '600' }}>{empresa.nombre}</h3>
                <p style={{ color: '#6C788E' }} className="text-gray-500">{empresa.ubicacion}, {empresa.tipo}</p>
                <span
                  style={{
                    marginTop: '12px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#182537',
                    fontSize: '14px',
                    fontWeight: '500',
                    margin: '12px auto auto auto'
                  }}
                >
                  {renderStars(Number(5))} 4.8
                </span>
              </div>

              {/* Detalles */}
              <div className="mt-2 text-center" style={{ color: '#6C788E' }}>
                <p className="text-gray-700 text-sm" style={{ color: '#6C788E' }}>📅 {empresa.experiencia} de experiencia</p>
                <p className="text-gray-700 text-sm" style={{ color: '#6C788E' }}> {empresa.servicios.join(", ")}</p>
                <p className="text-gray-700 text-sm" style={{ color: '#6C788E' }}> Desde $3.800 /m2</p>

              </div>

              {/* Botones en vertical */}
              <div className="flex flex-col gap-2 w-full mt-4">
                <Button fullWidth variant={ButtonVariant.terciary}>
                  Ver Teléfono
                </Button>
                <Button variant={ButtonVariant.primary} fullWidth>
                  Solicitar Cotización
                </Button>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No se encontraron empresas con estos filtros.</p>
        )}
      </div>
    </div>

  );
};

export default FiltroEmpresas;
