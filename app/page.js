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

export default function Home() {
  return (
    <>
   <Head>
        {/* Meta Datos Básicos */}
        <title>Casas Prefabricadas en Colombia | Encuentra los Mejores Proveedores</title>
        <meta
          name="description"
          content="Descubre las mejores empresas de casas prefabricadas en Colombia. Compara precios, modelos y solicita cotizaciones sin compromiso."
        />
        <meta name="keywords" content="casas prefabricadas, casas modulares, construcción rápida, casas económicas, Colombia" />
        <meta name="author" content="PreFab Casas " />
        <meta name="robots" content="index, follow" />

        {/* Open Graph para redes sociales */}
        <meta property="og:title" content="Casas Prefabricadas en Colombia | Encuentra los Mejores Proveedores" />
        <meta property="og:description" content="Encuentra empresas de casas prefabricadas, compara precios y solicita cotizaciones." />
        <meta property="og:image" content="/public/ck40-1.jpg" />
        <meta property="og:url" content="https://www.prefabcasas.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Casas Prefabricadas en Colombia | Encuentra los Mejores Proveedores" />
        <meta name="twitter:description" content="Descubre las mejores empresas de casas prefabricadas en Colombia." />
        <meta name="twitter:image" content="/public/ck40-1.jpg" />

        {/* Favicon y URL Canónica */}
        <link rel="icon" href="/public/logo.svg" />
        <link rel="canonical" href="https://www.prefabcasas.com" />

        {/* Schema Markup (JSON-LD para SEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Casas Prefabricadas en Colombia",
            "url": "https://www.prefabcasas.com",
            "description": "Encuentra las mejores empresas de casas prefabricadas en Colombia.",
            "publisher": {
              "@type": "Organization",
              "name": "Tu Empresa"
            }
          })}
        </script>
      </Head>
    <div style={{maxWidth:'1200px', margin:'0 auto'}}>
      <Navbar/>
      <HeroSection/>
      <EmpresasList/>
      <BenefitsSection/>
      <FAQSection/>
      <CTAFinal/>
      <Footer/>
    </div>
    </>
  );
}
