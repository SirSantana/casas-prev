'use client';
import { useState } from "react";


const tiposDeCasa = [
  {
    id: 1,
    nombre: "Casa de Campo",
    descripcion: "Explicación de la casa de campo",
  },
  {
    id: 2,
    nombre: "Casa Moderna",
    descripcion: "Explicación de la casa Moderna",
  },
  {
    id: 3,
    nombre: "Casa Mixta",
    descripcion: "Explicación de la casa Mixta",
  },
];
export default function SelectTipo() {
  const [seleccionado, setSeleccionado] = useState(tiposDeCasa[0].id);


  return (
    <div className="space-y-4 w-[90%] m-auto">
      <h2 style={{ color: '#1F2937', fontSize: '20px' }} className="font-medium">Tipo de casa</h2>
      {tiposDeCasa.map((casa) => (
        <button
          key={casa.id}
          onClick={() => setSeleccionado(casa.id)}
          className={`w-full p-4 border rounded-lg flex justify-between items-center transition ${seleccionado === casa.id
              ? "border-blue-600 bg-blue-50"
              : "border-gray-300 bg-white"
            }`}
        >
          <div className="flex flex-col ">
            <h4
              style={{ fontSize: '16px' }}
              className={`font-semibold text-start  ${seleccionado === casa.id ? "text-blue-600" : "text-gray-800"
                }`}
            >
              {casa.nombre}
            </h4>
            <p
              className={`text-sm ${seleccionado === casa.id ? "text-blue-400" : "text-gray-500"
                }`}
            >
              {casa.descripcion}
            </p>
          </div>
          {seleccionado === casa.id ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={24}
              height={24}
              className="text-blue-600"
            >
              <path
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                fill="currentColor"
              />
              <path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="20"
                d="M352 176L217.6 336 160 272"
              />
            </svg>
          ) :
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon"width={24}
            height={24} viewBox="0 0 512 512"><circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>

          }
        </button>
      ))}
    </div>
  )
}