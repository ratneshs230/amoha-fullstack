// import axios from "axios";

// export const API = axios.create({
//   baseURL: "http://127.0.0.1:8000", // FastAPI ka server address
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,    // <-- ADD THIS HERE
// });


//////tracking user
// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000",
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;

/////////track user

// import axios from "axios";

// export const API = axios.create({
//   baseURL: "http://127.0.0.1:8000",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// });

// // 🔥 ADD THIS
// // API.interceptors.request.use((config) => {
// //   const token = localStorage.getItem("access_token"); // ✅ CORRECT KEY
// //   if (token) {
// //     config.headers.Authorization = `Bearer ${token}`;
// //   }
// //   return config;
// // });
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access_token");
//   console.log("TOKEN SENT 👉", token); // 🔥 ADD THIS
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

import axios from "axios";

export const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token"); // 🔥 FIX
  console.log("TOKEN SENT 👉", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
