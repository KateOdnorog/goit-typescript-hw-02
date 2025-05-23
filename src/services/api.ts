import axios from "axios";
import { TypeImages } from "../types/types";

interface Results {
  total: number;
  total_pages: number;
  results: TypeImages[];
}

const API_KEY = "ZCD1CHwvydMIyCuXcUYkpyBDWUiD3Ud07IM_9OnUF4Y";
const BASE_URL = "https://api.unsplash.com/search/photos";

const findImages = async (
  query: string,
  page: number = 1
): Promise<Results> => {
  const response = await axios.get<Results>(BASE_URL, {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      query: query,
      page: page,
      per_page: 24,
    },
  });

  return response.data;
};

export default findImages;
