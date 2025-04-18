// SimuladorPresupuesto.tsx
"use client";

import { useState } from "react";

export default function SimuladorPresupuesto() {
  const [metros, setMetros] = useState(50);
  const [habitaciones, setHabitaciones] = useState(2);
  const [acabado, setAcabado] = useState("medio");
  const [estimado, setEstimado] = useState(null);

  const calcularPresupuesto = () => {
    let precioM2 = acabado === "básico" ? 800000 : acabado === "medio" ? 1000000 : 1300000;
    let total = metros * precioM2 + habitaciones * 2000000;
    setEstimado(total);
  };

  return (
    <section className="bg-secondary py-16 px-6 rounded-2xl shadow-xl max-w-5xl mx-auto mt-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-primary">Simula tu presupuesto</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Formulario */}
        <div className="space-y-6">
          <div>
            <label className="block text-primary font-semibold mb-1">Tamaño (m²):</label>
            <input
              type="number"
              value={metros}
              onChange={(e) => setMetros(Number(e.target.value))}
              className="w-full p-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-primary font-semibold mb-1">Habitaciones:</label>
            <input
              type="number"
              value={habitaciones}
              onChange={(e) => setHabitaciones(Number(e.target.value))}
              className="w-full p-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-primary font-semibold mb-1">Nivel de acabados:</label>
            <select
              value={acabado}
              onChange={(e) => setAcabado(e.target.value)}
              className="w-full p-3 border border-accent rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="básico">Básico</option>
              <option value="medio">Medio</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <button
            onClick={calcularPresupuesto}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-terciary transition"
          >
            Calcular presupuesto
          </button>
        </div>

        {/* Resultado */}
        <div className="flex items-center justify-center bg-white rounded-xl border border-accent shadow-md p-6">
          {estimado ? (
            <div className="text-center">
              <p className="text-gray mb-2 text-lg">Precio estimado:</p>
              <p className="text-4xl font-bold text-primary mb-4">
                ${estimado.toLocaleString()} COP
              </p>
              <p className="text-sm text-gray">
                Este valor es aproximado. Para una cotización personalizada, contáctanos:
              </p>
              <a
                href={`https://wa.me/573001112233?text=Hola, simulé una casa de ${metros}m² con ${habitaciones} habitaciones y acabados ${acabado}, ¿me puedes dar más detalles?`}
                target="_blank"
                className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Contactar por WhatsApp
              </a>
            </div>
          ) : (
            <p className="text-gray text-center text-base">
              Rellena los datos para conocer un estimado del valor de tu casa prefabricada.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
