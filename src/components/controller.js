const axios = require("axios");
const get = (endpoint) =>
  axios.get(`${process.env.GATSBY_API_URL}feed/posts/${endpoint}`);

export const createPages = async (movieName) => {
  const movie = await get(movieName);
  return movie;
};
