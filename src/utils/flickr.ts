import Flickr from "flickr-sdk";
import type { ExifResponse, Photo, UserPhotos } from "@root/src/types/flickr";
const flickr = new Flickr(import.meta.env.FLICKR_API_KEY);

const photos: Photo[] = [];
let page = 1;

export async function getPhotos() {
  const { body } = (await flickr.people.getPhotos({
    user_id: import.meta.env.FLICKR_USER_ID,
    extras: "geo,date_taken,url_o,url_l,url_4k,description,media",
    per_page: 500,
    content_type: "1",
    page,
  })) as { body: UserPhotos };

  body.photos.photo = body.photos.photo.filter(
    (photo) => photo.media === "photo"
  );

  photos.push(...body.photos.photo);

  if (body.photos.page < body.photos.pages) {
    page++;
    await getPhotos();
  }

  return photos;
}

export async function getExif(photo_id: string): Promise<ExifResponse> {
  return (
    await flickr.photos.getExif({
      photo_id,
    })
  ).body as ExifResponse;
}

export const PHOTOS = await getPhotos();
