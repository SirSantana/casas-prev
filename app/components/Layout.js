// app/layout.js
import Navbar from "./Header";
import Footer from "./Home/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Pesos disponibles para la fuente
});
export const metadata = {
  title: {
    default: "Casas Prefabricadas en Colombia",
    template: "%s | PrefabCasas"
  },
  description: "Encuentra las mejores empresas de casas prefabricadas en Colombia",
  metadataBase: new URL("https://www.prefabcasas.com"),
  openGraph: {
    siteName: "PrefabCasas",
    images: "/ck40-1.jpg",
    locale: "es_CO",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@PrefabCasas"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <div className="max-w-[1200px] mx-auto px-4">
          <Navbar />
          <main className="min-h-[calc(100vh-140px)]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
