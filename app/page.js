import dynamic from 'next/dynamic';
// Componentes dinámicos para carga diferida (excepto HeroSection que es crítico)
const EmpresasList = dynamic(() => import("./components/Home/EmpresasListado"), {
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Cargando...</div>,
});

const BenefitsSection = dynamic(() => import("./components/Home/Beneficios"));
const FAQSection = dynamic(() => import("./components/Home/FAQ"));
const CTAFinal = dynamic(() => import("./components/Home/CTA"));
const HowItWorksSection = dynamic(() => import("./components/Home/HowItWorks"));
const SmartFormSection = dynamic(() => import("./components/Home/SmartFormSection"));
const TestimonialsSection = dynamic(() => import("./components/Home/Testimonials"));

// HeroSection se mantiene estático porque es contenido crítico
import HeroSection from "./components/Home/HeroSection";
import Layout from './components/Layout';

export const metadata = {
  title: 'Casas Prefabricadas en Colombia',
  description: 'Encuentra las mejores empresas de casas prefabricadas en Colombia',
  openGraph: {
    images: '/og-image.jpg',
  },
}
export default function Home() {
  const faqs = [
    {
      question: "¿Cuánto tiempo dura la construcción de una casa prefabricada?",
      answer: "El tiempo de construcción varía según el tamaño y diseño de la vivienda. Generalmente, una casa prefabricada puede estar lista entre 2 a 4 meses, siendo más rápido que una construcción tradicional.",
    },
    {
      question: "¿Que tan buenas son las casas prefabricadas en Colombia?",
      answer: "Sí, las casas prefabricadas están diseñadas con materiales resistentes y cumplen con las normativas de construcción vigentes, ofreciendo una seguridad estructural comparable a las viviendas tradicionales.",
    },
    {
      question: "¿Puedo personalizar el diseño de mi casa prefabricada?",
      answer: "Absolutamente. Muchas empresas ofrecen opciones de personalización en diseño, acabados y distribución de espacios para adaptarse a las necesidades y gustos del cliente.",
    },
    {
      question: "¿Es más económica una casa prefabricada que una tradicional?",
      answer: "En la mayoría de los casos, sí. Las casas prefabricadas suelen reducir costos de materiales y mano de obra, lo que las hace más asequibles que las construcciones tradicionales.",
    },
    {
      question: "¿Qué mantenimiento requiere una casa prefabricada?",
      answer: "El mantenimiento es similar al de una casa convencional. Sin embargo, debido al uso de materiales modernos y técnicas de construcción avanzadas, algunas casas prefabricadas pueden requerir incluso menos mantenimiento.",
    },
    {
      question: "¿Cuantos años dura una casa prefabricada?",
      answer: "Con un mantenimiento adecuado, las casas prefabricadas pueden tener una durabilidad comparable a las tradicionales, ofreciendo una vida útil prolongada.",
    },
    {
      question: "¿Necesito permisos para instalar una casa prefabricada?",
      answer: "Sí, es necesario obtener los mismos permisos y cumplir con las regulaciones locales que se requieren para una construcción tradicional.",
    },
    {
      question: "¿Dónde puedo instalar una casa prefabricada?",
      answer: "Las casas prefabricadas pueden instalarse en terrenos urbanos o rurales, siempre que cumplan con las normativas locales y el terreno sea edificable.",
    },
    {
      question: "¿Las casas prefabricadas son eficientes energéticamente?",
      answer: "Sí, muchas casas prefabricadas están diseñadas con altos estándares de eficiencia energética, incorporando aislamientos de calidad y sistemas sostenibles.",
    },
    {
      question: "¿Puedo financiar la compra de una casa prefabricada?",
      answer: "Sí, es posible financiar una casa prefabricada mediante hipotecas o préstamos personales, dependiendo de las políticas de las entidades financieras y el cumplimiento de ciertos requisitos.",
    },
    {
      question: "¿Qué desventajas tienen las casas prefabricadas?",
      answer: "Aunque las casas prefabricadas ofrecen muchas ventajas, también presentan algunas desventajas. Una de ellas es la percepción social, ya que algunas personas aún las consideran de menor calidad frente a las tradicionales. Además, pueden tener limitaciones en diseño si se elige un modelo muy estándar, y en ciertos casos, los costos de transporte e instalación en zonas remotas pueden elevarse. También es importante verificar que cumplan con todas las normativas locales para evitar problemas legales.",
    }

  ];
  return (
    <>
      <Layout faqs={faqs}>
        <HeroSection />
        <EmpresasList />
        <TestimonialsSection />
        <HowItWorksSection />
        <BenefitsSection />
        <SmartFormSection />
        <FAQSection faqs={faqs} />
        <CTAFinal />
      </Layout>
    </>
  );
}
