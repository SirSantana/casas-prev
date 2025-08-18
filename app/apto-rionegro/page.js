import ApartmentRental from "../../components/apto-rionegro";

export const metadata = {
  title: 'Apartamento en Arriendo Rionegro - 2 Habitaciones $1.300.000/mes',
  description: 'Apartamento en arriendo en Barrios Unidos, Rionegro. 2 habitaciones, 1 baño, sala comedor amplia, cocina funcional. A 3 minutos de TransMilenio. Canon $1.300.000/mes.',
  
  icons: {
    icon: '/logo-back.png',
    shortcut: '/logo-back.png',
    apple: '/logo-back.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo-back.png',
    },
  },
  
  // Open Graph (Para compartir en redes sociales)
  openGraph: {
    title: 'Apartamento en Arriendo Rionegro - 2 Habitaciones $1.300.000/mes',
    description: 'Apartamento en arriendo en Barrios Unidos, Rionegro. 2 habitaciones, 1 baño, sala comedor amplia, cocina funcional. A 3 minutos de TransMilenio. Canon $1.300.000/mes.',
    url: 'https://www.prefabcasas.com/apto-rionegro',
    siteName: 'Arriendo Apartamentos Rionegro',
    images: [
      {
        url: 'https://www.prefabcasas.com/apto/img-apto-3.jpg',
        width: 1200,
        height: 630,
        alt: 'Apartamento en arriendo Rionegro - 2 habitaciones, sala comedor amplia',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Apartamento en Arriendo Rionegro - 2 Habitaciones $1.300.000/mes',
    description: 'Apartamento en arriendo en Barrios Unidos, Rionegro. 2 habitaciones, 1 baño, sala comedor amplia, cocina funcional. A 3 minutos de TransMilenio.',
    images: ['https://www.prefabcasas.com/apto/img-apto-3.jpg'],
  },
};
export default function AptoPage() {
  return (
    <>
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
      <ApartmentRental/>
    </>
  );
}