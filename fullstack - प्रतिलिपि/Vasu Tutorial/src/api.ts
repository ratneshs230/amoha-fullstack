import axios from "axios";

export const API = axios.create({
  baseURL: "https://amoha-fullstack-production.up.railway.app",
  headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
