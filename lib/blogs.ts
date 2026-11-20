import blogsData from "@/data/blogs.json";

export type BlogPost = {
  slug: string;
  public: boolean;
  title: string;
  excerpt: string;
  publishedAt: string;
  categories: string[];
  tags: string[];
  heroImage: string;
  featureImage: string;
  listImage?: string;
  content: string[];
  highlight: string;
  extraContent: string[];
  relatedSlugs?: string[];
};

const blogPosts = blogsData as BlogPost[];

const parseBlogDate = (date: string) => {
  if (/^\d{2}-\d{2}-\d{4}$/.test(date)) {
    const [day, month, year] = date.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] = date.split("-").map(Number);
    return new Date(year, month, day);
  }

  return new Date(date);
};

export const formatBlogDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parseBlogDate(date));

export const formatBlogDateShort = (date: string) => {
  const parsedDate = parseBlogDate(date);
  const day = parsedDate.getDate();
  const month = parsedDate.toLocaleString("en-US", { month: "long" }).toLowerCase();
  const year = parsedDate.getFullYear();
  return `${day} ${month} , ${year}`;
};

export const getAllBlogs = () =>
  blogPosts.filter((post) => post.public === true).sort(
    (left, right) =>
      parseBlogDate(left.publishedAt).getTime() - parseBlogDate(right.publishedAt).getTime(),
  );

export const getBlogBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug && post.public === true);

export const getRelatedBlogs = (post: BlogPost, count = 2) => {
  const sortedPosts = getAllBlogs();

  if (post.relatedSlugs?.length) {
    return post.relatedSlugs
      .map((slug) => sortedPosts.find((item) => item.slug === slug))
      .filter((item): item is BlogPost => Boolean(item))
      .slice(0, count);
  }

  return sortedPosts.filter((item) => item.slug === post.slug).slice(0, count);
};

export const getNextBlog = (slug: string) => {
  const sortedPosts = getAllBlogs();
  const currentIndex = sortedPosts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1 || sortedPosts.length < 2) {
    return undefined;
  }

  return sortedPosts[(currentIndex + 1) % sortedPosts.length];
};

export const getPreviousBlog = (slug: string) => {
  const sortedPosts = getAllBlogs();
  const currentIndex = sortedPosts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1 || sortedPosts.length < 2) {
    return undefined;
  }

  return sortedPosts[(currentIndex - 1) % sortedPosts.length];
};
