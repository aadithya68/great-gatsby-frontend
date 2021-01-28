const axios = require("axios");
const get = (endpoint) =>
  axios.get(`${process.env.GATSBY_API_URL}feed/posts/${endpoint}`);

export const createPages = async () => {
  const movie = await get("rambo");
  return movie;
};
