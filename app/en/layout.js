// app/layout.js
// import Navbar from "../components/Header";
// import Footer from "../components/Home/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Modular & Prefabricated Homes in the United States",
    template: "%s | PrefabCasas",
  },
  description:
    "Explore modular and prefabricated homes across the United States. Compare models, prices, builders, financing options and find the perfect home for your lifestyle.",
  metadataBase: new URL("https://www.prefabcasas.com/en"),
  alternates: {
    canonical: "https://www.prefabcasas.com/en",
  },
  openGraph: {
    siteName: "PrefabCasas",
    title: "Modular & Prefabricated Homes in the United States",
    description:
      "Browse affordable and customizable modular and prefab homes in the U.S. Save time, reduce construction costs, and enjoy energy-efficient housing.",
    url: "https://www.prefabcasas.com/en",
    images: [
      {
        url: "https://www.prefabcasas.com/home-hero-us.jpg", // Reemplázala por la que quieras usar en USA
        width: 1200,
        height: 630,
        alt: "Modern modular home exterior in the United States",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular & Prefabricated Homes in the United States",
    description:
      "Discover trusted modular home builders and compare prefab housing options in the USA.",
    images: ["https://www.prefabcasas.com/home-hero-us.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
      <main className="min-h-[calc(100vh-140px)]">{children}</main>
  );
}
