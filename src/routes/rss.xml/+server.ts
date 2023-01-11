import { config } from "$lib/config.js";
import { getPosts } from "$utils/entries";
import type { Post } from "$lib/types/post";

export const prerender = true;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const posts = getPosts().slice(0, 10);

	return new Response(xml(posts), {
		headers: {
			"Cache-Control": `max-age=0, s-maxage=${600}`,
			"Content-Type": "application/rss+xml"
		}
	});
}

const xml = (
	posts: Post[]
) => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>Alexis LOURS</title>
    <link>${config.domain}</link>
    <description>My blog things I feel like writing about.</description>
    ${posts
			.map(
				(post) =>
					`
        <item>
          <title>${post.title}</title>
          <description>
		  	<![CDATA[<html>
			${post.content}
	  		]]>
		  </description>
          <link>${config.domain}/blog/${post.slug}/</link>
          <pubDate>${new Date(post.date).toISOString()}</pubDate>
        </item>
      `
			)
			.join("")}
  </channel>
</rss>`;
