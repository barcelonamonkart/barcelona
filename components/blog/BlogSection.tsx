import Link from "next/link";
import Image from "next/image";
import { formatBlogDateShort, getAllBlogs } from "@/lib/blogs";

const BlogSection = () => {
  const blogPosts = getAllBlogs();
  const brandOrange = "#f59e0b";

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden cursor-pointer rounded-sm shadow-sm transition-all duration-500 hover:shadow-2xl"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={post.listImage ?? post.heroImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] font-bold text-white/70 tracking-[0.2em] mb-4 uppercase">
                  {formatBlogDateShort(post.publishedAt)}
                </span>

                <h3 className="font-jost font-medium text-2xl md:text-3xl font-serif text-white mb-6 leading-tight group-hover:text-white transition-colors">
                  {post.title}
                </h3>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/20">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="text-[9px] font-bold tracking-[0.2em] uppercase transition-colors"
                      style={{ color: brandOrange }}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 border-[0px] group-hover:border-[12px] border-white/5 transition-all duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
