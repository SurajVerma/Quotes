// utils/API.js

import axios from "axios";

// export const unsplash = axios.create({
//   baseURL: "https://api.unsplash.com/photos/random",
//   responseType: "json",
//   headers: { "Access-Control-Allow-Origin": "*" }
// });
export const quoteAPI = axios.create({
  baseURL: "https://api.bleuflex.com/quotes/read",
  responseType: "json"
});
// export const quoteAPI = axios.create({
//   baseURL: "http://localhost/api/quotes.json",
//   responseType: "json"  
// });
// export default axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/photos",
//   responseType: "json"
// });
// export default axios.create({
//   baseURL: "https://picsum.photos/v2/list",
//   responseType: "json"
// });

export const unsplash = axios.create({
  baseURL: "https://picsum.photos/v2/list",
  responseType: "json"
});