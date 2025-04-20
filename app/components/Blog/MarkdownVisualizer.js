'use client';
import Head from 'next/head';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  FileText,
  ArrowRight
} from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';
import Layout from '../Layout';

const MarkdownViewer = ({ content, meta }) => {
  return (
    <Layout >
      <main className="max-w-4xl ">
        {/* Breadcrumbs */}
        <nav className="mb-6 mt-20 mx-auto text-sm flex items-center text-terciary  ">
          <a href="/" className="hover:text-accent flex items-center gap-1">
            <Home className="w-3 h-3" />
            Inicio
          </a>
          <ChevronRight className="w-3 h-3 mx-2" />
          <a href="/articulos" className="hover:text-accent flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            Artículos
          </a>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-accent">{meta.title}</span>
        </nav>

        {/* Encabezado del Artículo */}
        <div style={{display:'flex', flexDirection:'column', margin:'0 auto'}} className="mb-8 max-w-prose">
          <h1  style={{color:"#261B37"}} className="text-3xl font-semibold mb-2">{meta.title}</h1>
          <div className="flex items-center gap-2 text-sm text-terciary">
            <FileText className="w-4 h-4" />
            <span>Actualizado: {meta.date}</span>
          </div>
        </div>

        {/* Renderizado de Markdown */}
        <article style={{display:'flex', flexDirection:'column', margin:'0 auto'}} className="container  max-w-prose">
          <MarkdownRenderer content={content} />
        </article>

        {/* Sección de Contacto */}
        <div className="mt-12 bg-secondary/10 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-accent" />
            ¿Necesitas más información?
          </h2>
          <p className="text-terciary mb-4">Contacta con nuestros expertos en casas prefabricadas:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-accent/10 p-2 rounded-lg">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-terciary">Teléfono</p>
                <a href={`tel:${3001234567}`} className="font-medium hover:text-accent">+57 300 123 4567</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-accent/10 p-2 rounded-lg">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-terciary">Correo</p>
                <a href="mailto:contacto@casasprefabricadas.com" className="font-medium hover:text-accent">contacto@casasprefabricadas.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-accent/10 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-terciary">Oficina</p>
                <p className="font-medium">Medellín, Colombia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navegación entre artículos */}
        <div className="mt-12 pt-6 border-t border-secondary/20 flex flex-col sm:flex-row justify-between gap-4">
          <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary/10 transition">
            <ChevronLeft className="w-5 h-5" />
            <div>
              <p className="text-sm text-terciary">Anterior</p>
              <p className="font-medium">Tipos de materiales para casas prefabricadas</p>
            </div>
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary/10 transition text-right sm:text-left">
            <div>
              <p className="text-sm text-terciary">Siguiente</p>
              <p className="font-medium">Financiación de vivienda prefabricada</p>
            </div>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </main>
    </Layout>

  );
};

export default MarkdownViewer;