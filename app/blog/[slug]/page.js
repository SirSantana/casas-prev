import MarkdownViewer from "@/components/Blog/MarkdownVisualizer";
import { getPostBySlug, getPostSlugs } from "../../../lib/posts";

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
//   <script
//   type="application/ld+json"
//   suppressHydrationWarning
//   dangerouslySetInnerHTML={{
//     __html: JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "Article",
//       "headline": post.meta.title,
//       "description": post.meta.description,
//       "image": post.meta.image || 'https://www.prefabcasas.com/og-default.jpg',
//       "author": {
//         "@type": "Organization",
//         "name": "PrefabCasas"
//       },
//       "publisher": {
//         "@type": "Organization",
//         "name": "PrefabCasas",
//         "logo": {
//           "@type": "ImageObject",
//           "url": "https://www.prefabcasas.com/logo.png"
//         }
//       },
//       "datePublished": post.meta.date || "2024-01-01",
//       "mainEntityOfPage": {
//         "@type": "WebPage",
//         "@id": `https://www.prefabcasas.com/blog/${params.slug}`
//       }
//     })
//   }}
// />

// {post.meta.faqs?.length > 0 && (
//   <script
//     type="application/ld+json"
//     suppressHydrationWarning
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "FAQPage",
//         "mainEntity": post.meta.faqs.map(faq => ({
//           "@type": "Question",
//           "name": faq.question,
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": faq.answer
//           }
//         }))
//       })
//     }}
//   />
// )}
  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: {
      canonical: `https://www.prefabcasas.com/blog/${params.slug}`
    },
    openGraph: {
      title: post.meta.ogTitle || post.meta.title,
      description: post.meta.ogDescription || post.meta.description,
      url: `https://www.prefabcasas.com/blog/${params.slug}`,
      siteName: 'PrefabCasas',
      images: [
        {
          url: post.meta.image || '/ck40-1.jpg',
          width: 1200,
          height: 630,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.twitterTitle || post.meta.title,
      description: post.meta.twitterDescription || post.meta.description,
      images: [post.meta.image || '/ck40-1.jpg'],
      site: '@PrefabCasas',
    }
  };
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <>
      <MarkdownViewer content={post.content} meta={post.meta} />
    </>
  );
}
