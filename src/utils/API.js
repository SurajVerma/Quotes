// utils/API.js

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/photos/random",
  responseType: "json"
});
// export default axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/photos",
//   responseType: "json"
// });
