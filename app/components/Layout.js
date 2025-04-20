// components/Layout.jsx
import Head from 'next/head';
import Navbar from "./Header";
import Footer from "./Home/Footer";

export default function Layout({
  children,
  title = "Casas Prefabricadas en Colombia",
  description = "Encuentra las mejores empresas de casas prefabricadas en Colombia",
  faqs = []
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": title,
            "url": "https://www.prefabcasas.com",
            "description": description,
            "publisher": {
              "@type": "Organization",
              "name": "PrefabCasas"
            }
          })
        }}
      />

      {faqs.length > 0 && (
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
      )}

      <div className="max-w-[1200px] mx-auto px-4">
        <Navbar />
        <main className="min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}