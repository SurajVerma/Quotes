// utils/API.js

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/photos/random",
  responseType: "json"
});
