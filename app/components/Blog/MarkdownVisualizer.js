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

          {/* Sección de Contacto Mejorada - Ancho Completo */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-8 shadow-lg relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-terciary/5 rounded-full"></div>

            <h2 className="text-2xl font-bold mb-3 text-primary flex items-center gap-2 relative z-10">
              <Phone className="w-6 h-6 text-accent" />
              ¿Necesitas más información?
            </h2>

            <p className="text-terciary mb-6 relative z-10">
              Nuestros expertos en casas prefabricadas están listos para resolver todas tus dudas y ayudarte a encontrar el hogar perfecto para ti.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
              {/* Información de contacto */}
              <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-primary border-b border-secondary/30 pb-2">Contáctanos</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 group hover:bg-secondary/10 p-2 rounded-lg transition-colors duration-300">
                    <div className="bg-accent/20 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray font-medium uppercase tracking-wider">Teléfono</p>
                      <a href="tel:+573001234567" className="font-bold text-primary hover:text-terciary transition-colors duration-300">
                        +57 300 123 4567
                      </a>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="flex items-center gap-4 group hover:bg-secondary/10 p-2 rounded-lg transition-colors duration-300">
                    <div className="bg-accent/20 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray font-medium uppercase tracking-wider">Correo</p>
                      <a href="mailto:contacto@casasprefabricadas.com" className="font-bold text-primary hover:text-terciary transition-colors duration-300">
                        contacto@casasprefabricadas.com
                      </a>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="flex items-center gap-4 group hover:bg-secondary/10 p-2 rounded-lg transition-colors duration-300">
                    <div className="bg-accent/20 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray font-medium uppercase tracking-wider">Oficina</p>
                      <p className="font-bold text-primary">Medellín, Colombia</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              {/* Formulario de contacto rápido */}
              <div className="lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-primary border-b border-secondary/30 pb-2">Formulario rápido</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-xs font-medium text-gray mb-1 block">Nombre</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs font-medium text-gray mb-1 block">Correo electrónico</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                        placeholder="tucorreo@ejemplo.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-xs font-medium text-gray mb-1 block">Mensaje</label>
                    <textarea
                      id="message"
                      rows="3"
                      className="w-full px-4 py-2 rounded-lg border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <label className="flex items-center gap-2 text-sm text-gray cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-secondary/30 text-primary focus:ring-primary" />
                      <span className="group-hover:text-primary transition-colors duration-300">Acepto la política de privacidad</span>
                    </label>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-white font-medium py-2 px-6 rounded-full hover:bg-terciary transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Enviar
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Botón de contacto alternativo */}
            <div className="mt-6 flex justify-center relative z-10">
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-primary font-medium py-3 px-6 rounded-full hover:bg-white/40 transition-all duration-300 border border-primary/20"
              >
                Ver más opciones de contacto
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>



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