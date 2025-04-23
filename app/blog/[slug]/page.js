import MarkdownViewer from "@/app/components/Blog/MarkdownVisualizer";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.meta.title,
    description: post.meta.description || "Casas prefabricadas en Colombia.",
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `https://tusitio.com/blog/${params.slug}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const slugs = getPostSlugs(); // Esta función debe retornar ['cuanto-cuesta-casa-prefabricada', ...]
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}
export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <MarkdownViewer content={post.content} meta={post.meta} />
  );
}
