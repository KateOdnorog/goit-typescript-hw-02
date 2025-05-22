import axios from "axios";

const API_KEY = "ZCD1CHwvydMIyCuXcUYkpyBDWUiD3Ud07IM_9OnUF4Y";
const BASE_URL = "https://api.unsplash.com/search/photos";

const findImages = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      query: query,
      page: page,
      per_page: 16,
    },
  });

  return response.data;
};

export default findImages;
