import { ArrowRight, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import CTAFinal from "./CTA";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <CTAFinal />
      <footer className="bg-[#261B37] text-gray-300 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Logo y descripción */}
            <div>
              <img src="/logo-morado-claro.svg" alt="Logo PrefabCasas" className="h-10 mb-4" />
              <p className="text-sm mb-5">
                Encuentra las mejores opciones en casas prefabricadas en Colombia. Compara, cotiza y haz realidad tu nuevo hogar.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Enlaces útiles */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/sobre-nosotros" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Sobre Nosotros</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Blog</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="/empresas/registro" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Contacto</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="/empresas/registro" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Tienes una Empresa?</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="/cotizar" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Solicitar Cotización</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contacto
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D6BEFF]" />
                  <span>+57 314 355 1942</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D6BEFF]" />
                  <span>contacto@prefabcasas.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D6BEFF]" />
                  <span>Bogotá, Colombia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria y copyright */}
          <div className="border-t border-[#D6BEFF]/30 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {currentYear} PrefabCasas. Todos los derechos reservados.</p>
            <div className="flex gap-5 text-sm mt-4 md:mt-0">
              <a href="/privacidad" className="hover:text-white transition-colors">Privacidad</a>
              <a href="/terminos" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;