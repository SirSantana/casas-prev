import "./globals.css";
import Navigation from "./components/navigation";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Pesos disponibles para la fuente
});

export const metadata = {
  title: "Casas Prefabricadas",
  description: "Las mejores casas prefabricadas para todas las necesidades",
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
