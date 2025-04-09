import Image from "next/image";
import ServerCo from "./components/serverCo";
import ClientCo from "./components/clietnCo";
import Navbar from "./components/Header";
import EmpresasList from "./components/Home/EmpresasListado";
import HeroSection from "./components/Home/HeroSection";
import BenefitsSection from "./components/Home/Beneficios";
import FAQSection from "./components/Home/FAQ";
import CTAFinal from "./components/Home/CTA";
import Footer from "./components/Home/Footer";
import Head from "next/head";

// export const metadata = {
//   title: "Casas Prefabricadas en Colombia | Encuentra los Mejores Proveedoresss",
//   description:
//     "Descubre las mejores empresas de casas prefabricadas en Colombia. Compara precios, modelos y solicita cotizaciones sin compromiso.",
//   keywords: [
//     "casas prefabricadas",
//     "casas modulares",
//     "construcción rápida",
//     "casas económicas",
//     "Colombia",
//   ],
//   authors: [{ name: "PreFab Casas" }],
//   robots: "index, follow",
//   openGraph: {
//     title: "Casas Prefabricadas en Colombia | Encuentra los Mejores Proveedores",
//     description: "Encuentra empresas de casas prefabricadas, compara precios y solicita cotizaciones.",
//     url: "https://www.prefabcasas.com",
//     type: "website",
//     images: [
//       {
//         url: "/ck40-1.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Casa prefabricada",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Casas Prefabricadas en Colombia | Encuentra los Mejores Proveedores",
//     description: "Descubre las mejores empresas de casas prefabricadas en Colombia.",
//     images: ["/ck40-1.jpg"],
//   },
//   alternates: {
//     canonical: "https://www.prefabcasas.com",
//   },
//   icons: {
//     icon: "/logo.svg",
//   },
// };

export default function Home() {
  const faqs = [
    {
      question: "¿Cuánto tiempo tarda la construcción de una casa prefabricada?",
      answer: "Depende del tamaño y diseño, pero en general, una casa prefabricada puede construirse en 2 a 4 meses, mucho más rápido que una casa tradicional.",
    },
    {
      question: "¿Son seguras las casas prefabricadas?",
      answer: "Sí, están diseñadas con materiales resistentes y cumplen con las normativas de construcción, ofreciendo gran seguridad estructural.",
    },
    {
      question: "¿Puedo personalizar el diseño de mi casa prefabricada?",
      answer: "Sí, muchas empresas permiten personalizar el diseño, acabados y distribución de los espacios según tus necesidades.",
    },
    {
      question: "¿Es más barata una casa prefabricada que una tradicional?",
      answer: "En la mayoría de los casos, sí. Las casas prefabricadas reducen costos de materiales y mano de obra, haciendo que sean más asequibles.",
    },
  ];
  return (
    <>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Casas Prefabricadas en Colombia",
              "url": "https://www.prefabcasas.com",
              "description": "Encuentra las mejores empresas de casas prefabricadas en Colombia.",
              "publisher": {
                "@type": "Organization",
                "name": "Tu Empresa"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
        <Navbar />
        <HeroSection />
        <EmpresasList />
        <BenefitsSection />
        <FAQSection />
        <CTAFinal />
        <Footer />
      </div>
    </>
  );
}
