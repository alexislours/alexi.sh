export type UserPhotos = {
  photos: Photos;
  stat: string;
};

export type Photos = {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: Photo[];
};

export type Photo = {
  id: string;
  secret: string;
  title: string;
  datetaken: Date;
  datetakengranularity: number;
  datetakenunknown: string;
  latitude: number | string;
  longitude: number | string;
  context: number;
  url_o: string;
  url_l: string;
  url_4k: string;
  height_o: number;
  width_o: number;
};
