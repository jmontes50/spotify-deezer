import axios from "axios";

let options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "eminem" },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_KEY_DEEZER,
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const searchDeezer = async (query) => {
  options.params.q = query;
  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data.data
  } catch (error) {
    console.error(error);
  }
};

export { searchDeezer };
