import axios from "axios";

export const api = axios.create({
  baseURL: "https://kw-finance.vercel.app/api",
});
