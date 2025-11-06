import HeroSectionEn from '@/components/HomeEn/HeroSectionEn';
import FiltroEmpresasMejoradoEn from '@/components/HomeEn/EmpresasListado';
import HowItWorksEn from '@/components/HomeEn/HowItWorks';
import BenefitsSectionEn from '@/components/HomeEn/Beneficios';
import SmartFormSectionEn from '@/components/HomeEn/SmartFormSection';

export const metadata = {
  title: 'Modular Homes in the United States | Compare Builders, Models & Prices',

  description:
    'Find and compare the best modular home builders in the United States. Explore home models, pricing guides, financing options, and key benefits of modular construction.',

  keywords: [
    'modular homes USA',
    'modular home builders',
    'prefabricated homes United States',
    'modular home prices',
    'buy modular home',
    'home construction modular',
    'modular home financing',
    'benefits of modular homes',
    'prefab homes USA',
  ],

  // Canonical URL: Especifica la URL preferida para esta página para evitar contenido duplicado.
  // **IMPORTANTE:** Reemplaza 'tudominio.com' con tu dominio real.
  alternates: {
    canonical: 'https://www.prefabcasas.com/en', // O la URL específica de esta página
  },
  icons: {
    icon: '/logo-back.png', // Icono general (puede ser PNG, 32x32, 48x48, etc.)
    shortcut: '/logo-back.png', // Opcional: Para iconos de atajo/favicon.ico
    apple: '/logo-back.png', // Opcional: Icono para añadir a la pantalla de inicio de iOS
    other: { // Opcional: Otros formatos o tamaños
      rel: 'apple-touch-icon-precomposed',
      url: '/logo-back.png',
    },
  },
  // Open Graph (Para compartir en redes sociales como Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Modular Homes in the United States | Compare Builders, Models & Prices',
    description:
      'Find top modular home companies, explore floor plans, learn about pricing, and understand how modular construction works.',
    url: 'https://www.prefabcasas.com/en', // La URL de la página
    siteName: 'PrefabCasas',
    images: [
      {
        url: 'https://www.prefabcasas.com/ck40-1.jpg', // **IMPORTANTE:** Usa una URL absoluta y optimizada para redes sociales (aprox. 1200x630px)
        width: 1200,
        height: 630,
        alt: 'Modern modular home exterior in the United States', // Texto alternativo de la imagen
      },
      // Puedes añadir más imágenes si es necesario
    ],
    locale: 'en_US', // Especifica el idioma y la región (español de Colombia)
    type: 'website', // Tipo de contenido (generalmente 'website' para una página principal)
  },

  // Twitter Card (Para compartir en Twitter)
  twitter: {
    card: 'summary_large_image', // O 'summary' si no usas una imagen grande
    title: 'Modular Homes in the United States | Compare Builders, Models & Prices', // Normalmente igual que el título OG
    description: 'Research modular homes, compare floor plans and find trusted modular home builders across the US.', // Normalmente igual que la descripción OG
    images: ['https://www.prefabcasas.com/ck40-1.jpg'], // **IMPORTANTE:** Usa la misma URL absoluta de la imagen que en Open Graph
  },

};
export const faqs = [
  {
    question: "How long does it take to build a modular home?",
    answer:
      "The timeline can vary depending on the size and customization of the home. On average, most modular homes are completed within 8 to 16 weeks once manufacturing begins, which is significantly faster than a traditional site-built home.",
  },
  {
    question: "Are modular homes durable?",
    answer:
      "Yes. Modular homes in the United States are built to meet or exceed local building codes and are engineered for structural integrity. Because they are transported to the build site, they are often built with stronger materials to withstand transportation.",
  },
  {
    question: "What is the difference between modular and manufactured homes?",
    answer:
      "Modular homes are built to the same state and local building codes as traditional homes and are placed on a permanent foundation. Manufactured homes are built to HUD code standards and are usually delivered on a steel chassis. Modular homes typically appraise and appreciate similarly to site-built homes.",
  },
  {
    question: "Can I customize the design of a modular home?",
    answer:
      "Absolutely. Most modular home builders offer customization options such as floor plans, exterior materials, roofing, kitchen layouts, and finishes. The level of customization varies by manufacturer and model.",
  },
  {
    question: "Do modular homes qualify for financing or mortgages?",
    answer:
      "Yes. Because modular homes are considered permanent real estate, they typically qualify for traditional mortgage financing, including FHA, VA, and USDA loans. Requirements may vary between lenders.",
  },
  {
    question: "How much do modular homes cost?",
    answer:
      "Cost depends on size, location, foundation type, finishes, and customization. In general, modular homes range from $90 to $250 per sq ft, excluding land costs. Affordable modular models start around $80,000, while luxury modular homes can exceed $500,000.",
  },
  {
    question: "Do modular homes appreciate in value?",
    answer:
      "Yes. Modular homes typically appreciate in value similarly to traditional site-built homes, especially when placed on owned land and maintained properly.",
  },
  {
    question: "Can modular homes be placed anywhere?",
    answer:
      "Modular homes must comply with local zoning laws and land-use regulations. Some areas have restrictions on home type, foundation, or minimum square footage. Always check local zoning requirements before purchasing land.",
  },
  {
    question: "Are modular homes energy-efficient?",
    answer:
      "Yes. Modern modular homes often include high-efficiency insulation, energy-efficient windows, and optional upgrades like solar panels. Many modular homes meet ENERGY STAR efficiency standards.",
  },
];

const faqSchema = {
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
};

// Convertir el objeto a una cadena JSON
const faqSchemaString = JSON.stringify(faqSchema);
export default function Home() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaString }}
      />
      {process.env.NODE_ENV === "production" && (
        <script async defer type="text/javascript" dangerouslySetInnerHTML={{
          __html: `  (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "rtgxfg82ma")`
        }}>

        </script>
      )}
        <HeroSectionEn />
        <FiltroEmpresasMejoradoEn />
        <HowItWorksEn />
        <BenefitsSectionEn />
        <SmartFormSectionEn />
    </>
  );
}
