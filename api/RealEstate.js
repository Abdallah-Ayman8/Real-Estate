import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

export const test = axios.create({
  baseURL: "https://dummyjson.com/test",
});

export default { api, test };
