const axios = require("axios");
const get = (endpoint) =>
  axios.get(`${process.env.GATSBY_API_URL}feed/posts/${endpoint}`);

export const createPages = async (movie_name) => {
  const movie = await get(movie_name);
  return movie;
};
