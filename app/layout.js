import "./globals.css";
import Navigation from "./components/navigation";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Pesos disponibles para la fuente
});

export const metadata = {
  title: "Casas Prefabricadas en Colombia | Encuentra los Mejores Proveedores",
  description: "Descubre las mejores empresas de casas prefabricadas en Colombia...",
  keywords: ["casas prefabricadas", "casas modulares", "Colombia"],
  authors: [{ name: "PreFab Casas" }],
  openGraph: {
    title: "Casas Prefabricadas en Colombia | Encuentra los Mejores Proveedores",
    description: "Encuentra empresas de casas prefabricadas, compara precios...",
    url: "https://www.prefabcasas.com",
    siteName: "PreFab Casas",
    images: [
      {
        url: "/ck40-1.jpg",
        width: 1200,
        height: 630,
        alt: "Casa prefabricada",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casas Prefabricadas en Colombia | Encuentra los Mejores Proveedores",
    description: "Descubre las mejores empresas de casas prefabricadas en Colombia.",
    images: ["/ck40-1.jpg"],
  },
  metadataBase: new URL("https://www.prefabcasas.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-back.png",
  },
  other: {
    "google-site-verification": "3yXQGCXdFNabrL2sqAUv8Mz9oFEKsw1sKKJZ_2g5Avo",
    "google-adsense-account": "pub-1233996863721897",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
      className={poppins.className}
      >
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
