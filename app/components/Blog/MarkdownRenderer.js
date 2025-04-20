import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight]}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          // Título principal: Margen inferior generoso
          <h1 className="text-4xl md:text-5xl font-bold mb-10 pb-3 border-b-4 border-accent text-primary" {...props} /> // Aumentado mb a 10
        ),
        h2: ({ node, ...props }) => (
          // Subtítulos principales: Mayor margen superior para separar secciones grandes, buen margen inferior
          <h2 className="text-3xl font-semibold mt-16 mb-6 text-primary" {...props} /> // Aumentado mt a 16 y mb a 6
        ),
        h3: ({ node, ...props }) => (
          // Subtítulos secundarios: Mayor margen superior para separar subtemas, margen inferior adecuado
          <h3 className="text-2xl font-semibold mt-12 mb-5 text-terciary" {...props} /> // Aumentado mt a 12 y mb a 5
        ),
        p: ({ node, ...props }) => (
          // Párrafos: Margen inferior estándar para separación entre párrafos
          <p className="mb-5 leading-relaxed text-terciary" {...props} />
        ),
        a: ({ node, ...props }) => (
          // Enlaces
          <a
            className="text-accent no-underline border-b border-accent/50 hover:border-accent hover:text-accent/90 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        ul: ({ node, ...props }) => (
          // Listas no ordenadas: Margen inferior y espacio entre items
          <ul className="list-disc pl-8 mb-6 space-y-2 text-terciary flex flex-col gap-y-4" {...props} />
        ),
        ol: ({ node, ...props }) => (
          // Listas ordenadas: Margen inferior y espacio entre items
          <ol className="list-decimal pl-8 mb-6 space-y-2 text-terciary flex flex-col gap-y-4" {...props} />
        ),
        li: ({ node, ...props }) => (
          // Items de lista
          <li className="marker:text-accent" {...props} />
        ),
        table: ({ node, ...props }) => (
          // Tablas: Margen vertical amplio
          <div className="overflow-x-auto my-10 rounded-lg shadow-sm"> {/* Aumentado my a 10 */}
            <table className="w-full border-collapse" {...props} />
          </div>
        ),
        th: ({ node, ...props }) => (
          // Cabeceras de tabla: Padding y borde inferior
          <th className="bg-secondary/20 p-4 text-left font-bold text-primary border-b border-secondary" {...props} />
        ),
        td: ({ node, ...props }) => (
          // Celdas de tabla: Padding y borde inferior sutil
          <td className="border-b border-secondary/30 p-4 text-terciary" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          // Citas/Bloques resaltados: Margen vertical amplio
          <blockquote className="border-l-8 border-accent pl-6 italic my-10 text-terciary" {...props} /> 
        ),
        img: ({ node, ...props }) => (
          // Imágenes: Margen vertical amplio
          <img className="rounded-xl shadow-lg my-10 w-full h-auto object-cover" {...props} />
        ),
        code: ({ node, inline, ...props }) => inline ? (
          // Código en línea
          <code className="bg-secondary/10 px-2 py-1 rounded text-sm font-mono text-primary" {...props} />
        ) : (
          // Bloques de código: Margen vertical amplio
          <pre className="bg-secondary/10 p-6 rounded-lg overflow-x-auto my-10 text-primary font-mono" {...props}>
             <code {...props} />
          </pre>
        ),
        strong: ({ node, ...props }) => (
          // Texto en negrita
          <strong className="text-primary font-semibold" {...props} />
        ),
         hr: ({ node, ...props }) => (
            // Línea divisoria: Margen vertical muy amplio
           <hr className="my-16 border-t-2 border-secondary" {...props} />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;