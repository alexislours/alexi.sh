import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE } from "@src/constants";
import type { APIContext } from "astro";

export async function GET(context: APIContext & { site: URL }) {
  const posts = (await getCollection("finds")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return rss({
    title: SITE_TITLE + " - Finds",
    description:
      "A collection of small websites, tools, and content creators I found interesting.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: post.data.href,
    })),
  });
}
