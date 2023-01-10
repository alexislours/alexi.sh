import { config, navLinks } from "$lib/config";
import type { Post } from "$lib/types/post";
import { getEntries } from "$utils/entries.js";

export const prerender = true;

const trimSlash = (str: string) => str.replace(/^\/|\/$/g, "");

export async function GET() {
	const pages = navLinks;
	const posts: Post[] = getEntries("posts");
	const body = sitemap(posts, pages);

	return new Response(body, {
		headers: {
			"Cache-Control": `max-age=0, s-maxage=${3600}`,
			"Content-Type": "application/xml"
		}
	});
}

const sitemap = (
	posts: Post[],
	pages: { href: string; title: string }[]
) => `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
    <url>
      <loc>${config.domain}</loc>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>
    ${pages
			.map(
				(page) => `
    <url>
      <loc>${config.domain}${trimSlash(page.href)}</loc>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    `
			)
			.join("")}
    ${posts
			.map(
				(post) => `
    <url>
      <loc>${config.domain}blog/${post.slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.5</priority>
    </url>
    `
			)
			.join("")}
  </urlset>`;
