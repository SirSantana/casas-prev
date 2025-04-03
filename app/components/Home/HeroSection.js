"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buscar?query=${query}`);
    }
  };

  return (
    <section  className="relative w-full h-[90vh] bg-white py-24 pt-32 flex items-center justify-center">
      {/* Grid Background */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Contenido izquierdo */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Encuentra la <span className="text-purple-600">casa prefabricada</span> ideal para ti
          </h1>
          <p className="mt-4 text-lg text-gray-600">
          Explora empresas confiables en Colombia y solicita una cotización fácilmente.
          </p>

          {/* Buscador */}
          <form onSubmit={handleSearch} className="mt-8 flex max-w-lg bg-gray-100 rounded-full shadow-sm overflow-hidden mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Buscar por ciudad o tipo de casa..."
              className="flex-1 px-5 py-4 text-gray-900 outline-none bg-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-white font-semibold transition"
            >
              🔍
            </button>
          </form>
        </div>

        {/* Imagen decorativa */}
        <div className="flex-1 flex justify-center mt-12 md:mt-0">
          <Image
            src="/ck40-1.jpg"
            alt="Casa prefabricada moderna"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
