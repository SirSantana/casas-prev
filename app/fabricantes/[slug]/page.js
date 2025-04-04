"use client";
import Image from "next/image";
import { useState } from "react";
const  empresa={
    nombre: "Casas Modernas S.A.S",
    logo: "/logo-morado.svg",
    imagenDestacada: "/casas/casa-1.jpg",
    descripcion: "Empresa líder en construcción de casas prefabricadas modernas y económicas en Colombia.",
    ubicacion: "Medellín, Colombia",
    telefono: "300 123 4567",
    correo: "contacto@casasmodernas.com",
    web: "https://www.casasmodernas.com",
    modelos: [
      {
        nombre: "Casa Campestre 70m²",
        descripcion: "Ideal para terrenos rurales, 2 habitaciones, 1 baño.",
        imagen: "/casas/modelo1.jpg",
      },
      {
        nombre: "Casa Urbana 90m²",
        descripcion: "Perfecta para la ciudad, acabados modernos.",
        imagen: "/casas/modelo2.jpg",
      },
    ],
  }
const PerfilEmpresa = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    // Aquí puedes hacer el fetch/post a tu backend o servicio de correo
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Información de la empresa */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-4">
          <Image src={empresa.logo} alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold text-gray-900">
            {empresa.nombre}
          </h1>
        </div>

        <Image
          src={empresa.imagenDestacada}
          alt="Imagen principal"
          width={800}
          height={400}
          className="rounded-xl object-cover w-full max-h-[400px]"
        />

        <p className="text-gray-700 text-[15px] leading-relaxed">{empresa.descripcion}</p>

        <div className="space-y-3">
          <p><strong>Ubicación:</strong> {empresa.ubicacion}</p>
          <p><strong>Teléfono:</strong> {empresa.telefono}</p>
          <p><strong>Correo:</strong> {empresa.correo}</p>
          <p><strong>Sitio web:</strong> <a href={empresa.web} target="_blank" rel="noopener noreferrer" className="text-primary underline">{empresa.web}</a></p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-3">Modelos destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {empresa.modelos.map((modelo, i) => (
              <div key={i} className="border rounded-lg p-4 shadow-sm">
                <Image
                  src={modelo.imagen}
                  alt={modelo.nombre}
                  width={300}
                  height={200}
                  className="rounded-md mb-2"
                />
                <h3 className="font-medium text-gray-900">{modelo.nombre}</h3>
                <p className="text-sm text-gray-600">{modelo.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formulario de cotización */}
      <div className="sticky top-24 h-fit bg-white border border-gray-200 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Solicita una Cotización
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="text"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              rows="4"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Estoy interesado en una casa de 70m2..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/80 transition"
          >
            Enviar Cotización
          </button>
        </form>
      </div>
    </div>
  );
};

export default PerfilEmpresa;