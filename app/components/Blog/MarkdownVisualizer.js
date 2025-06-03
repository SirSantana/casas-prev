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
  ArrowRight,
  Clock,
  Share2,
  Bookmark,
  User
} from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';
import Layout from '../Layout';
import CotizacionForm from '../Cotizar/ComponentCotizar';

const MarkdownViewer = ({ content, meta }) => {
  const articleFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": meta.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  // Convertir a cadena JSON
  const articleFaqSchemaString = JSON.stringify(articleFaqSchema);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleFaqSchemaString }}
      />
      <Layout>
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <nav className="mb-8 mt-16 text-sm flex items-center text-gray bg-secondary/20 p-3 rounded-lg">
            <a href="/" className="hover:text-primary transition-colors duration-300 flex items-center gap-1 font-medium">
              <Home className="w-4 h-4" />
              Inicio
            </a>
            <ChevronRight className="w-4 h-4 mx-2 text-accent" />
            <a href="/blog" className="hover:text-primary transition-colors duration-300 flex items-center gap-1 font-medium">
              <BookOpen className="w-4 h-4" />
              Artículos
            </a>
            <ChevronRight className="w-4 h-4 mx-2 text-accent" />
            <span className="text-primary font-semibold truncate max-w-xs">{meta.title}</span>
          </nav>

          {/* Encabezado del Artículo */}
          <div className="mb-10 max-w-prose mx-auto">
            <div className="bg-secondary text-primary text-sm font-medium px-3 py-1 rounded-full inline-flex items-center mb-4">
              <BookOpen className="w-4 h-4 mr-1" />
              {meta.category || 'Artículo'}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary leading-tight">{meta.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              {meta.author && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-terciary flex items-center justify-center text-white">
                    {meta.authorInitial || <User className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm">{meta.author}</p>
                    <p className="text-xs text-gray">{meta.role || 'Autor'}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-1 text-sm text-gray bg-secondary/30 px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                <span>{meta.readTime || '5 min lectura'}</span>
              </div>

              <div className="flex items-center gap-1 text-sm text-gray bg-secondary/30 px-3 py-1 rounded-full">
                <FileText className="w-4 h-4" />
                <span>Actualizado: {meta.date}</span>
              </div>
            </div>

            {meta.description && (
              <div className="bg-secondary/20 border-l-4 border-accent p-4 rounded-r-lg mb-8">
                <p className="text-terciary italic">{meta.description}</p>
              </div>
            )}

            {meta.featuredImage && (
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-10 shadow-lg">
                {/* Aquí iría la imagen destacada en un proyecto real */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"></div>
                {meta.imageCredit && (
                  <div className="absolute bottom-2 right-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
                    {meta.imageCredit}
                  </div>
                )}
              </div>
            )}

            {/* <div className="flex justify-between items-center mb-8 border-y border-secondary py-4">
            <div className="flex gap-2">
              {meta.tags && meta.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-secondary text-primary px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="text-gray hover:text-primary transition-colors duration-300" aria-label="Compartir">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-gray hover:text-primary transition-colors duration-300" aria-label="Guardar">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div> */}
          </div>

          {/* Tabla de contenido si existe */}
          {meta.showToc && (
            <div className="bg-secondary/10 rounded-xl p-6 mb-8 max-w-prose mx-auto">
              <h2 className="text-lg font-bold mb-4 text-primary">Contenido del artículo</h2>
              {/* Aquí renderizarías la tabla de contenido dinámicamente */}
              <ul className="space-y-2">
                <li>
                  <a href="#seccion1" className="text-terciary hover:text-primary flex items-center gap-1">
                    <ArrowRight className="w-4 h-4" />
                    <span>Sección 1</span>
                  </a>
                </li>
                <li>
                  <a href="#seccion2" className="text-terciary hover:text-primary flex items-center gap-1">
                    <ArrowRight className="w-4 h-4" />
                    <span>Sección 2</span>
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Renderizado de Markdown */}
          <article className="prose prose-lg max-w-prose mx-auto prose-headings:text-primary prose-a:text-terciary prose-a:no-underline hover:prose-a:text-primary prose-a:transition-colors prose-a:duration-300 prose-strong:text-primary prose-blockquote:border-accent prose-blockquote:bg-secondary/20 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-img:rounded-xl prose-img:shadow-md">
            <MarkdownRenderer content={content} />
          </article>

          {/* Navegación entre artículos */}
          <div className="max-w-prose mx-auto border-t border-secondary/60 mt-16 pt-8 flex justify-between">
            {meta.prevArticle ? (
              <a href={`/articulos/${meta.prevArticle.slug}`} className="flex items-center gap-2 text-terciary hover:text-primary transition-colors duration-300">
                <ChevronLeft className="w-5 h-5" />
                <div>
                  <div className="text-xs text-gray">Artículo anterior</div>
                  <div className="font-medium">{meta.prevArticle.title}</div>
                </div>
              </a>
            ) : (
              <div></div>
            )}

            {meta.nextArticle ? (
              <a href={`/articulos/${meta.nextArticle.slug}`} className="flex items-center gap-2 text-right text-terciary hover:text-primary transition-colors duration-300">
                <div>
                  <div className="text-xs text-gray">Siguiente artículo</div>
                  <div className="font-medium">{meta.nextArticle.title}</div>
                </div>
                <ChevronRight className="w-5 h-5" />
              </a>
            ) : (
              <div></div>
            )}
          </div>

              <CotizacionForm />



          {/* Artículos relacionados */}
          {meta.relatedArticles && meta.relatedArticles.length > 0 && (
            <div className="max-w-prose mx-auto mt-16">
              <h2 className="text-2xl font-bold mb-6 text-primary">Artículos relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {meta.relatedArticles.map((article, index) => (
                  <a
                    key={index}
                    href={`/articulos/${article.slug}`}
                    className="bg-white border border-secondary rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-xs text-accent font-medium">{article.category}</span>
                    <h3 className="font-medium text-primary mt-1 mb-2">{article.title}</h3>
                    <div className="text-xs text-gray flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime || '5 min lectura'}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

        </main>
      </Layout>
    </>
  );
};

export default MarkdownViewer;