'use client';
import { useState } from "react";



export default function SelectTipo() {
  const [seleccionado, setSeleccionado] = useState(null);

  const tiposDeCasa = [
    {
      id: 1,
      nombre: "Casa Normal",
      descripcion: "Explicación de la casa normal",
    },
    {
      id: 2,
      nombre: "Casa Ecológica",
      descripcion: "Explicación de la casa ecológica",
    },
    {
      id: 3,
      nombre: "Casa de Lujo",
      descripcion: "Explicación de la casa de lujo",
    },
  ];
  return (
    <div className=" space-y-4">
      {tiposDeCasa.map((casa) => (
        <button
          key={casa.id}
          onClick={() => setSeleccionado(casa.id)}
          className={`w-full p-4 border rounded-lg flex justify-between items-center transition ${
            seleccionado === casa.id
              ? "border-blue-600 bg-blue-50"
              : "border-gray-300 bg-white"
          }`}
        >
          <div className="flex flex-col ">
            <h4
              className={`font-semibold text-start text-lg ${
                seleccionado === casa.id ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {casa.nombre}
            </h4>
            <p
              className={`text-sm ${
                seleccionado === casa.id ? "text-blue-400" : "text-gray-500"
              }`}
            >
              {casa.descripcion}
            </p>
          </div>
          {seleccionado === casa.id && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={32}
              height={32}
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
          )}
        </button>
      ))}
    </div>
  )
}