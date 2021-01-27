const axios = require("axios");
const get = (endpoint) =>
  axios.get(`http://localhost:8080/feed/posts/${endpoint}`);

export const createPages = async () => {
  const movie = await get("rambo");
  return movie;
};
