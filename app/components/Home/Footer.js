const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo y descripción */}
            <div>
              <img src="/logo.svg" alt="Logo" className="h-10 mb-4" />
              <p className="text-sm">
                Encuentra las mejores opciones en casas prefabricadas en Colombia. Compara, cotiza y haz realidad tu nuevo hogar.
              </p>
            </div>
  
            {/* Enlaces útiles */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/sobre-nosotros" className="hover:text-white transition">Sobre Nosotros</a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition">Blog</a>
                </li>
                <li>
                  <a href="/contacto" className="hover:text-white transition">Contacto</a>
                </li>
                <li>
                  <a href="/cotizar" className="hover:text-white transition">Solicitar Cotización</a>
                </li>
              </ul>
            </div>
  
            {/* Redes Sociales */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="hover:text-white transition">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="hover:text-white transition">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Línea divisoria */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} PrefabCasas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  