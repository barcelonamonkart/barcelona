import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/lib/blogs";

const BASE_URL = "https://www.barcelonatavern.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/menu", priority: 0.9 },
    { path: "/events", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/blog", priority: 0.6 },
    { path: "/privacy-policy", priority: 0.2 },
  ];

  const staticRoutes: MetadataRoute.Sitemap = pages.map(
    ({ path, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(), 
      changeFrequency: "weekly",
      priority,
    }),
  );

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogs().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
