import RootLayout from '../../layout';
import EmpresaLanding from '../../components/Register/EmpresaLandingPage';
export const metadata = {
  title: 'Blog Casa Prefabricas en Colombia',
  description: 'Encuentra los mejores artículos sobre casas prefabricadas en Colombia',
  keywords: ['blog', 'casas prefabricadas', 'artículos', 'Colombia'],
  openGraph: {
    images: '/ck40-1.jpg',
  },
};
export default function EmpresaPage() {
  return (
    <RootLayout className="flex flex-col min-h-screen bg-white">
        <EmpresaLanding />
    </RootLayout>
  );
}