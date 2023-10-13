import rss from "@astrojs/rss";
import { SITE_TITLE } from "@src/constants";
import { PHOTOS } from "@root/src/utils/flickr";
import type { APIContext } from "astro";

export async function GET(context: APIContext & { site: URL }) {
  return rss({
    title: SITE_TITLE + " - Photos",
    description: "A feed of the pictures I take.",
    site: context.site,
    items: PHOTOS.map((photo) => ({
      title: photo.title,
      description: photo.description?._content,
      pubDate: photo.datetaken,
      link: `/photos/id/${photo.id}/`,
    })),
  });
}
