import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Facebook, Twitter, PinIcon, Instagram } from "lucide-react";
import BookTableSectionStandalone from "@/components/home/BookTableSectionStandalone";
import {
  formatBlogDate,
  getAllBlogs,
  getBlogBySlug,
  getNextBlog,
  getPreviousBlog,
  getRelatedBlogs,
} from "@/lib/blogs";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogs().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.barcelonatavern.ca/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogs(post, 2);
  const nextPost = getNextBlog(post.slug);
  const previousPost = getPreviousBlog(post.slug);

  return (
    <>
      <section className="relative min-h-[60vh] w-full overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 pb-20 pt-44 text-center text-white">
          <h1 className="font-serif-display text-5xl leading-tight md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
            {formatBlogDate(post.publishedAt).toUpperCase()} .{" "}
            {post.categories.join(", ").toUpperCase()}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 lg:px-16">
        <article className="mx-auto max-w-6xl text-[#222]">
          <div className="font-jost space-y-8 text-base md:text-lg leading-8 text-[#444]">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="relative my-12 aspect-[16/10] w-full overflow-hidden bg-gray-100">
            <Image
              src={post.featureImage}
              alt={`${post.title} featured`}
              fill
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover "
            />
          </div>

          <h2 className="max-w-5xl font-serif text-3xl uppercase leading-snug tracking-wide text-[#111] md:text-4xl">
            {post.highlight}
          </h2>

          <div className="font-jost mt-8 space-y-7 text-base md:text-lg leading-8 text-[#444]">
            {post.extraContent.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 border-y border-gray-200 py-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/barcelonatavern/"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                <Facebook
                  size={18}
                  className="text-gray-500 hover:text-amber-500 cursor-pointer transition-colors"
                />
              </Link>
              <Link
                href="https://www.instagram.com/barcelonatavern/"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                <Instagram
                  size={18}
                  className="text-gray-500 hover:text-amber-500 cursor-pointer transition-colors"
                />
              </Link>
            </div>
          </div>

          {nextPost || previousPost ? (
            <div className="mt-8 flex items-start justify-between gap-8 border-b border-gray-900 pb-10">
              <div className="text-left">
                {previousPost ? (
                  <>
                    <Link
                      href={`/blog/${previousPost.slug}`}
                      className="group inline-block"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                        <span className="text-lg"> &lsaquo;</span> Previous Post
                      </p>
                      <div className="mt-2 inline-block font-serif text-2xl text-[#111] transition-colors group-hover:text-amber-500">
                        {previousPost.title}
                      </div>
                    </Link>
                  </>
                ) : null}
              </div>

              <div className="text-right">
                {nextPost ? (
                  <>
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group inline-block"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                        Next Post <span className="text-lg">&rsaquo;</span>
                      </p>
                      <div className="mt-2 inline-block font-serif text-2xl text-[#111] group-hover:text-amber-500 transition-colors">
                        {nextPost.title}
                      </div>
                    </Link>
                  </>
                ) : null}
              </div>
            </div>
          ) : null}
        </article>
      </section>

      <section className="bg-white px-6 pb-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="font-serif text-4xl text-[#111] uppercase">
            You May Also Like
          </h3>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={relatedPost.listImage ?? relatedPost.heroImage}
                    alt={relatedPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                  {formatBlogDate(relatedPost.publishedAt).toUpperCase()} .{" "}
                  {relatedPost.categories.join(", ").toUpperCase()}
                </p>
                <h4 className="mt-2 font-serif text-3xl text-[#111] transition-colors group-hover:text-amber-500">
                  {relatedPost.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookTableSectionStandalone />
    </>
  );
}
