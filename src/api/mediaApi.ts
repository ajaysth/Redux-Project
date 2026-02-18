import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXLS_KEY = import.meta.env.VITE_PEXELS_KEY;
const KLIPY_KEY = import.meta.env.VITE_KLIPY_KEY;

export async function fetchPhotos(
  query: string,
  page: number = 1,
  per_page: number = 20,
) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });

  return res.data;
}

export async function fetchVideos(
  query: string,
  page: number = 1,
  per_page: number = 20,
) {
  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${PEXLS_KEY}` },
  });

  return res.data;
}

export async function fetchGifs(
  query: string,
  locale: string = "en",
  page: number = 1,
  per_page: number = 20,
) {
  const res = await axios.get(
    `https://api.klipy.com/api/v1/${KLIPY_KEY}/gifs/search`,
    {
      params: { query, page, per_page, locale },
      headers: { Authorization: `Client-ID ${KLIPY_KEY}` },
    },
  );

  return res.data;
}
