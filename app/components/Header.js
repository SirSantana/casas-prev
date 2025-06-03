"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? "bg-white shadow-sm border-b border-gray-200" : "bg-white/70 backdrop-blur-md"}`}>
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex  space-x-2">
          <Image src="/logo-morado.svg" alt="Logo" width={32} height={32} />
          <span className="text-lg font-semibold text-[#261B37]">
            PreFab<span  className="text-primary text-[#261B37]">Casas</span>
          </span>
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-terciary">
          {/* <Link href="/casas" className="hover:text-primary transition">Casas</Link> */}
          <Link href="/empresas/registro" className="hover:text-primary transition">Tienes una Empresa?</Link>
          {/* <Link href="/empresas/registro" className="hover:text-primary transition">Contacto</Link> */}
          <Link href="/cotizar" className=" ml-4 bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/80 transition-all">
            Cotizar
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6 text-sm font-medium text-gray-800">
            <Link href="/casas" onClick={() => setMenuOpen(false)}>Casas</Link>
            <Link href="/sobre-nosotros" onClick={() => setMenuOpen(false)}>Tienes una Empresa?</Link>
            <Link href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            <Link
              href="/cotizar"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary/80 transition"
            >
              Cotizar
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

