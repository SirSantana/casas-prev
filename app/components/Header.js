"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full max-w-[1200px] bg-white px-6 py-3 z-50 transition-shadow ${
        isScrolled ? "shadow-md border-b border-gray-200" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo + Nombre */}
        <Link href="/" className="flex items-center  space-x-2">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          <span className="text-lg font-semibold text-black">Prefab<span className="text-primary">Casas</span></span>
        </Link>

        {/* Menú para desktop */}
        <ul className="hidden md:flex space-x-5 text-[15px] text-gray-800">
          <li><Link href="/casas" className="hover:text-primary transition">Casas</Link></li>
          <li><Link href="/sobre-nosotros" className="hover:text-primary transition">Sobre Nosotros</Link></li>
          <li><Link href="/contacto" className="hover:text-primary transition">Contacto</Link></li>
          <li>
            <Link href="/cotizar" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition">
              Cotizar
            </Link>
          </li>
        </ul>

        {/* Menú hamburguesa para móvil */}
        <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white absolute top-14 left-0 w-full shadow-lg border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-6 text-[15px] text-gray-800">
            <li><Link href="/casas" onClick={() => setMenuOpen(false)}>Casas</Link></li>
            <li><Link href="/sobre-nosotros" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link></li>
            <li><Link href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
            <li>
              <Link href="/cotizar" className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-opacity-80 transition" onClick={() => setMenuOpen(false)}>
                Cotizar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
